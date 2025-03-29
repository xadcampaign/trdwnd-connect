
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

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="max-w-3xl text-center md:text-left">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 animate-fade-in border-2 border-trdwnd-navy inline-block px-4 py-2 rounded-lg shadow-lg bg-trdwnd-navy/30">
            {title}
          </h1>
          {subtitle && (
            <p className="text-2xl md:text-3xl text-gray-200 mb-10 animate-slide-up">
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
