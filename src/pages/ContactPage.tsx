
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link, MessageSquare, Phone, MapPin, Clock, Mail } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <main>
      <Hero
        title="Contact Us"
        subtitle="Get in touch to discuss how we can help your business expand into European markets"
        image="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        height="lg:h-[60vh]"
      />

      <Section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-trdwnd-navy mb-6">Send Us a Message</h2>
            <p className="text-gray-600 mb-8">
              Complete the form below and one of our international business specialists will get back to you within 24 hours.
            </p>
            
            <ContactForm />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Link className="h-6 w-6 text-trdwnd-gold" />
                <h3 className="text-xl font-semibold text-trdwnd-navy">Prefer to use Google Forms?</h3>
              </div>
              <p className="text-gray-600 mb-6">
                We also offer a Google Forms option for contacting us. Fill out our detailed questionnaire to help us better understand your specific needs.
              </p>
              <Button 
                asChild
                variant="outline"
                className="border-trdwnd-gold text-trdwnd-navy hover:bg-trdwnd-gold/10" 
              >
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf6ef8G0TUE0oHvUmD3Ik7Pxz6hJkC4THU4kTotAstCUZ25og/viewform?usp=header" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Link className="mr-2 h-4 w-4" />
                  Open Contact Questionnaire
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <div className="bg-trdwnd-navy text-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Mail className="h-6 w-6 text-trdwnd-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:Eric.Dauchy@EuroGrowth.ca" className="text-gray-300 hover:text-trdwnd-gold transition-colors">
                      Eric.Dauchy@EuroGrowth.ca
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="h-6 w-6 text-trdwnd-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:Eric.Gerritsen@EuroGrowth.ca" className="text-gray-300 hover:text-trdwnd-gold transition-colors">
                      Eric.Gerritsen@EuroGrowth.ca
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Phone className="h-6 w-6 text-trdwnd-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <a href="tel:+32498513077" className="text-gray-300 hover:text-trdwnd-gold transition-colors">
                      +32 498 51 30 77
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-trdwnd-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Offices</p>
                    <address className="text-gray-600 not-italic">
                      Offices in Toronto, Vancouver, Brussels and London
                    </address>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-trdwnd-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-gray-300">
                      Monday - Friday<br />
                      9:00 AM - 5:00 PM EST
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-trdwnd-navy mb-4">European Office</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-trdwnd-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <address className="text-gray-600 not-italic">
                      Offices in Brussels and London
                    </address>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-trdwnd-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="tel:+31201234567" className="text-gray-600 hover:text-trdwnd-navy transition-colors">
                      +31 (20) 123-4567
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="light" className="py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-bold text-trdwnd-navy mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600">
            Find answers to common questions about our services and approach to international business development.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              question: "How long does it typically take to establish a European partnership?",
              answer: "The timeline varies depending on the industry and specific requirements, but most partnerships take between 3-6 months to establish. Our structured approach helps streamline this process as much as possible."
            },
            {
              question: "Do you work with businesses of all sizes?",
              answer: "Yes, we work with Canadian businesses ranging from innovative startups to established enterprises. Our services are tailored to meet the specific needs and resources of each client."
            },
            {
              question: "Which European countries do you operate in?",
              answer: "We have experience and networks across the entire European Union, with particular strengths in Germany, France, the Netherlands, Spain, Italy, and the Scandinavian countries."
            },
            {
              question: "What are your fees and pricing structure?",
              answer: "We offer flexible engagement models including project-based fees, retainers, and success-based compensation. We'll work with you to determine the most appropriate structure based on your specific needs and goals."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <MessageSquare className="h-5 w-5 text-trdwnd-gold mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-trdwnd-navy mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default ContactPage;
