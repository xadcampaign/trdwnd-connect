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
  Shield,
  Cpu,
  Plane,
  LineChart,
  FileCode,
  Laptop,
  Network,
  Key,
  CheckCircle2,
  Rocket,
  MapPin
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ServicesPage = () => {
  return (
    <main>
      <Hero
        title="Expanding Canadian Export Markets"
        subtitle="Through Elite EU Partnerships and CETA Advantages"
        image="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        height="lg:h-[70vh]"
      />

      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-trdwnd-navy mb-6">Accelerating Canadian Business in Europe</h2>
          <p className="text-lg text-gray-600 mb-4">
            With U.S. tariffs on Canadian goods reaching 25%, the urgency for Canadian businesses to diversify their export markets has never been greater. TRDWND LLC is the premier connector for Canadian companies seeking high-quality partnerships in the European Union.
          </p>
          <p className="text-lg text-gray-600">
            Leveraging the Canada-EU Comprehensive Economic and Trade Agreement (CETA), we help businesses access a market of over 440 million EU consumers with reduced tariffs, streamlined regulations, and faster market entry. Our deep network of trusted European manufacturers, distributors, and investors ensures Canadian companies establish profitable, long-term relationships across diverse industries.
          </p>
        </div>
      </Section>

      <Section bg="light" id="business-approach">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
          <div>
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <Briefcase className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-3xl font-bold text-trdwnd-navy mb-4">Our Business Approach</h2>
            <p className="text-gray-600 mb-6">
              TRDWND works with business owners, principals, and boards to deliver measurable results with proven capabilities in deal leadership, negotiation, and market intelligence.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <Handshake className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Proven Deal Leadership",
                  description: "Expertise in structuring and executing successful international partnerships"
                },
                {
                  icon: <Users className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Joint Venture Negotiation",
                  description: "Skilled negotiation of complex joint venture agreements"
                },
                {
                  icon: <FileCode className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Tech Licensing Experience",
                  description: "Specialized knowledge in technology transfer and licensing arrangements"
                },
                {
                  icon: <Search className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Intelligence Gathering",
                  description: "Relentless market research and competitive intelligence capabilities"
                },
                {
                  icon: <CheckCircle2 className="h-5 w-5 text-trdwnd-navy" />,
                  title: "End-to-End Engagement",
                  description: "Comprehensive support from initial planning to deal completion"
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
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Business meeting with executives"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </Section>

      <Section id="industries">
        <h2 className="text-3xl font-bold text-center text-trdwnd-navy mb-12">Industries We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-t-4 border-t-trdwnd-navy shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-2">
                <Cpu className="h-8 w-8 text-trdwnd-navy" />
              </div>
              <CardTitle className="text-2xl">High-Tech & AI</CardTitle>
              <CardDescription>Cutting-edge technology solutions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Helping Canadian firms tap into Europe's demand for Industry 4.0, cybersecurity, AI, Digital Transformation, and GreenTech solutions - in various vertical industries. Our expertise helps technology companies navigate complex EU regulations and find the perfect partners.
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">AI Solutions</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Cybersecurity</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">GreenTech</span>
              </div>
            </CardFooter>
          </Card>

          <Card className="border-t-4 border-t-trdwnd-navy shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-2">
                <Plane className="h-8 w-8 text-trdwnd-navy" />
              </div>
              <CardTitle className="text-2xl">Aerospace & Defense</CardTitle>
              <CardDescription>Strategic defense partnerships</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Mitigate supply chain issues and form strategic alliances in Europe's growing defense sector. Participate in Dual Use Growth Programs where EU defense industry can be a catalyst for scaling your technology faster and validating it for the commercial market.
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Dual-Use Tech</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Defense</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Aerospace</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </Section>

      <Section bg="light" id="market-analysis">
        <h2 className="text-3xl font-bold text-center text-trdwnd-navy mb-12">Our Expertise</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <Globe className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-3xl font-bold text-trdwnd-navy mb-4">EU Market Analysis</h2>
            <p className="text-gray-600 mb-6">
              Leveraging intelligent insights for better business decisions. Our EuroCanadensis market research solution is customized to meet your unique market and competitive intelligence needs.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <LineChart className="h-5 w-5 text-trdwnd-navy" />,
                  title: "End-to-End Intelligence Platform",
                  description: "Drive growth, streamline risk management, and improve efficiency"
                },
                {
                  icon: <BarChart4 className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Customized Research",
                  description: "Tailored market analysis for your specific industry and needs"
                },
                {
                  icon: <Building className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Competitive Landscape",
                  description: "In-depth analysis of European competitors and market positioning"
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
              src="/lovable-uploads/4a4d0292-880e-4a42-80aa-4b66a781fdc0.png"
              alt="Distribution Deals in Europe"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <Handshake className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-3xl font-bold text-trdwnd-navy mb-4">Distribution Deals in Europe</h2>
            <p className="text-gray-600 mb-6">
              Getting your products into European markets requires the right distribution strategy and partners. We help you develop an EU export marketing strategy and navigate the complexities of European distribution.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <MapPin className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Market Access Strategies",
                  description: "Evaluate agent vs. distributor models for optimal market entry"
                },
                {
                  icon: <Network className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Personal Approach",
                  description: "Build connections with key European distributors"
                },
                {
                  icon: <Briefcase className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Distribution Channels",
                  description: "Identify and secure the most effective routes to market"
                },
                {
                  icon: <Key className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Contract Negotiation",
                  description: "Expert guidance on understanding and negotiating European contracts"
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
              EU licensing can reduce development costs, increase speed, and reduce legal risks via Enhanced Freedom to Operate (FTO). For technology companies, licensing can be an effective way to monetize your innovations across European markets.
            </p>
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-trdwnd-navy mb-2">4 Tech Licensing Business Models:</h3>
              {[
                {
                  icon: <Laptop className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Access to Technology",
                  description: "From a development partner"
                },
                {
                  icon: <Shield className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Freedom to Operate",
                  description: "From a potential competitor"
                },
                {
                  icon: <TrendingUp className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Vertical Commercial Partner",
                  description: "Licensing vs. production models"
                },
                {
                  icon: <Handshake className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Horizontal Commercial Partner",
                  description: "Complementary licensing arrangements"
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
              src="/lovable-uploads/a7201968-6e87-4ad2-afe9-1217fb1720ce.png"
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
                  title: "Strategic Partnership Identification",
                  description: "Accelerate growth and enhance market entry through carefully selected partners"
                },
                {
                  icon: <Network className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Key Industry Introductions",
                  description: "Access to co-venturing opportunities and ecosystem visibility"
                },
                {
                  icon: <Rocket className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Accelerated Growth",
                  description: "Leverage European partnerships to scale faster with lower risk"
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

      <Section bg="light" id="business-case">
        <h2 className="text-3xl font-bold text-center text-trdwnd-navy mb-12">Business Case & Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-trdwnd-navy mb-4">Business Case Drivers</h3>
            <ul className="space-y-4">
              {[
                {
                  icon: <Briefcase className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Timeline: 6-9 Months",
                  description: "Efficient process from initial engagement to deal completion"
                },
                {
                  icon: <Plane className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Engagement and Travel",
                  description: "Canadian company project manager expected 1 monthly EU meet in situ from Month 3 onwards"
                },
                {
                  icon: <Users className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Briefings and Industry Events",
                  description: "1-on-1 meetings including EU business etiquette; reciprocal B2B Meetings in Canada"
                },
                {
                  icon: <Handshake className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Hands-on Approach",
                  description: "Straightforward and accessible support throughout the process"
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1">{item.icon}</div>
                  <div>
                    <span className="font-medium text-trdwnd-navy">{item.title}</span>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-trdwnd-navy mb-4">The TRDWND Process</h3>
            <ul className="space-y-4">
              {[
                {
                  icon: <Users className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Create a Bespoke Team",
                  description: "Tailored team for revenue growth, JV, IP licensing, and M&A deals"
                },
                {
                  icon: <LineChart className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Outline Deal Flow Process",
                  description: "Clear roadmap from initial engagement to successful partnerships"
                },
                {
                  icon: <Search className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Shortlist European Partners",
                  description: "Identify the most suitable partners for your specific business needs"
                },
                {
                  icon: <Handshake className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Facilitate Negotiations",
                  description: "Expert support through due diligence and deal structuring"
                },
                {
                  icon: <Shield className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Define Threats and Countermeasures",
                  description: "Proactive risk management to protect your interests"
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1">{item.icon}</div>
                  <div>
                    <span className="font-medium text-trdwnd-navy">{item.title}</span>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section bg="dark" className="py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Why Choose TRDWND?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
            {[
              {
                icon: <Globe className="h-6 w-6 text-trdwnd-gold" />,
                title: "Exclusive EU Network",
                description: "Decades of experience and top-tier partnerships in key European industries"
              },
              {
                icon: <Briefcase className="h-6 w-6 text-trdwnd-gold" />,
                title: "Trade & Market Entry Support",
                description: "Expert guidance on regulatory compliance, logistics and market intelligence"
              },
              {
                icon: <Shield className="h-6 w-6 text-trdwnd-gold" />,
                title: "Risk Mitigation",
                description: "Secure and vetted connections to prevent costly mistakes"
              },
              {
                icon: <Handshake className="h-6 w-6 text-trdwnd-gold" />,
                title: "Custom Matchmaking",
                description: "Tailored introductions to European buyers, suppliers, and investors"
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start bg-white/10 backdrop-blur-sm rounded-lg p-5">
                <div className="mr-4 mt-1">{item.icon}</div>
                <div>
                  <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium">
              <Link to="/contact">Start Your EU Journey</Link>
            </Button>
            <div className="flex flex-col items-center">
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                textStyle="bold" 
                className="border-white text-white hover:bg-white/10 shadow-md text-lg"
              >
                <Link to="/industries">Explore Industries</Link>
              </Button>
              <span className="text-white text-sm mt-1">Discover specialized sectors we serve</span>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ServicesPage;
