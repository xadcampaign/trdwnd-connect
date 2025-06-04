
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
      className={`py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 ${bgClasses[bg]} ${className} relative`}
    >
      {/* Flag icon - responsive positioning */}
      <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 opacity-70 flex flex-col items-center gap-1">
        <img 
          src="/lovable-uploads/2c80b797-3521-4700-92e9-711c22bdf138.png" 
          alt="Canada-EU Partnership" 
          className="w-8 sm:w-10 md:w-12 h-auto rounded shadow-sm"
        />
      </div>

      {/* EUROGROWTH logo - responsive sizing */}
      <div className="absolute top-2 sm:top-3 md:top-4 left-2 sm:left-3 md:left-4 opacity-80">
        <img 
          src="/lovable-uploads/b6db057a-109c-4d30-8766-909c77dffe5d.png" 
          alt="EuroGrowth" 
          className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto"
        />
      </div>
      
      <div className="container mx-auto px-3 sm:px-4">
        {(title || subtitle) && (
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            {title && (
              <h2
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-4 sm:mb-6 ${
                  bg === "dark" ? "text-white" : "gradient-heading"
                }`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`text-lg sm:text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto ${
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
