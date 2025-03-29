
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
      {/* Canada/EU Logo Corner Decoration */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-60">
        <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white text-xs font-bold">
          CA
        </div>
        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
          <div className="flex items-center justify-center w-full h-full">
            <div className="text-yellow-300 text-xs">
              ★★★★★
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
                  bg === "dark" ? "text-white" : "gradient-heading"
                }`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`text-xl md:text-2xl max-w-3xl mx-auto ${
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
