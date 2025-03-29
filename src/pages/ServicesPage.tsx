
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { 
  Globe, 
  Handshake, 
  TrendingUp, 
  Users,
  Search,
  BarChart4,
  Building,
  Briefcase,
  ExternalLink
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  return (
    <main>
      <Hero
        title="Our Services"
        subtitle="Comprehensive solutions to help Canadian companies succeed in European markets"
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        height="lg:h-[70vh]"
      />

      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-trdwnd-navy mb-6">How We Help Canadian Businesses</h2>
          <p className="text-lg text-gray-600">
            TRDWND offers a comprehensive suite of services designed to help Canadian companies navigate the complexities of European markets and establish successful partnerships. Our tailored approach ensures that you receive the specific support needed for your unique business goals.
          </p>
        </div>
      </Section>

      <Section bg="light" id="market-analysis">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <Globe className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-3xl font-bold text-trdwnd-navy mb-4">EU Market Analysis</h2>
            <p className="text-gray-600 mb-6">
              Before entering any new market, it's essential to understand the landscape, competition, and regulatory environment. Our comprehensive market analysis services provide you with the insights needed to make informed decisions.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <Search className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Market Research",
                  description: "In-depth analysis of market size, growth potential, and competitive landscape"
                },
                {
                  icon: <BarChart4 className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Opportunity Assessment",
                  description: "Evaluation of market fit for your products or services"
                },
                {
                  icon: <Building className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Regulatory Analysis",
                  description: "Navigation of complex EU regulations and compliance requirements"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-2 rounded-md mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-trdwnd-navy">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="EU Market Analysis"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </Section>

      <Section id="distribution">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2065&q=80"
              alt="Distribution Deals"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <Handshake className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-3xl font-bold text-trdwnd-navy mb-4">Distribution Deals</h2>
            <p className="text-gray-600 mb-6">
              Getting your products into European retail networks requires the right distribution partners. We leverage our extensive network to connect you with established distributors who can effectively represent your brand.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <Briefcase className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Partner Identification",
                  description: "Selection of distributors who align with your brand values and market goals"
                },
                {
                  icon: <Handshake className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Negotiation Support",
                  description: "Expert assistance in securing favorable terms and conditions"
                },
                {
                  icon: <TrendingUp className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Relationship Management",
                  description: "Ongoing support to ensure productive and profitable partnerships"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-2 rounded-md mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-trdwnd-navy">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section bg="light" id="licensing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <TrendingUp className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-3xl font-bold text-trdwnd-navy mb-4">Tech Licensing</h2>
            <p className="text-gray-600 mb-6">
              For technology companies, licensing can be an effective way to monetize your innovations across European markets. We help navigate complex licensing agreements and identify the right partners for your technology.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <Search className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Licensee Identification",
                  description: "Finding reputable partners who can maximize the value of your technology"
                },
                {
                  icon: <TrendingUp className="h-5 w-5 text-trdwnd-navy" />,
                  title: "IP Protection",
                  description: "Ensuring your intellectual property is properly protected in all agreements"
                },
                {
                  icon: <Handshake className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Agreement Structuring",
                  description: "Creating licensing agreements that are mutually beneficial and sustainable"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-2 rounded-md mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-trdwnd-navy">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Tech Licensing"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </Section>

      <Section id="joint-ventures">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1528901166007-3784c7dd3653?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Joint Ventures"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <Users className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-3xl font-bold text-trdwnd-navy mb-4">Joint Ventures</h2>
            <p className="text-gray-600 mb-6">
              Strategic joint ventures can provide access to established market channels, local expertise, and shared resources. We facilitate partnerships that create synergies and drive growth for all parties involved.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <Search className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Partner Selection",
                  description: "Identifying European businesses with complementary capabilities and goals"
                },
                {
                  icon: <Handshake className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Venture Structuring",
                  description: "Designing joint venture agreements that protect your interests"
                },
                {
                  icon: <TrendingUp className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Growth Strategy",
                  description: "Developing roadmaps for successful expansion and market penetration"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-2 rounded-md mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-trdwnd-navy">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
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
              <Link to="/industries">Explore Industries</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ServicesPage;
