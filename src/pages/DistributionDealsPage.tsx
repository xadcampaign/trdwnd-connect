
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Handshake, Network, MapPin, Building, Key, Shield, CheckCircle2 } from "lucide-react";

const DistributionDealsPage = () => {
  return (
    <main>
      <Hero
        title="Distribution Deals in Europe"
        subtitle="Getting your products into European markets through strategic distribution partnerships"
        image="/lovable-uploads/4a4d0292-880e-4a42-80aa-4b66a781fdc0.png"
        height="lg:h-[60vh]"
      />

      <Section>
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-trdwnd-navy mb-6 text-center">Distribution Strategy for European Success</h2>
          <p className="text-lg text-gray-600 mb-6">
            Access to the right distribution channels is critical for Canadian companies entering European markets. TRDWND specializes in helping you develop an effective EU export marketing strategy and navigate the complexities of European distribution.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            With CETA reducing tariffs and simplifying regulatory processes, Canadian products have unprecedented access to European consumers - but only with the right distribution partners and strategy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <Handshake className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-2xl font-bold text-trdwnd-navy mb-4">Personal Approach to Distribution Partnerships</h2>
            <p className="text-gray-600 mb-6">
              We take a relationship-focused approach to building connections with key European distributors. Our extensive network and deep understanding of European business cultures allow us to identify and engage the most suitable partners for your specific needs.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Access to pre-vetted distribution partners across EU markets",
                "Personal introductions to decision-makers in your target sectors",
                "Cultural and business practice guidance for successful negotiations",
                "Ongoing relationship management support",
                "Strategic advice on partnership development and growth"
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
              src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
              alt="Business meeting with European distributors"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </Section>

      <Section bg="light">
        <h2 className="text-3xl font-bold text-center text-trdwnd-navy mb-12">Distribution Strategy Development</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <MapPin className="h-12 w-12 text-trdwnd-navy" />,
              title: "Market Access Strategies",
              description: "Evaluate agent vs. distributor models, direct sales vs. channel partnerships, and other approaches to determine the optimal market entry strategy."
            },
            {
              icon: <Network className="h-12 w-12 text-trdwnd-navy" />,
              title: "Distribution Channel Mapping",
              description: "Comprehensive mapping of potential distribution channels and partners across your target European markets."
            },
            {
              icon: <Key className="h-12 w-12 text-trdwnd-navy" />,
              title: "Contract Negotiation Support",
              description: "Expert guidance on understanding and negotiating European distribution agreements, including exclusivity, territory rights, and performance metrics."
            }
          ].map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-trdwnd-lightblue p-4 rounded-full">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-trdwnd-navy mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1559642229-0d3c39918853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Supply chain and logistics in Europe"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <Building className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-2xl font-bold text-trdwnd-navy mb-4">Partner Identification & Selection</h2>
            <p className="text-gray-600 mb-6">
              Finding the right distribution partners is critical to your European market success. We help you identify, evaluate, and select partners that align with your business objectives and values.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Distribution Partner Screening",
                  description: "Rigorous vetting of potential partners based on market reach, industry expertise, and financial stability"
                },
                {
                  title: "Capability Assessment",
                  description: "Evaluation of partners' logistics, marketing, sales, and after-sales service capabilities"
                },
                {
                  title: "Cultural & Strategic Fit",
                  description: "Assessment of cultural alignment and strategic compatibility with your business"
                },
                {
                  title: "Due Diligence Support",
                  description: "Comprehensive background checks and performance verification"
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
        <h2 className="text-3xl font-bold text-center text-trdwnd-navy mb-12">Distribution Partnership Advantages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              title: "Local Market Knowledge",
              description: "Leverage your partner's understanding of local customer preferences and business practices"
            },
            {
              title: "Established Networks",
              description: "Access existing customer relationships and sales channels"
            },
            {
              title: "Reduced Market Entry Costs",
              description: "Minimize investment in local infrastructure and personnel"
            },
            {
              title: "Accelerated Market Penetration",
              description: "Achieve faster market entry and revenue generation"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-t-trdwnd-navy">
              <h3 className="text-xl font-bold text-trdwnd-navy mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-center text-trdwnd-navy mb-12">The TRDWND Distribution Deal Process</h2>
        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-trdwnd-navy"></div>
          {[
            {
              title: "Initial Consultation & Strategy",
              description: "Understand your products, target markets, and business objectives to develop a tailored distribution strategy"
            },
            {
              title: "Partner Identification & Shortlisting",
              description: "Research and identify potential distribution partners that match your requirements"
            },
            {
              title: "Partner Evaluation & Selection",
              description: "Conduct due diligence and facilitate meetings with potential partners"
            },
            {
              title: "Negotiation Support",
              description: "Assist with contract negotiations, ensuring favorable terms and conditions"
            },
            {
              title: "Implementation & Relationship Management",
              description: "Support the launch of distribution partnerships and provide ongoing relationship management"
            }
          ].map((step, index) => (
            <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'pr-8 text-right ml-auto pl-8' : 'pl-8 mr-auto pr-8'}`} style={{ width: "calc(50% - 1px)" }}>
              <div className={`absolute top-3 ${index % 2 === 0 ? 'left-0' : 'right-0'} w-6 h-6 rounded-full bg-trdwnd-gold border-4 border-trdwnd-navy`} style={{ [index % 2 === 0 ? 'left' : 'right']: "-12px" }}></div>
              <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'rounded-tr-none' : 'rounded-tl-none'}`}>
                <h3 className="text-xl font-bold text-trdwnd-navy mb-2">Step {index + 1}: {step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="dark" className="py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Connect with European Distributors?</h2>
          <p className="text-gray-300 text-xl mb-8">
            Let TRDWND help you establish profitable distribution partnerships throughout the European Union.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium">
              <Link to="/contact">Discuss Distribution Options</Link>
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

export default DistributionDealsPage;
