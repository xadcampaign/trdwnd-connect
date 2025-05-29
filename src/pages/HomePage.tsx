import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Handshake, 
  TrendingUp, 
  Users,
  ChevronRight,
  Link as LinkIcon
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const HomePage = () => {
  return (
    <main>
      <Hero
        title="Expanding Canadian Export Markets Through Elite EU Partnerships"
        subtitle={<span>We connect <span className="text-[#ea384c]">Canadian companies</span> with high-quality partners in the European Union to maximize market potential and drive international growth.</span>}
        image="/lovable-uploads/192ae08f-974b-4254-a059-f245c321a59a.png"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
          <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium">
            <Link to="/services">Our Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/10">
            <Link to="/get-started">Contact Us</Link>
          </Button>
        </div>
      </Hero>

      <Section 
        title="Who We Are" 
        subtitle="EUROGROWTH is a premier connector for Canadian companies seeking to expand their market reach through strategic partnerships in the European Union."
        hideLogos={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6 text-2xl font-medium leading-relaxed">
              With decades of combined experience in international business development, our team specializes in creating valuable connections that lead to successful market entries, distribution deals, and strategic alliances.
            </p>
            <p className="text-gray-600 mb-6 text-2xl font-medium leading-relaxed">
              We understand the unique challenges Canadian businesses face when expanding into European markets, and we provide tailored solutions to overcome these barriers.
            </p>
            <div className="flex items-center mt-8">
              <Link to="/about" className="text-trdwnd-navy hover:text-trdwnd-darkblue font-bold text-xl inline-flex items-center group">
                About Us
                <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="md:order-first">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center justify-items-center max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
            <img 
              src="/lovable-uploads/1abfae25-7a35-45ef-9b8d-86b2d4b82ef1.png" 
              alt="BDO Canada" 
              className="max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
            <img 
              src="/lovable-uploads/9f2314f8-b675-4e0c-832a-d45ef45fb31f.png" 
              alt="British Columbia" 
              className="max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
            <img 
              src="/lovable-uploads/bcb8137c-be35-429b-b7a9-0ec3c0cfe957.png" 
              alt="Export Development Canada" 
              className="max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
            <img 
              src="/lovable-uploads/a23d3cf2-3749-484b-aafe-10ed9aa3f1cc.png" 
              alt="InvestHK - Hong Kong Special Administrative Region" 
              className="max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
            <img 
              src="/lovable-uploads/db3b1ef1-4be0-47d6-8bba-7316f0b99960.png" 
              alt="Government of Canada" 
              className="max-h-16 max-w-full object-contain"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-32 flex items-center justify-center">
            <img 
              src="/lovable-uploads/03053d81-a5f3-470d-b7e9-121c3c7062e1.png" 
              alt="INOUE Public Relations" 
              className="max-h-24 max-w-full object-contain"
            />
          </div>
        </div>
      </Section>

      <Section 
        title="Our Services" 
        subtitle="We offer comprehensive solutions to help Canadian companies successfully navigate and thrive in European markets."
        bg="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Globe className="h-10 w-10 text-trdwnd-navy" />,
              title: "EU Market Analysis",
              description: "In-depth research and analysis of European markets to identify opportunities and entry strategies.",
              link: "/eu-market-analysis"
            },
            {
              icon: <Handshake className="h-10 w-10 text-trdwnd-navy" />,
              title: "Distribution Deals",
              description: "Connect with established distributors to get your products into European retail networks.",
              link: "/distribution-deals"
            },
            {
              icon: <TrendingUp className="h-10 w-10 text-trdwnd-navy" />,
              title: "Tech Licensing",
              description: "Navigate complex licensing agreements to monetize your technology across European markets.",
              link: "/tech-licensing"
            },
            {
              icon: <Users className="h-10 w-10 text-trdwnd-navy" />,
              title: "Joint Ventures",
              description: "Form strategic partnerships with European businesses to share resources and market knowledge.",
              link: "/joint-ventures"
            }
          ].map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-trdwnd-navy">{service.title}</h3>
              <p className="text-gray-600 mb-5 flex-grow">{service.description}</p>
              <Link 
                to={service.link} 
                className="text-trdwnd-navy hover:text-trdwnd-darkblue font-medium inline-flex items-center mt-auto group"
              >
                Learn more
                <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-trdwnd-navy hover:bg-trdwnd-darkblue">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </Section>

      <Section 
        title="Industries We Serve" 
        subtitle="We specialize in connecting businesses across a range of high-value sectors in the Canadian-EU marketplace."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden group rounded-lg shadow-lg">
            <img 
              src="/lovable-uploads/59509fef-cf6c-4679-9dea-230290168db0.png" 
              alt="High-Tech & AI" 
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-trdwnd-navy/90 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold mb-2">High-Tech & AI</h3>
              <p className="text-gray-200 mb-4">Connecting innovative Canadian technology companies with European implementation partners and customers.</p>
              <Link 
                to="/industries#tech" 
                className="text-trdwnd-gold hover:text-trdwnd-gold/80 font-medium inline-flex items-center group"
              >
                Explore opportunities
                <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          <div className="relative overflow-hidden group rounded-lg shadow-lg">
            <img 
              src="/lovable-uploads/bb13e67d-0e28-40c8-956a-956eb2d39cf1.png" 
              alt="Aerospace & Defense" 
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-trdwnd-navy/90 to-transparent p-6 flex flex-col justify-end">
              <h3 className="text-white text-2xl font-bold mb-2">Aerospace & Defense</h3>
              <p className="text-gray-200 mb-4">Facilitating strategic partnerships between Canadian aerospace firms and European defense contractors.</p>
              <Link 
                to="/industries#aerospace" 
                className="text-trdwnd-gold hover:text-trdwnd-gold/80 font-medium inline-flex items-center group"
              >
                Explore opportunities
                <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-trdwnd-navy hover:bg-trdwnd-darkblue">
            <Link to="/industries">View All Industries</Link>
          </Button>
        </div>
      </Section>

      <Section 
        bg="dark"
        className="py-20 md:py-28"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Expand Your Business into Europe?</h2>
          <p className="text-gray-300 text-xl mb-8">
            Contact our team today to discuss how we can help you unlock new growth opportunities in European markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium">
              <Link to="/get-started">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/10">
              <Link to="/services">Learn More</Link>
            </Button>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <div className="flex items-center justify-center gap-3 mb-4">
              <LinkIcon className="h-6 w-6 text-trdwnd-gold" />
              <h3 className="text-xl font-semibold text-white">Reason for Contact</h3>
            </div>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              To help us understand your business better, please take a few minutes to fill out our detailed questionnaire. This will enable us to provide you with tailored solutions for your European market entry.
            </p>
            <Button 
              asChild
              className="bg-white hover:bg-white/90 text-trdwnd-navy"
            >
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf6ef8G0TUE0oHvUmD3Ik7Pxz6hJkC4THU4kTotAstCUZ25og/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center"
              >
                <LinkIcon className="mr-2 h-4 w-4" />
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
