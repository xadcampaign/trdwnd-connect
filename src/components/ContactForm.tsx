
import { useState } from "react";

interface ContactFormProps {
  className?: string;
}

const ContactForm = ({ className }: ContactFormProps) => {
  return (
    <div className={className}>
      <iframe 
        src="https://docs.google.com/forms/d/e/1FAIpQLSf6ef8G0TUE0oHvUmD3Ik7Pxz6hJkC4THU4kTotAstCUZ25og/viewform?embedded=true" 
        width="100%" 
        height="800" 
        style={{ border: "none", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)" }}
        title="Contact Form"
      >
        Loading form...
      </iframe>
    </div>
  );
};

export default ContactForm;
