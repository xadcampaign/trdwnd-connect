
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Handshake, 
  TrendingUp, 
  Users,
  ChevronRight,
  MapPin,
  Award,
  Flag
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const HomePage = () => {
  return (
    <main>
      <Hero
        title="Bridging Canadian Innovation with European Markets"
        subtitle="We forge elite partnerships between Canadian companies and EU markets to create global success stories"
        image="/lovable-uploads/192ae08f-974b-4254-a059-f245c321a59a.png"
        secondaryImage="https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-4.0.3&auto=format&fit=crop&w=1740&q=80"
        collage={true}
        overlay={false}
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
          <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium drop-shadow-lg">
            <Link to="/services">Our Services</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 backdrop-blur-sm">
            <Link to="/contact">Contact Us</Link>
          </Button>
        </div>
      </Hero>

      <Section 
        title="Who We Are" 
        subtitle="TRDWND LLC is a premier connector for Canadian companies seeking to expand their market reach through strategic partnerships in the European Union."
        collage={true}
        imageRight="https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1744&q=80"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg">
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
          <div className="md:order-first relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
              alt="TRDWND team meeting" 
              className="rounded-lg shadow-lg w-full z-10 relative"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-trdwnd-gold rounded-lg z-0"></div>
            <div className="absolute top-4 left-4 p-2 bg-trdwnd-navy/80 backdrop-blur-sm rounded-full">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-trdwnd-gold rounded-full"></div>
                <div className="w-3 h-3 bg-white rounded-full"></div>
                <div className="w-3 h-3 bg-trdwnd-navy rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section 
        title="Our Services" 
        subtitle="We offer comprehensive solutions to help Canadian companies successfully navigate and thrive in European markets."
        bg="gradient"
        collage={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Globe className="h-10 w-10 text-trdwnd-gold" />,
              title: "EU Market Analysis",
              description: "In-depth research and analysis of European markets to identify opportunities and entry strategies.",
              link: "/services#market-analysis"
            },
            {
              icon: <Handshake className="h-10 w-10 text-trdwnd-gold" />,
              title: "Distribution Deals",
              description: "Connect with established distributors to get your products into European retail networks.",
              link: "/services#distribution"
            },
            {
              icon: <TrendingUp className="h-10 w-10 text-trdwnd-gold" />,
              title: "Tech Licensing",
              description: "Navigate complex licensing agreements to monetize your technology across European markets.",
              link: "/services#licensing"
            },
            {
              icon: <Users className="h-10 w-10 text-trdwnd-gold" />,
              title: "Joint Ventures",
              description: "Form strategic partnerships with European businesses to share resources and market knowledge.",
              link: "/services#joint-ventures"
            }
          ].map((service, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col"
            >
              <div className="mb-4 p-3 bg-trdwnd-navy/40 inline-block rounded-lg group-hover:bg-trdwnd-gold/20 transition-colors">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
              <p className="text-gray-200 mb-5 flex-grow">{service.description}</p>
              <Link 
                to={service.link} 
                className="text-trdwnd-gold hover:text-trdwnd-gold/80 font-medium inline-flex items-center mt-auto group"
              >
                Learn more
                <ChevronRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild size="lg" className="bg-white hover:bg-white/90 text-trdwnd-navy border border-trdwnd-gold/20">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </Section>

      <Section 
        title="Industries We Serve" 
        subtitle="We specialize in connecting businesses across a range of high-value sectors in the Canadian-EU marketplace."
        collage={true}
        imageLeft="https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1734&q=80"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative overflow-hidden group rounded-lg shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1597733336794-12d05021d510?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
              alt="High-Tech & AI" 
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-trdwnd-navy/90 to-transparent p-6 flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-2">
                <Flag className="h-5 w-5 text-trdwnd-gold" />
                <span className="text-white text-sm uppercase tracking-wider">Canadian Innovation</span>
              </div>
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
            <div className="absolute top-4 right-4 bg-trdwnd-navy/70 p-2 rounded-lg backdrop-blur-sm">
              <MapPin className="h-5 w-5 text-trdwnd-gold" />
            </div>
          </div>
          
          <div className="relative overflow-hidden group rounded-lg shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1532368432602-98003930fe1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Aerospace & Defense" 
              className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-trdwnd-navy/90 to-transparent p-6 flex flex-col justify-end">
              <div className="flex items-center gap-2 mb-2">
                <Flag className="h-5 w-5 text-trdwnd-gold" />
                <span className="text-white text-sm uppercase tracking-wider">Canadian Excellence</span>
              </div>
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
            <div className="absolute top-4 right-4 bg-trdwnd-navy/70 p-2 rounded-lg backdrop-blur-sm">
              <MapPin className="h-5 w-5 text-trdwnd-gold" />
            </div>
          </div>
        </div>
        <div className="relative mt-12 p-8 backdrop-blur-sm bg-white/5 rounded-lg border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-trdwnd-gold mb-2">2</div>
              <p className="text-sm text-gray-600">Continents</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-trdwnd-gold mb-2">12+</div>
              <p className="text-sm text-gray-600">EU Countries</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-trdwnd-gold mb-2">45+</div>
              <p className="text-sm text-gray-600">Successful Partnerships</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-trdwnd-gold mb-2">$120M+</div>
              <p className="text-sm text-gray-600">Facilitated Deals</p>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-trdwnd-gold/30 rounded-lg z-0"></div>
        </div>
        <div className="text-center mt-16">
          <Button asChild size="lg" className="bg-trdwnd-navy hover:bg-trdwnd-darkblue border border-trdwnd-gold/20">
            <Link to="/industries">View All Industries</Link>
          </Button>
        </div>
      </Section>

      <Section 
        bg="dark"
        className="py-20 md:py-28"
        collage={true}
      >
        <div className="text-center max-w-4xl mx-auto relative">
          <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-72 h-72 opacity-10">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 rounded-full border-8 border-trdwnd-gold/30 animate-spin" style={{ animationDuration: '20s' }}></div>
              <div className="absolute inset-10 rounded-full border-4 border-white/20 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
              <div className="absolute inset-20 rounded-full border-2 border-trdwnd-gold/10 animate-spin" style={{ animationDuration: '10s' }}></div>
            </div>
          </div>
          <div className="p-8 backdrop-blur-sm bg-trdwnd-navy/70 rounded-lg border border-white/10 relative z-10">
            <Award className="h-12 w-12 text-trdwnd-gold mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Expand Your Business into Europe?</h2>
            <p className="text-gray-300 text-xl mb-8">
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
        </div>
      </Section>
    </main>
  );
};

export default HomePage;
