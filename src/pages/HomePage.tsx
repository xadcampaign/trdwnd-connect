import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Handshake, 
  TrendingUp, 
  Users,
  ChevronRight
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const HomePage = () => {
  return (
    <main>
      <Hero
        title="Expanding Canadian Export Markets Through Elite EU Partnerships"
        subtitle="We connect Canadian companies with high-quality partners in the European Union to maximize market potential and drive international growth."
        image="/lovable-uploads/192ae08f-974b-4254-a059-f245c321a59a.png"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
          <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium">
            <Link to="/services">Our Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </Hero>

      <Section 
        title="Who We Are" 
        subtitle="TRDWND LLC is a premier connector for Canadian companies seeking to expand their market reach through strategic partnerships in the European Union."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6">
              With decades of combined experience in international business development, our team specializes in creating valuable connections that lead to successful market entries, distribution deals, and strategic alliances.
            </p>
            <p className="text-gray-600 mb-6">
              We understand the unique challenges Canadian businesses face when expanding into European markets, and we provide tailored solutions to overcome these barriers.
            </p>
            <div className="flex items-center mt-8">
              <Link to="/about" className="text-trdwnd-navy hover:text-trdwnd-darkblue font-medium inline-flex items-center group">
                Learn more about our approach
                <ChevronRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="md:order-first">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
              alt="TRDWND team meeting" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </Section>

      <Section 
        title="Our Services" 
        subtitle="We offer comprehensive solutions to help Canadian companies successfully navigate and thrive in European markets."
        bg="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Globe className="h-10 w-10 text-trdwnd-navy" />,
              title: "EU Market Analysis",
              description: "In-depth research and analysis of European markets to identify opportunities and entry strategies.",
              link: "/services#market-analysis"
            },
            {
              icon: <Handshake className="h-10 w-10 text-trdwnd-navy" />,
              title: "Distribution Deals",
              description: "Connect with established distributors to get your products into European retail networks.",
              link: "/services#distribution"
            },
            {
              icon: <TrendingUp className="h-10 w-10 text-trdwnd-navy" />,
              title: "Tech Licensing",
              description: "Navigate complex licensing agreements to monetize your technology across European markets.",
              link: "/services#licensing"
            },
            {
              icon: <Users className="h-10 w-10 text-trdwnd-navy" />,
              title: "Joint Ventures",
              description: "Form strategic partnerships with European businesses to share resources and market knowledge.",
              link: "/services#joint-ventures"
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
              src="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
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
              src="https://images.unsplash.com/photo-1532368432602-98003930fe1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Expand Your Business into Europe?</h2>
          <p className="text-gray-300 text-lg mb-8">
            Contact our team today to discuss how we can help you unlock new growth opportunities in European markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium">
              <Link to="/contact">Get Started</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/services">Learn More</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default HomePage;
