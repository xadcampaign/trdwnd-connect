
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

// Initialize Resend with API key
const resend = new Resend(Deno.env.get("RESEND_API_KEY") || "re_2k6adp5u_Pvh9sJvpy8KwgYSUQGGhFso2");

// CORS headers for browser requests
const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Content-Type": "application/json" // Ensure Content-Type is set for all responses
};

// Define expected request body type
interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Received request:", req.method);
  
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Parse the request body
    let formData: ContactFormData;
    try {
      formData = await req.json();
      console.log("Parsed form data:", formData);
    } catch (error) {
      console.error("Failed to parse request body:", error);
      return new Response(
        JSON.stringify({ error: "Invalid request body format" }),
        { 
          status: 400, 
          headers: corsHeaders 
        }
      );
    }
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.company || !formData.message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { 
          status: 400, 
          headers: corsHeaders 
        }
      );
    }
    
    // Format email content
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Company:</strong> ${formData.company}</p>
      ${formData.phone ? `<p><strong>Phone:</strong> ${formData.phone}</p>` : ''}
      <h3>Message:</h3>
      <p>${formData.message.replace(/\n/g, '<br>')}</p>
    `;

    try {
      // Send email using Resend
      const emailResponse = await resend.emails.send({
        from: "EuroGrowth Contact Form <onboarding@resend.dev>",
        to: "eric.dauchy@eurogrowth.ca",
        subject: `New contact form submission from ${formData.name}`,
        html: emailContent,
        reply_to: formData.email,
      });

      console.log("Email sent successfully:", emailResponse);

      return new Response(
        JSON.stringify({ success: true, id: emailResponse.id }), 
        {
          status: 200,
          headers: corsHeaders
        }
      );
    } catch (emailError: any) {
      console.error("Error from email service:", emailError);
      return new Response(
        JSON.stringify({ 
          error: "Failed to send email", 
          details: emailError.message 
        }),
        { 
          status: 500, 
          headers: corsHeaders 
        }
      );
    }
    
  } catch (error: any) {
    console.error("Unhandled error in function:", error);
    
    return new Response(
      JSON.stringify({ 
        error: "Server error", 
        message: error.message || "An unexpected error occurred" 
      }),
      { 
        status: 500, 
        headers: corsHeaders 
      }
    );
  }
};

// Start serving the function
serve(handler);
