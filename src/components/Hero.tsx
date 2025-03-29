
import { ReactNode } from "react";

interface HeroProps {
  title: string;
  subtitle?: string;
  image: string;
  secondaryImage?: string;
  overlay?: boolean;
  children?: ReactNode;
  height?: string;
  collage?: boolean;
}

const Hero = ({
  title,
  subtitle,
  image,
  secondaryImage,
  overlay = true,
  children,
  height = "lg:h-[80vh]",
  collage = false,
}: HeroProps) => {
  return (
    <div
      className={`relative w-full ${height} min-h-[400px] flex items-center overflow-hidden`}
    >
      {/* Background Images */}
      {collage ? (
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 w-3/5 h-full bg-cover bg-center bg-no-repeat border-r-8 border-trdwnd-gold"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute top-0 right-0 w-2/5 h-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${secondaryImage || image})` }}
          />
          <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-trdwnd-navy/90 to-transparent" />
        </div>
      ) : (
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      {/* Overlay */}
      {overlay && !collage && (
        <div className="absolute inset-0 bg-trdwnd-navy/70 hero-pattern"></div>
      )}
      
      {collage && (
        <div className="absolute inset-0 bg-gradient-to-r from-trdwnd-navy/60 to-trdwnd-navy/40"></div>
      )}

      {/* Decorative Elements for Collage */}
      {collage && (
        <>
          <div className="absolute top-12 right-12 w-32 h-32 border-8 border-trdwnd-gold/30 rounded-full hidden md:block" />
          <div className="absolute bottom-12 left-1/4 w-20 h-20 border-4 border-white/20 rounded-full hidden md:block" />
          <div className="absolute top-1/3 left-12 w-24 h-24 bg-trdwnd-gold/10 rounded-full hidden md:block" />
        </>
      )}

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className={`max-w-3xl ${collage ? 'backdrop-blur-sm bg-trdwnd-navy/30 p-8 rounded-lg border border-white/10' : ''} text-center md:text-left`}>
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
