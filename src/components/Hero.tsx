
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
      className={`relative w-full ${height} min-h-[400px] sm:min-h-[500px] md:min-h-[600px] flex items-center pt-20 sm:pt-24 md:pt-28 lg:pt-32`}
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
      <div className="container relative z-10 mx-auto px-3 sm:px-4 py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-4xl text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-4 sm:mb-6 animate-fade-in drop-shadow-lg leading-tight bg-white/30 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-lg border border-white/20">
            {title}
          </h1>
          {subtitle && (
            <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-6 sm:mb-8 animate-slide-up drop-shadow-md bg-white/30 backdrop-blur-md p-3 sm:p-4 md:p-6 rounded-lg border border-white/20">
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
