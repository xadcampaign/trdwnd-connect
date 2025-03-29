
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { LineChart, BarChart4, Globe, Search, Building, MapPin, CheckCircle2 } from "lucide-react";

const EUMarketAnalysisPage = () => {
  return (
    <main>
      <Hero
        title="EU Market Analysis"
        subtitle="Leveraging intelligent insights for better business decisions in European markets"
        image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        height="lg:h-[60vh]"
      />

      <Section>
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-trdwnd-navy mb-6 text-center">Our EuroCanadensis Market Research Solution</h2>
          <p className="text-lg text-gray-600 mb-6">
            With the EU's 440+ million consumers and the advantages offered by CETA, European markets represent an enormous opportunity for Canadian businesses. Our comprehensive market analysis services are designed to help you navigate these diverse markets with confidence.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            TRDWND's market research is customized to meet your unique market and competitive intelligence needs. We provide actionable insights that drive growth, streamline risk management, and improve operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <LineChart className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-2xl font-bold text-trdwnd-navy mb-4">End-to-End Intelligence Platform</h2>
            <p className="text-gray-600 mb-6">
              Our EU market analysis goes beyond simple data collection. We provide a comprehensive intelligence platform that combines market data, competitive analysis, regulatory insights, and strategic recommendations.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Identify high-potential market segments",
                "Understand consumer behavior and preferences across different EU countries",
                "Evaluate market entry barriers and opportunities",
                "Track competitor movements and market shares",
                "Monitor regulatory changes and compliance requirements"
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
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Data analytics dashboard"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </Section>

      <Section bg="light">
        <h2 className="text-3xl font-bold text-center text-trdwnd-navy mb-12">Our Market Analysis Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {[
            {
              icon: <Search className="h-12 w-12 text-trdwnd-navy" />,
              title: "Research & Data Collection",
              description: "Comprehensive gathering of market data, competitor intelligence, and consumer insights across European markets."
            },
            {
              icon: <BarChart4 className="h-12 w-12 text-trdwnd-navy" />,
              title: "Analysis & Interpretation",
              description: "In-depth analysis of collected data to identify trends, opportunities, and potential challenges in your target markets."
            },
            {
              icon: <MapPin className="h-12 w-12 text-trdwnd-navy" />,
              title: "Strategic Recommendations",
              description: "Actionable insights and tailored strategies to effectively penetrate and grow in European markets."
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
              src="https://images.unsplash.com/photo-1634237804844-910ae636691a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
              alt="EU market analysis meeting"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <Building className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-2xl font-bold text-trdwnd-navy mb-4">Competitive Landscape Analysis</h2>
            <p className="text-gray-600 mb-6">
              Understanding your competition is crucial for successful market entry. We provide comprehensive analysis of your European competitors, their market positioning, and strategies.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Competitor Profiling",
                  description: "Detailed profiles of key players in your industry across target EU markets"
                },
                {
                  title: "Market Share Analysis",
                  description: "Assessment of market share distribution and competitive dynamics"
                },
                {
                  title: "SWOT Analysis",
                  description: "Evaluation of strengths, weaknesses, opportunities, and threats in relation to competitors"
                },
                {
                  title: "Strategic Positioning",
                  description: "Recommendations for positioning your products/services for maximum competitive advantage"
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
        <h2 className="text-3xl font-bold text-center text-trdwnd-navy mb-12">Key Market Analysis Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              title: "Reduced Market Entry Risk",
              description: "Minimize uncertainty with data-driven decisions and market insights"
            },
            {
              title: "Faster Time to Market",
              description: "Accelerate your European market entry with strategic planning and targeted approaches"
            },
            {
              title: "Optimized Resource Allocation",
              description: "Focus your resources on the most promising market segments and opportunities"
            },
            {
              title: "Competitive Advantage",
              description: "Gain a strategic edge with better market understanding and positioning"
            }
          ].map((benefit, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-t-trdwnd-navy">
              <h3 className="text-xl font-bold text-trdwnd-navy mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="dark" className="py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Explore European Markets?</h2>
          <p className="text-gray-300 text-xl mb-8">
            Contact our team today to discuss how our EU market analysis services can help you identify and capture opportunities in European markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium">
              <Link to="/contact">Request Market Analysis</Link>
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

export default EUMarketAnalysisPage;
