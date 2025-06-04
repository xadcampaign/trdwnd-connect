import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Handshake, 
  TrendingUp, 
  Users,
  ChevronRight,
  Link as LinkIcon,
  Mail
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const HomePage = () => {
  return (
    <main>
      <Hero
        title="The time for Canadian business to diversify markets to Europe is now"
        subtitle={<span>We connect <span className="text-[#ea384c]">Canadian companies</span> with high-quality partners in the European Union to maximize market potential and drive international growth.</span>}
        image="/lovable-uploads/192ae08f-974b-4254-a059-f245c321a59a.png"
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center">
          <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation">
            <Link to="/services">Our Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation">
            <a href="mailto:Eric.dauchy@eurogrowth.ca?subject=European Market Expansion Inquiry" className="inline-flex items-center justify-center">
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Contact Us
            </a>
          </Button>
        </div>
      </Hero>

      <Section 
        title="Who We Are" 
        subtitle="EuroGrowth is a premier connector for Canadian companies seeking to expand their market reach through strategic partnerships in the European Union."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-gray-600 mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed">
              With decades of combined experience in international business development, our team specializes in creating valuable connections that lead to successful market entries, distribution deals, and strategic alliances.
            </p>
            <p className="text-gray-600 mb-6 sm:mb-8 text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed">
              We understand the unique challenges Canadian businesses face when expanding into European markets, and we provide tailored solutions to overcome these barriers.
            </p>
            <div className="flex items-center mt-6 sm:mt-8">
              <Link to="/about" className="text-trdwnd-navy hover:text-trdwnd-darkblue font-bold text-lg sm:text-xl inline-flex items-center group touch-manipulation">
                About Us
                <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="/lovable-uploads/142ed3dd-d67c-4553-8f3b-ea7a1aa1a479.png" 
              alt="European Union flags on map" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </Section>

      <Section 
        title="Our Partners" 
        subtitle="Trusted by leading Canadian organizations and government agencies in facilitating international business growth."
        bg="light"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center max-w-6xl mx-auto">
          {[
            "/lovable-uploads/1abfae25-7a35-45ef-9b8d-86b2d4b82ef1.png",
            "/lovable-uploads/9f2314f8-b675-4e0c-832a-d45ef45fb31f.png",
            "/lovable-uploads/bcb8137c-be35-429b-b7a9-0ec3c0cfe957.png",
            "/lovable-uploads/a23d3cf2-3749-484b-aafe-10ed9aa3f1cc.png",
            "/lovable-uploads/db3b1ef1-4be0-47d6-8bba-7316f0b99960.png",
            "/lovable-uploads/03053d81-a5f3-470d-b7e9-121c3c7062e1.png"
          ].map((logo, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-24 sm:h-28 lg:h-32 flex items-center justify-center">
              <img 
                src={logo} 
                alt="Partner logo" 
                className="max-h-12 sm:max-h-14 lg:max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="Our Services" 
        subtitle="We offer comprehensive solutions to help Canadian companies successfully navigate and thrive in European markets."
        bg="white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              icon: <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-trdwnd-navy" />,
              title: "EU Market Analysis",
              description: "In-depth research and analysis of European markets to identify opportunities and entry strategies."
            },
            {
              icon: <Handshake className="h-8 w-8 sm:h-10 sm:w-10 text-trdwnd-navy" />,
              title: "Distribution Deals",
              description: "Connect with established distributors to get your products into European retail networks."
            },
            {
              icon: <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-trdwnd-navy" />,
              title: "Tech Licensing",
              description: "Navigate complex licensing agreements to monetize your technology across European markets."
            },
            {
              icon: <Users className="h-8 w-8 sm:h-10 sm:w-10 text-trdwnd-navy" />,
              title: "Joint Ventures",
              description: "Form strategic partnerships with European businesses to share resources and market knowledge."
            }
          ].map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="mb-3 sm:mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-trdwnd-navy">{service.title}</h3>
              <p className="text-gray-600 mb-4 sm:mb-5 flex-grow text-sm sm:text-base">{service.description}</p>
              <Link 
                to="/services" 
                className="text-trdwnd-navy hover:text-trdwnd-darkblue font-medium inline-flex items-center mt-auto group touch-manipulation text-sm sm:text-base"
              >
                Learn more
                <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <Button asChild size="lg" className="bg-trdwnd-navy hover:bg-trdwnd-darkblue px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </Section>

      <Section 
        title="Industries We Serve" 
        subtitle="We specialize in connecting businesses across a range of high-value sectors in the Canadian-EU marketplace."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="relative overflow-hidden group rounded-lg shadow-lg">
            <img 
              src="/lovable-uploads/59509fef-cf6c-4679-9dea-230290168db0.png" 
              alt="High-Tech & AI" 
              className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-trdwnd-navy/90 to-transparent p-4 sm:p-6 flex flex-col justify-end">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">High-Tech & AI</h3>
              <p className="text-gray-200 mb-3 sm:mb-4 text-sm sm:text-base">Connecting innovative Canadian technology companies with European implementation partners and customers.</p>
              <Link 
                to="/industries" 
                className="text-trdwnd-gold hover:text-trdwnd-gold/80 font-medium inline-flex items-center group touch-manipulation text-sm sm:text-base"
              >
                Explore opportunities
                <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          <div className="relative overflow-hidden group rounded-lg shadow-lg">
            <img 
              src="/lovable-uploads/bb13e67d-0e28-40c8-956a-956eb2d39cf1.png" 
              alt="Aerospace & Defense" 
              className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-trdwnd-navy/90 to-transparent p-4 sm:p-6 flex flex-col justify-end">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Aerospace & Defense</h3>
              <p className="text-gray-200 mb-3 sm:mb-4 text-sm sm:text-base">Facilitating strategic partnerships between Canadian aerospace firms and European defense contractors.</p>
              <Link 
                to="/industries" 
                className="text-trdwnd-gold hover:text-trdwnd-gold/80 font-medium inline-flex items-center group touch-manipulation text-sm sm:text-base"
              >
                Explore opportunities
                <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <Button asChild size="lg" className="bg-trdwnd-navy hover:bg-trdwnd-darkblue px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation">
            <Link to="/industries">View All Industries</Link>
          </Button>
        </div>
      </Section>

      <Section 
        bg="dark"
        className="py-12 sm:py-16 md:py-20 lg:py-28"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Ready to Expand Your Business into Europe?</h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8">
            Contact our team today to discuss how we can help you unlock new growth opportunities in European markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <a 
              href="mailto:Eric.dauchy@eurogrowth.ca?subject=European Market Expansion - Get Started"
              className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation rounded-md inline-flex items-center justify-center transition-colors"
            >
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Get Started
            </a>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation">
              <Link to="/services">Learn More</Link>
            </Button>
          </div>
          
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
            <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
              <LinkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-trdwnd-gold" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">Reason for Contact</h3>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              To help us understand your business better, please take a few minutes to fill out our detailed questionnaire. This will enable us to provide you with tailored solutions for your European market entry.
            </p>
            <Button 
              asChild
              className="bg-white hover:bg-white/90 text-trdwnd-navy w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation"
            >
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf6ef8G0TUE0oHvUmD3Ik7Pxz6hJkC4THU4kTotAstCUZ25og/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                <LinkIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                How Can We Help You?
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default HomePage;
