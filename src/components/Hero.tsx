
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: ReactNode;
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
      className={`relative w-full ${height} min-h-[500px] flex items-center pt-28 md:pt-32`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Enhanced Overlay for better text readability */}
      {overlay && (
        <div className="absolute inset-0 bg-black/70 hero-pattern"></div>
      )}

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 animate-fade-in drop-shadow-lg leading-tight">
            {title}
          </h1>
          {subtitle && (
            <div className="text-lg md:text-xl lg:text-2xl text-white mb-8 animate-slide-up drop-shadow-md bg-black/30 p-4 rounded-lg backdrop-blur-sm">
              {subtitle}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Hero;
