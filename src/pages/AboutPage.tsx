
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { ExternalLink } from "lucide-react";

const AboutPage = () => {
  return (
    <main>
      <Hero
        title="About EUROGROWTH LLC"
        subtitle="Your trusted partner for expanding into European markets"
        image="/lovable-uploads/01b447e6-649d-4a6d-b1fa-0abac25589bb.png"
        height="lg:h-[70vh]"
      />

      <Section title="Why Choose Us" subtitle="Bridging the Horizon Between Canadian Innovation and European Markets">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6 text-xl">
              Founded in 2015, EUROGROWTH LLC emerged from the vision of Eric Dauchy and Eric Gerritsen, two international business experts who recognized the untapped potential for Canadian businesses in European markets.
            </p>
            <p className="text-gray-600 mb-6 text-xl">
              With offices in Brussels (EU) and Vancouver (Canada), our leadership team offers a unique dual-perspective approach to international business development.
            </p>
            <p className="text-gray-600 mb-6 text-xl">
              The time to reduce reliance on U.S. trade and expand into Europe is now. Let's build your European success story together.
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-bold text-trdwnd-navy">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-trdwnd-navy">Extensive EU Network</h4>
                    <p className="text-gray-600">Decades of experience and top-tier partnerships in key European industries.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-trdwnd-navy">Trade & Market Entry Support</h4>
                    <p className="text-gray-600">Expert guidance on regulatory compliance, logistics, and market intelligence.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-trdwnd-navy">Risk Mitigation</h4>
                    <p className="text-gray-600">Secure and vetted connections to prevent costly mistakes.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-trdwnd-navy">Custom Matchmaking</h4>
                    <p className="text-gray-600">Tailored introductions to European buyers, suppliers, and investors.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Our Mission & Values" bg="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-trdwnd-navy mb-4">Our Mission</h3>
            <p className="text-gray-600 mb-6 text-lg">
              To empower Canadian businesses to successfully enter and thrive in European markets by providing strategic connections, market insights, and partnership opportunities that drive sustainable international growth.
            </p>
            <div className="border-l-4 border-trdwnd-gold pl-4 italic text-gray-600">
              "We believe that Canadian innovation deserves a global stage, and we're committed to making that happen through meaningful European partnerships."
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-trdwnd-navy mb-4">Our Values</h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Excellence",
                  description: "We maintain the highest standards in all our business dealings and partnerships."
                },
                {
                  title: "Integrity",
                  description: "We operate with transparency and honesty, building trust with our clients and partners."
                },
                {
                  title: "Innovation",
                  description: "We embrace creative solutions and forward-thinking approaches to international business."
                },
                {
                  title: "Partnership",
                  description: "We believe in mutually beneficial relationships that create long-term value for all parties."
                }
              ].map((value, index) => (
                <li key={index} className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-trdwnd-navy">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Our Team" subtitle="Meet the founders driving EUROGROWTH's mission">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-trdwnd-navy mb-2">Eric Dauchy</h3>
              <p className="text-trdwnd-gold font-medium mb-4">Co-Founder & CEO</p>
              <div className="space-y-4 text-gray-600">
                <div className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <p>Founder and CEO of The Constellation Group (1998) - pan-European Business Development agency with partners in 27 EU members states, UK, Norway, Switzerland.</p>
                </div>
                <div className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <p>Responsibility for leading TCG high-tech and aerospace/defense customers Business Development Programs in Europe.</p>
                </div>
                <div className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <p>Served in leadership assignments in supply chain management, strategy, sales, program management, operations and communications.</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.linkedin.com/in/ericdauchy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-trdwnd-navy hover:text-trdwnd-darkblue font-medium inline-flex items-center"
                >
                  Connect on LinkedIn
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="mt-auto">
              <img 
                src="/lovable-uploads/21e2fefa-5229-43b8-9fe9-3c76cac4a51e.png" 
                alt="Eric Dauchy" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-trdwnd-navy mb-2">Eric Gerritsen</h3>
              <p className="text-trdwnd-gold font-medium mb-4">Co-Founder & COO</p>
              <div className="space-y-4 text-gray-600">
                <div className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <p>Oversees Canada Operations, Communications, Business Development & Strategy, and Enterprise Business programs.</p>
                </div>
                <div className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <p>Former SVP Global Alliances Terra Lycos, branching out as VC; co-founder/CEO of various N American startups.</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-trdwnd-navy hover:text-trdwnd-darkblue font-medium inline-flex items-center"
                >
                  Connect on LinkedIn
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="mt-auto">
              <img 
                src="/lovable-uploads/09aed651-6a4c-4d99-8e45-c5162d0e1fc0.png" 
                alt="Eric Gerritsen" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        bg="dark"
        className="py-20 md:py-28"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-trdwnd-gold mb-2">25+</div>
            <p className="text-white">Years of Combined Experience</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-trdwnd-gold mb-2">40+</div>
            <p className="text-white">Successful EU Partnerships</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-trdwnd-gold mb-2">27+</div>
            <p className="text-white">EU + UK, Norway & Switzerland</p>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default AboutPage;
