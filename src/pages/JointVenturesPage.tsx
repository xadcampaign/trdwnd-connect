
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Users, Search, Network, Rocket, Handshake, Shield, CheckCircle2, Building, LineChart } from "lucide-react";

const JointVenturesPage = () => {
  return (
    <main>
      <Hero
        title="Joint Ventures in Europe"
        subtitle="Strategic partnerships that create synergies and drive growth in European markets"
        image="/lovable-uploads/a7201968-6e87-4ad2-afe9-1217fb1720ce.png"
        height="lg:h-[60vh]"
      />

      <Section>
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-trdwnd-navy mb-6 text-center">The Power of Strategic Partnerships</h2>
          <p className="text-lg text-gray-600 mb-6">
            For Canadian companies, joint ventures provide a powerful pathway to access European markets, combining local expertise with your innovative products and services. Strategic joint ventures can provide access to established market channels, local expertise, and shared resources.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            TRDWND specializes in facilitating partnerships that create synergies and drive growth for all parties involved, leveraging the advantages offered by CETA to create successful collaborations between Canadian and European companies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <Users className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-2xl font-bold text-trdwnd-navy mb-4">Joint Venture Advantages</h2>
            <p className="text-gray-600 mb-6">
              Well-structured joint ventures combine the strengths of both partners, creating opportunities that neither could achieve alone. For Canadian companies entering European markets, these partnerships offer numerous strategic benefits.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Share risks and investment costs for market entry",
                "Gain immediate access to local market knowledge and networks",
                "Leverage complementary capabilities and resources",
                "Accelerate growth and market penetration",
                "Overcome regulatory and cultural barriers more effectively"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-trdwnd-gold flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Business partners shaking hands"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </Section>

      <Section bg="light">
        <h2 className="text-3xl font-bold text-center text-trdwnd-navy mb-12">Our Joint Venture Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Search className="h-12 w-12 text-trdwnd-navy" />,
              title: "Strategic Partnership Identification",
              description: "Identifying potential European partners with complementary capabilities, resources, and strategic objectives that align with your business goals."
            },
            {
              icon: <Network className="h-12 w-12 text-trdwnd-navy" />,
              title: "Key Industry Introductions",
              description: "Facilitating access to co-venturing opportunities and providing ecosystem visibility through our extensive European network."
            },
            {
              icon: <Rocket className="h-12 w-12 text-trdwnd-navy" />,
              title: "JV Structure & Negotiation",
              description: "Expert guidance on joint venture structuring, governance, and negotiation to create balanced, sustainable partnerships."
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-trdwnd-lightblue p-4 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-trdwnd-navy mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Business strategy planning"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <Building className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-2xl font-bold text-trdwnd-navy mb-4">Joint Venture Models</h2>
            <p className="text-gray-600 mb-6">
              TRDWND helps you evaluate and implement the most appropriate joint venture structure for your specific business objectives and European market strategy.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Equity Joint Ventures",
                  description: "Formation of a new legal entity with shared ownership and management between Canadian and European partners"
                },
                {
                  title: "Contractual Joint Ventures",
                  description: "Collaborative agreements without creating a separate legal entity, focused on specific projects or objectives"
                },
                {
                  title: "R&D Collaborations",
                  description: "Partnerships focused on joint research and development of new technologies or products for European markets"
                },
                {
                  title: "Manufacturing & Distribution JVs",
                  description: "Partnerships combining production capabilities with established distribution networks across Europe"
                },
                {
                  title: "Strategic Marketing Alliances",
                  description: "Collaborations focused on joint marketing and sales efforts in European markets"
                }
              ].map((item, index) => (
                <div key={index} className="bg-trdwnd-lightblue/30 p-4 rounded-lg">
                  <h3 className="font-semibold text-trdwnd-navy mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section bg="light">
        <h2 className="text-3xl font-bold text-center text-trdwnd-navy mb-12">The TRDWND Joint Venture Process</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="h-2 bg-trdwnd-navy absolute top-1/2 left-0 right-0 transform -translate-y-1/2"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
            {[
              {
                number: "01",
                title: "Strategic Assessment",
                description: "Evaluating your objectives, resources, and European market opportunities to determine joint venture viability"
              },
              {
                number: "02",
                title: "Partner Search & Selection",
                description: "Identifying and vetting potential European partners that align with your strategic objectives"
              },
              {
                number: "03",
                title: "Negotiation & Structuring",
                description: "Facilitating negotiations and developing balanced joint venture structures and agreements"
              },
              {
                number: "04",
                title: "Implementation & Management",
                description: "Supporting joint venture launch and providing ongoing management guidance"
              }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center relative mt-8 mb-8">
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-trdwnd-gold text-trdwnd-navy w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-trdwnd-navy mb-3 mt-6">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-center text-trdwnd-navy mb-12">Critical Success Factors for EU-Canada Joint Ventures</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: <Handshake className="h-10 w-10 text-trdwnd-gold" />,
              title: "Clear & Aligned Objectives",
              points: [
                "Establish shared vision and compatible goals",
                "Define specific, measurable success criteria",
                "Ensure strategic alignment between partners",
                "Create realistic timeline and expectations"
              ]
            },
            {
              icon: <Shield className="h-10 w-10 text-trdwnd-gold" />,
              title: "Balanced Governance Structure",
              points: [
                "Develop equitable decision-making processes",
                "Create clear roles and responsibilities",
                "Establish effective communication channels",
                "Design appropriate dispute resolution mechanisms"
              ]
            },
            {
              icon: <LineChart className="h-10 w-10 text-trdwnd-gold" />,
              title: "Resource Commitment",
              points: [
                "Ensure adequate financial investment",
                "Commit appropriate personnel and expertise",
                "Provide necessary technology and knowledge transfer",
                "Maintain sustained management attention"
              ]
            },
            {
              icon: <Users className="h-10 w-10 text-trdwnd-gold" />,
              title: "Cultural Integration",
              points: [
                "Bridge Canadian-European cultural differences",
                "Build trust and relationships between teams",
                "Develop cultural awareness and sensitivity",
                "Create integrated organizational culture"
              ]
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-trdwnd-navy p-3 rounded-full mr-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-trdwnd-navy">{item.title}</h3>
              </div>
              <ul className="space-y-2">
                {item.points.map((point, pointIndex) => (
                  <li key={pointIndex} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-trdwnd-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="dark" className="py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Explore Joint Venture Opportunities in Europe?</h2>
          <p className="text-gray-300 text-xl mb-8">
            Contact TRDWND today to discuss how our joint venture expertise can help you form strategic partnerships in European markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium">
              <Link to="/contact">Discuss Joint Ventures</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default JointVenturesPage;
