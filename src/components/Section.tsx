
import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "light" | "dark";
}

const Section = ({
  title,
  subtitle,
  children,
  className = "",
  id,
  bg = "white",
}: SectionProps) => {
  const bgClasses = {
    white: "bg-white",
    light: "bg-trdwnd-gray",
    dark: "bg-trdwnd-navy text-white",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgClasses[bg]} ${className} relative`}
    >
      {/* Flag icon stays on the right */}
      <div className="absolute top-4 right-4 opacity-70 flex flex-col items-center gap-1">
        <img 
          src="/lovable-uploads/2c80b797-3521-4700-92e9-711c22bdf138.png" 
          alt="Canada-EU Partnership" 
          className="w-12 h-auto rounded shadow-sm"
        />
      </div>

      {/* EUROGROWTH logo on the left side - much bigger */}
      <div className="absolute top-4 left-4 opacity-80">
        <img 
          src="/lovable-uploads/b6db057a-109c-4d30-8766-909c77dffe5d.png" 
          alt="EuroGrowth" 
          className="h-16 w-auto"
        />
      </div>
      
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2
                className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 ${
                  bg === "dark" ? "text-white" : "gradient-heading"
                }`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`text-2xl md:text-3xl max-w-4xl mx-auto ${
                  bg === "dark" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
