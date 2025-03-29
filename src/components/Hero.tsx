
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  overlay?: boolean;
  children?: ReactNode;
  height?: string;
}

const Hero = ({
  title,
  subtitle,
  image,
  overlay = true,
  children,
  height = "lg:h-[80vh]",
}: HeroProps) => {
  return (
    <div
      className={`relative w-full ${height} min-h-[400px] flex items-center`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-trdwnd-navy/70 hero-pattern"></div>
      )}

      {/* Canada/EU Flag Corner Decoration */}
      <div className="absolute top-20 right-8 z-20">
        <img 
          src="/lovable-uploads/2c80b797-3521-4700-92e9-711c22bdf138.png" 
          alt="Canada-EU Partnership" 
          className="w-24 h-auto rounded shadow-lg"
        />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl text-center md:text-left">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up">
              {subtitle}
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
