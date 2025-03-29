
import { ReactNode } from "react";

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  id?: string;
  bg?: "white" | "light" | "dark" | "gradient";
  collage?: boolean;
  imageLeft?: string;
  imageRight?: string;
}

const Section = ({
  title,
  subtitle,
  children,
  className = "",
  id,
  bg = "white",
  collage = false,
  imageLeft,
  imageRight,
}: SectionProps) => {
  const bgClasses = {
    white: "bg-white",
    light: "bg-trdwnd-gray",
    dark: "bg-trdwnd-navy text-white",
    gradient: "bg-gradient-to-r from-trdwnd-navy to-trdwnd-darkblue text-white",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${bgClasses[bg]} ${className} relative overflow-hidden`}
    >
      {collage && imageLeft && (
        <div className="absolute -left-16 top-0 w-1/3 h-full opacity-10 blur-sm">
          <img src={imageLeft} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      
      {collage && imageRight && (
        <div className="absolute -right-16 bottom-0 w-1/3 h-full opacity-10 blur-sm">
          <img src={imageRight} alt="" className="w-full h-full object-cover" />
        </div>
      )}
      
      {collage && (
        <div className="absolute top-12 right-24 w-40 h-40 rounded-full border-8 border-trdwnd-gold/10 hidden lg:block"></div>
      )}
      
      {collage && (
        <div className="absolute bottom-24 left-12 w-24 h-24 rounded-full bg-trdwnd-gold/5 hidden lg:block"></div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
                  bg === "dark" || bg === "gradient" ? "text-white" : "gradient-heading"
                }`}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={`text-xl md:text-2xl max-w-3xl mx-auto ${
                  bg === "dark" || bg === "gradient" ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {subtitle}
              </p>
            )}
          </div>
        )}
        <div className={collage ? "relative z-10" : ""}>
          {children}
        </div>
      </div>
      
      {collage && bg !== "gradient" && (
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-trdwnd-gold/30 to-transparent"></div>
      )}
    </section>
  );
};

export default Section;
