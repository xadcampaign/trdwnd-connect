import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { 
  ChevronRight, 
  Cpu, 
  Plane, 
  Globe, 
  LineChart, 
  Building, 
  Briefcase, 
  Shield, 
  Network, 
  Rocket, 
  TrendingUp, 
  Users, 
  FileCode, 
  Search,
  BarChart4
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IndustriesPage = () => {
  return (
    <main>
      <Hero
        title="Industries We Serve"
        subtitle="Strategic partnerships for Canadian businesses expanding to European markets"
        image="https://images.unsplash.com/photo-1487611459768-bd414656ea10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        height="lg:h-[70vh]"
      />

      <Section>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-trdwnd-navy mb-6">EuroGrowth works with business owners, principals, and boards</h2>
          <p className="text-xl text-gray-600 mb-8">
            Delivering measurable results with proven capabilities in deal leadership, negotiation, and market intelligence.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <ul className="space-y-4">
                {[
                  "Proven deal leadership capability",
                  "Proven Joint Venture negotiation capability",
                  "Proven tech licensing experience",
                  "Deeply experienced across major verticals",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-trdwnd-gold mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <ul className="space-y-4">
                {[
                  "Relentless Intelligence Gathering ability",
                  "Can mobilize key Stakeholders",
                  "Engaged from start to finish",
                  "Deliver Measurable results",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-trdwnd-gold mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="light" id="eu-accelerator">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-trdwnd-navy mb-8 text-center">EuroGrowth - The EU Business Accelerator for Canada</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-trdwnd-navy mb-4">Our Process</h3>
                <ul className="space-y-3">
                  {[
                    "Create a Bespoke Team to do revenue growth, JV, IP licensing, and M&A deals",
                    "Outline Deal Flow process",
                    "Shortlist potential European Partners",
                    "Facilitate Negotiations - Due Diligence",
                    "Real-Time Advice from Trusted Executives, Investors for Market Analysis and Strategy Development",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-trdwnd-lightblue p-1 rounded-full mr-3 mt-1">
                        <ChevronRight className="h-4 w-4 text-trdwnd-navy" />
                      </div>
                      <span className="text-gray-700 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-trdwnd-navy mb-4">Strategic Advantages</h3>
                <ul className="space-y-3">
                  {[
                    "Identify Relevant Disruptive Technologies",
                    "Define Threats and Countermeasures",
                    "Gain C-level Access to Startups/Scaleups and Financial Partners",
                    "Aligned with Business Owners, Principals, and Boards",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-trdwnd-lightblue p-1 rounded-full mr-3 mt-1">
                        <ChevronRight className="h-4 w-4 text-trdwnd-navy" />
                      </div>
                      <span className="text-gray-700 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="main-industries">
        <h2 className="text-3xl font-bold text-trdwnd-navy mb-12 text-center">Core Industries We Serve</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform hover:translate-y-[-5px]">
            <div className="p-1 bg-gradient-to-r from-trdwnd-navy to-blue-500"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-trdwnd-lightblue p-3 rounded-lg mr-4">
                  <Cpu className="h-8 w-8 text-trdwnd-navy" />
                </div>
                <h3 className="text-2xl font-bold text-trdwnd-navy">High-Tech & AI</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Helping Canadian firms tap into Europe's demand for Industry 4.0, cybersecurity, AI, Digital Transformation, and GreenTech solutions - in various vertical industries.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-trdwnd-navy mb-2">Key Services:</h4>
                <ul className="space-y-2 ml-2">
                  {[
                    "AI solution implementation and integration",
                    "Cybersecurity technology partnerships",
                    "Digital transformation consulting",
                    "GreenTech innovation partnerships",
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-trdwnd-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">AI Solutions</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Cybersecurity</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Industry 4.0</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform hover:translate-y-[-5px]">
            <div className="p-1 bg-gradient-to-r from-trdwnd-navy to-blue-500"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-trdwnd-lightblue p-3 rounded-lg mr-4">
                  <Plane className="h-8 w-8 text-trdwnd-navy" />
                </div>
                <h3 className="text-2xl font-bold text-trdwnd-navy">Aerospace & Defense</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Mitigate supply chain issues and form strategic alliances in Europe's growing defense sector. Participate in Dual Use Growth Programs where EU defense industry can be a catalyst for scaling your technology.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-trdwnd-navy mb-2">Key Services:</h4>
                <ul className="space-y-2 ml-2">
                  {[
                    "Strategic alliance formation with defense contractors",
                    "Supply chain optimization and integration",
                    "Defense technology dual-use applications",
                    "Regulatory compliance navigation",
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-trdwnd-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Defense Tech</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Aerospace</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Dual-Use</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="dual-use">
        <h2 className="text-3xl font-bold text-trdwnd-navy mb-8 text-center">Dual Use Growth: Top of Mind in Europe</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-trdwnd-navy mb-6">Participate in Dual Use Growth Programs in Europe</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                  <Rocket className="h-5 w-5 text-trdwnd-navy" />
                </div>
                <p className="text-gray-700">
                  EU Defense industry can be a catalyst for scaling your technology faster and validating it for the commercial market.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                  <TrendingUp className="h-5 w-5 text-trdwnd-navy" />
                </div>
                <p className="text-gray-700">
                  Recognize the opportunity as a strategic choice, not a categorical one.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                  <Shield className="h-5 w-5 text-trdwnd-navy" />
                </div>
                <p className="text-gray-700">
                  Leverage defense sector validation to fast-track commercial applications.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <img 
              src="/lovable-uploads/d2c017e4-584b-4175-b890-769544daff6a.png" 
              alt="Defense and aerospace technology drone" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Section>

      <Section id="our-expertise">
        <h2 className="text-3xl font-bold text-trdwnd-navy mb-12 text-center">Our Areas of Expertise</h2>
        
        <div className="space-y-16">
          {/* Market Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
                <Globe className="h-8 w-8 text-trdwnd-gold" />
              </div>
              <h3 className="text-2xl font-bold text-trdwnd-navy mb-4">EU Market Analysis</h3>
              <p className="text-gray-700 mb-6">
                Leveraging intelligent insights for better business decisions. Our EuroCanadensis market research solution is customized to meet your unique market and competitive intelligence needs.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <LineChart className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <p className="text-gray-700">
                    Discover how our end-to-end intelligence platform will drive growth, streamline risk management, and improve efficiency.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <Search className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <p className="text-gray-700">
                    Customized market research to meet your specific intelligence needs.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Data analysis and market research" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Distribution Deals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Canada-EU business partnership" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
                <Building className="h-8 w-8 text-trdwnd-gold" />
              </div>
              <h3 className="text-2xl font-bold text-trdwnd-navy mb-4">Distribution Deals in Europe</h3>
              <p className="text-gray-700 mb-6">
                From developing your EU export marketing strategy to establishing distribution channels across Europe, we provide comprehensive support.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Develop an EU Export Marketing Strategy",
                  "Enter the EU Market: Market Access - Entry Strategies - Agent or Distributor?",
                  "Personal Approach to build Connections",
                  "Transporting your Products",
                  "Distribution Channels",
                  "Understanding Contracts",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-trdwnd-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Licensing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
                <FileCode className="h-8 w-8 text-trdwnd-gold" />
              </div>
              <h3 className="text-2xl font-bold text-trdwnd-navy mb-4">Tech Licensing</h3>
              <p className="text-gray-700 mb-6">
                EU licensing can reduce development costs, increase speed, and reduce legal risks via Enhanced Freedom to Operate (FTO).
              </p>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Licensing for commercialization can help companies generate revenue in areas where direct participation on the market for the product or service concerned is a challenge.
                </p>
                
                <h4 className="font-semibold text-trdwnd-navy mb-3">4 Tech Licensing Business Models:</h4>
                <ul className="space-y-3">
                  {[
                    "Access to technology from a development partner",
                    "Freedom to operate from a potential competitor",
                    "Vertical Commercial Partner: licensing vs. production",
                    "Horizontal Commercial partner: complementary licensing",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-trdwnd-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/59509fef-cf6c-4679-9dea-230290168db0.png" 
                alt="Technology and innovation" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Joint Ventures */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Business partnership meeting" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
                <Users className="h-8 w-8 text-trdwnd-gold" />
              </div>
              <h3 className="text-2xl font-bold text-trdwnd-navy mb-4">Joint Ventures</h3>
              <p className="text-gray-700 mb-6">
                Identify and establish strategic partnerships to accelerate growth and enhance market entry.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <Network className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <p className="text-gray-700">
                    Introductions to key industry players, co-venturing, providing market intelligence on potential partners to build visibility in the proper ecosystem.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <Briefcase className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <p className="text-gray-700">
                    Expert guidance through due diligence and deal structuring with European partners.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <Shield className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <p className="text-gray-700">
                    Proactive risk management with integrated threat assessment and countermeasures.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="light" id="business-case">
        <h2 className="text-3xl font-bold text-trdwnd-navy mb-8 text-center">Business Case Development</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="bg-trdwnd-navy inline-flex p-2 rounded-lg mb-4">
              <Cpu className="h-6 w-6 text-trdwnd-gold" />
            </div>
            <h3 className="text-xl font-bold text-trdwnd-navy mb-3">Artificial Intelligence (AI)</h3>
            <p className="text-gray-600 text-sm mb-4">
              For organizations looking to leverage advanced technologies to drive innovation, efficiency, and competitive advantage.
            </p>
            <h4 className="font-semibold text-trdwnd-navy mb-2 text-sm">Key Components:</h4>
            <ul className="space-y-1 text-sm">
              {[
                "Problem Statement",
                "Proposed AI Solution",
                "Benefits Analysis",
                "Cost and Investment",
                "Risk Assessment",
                "Implementation Plan",
                "ROI and Performance Metrics",
                "Regulatory and Ethical Considerations",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <ChevronRight className="h-4 w-4 text-trdwnd-gold mr-1 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="bg-trdwnd-navy inline-flex p-2 rounded-lg mb-4">
              <BarChart4 className="h-6 w-6 text-trdwnd-gold" />
            </div>
            <h3 className="text-xl font-bold text-trdwnd-navy mb-3">Equity Investment</h3>
            <p className="text-gray-600 text-sm mb-4">
              Outlines why a company and its investors should (and will) invest in a venture.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "The opportunity and return on investment for the investor or financier",
                "How the business or joint venture scales up and achieves projected growth",
                "Details where the funding will be applied in the business",
                "Explains the return on investment (ROI) from the investment",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <ChevronRight className="h-4 w-4 text-trdwnd-gold mr-1 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="bg-trdwnd-navy inline-flex p-2 rounded-lg mb-4">
              <Globe className="h-6 w-6 text-trdwnd-gold" />
            </div>
            <h3 className="text-xl font-bold text-trdwnd-navy mb-3">Expansion into New Markets</h3>
            <p className="text-gray-600 text-sm mb-4">
              Strategic move to diversify revenue streams and drive business growth.
            </p>
            <h4 className="font-semibold text-trdwnd-navy mb-2 text-sm">Key Elements:</h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-sm">
              {[
                "Market research and analysis",
                "Entry strategy",
                "Financial projections",
                "Regulatory considerations",
                "Competitive landscape", 
                "Risk assessment",
                "Marketing strategies",
                "ROI analysis",
                "Implementation plan",
                "Monitoring and evaluation",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <ChevronRight className="h-4 w-4 text-trdwnd-gold mr-1 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-trdwnd-navy mb-6 text-center">How Do We Justify the Business Case?</h3>
          <p className="text-gray-700 mb-6 text-center">
            We jointly work together from Day 1 with the customer to deliver comprehensive value analysis and ROI calculations.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <LineChart className="h-6 w-6 text-trdwnd-navy" />,
                title: "Quantify Value",
                description: "Calculate the value of an investment"
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-trdwnd-navy" />,
                title: "Determine Project Value",
                description: "Assess the strategic value of the project"
              },
              {
                icon: <BarChart4 className="h-6 w-6 text-trdwnd-navy" />,
                title: "Cost Analysis",
                description: "Help calculate the cost of the project"
              },
              {
                icon: <Briefcase className="h-6 w-6 text-trdwnd-navy" />,
                title: "ROI Calculations",
                description: "Help calculate the return on investment"
              },
              {
                icon: <Building className="h-6 w-6 text-trdwnd-navy" />,
                title: "Financial Modeling",
                description: "Build the financial analysis and modeling"
              },
              {
                icon: <Shield className="h-6 w-6 text-trdwnd-navy" />,
                title: "Risk Mitigation",
                description: "Identify and address potential risks"
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-trdwnd-lightblue rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <div className="bg-white p-2 rounded-md mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-trdwnd-navy">{item.title}</h4>
                </div>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="business-drivers">
        <h2 className="text-3xl font-bold text-trdwnd-navy mb-8 text-center">Business Case Drivers</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="p-1 bg-gradient-to-r from-trdwnd-navy to-blue-400"></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-trdwnd-navy mb-6">Strategic Drivers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <TrendingUp className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <p className="text-gray-700">
                    Key inputs and activities that drive the business case's strategic, operational, and financial outcomes.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <LineChart className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <p className="text-gray-700">
                    Significant impact on financial outcomes & benefits.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <BarChart4 className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <p className="text-gray-700">
                    Before building a financial model, model the business drivers to evaluate the relative strengths and weaknesses to make the best choices.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="p-1 bg-gradient-to-r from-trdwnd-navy to-blue-400"></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-trdwnd-navy mb-6">Operational Approach</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <Clock className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-trdwnd-navy">Timeline: 6-9 Months</p>
                    <p className="text-gray-600 text-sm">Efficient process from engagement to completion</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <Plane className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-trdwnd-navy">Engagement and Travel</p>
                    <p className="text-gray-600 text-sm">Canadian company project manager expected 1 monthly EU meet in situ from Month 3 onwards</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <Users className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-trdwnd-navy">Briefings and Industry Events</p>
                    <p className="text-gray-600 text-sm">1-on-1 meetings including EU business etiquette; reciprocal B2B Meetings in Canada</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <Briefcase className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-trdwnd-navy">Hands-on Approach</p>
                    <p className="text-gray-600 text-sm">We are hands-on, straightforward, and on hand throughout the process</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="dark" className="py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Why Choose EUROGROWTH?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: <Globe className="h-6 w-6 text-trdwnd-gold" />,
                title: "Extensive EU Network",
                description: "Decades of experience and top-tier partnerships in key European industries"
              },
              {
                icon: <Building className="h-6 w-6 text-trdwnd-gold" />,
                title: "Trade & Market Entry Support",
                description: "Expert guidance on regulatory compliance, logistics and market intelligence"
              },
              {
                icon: <Shield className="h-6 w-6 text-trdwnd-gold" />,
                title: "Risk Mitigation",
                description: "Secure and curated connections to prevent costly mistakes"
              },
              {
                icon: <Users className="h-6 w-6 text-trdwnd-gold" />,
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
              <Link to="/get-started">Start Your EU Journey</Link>
            </Button>
            <Button asChild variant="static" size="lg" className="border-white text-white bg-white/10">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default IndustriesPage;

const Clock = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
