
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
  ];

  const languages = [
    { code: "en", name: "English", flag: "🇨🇦" },
    { code: "fr", name: "Français", flag: "🇫🇷" },
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

  const handleLanguageChange = (languageCode: string) => {
    setCurrentLanguage(languageCode);
    console.log(`Language switched to: ${languageCode}`);
    // TODO: Implement actual language switching logic
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-1 sm:py-2 shadow-md"
          : "bg-white/40 backdrop-blur-lg py-2 sm:py-3 md:py-4"
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 flex justify-between items-center">
        {/* Logo - Enhanced responsive sizing */}
        <div className="flex items-center">
          <Link to="/" className="hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/4045def3-70c1-4b43-b2f8-280f3b19b716.png" 
              alt="EuroGrowth" 
              className="h-12 xs:h-14 sm:h-16 md:h-20 lg:h-24 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`hover-underline text-sm xl:text-base 2xl:text-lg font-medium transition-colors ${
                location.pathname === link.path
                  ? "text-trdwnd-navy"
                  : "text-gray-600 hover:text-trdwnd-navy"
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-trdwnd-navy hover:bg-trdwnd-darkblue text-white text-xl px-2 py-1">
                {languages.find(lang => lang.code === currentLanguage)?.flag}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white shadow-lg border">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className="flex items-center gap-3 cursor-pointer hover:bg-gray-50"
                >
                  <span className="text-lg">{language.flag}</span>
                  <span className="font-medium">{language.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button asChild className="bg-trdwnd-navy hover:bg-trdwnd-darkblue text-white text-sm xl:text-base 2xl:text-lg px-3 xl:px-4 2xl:px-6 py-2 xl:py-3">
            <Link to="/get-started">Get Started</Link>
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Mobile Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-trdwnd-navy hover:bg-trdwnd-darkblue text-white text-lg px-2 py-1">
                {languages.find(lang => lang.code === currentLanguage)?.flag}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white shadow-lg border">
              {languages.map((language) => (
                <DropdownMenuItem
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-50"
                >
                  <span>{language.flag}</span>
                  <span className="text-sm">{language.name}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <button
            className="p-2 focus:outline-none touch-manipulation"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-trdwnd-navy" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-trdwnd-navy" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t animate-fade-in">
          <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 flex flex-col gap-2 sm:gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`py-3 sm:py-4 px-3 sm:px-4 text-base sm:text-lg rounded-md transition-colors touch-manipulation ${
                  location.pathname === link.path
                    ? "bg-trdwnd-lightblue text-trdwnd-navy font-medium"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button asChild className="mt-2 w-full bg-trdwnd-navy hover:bg-trdwnd-darkblue text-white text-base sm:text-lg py-3 sm:py-4 touch-manipulation">
              <Link to="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
