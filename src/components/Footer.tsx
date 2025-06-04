
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-trdwnd-navy text-white pt-8 sm:pt-12 pb-4 sm:pb-6">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-gray-300 mb-4 text-sm sm:text-base">
              Expanding Canadian Export Markets Through Elite EU Partnerships
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/ericdauchy/"
                className="text-gray-300 hover:text-trdwnd-gold transition-colors touch-manipulation"
                aria-label="Eric Dauchy LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
                <span className="sr-only">Eric Dauchy LinkedIn Profile</span>
              </a>
              <a
                href="mailto:Eric.dauchy@eurogrowth.ca"
                className="text-gray-300 hover:text-trdwnd-gold transition-colors touch-manipulation"
                aria-label="Eric Dauchy Email"
              >
                <Mail size={20} />
                <span className="sr-only">Eric Dauchy Email</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Industries", path: "/industries" },
                { name: "Get Started", path: "/get-started" }
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-trdwnd-gold transition-colors text-sm sm:text-base touch-manipulation"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { name: "EU Market Analysis", path: "/eu-market-analysis" },
                { name: "Distribution Deals", path: "/distribution-deals" },
                { name: "Tech Licensing", path: "/tech-licensing" },
                { name: "Joint Ventures", path: "/joint-ventures" }
              ].map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="text-gray-300 hover:text-trdwnd-gold transition-colors text-sm sm:text-base touch-manipulation"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-trdwnd-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium text-sm sm:text-base">Eric Dauchy</p>
                  <a href="mailto:Eric.dauchy@eurogrowth.ca" className="text-gray-300 hover:text-trdwnd-gold transition-colors text-xs sm:text-sm touch-manipulation">
                    Eric.dauchy@eurogrowth.ca
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-trdwnd-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium text-sm sm:text-base">Eric Gerritsen</p>
                  <a href="mailto:Eric@imperialyellowventures.com" className="text-gray-300 hover:text-trdwnd-gold transition-colors text-xs sm:text-sm touch-manipulation">
                    Eric@imperialyellowventures.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-trdwnd-gold mt-1 flex-shrink-0" />
                <a href="tel:+32498513077" className="text-gray-300 hover:text-trdwnd-gold transition-colors text-sm sm:text-base touch-manipulation">
                  +32 498 51 30 77
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-trdwnd-gold mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">
                  Victoria/Hong Kong/Brussels
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-4 sm:pt-6 mt-4 sm:mt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
              &copy; {currentYear} EUROGROWTH. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-trdwnd-gold text-xs sm:text-sm transition-colors touch-manipulation"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-trdwnd-gold text-xs sm:text-sm transition-colors touch-manipulation"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
