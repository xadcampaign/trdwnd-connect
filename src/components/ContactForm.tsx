
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  const { toast } = useToast();
  const [formState, setFormState] = useState<ContactFormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setDebugInfo(null);
    
    try {
      // Get the current domain and construct the API URL
      const currentDomain = window.location.origin;
      const apiUrl = `${currentDomain}/functions/v1/send-contact-email`;
      console.log("Sending form to API URL:", apiUrl);
      console.log("Form data being sent:", formState);
      
      // Send to the Supabase Edge Function
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
      
      console.log("Response status:", response.status);
      console.log("Response headers:", Object.fromEntries([...response.headers]));
      
      // Check content type to better handle errors
      const contentType = response.headers.get("Content-Type");
      console.log("Response content type:", contentType);
      
      // Get response content regardless of status
      const responseText = await response.text();
      console.log("Raw response:", responseText);
      
      let responseData;
      try {
        // Try to parse as JSON
        if (contentType?.includes("application/json") || responseText.trim().startsWith("{")) {
          responseData = JSON.parse(responseText);
          console.log("Parsed response data:", responseData);
        } else {
          // Handle non-JSON response
          console.error("Received non-JSON response:", responseText);
          throw new Error("Server returned non-JSON response");
        }
      } catch (parseError) {
        console.error("Failed to parse response as JSON:", parseError);
        setDebugInfo(`Response was not valid JSON. Content type: ${contentType || "unknown"}\n\nFirst 500 characters of raw response:\n${responseText.substring(0, 500)}...`);
        throw new Error("Invalid response format");
      }
      
      // Check if response indicates success
      if (!response.ok || responseData.error) {
        const errorMessage = responseData.error || 
                            responseData.details || 
                            `Server error: ${response.status}`;
        
        console.error("Error response:", errorMessage);
        
        // Show detailed error for debugging
        setDebugInfo(JSON.stringify(responseData, null, 2));
        
        throw new Error(errorMessage);
      }
      
      // Email sent successfully
      toast({
        title: "Message Sent",
        description: "Thank you for contacting us. We'll respond shortly.",
      });
      
      // Reset form
      setFormState({
        name: "",
        email: "",
        company: "",
        phone: "",
        message: "",
      });
      
    } catch (error) {
      console.error("Error sending form:", error);
      toast({
        title: "Error",
        description: error instanceof Error 
          ? `${error.message}. Please check that the server has been configured properly.` 
          : "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={className}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              name="name"
              value={formState.name}
              onChange={handleChange}
              placeholder="Enter your full name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Company Name *</Label>
            <Input
              id="company"
              name="company"
              value={formState.company}
              onChange={handleChange}
              placeholder="Enter your company name"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formState.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Tell us about your business and how we can help with your European market expansion goals"
            className="min-h-[150px]"
            required
          />
        </div>
        
        <Button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full md:w-auto bg-trdwnd-navy hover:bg-trdwnd-darkblue"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>

        {debugInfo && (
          <div className="mt-4 p-4 bg-amber-50 border border-amber-300 rounded-md">
            <p className="text-sm font-medium text-amber-800 mb-2">
              Debug information (the email might not have been sent):
            </p>
            <pre className="text-xs overflow-auto bg-gray-100 p-2 rounded">
              {debugInfo}
            </pre>
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
