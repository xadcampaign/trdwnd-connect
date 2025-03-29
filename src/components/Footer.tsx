
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-trdwnd-navy text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <span>TRDWND</span>
              <span className="text-trdwnd-gold font-light ml-1">LLC</span>
            </h3>
            <p className="text-gray-300 mb-4">
              Expanding Canadian Export Markets Through Elite EU Partnerships
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                className="text-gray-300 hover:text-trdwnd-gold transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-300 hover:text-trdwnd-gold transition-colors"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-trdwnd-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-trdwnd-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-trdwnd-gold transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/industries"
                  className="text-gray-300 hover:text-trdwnd-gold transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  to="/get-started"
                  className="text-gray-300 hover:text-trdwnd-gold transition-colors"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/eu-market-analysis"
                  className="text-gray-300 hover:text-trdwnd-gold transition-colors"
                >
                  EU Market Analysis
                </Link>
              </li>
              <li>
                <Link
                  to="/distribution-deals"
                  className="text-gray-300 hover:text-trdwnd-gold transition-colors"
                >
                  Distribution Deals
                </Link>
              </li>
              <li>
                <Link
                  to="/tech-licensing"
                  className="text-gray-300 hover:text-trdwnd-gold transition-colors"
                >
                  Tech Licensing
                </Link>
              </li>
              <li>
                <Link
                  to="/joint-ventures"
                  className="text-gray-300 hover:text-trdwnd-gold transition-colors"
                >
                  Joint Ventures
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail size={20} className="text-trdwnd-gold mt-1 flex-shrink-0" />
                <span className="text-gray-300">contact@trdwnd.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-trdwnd-gold mt-1 flex-shrink-0" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-trdwnd-gold mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  123 Business Ave, Toronto, ON, Canada
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} TRDWND LLC. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-trdwnd-gold text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-trdwnd-gold text-sm transition-colors"
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
