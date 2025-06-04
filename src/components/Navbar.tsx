
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-2 shadow-md"
          : "bg-white/40 backdrop-blur-lg py-3 md:py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo - Responsive sizing */}
        <div className="flex items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/4045def3-70c1-4b43-b2f8-280f3b19b716.png" 
              alt="EuroGrowth" 
              className="h-16 sm:h-20 md:h-24 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation - On the right side */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover-underline text-base lg:text-lg font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-trdwnd-navy"
                  : "text-gray-600 hover:text-trdwnd-navy"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Button asChild className="bg-trdwnd-navy hover:bg-trdwnd-darkblue text-white text-base lg:text-lg px-4 lg:px-6 py-2 lg:py-3">
            <Link to="/get-started">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle - positioned on the right */}
        <button
          className="md:hidden p-2 focus:outline-none ml-auto"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="h-6 w-6 sm:h-8 sm:w-8 text-trdwnd-navy" />
          ) : (
            <Menu className="h-6 w-6 sm:h-8 sm:w-8 text-trdwnd-navy" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-3 px-4 text-base sm:text-lg rounded-md transition-colors ${
                  location.pathname === link.path
                    ? "bg-trdwnd-lightblue text-trdwnd-navy font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full bg-trdwnd-navy hover:bg-trdwnd-darkblue text-white text-base sm:text-lg py-3 sm:py-4">
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
