
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
          {[
            {
              name: "Eric Dauchy",
              title: "Co-Founder & CEO",
              bio: "With over 20 years of experience in international business development, Eric has helped numerous Canadian businesses establish a presence in European markets. His expertise in strategic partnerships and market entry strategies has been instrumental in TRDWND's success.",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
              linkedin: "https://linkedin.com"
            },
            {
              name: "Eric Gerritsen",
              title: "Co-Founder & COO",
              bio: "Eric brings extensive knowledge of European business practices and regulatory environments. His network of contacts across the EU has opened doors for countless Canadian companies looking to expand internationally.",
              image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
              linkedin: "https://linkedin.com"
            }
          ].map((leader, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 h-80 md:h-auto">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-3/5 p-6 flex flex-col">
                <h3 className="text-2xl font-bold text-trdwnd-navy">{leader.name}</h3>
                <p className="text-trdwnd-gold font-medium mb-4">{leader.title}</p>
                <p className="text-gray-600 mb-6 flex-grow">{leader.bio}</p>
                <a
                  href={leader.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-trdwnd-navy hover:text-trdwnd-darkblue font-medium inline-flex items-center"
                >
                  Connect on LinkedIn
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
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
