import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { ExternalLink } from "lucide-react";

const AboutPage = () => {
  return (
    <main>
      <Hero
        title="About TRDWND LLC"
        subtitle="Your trusted partner for expanding into European markets"
        image="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
        height="lg:h-[70vh]"
      />

      <Section title="Our Story" subtitle="Building bridges between Canadian innovation and European markets">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6 text-xl">
              Founded in 2015, TRDWND LLC emerged from the vision of Eric Dauchy and Eric Gerritsen, two international business experts who recognized the untapped potential for Canadian businesses in European markets.
            </p>
            <p className="text-gray-600 mb-6 text-xl">
              With firsthand experience of both the challenges and opportunities that come with international expansion, our founders set out to create a company that could bridge the gap between Canadian innovation and European market access.
            </p>
            <p className="text-gray-600 text-xl">
              Today, as a team of two dedicated professionals, TRDWND has grown into a premier business connector, helping dozens of Canadian companies establish successful partnerships, distribution channels, and joint ventures across the European Union.
            </p>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1580519542036-c47de6196ba5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
              alt="TRDWND story"
              className="rounded-lg shadow-lg w-full"
            />
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

      <Section title="Our Team" subtitle="Meet the founders driving TRDWND's mission">
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
                src="/lovable-uploads/8e0b7229-b916-442c-83b2-884b8c9062f1.png" 
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
                src="/lovable-uploads/8e0b7229-b916-442c-83b2-884b8c9062f1.png" 
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
            <div className="text-4xl font-bold text-trdwnd-gold mb-2">12</div>
            <p className="text-white">EU Countries Covered</p>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default AboutPage;
