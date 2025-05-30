
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
      className={`relative w-full ${height} min-h-[500px] flex items-center pt-32 md:pt-36 pb-16`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Enhanced Overlay for better text readability */}
      {overlay && (
        <div className="absolute inset-0 bg-black/60"></div>
      )}

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-8">
        <div className="max-w-4xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-2xl">
            {title}
          </h1>
          {subtitle && (
            <div className="text-lg md:text-xl lg:text-2xl text-white mb-8 leading-relaxed drop-shadow-lg bg-black/20 p-6 rounded-xl backdrop-blur-sm border border-white/10">
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
