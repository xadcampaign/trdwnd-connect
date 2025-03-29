
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IndustriesPage = () => {
  const industries = [
    {
      id: "tech",
      name: "High-Tech & AI",
      description: "Canada's high-tech sector is increasingly looking to Europe for growth opportunities. We connect innovative Canadian technology companies with European implementation partners, customers, and research institutions.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      services: [
        "Market entry strategy for software and SaaS products",
        "AI technology licensing and partnerships",
        "R&D collaborations with European tech hubs",
        "EU data privacy compliance consulting"
      ],
      caseStudy: {
        title: "Toronto AI Firm Expands to Germany",
        description: "We helped a leading Toronto-based AI solutions provider establish a strategic partnership with a German industrial automation company, resulting in a 40% increase in revenue within the first year."
      }
    },
    {
      id: "aerospace",
      name: "Aerospace & Defense",
      description: "The European aerospace and defense market presents significant opportunities for Canadian companies in this sector. We facilitate partnerships that meet strict regulatory requirements and security standards.",
      image: "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      services: [
        "Strategic alliances with European defense contractors",
        "Supply chain integration for aerospace components",
        "Certification and regulatory compliance support",
        "Joint R&D initiatives for defense technology"
      ],
      caseStudy: {
        title: "Canadian Aviation Components Manufacturer Enters French Market",
        description: "We connected a Montreal-based aerospace components manufacturer with a major French aircraft producer, establishing a long-term supply agreement worth over €5 million annually."
      }
    },
    {
      id: "cleantech",
      name: "Clean Technology",
      description: "Europe's commitment to sustainability creates tremendous potential for Canadian clean technology companies. We help innovative firms access this forward-thinking market.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      services: [
        "Partnerships with European renewable energy providers",
        "Distribution of clean technology solutions",
        "EU green subsidy and funding access",
        "Sustainability certification and compliance"
      ],
      caseStudy: {
        title: "Vancouver Cleantech Innovation Reaches Scandinavian Markets",
        description: "A Vancouver-based water purification technology company partnered with a Swedish municipal services provider to implement their solution across multiple cities, creating a showcase for European expansion."
      }
    },
    {
      id: "manufacturing",
      name: "Advanced Manufacturing",
      description: "Canadian advancements in manufacturing technology find receptive markets in Europe's industrial sectors. We connect manufacturers with European partners seeking innovation and efficiency.",
      image: "https://images.unsplash.com/photo-1565372558030-8e874cb118da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      services: [
        "Technology transfer and licensing for manufacturing innovations",
        "Supply chain partnerships with European manufacturers",
        "Joint ventures for production facilities",
        "Distribution of specialized manufacturing equipment"
      ],
      caseStudy: {
        title: "Ontario Manufacturing Technology Firm Enters German Market",
        description: "An Ontario-based industrial automation company established a joint venture with a German manufacturing conglomerate, successfully integrating their technology into European production lines."
      }
    }
  ];

  return (
    <main>
      <Hero
        title="Industries We Serve"
        subtitle="Specialized expertise across high-value sectors in the Canadian-EU marketplace"
        image="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        height="lg:h-[70vh]"
      />

      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-trdwnd-navy mb-6">Specialized Sector Expertise</h2>
          <p className="text-lg text-gray-600">
            TRDWND focuses on industries where Canadian companies excel and where European markets offer significant growth potential. Our deep understanding of these sectors allows us to provide targeted solutions that deliver real results.
          </p>
        </div>
      </Section>

      {industries.map((industry, index) => (
        <Section
          key={industry.id}
          id={industry.id}
          bg={index % 2 === 0 ? "light" : "white"}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={index % 2 !== 0 ? "order-2 lg:order-1" : ""}>
              <img
                src={industry.image}
                alt={industry.name}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
            <div className={index % 2 !== 0 ? "order-1 lg:order-2" : ""}>
              <h2 className="text-3xl font-bold text-trdwnd-navy mb-4">{industry.name}</h2>
              <p className="text-gray-600 mb-6">
                {industry.description}
              </p>
              
              <h3 className="text-xl font-semibold text-trdwnd-navy mb-3">Our Services for this Sector</h3>
              <ul className="space-y-2 mb-6">
                {industry.services.map((service, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-trdwnd-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{service}</span>
                  </li>
                ))}
              </ul>
              
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md mb-6">
                <h4 className="text-lg font-semibold text-trdwnd-navy mb-2">Success Story: {industry.caseStudy.title}</h4>
                <p className="text-gray-600">
                  {industry.caseStudy.description}
                </p>
              </div>
            </div>
          </div>
        </Section>
      ))}

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
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default IndustriesPage;
