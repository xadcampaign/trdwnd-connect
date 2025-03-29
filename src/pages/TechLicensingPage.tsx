
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Laptop, Shield, Handshake, FileCode, CheckCircle2, Lock, Globe } from "lucide-react";

const TechLicensingPage = () => {
  return (
    <main>
      <Hero
        title="Technology Licensing in Europe"
        subtitle="Monetize your innovations across European markets while reducing development costs and legal risks"
        image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        height="lg:h-[60vh]"
      />

      <Section>
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-trdwnd-navy mb-6 text-center">Leveraging European Licensing Opportunities</h2>
          <p className="text-lg text-gray-600 mb-6">
            Technology licensing in the EU can be a powerful strategy for Canadian companies, offering reduced development costs, increased speed to market, and enhanced Freedom to Operate (FTO). For innovative technology companies, licensing can be an effective way to monetize your innovations across European markets.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            TRDWND specializes in creating licensing strategies that protect your intellectual property while maximizing its commercial potential in European markets.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <TrendingUp className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-2xl font-bold text-trdwnd-navy mb-4">The Value of EU Technology Licensing</h2>
            <p className="text-gray-600 mb-6">
              Licensing your technology to European partners offers numerous advantages over traditional market entry strategies, particularly for companies with limited resources or specialized technologies.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Generate revenue streams without significant capital investment",
                "Expand market reach through established European partners",
                "Maintain control over your intellectual property",
                "Focus on core competencies while partners handle market-specific adaptations",
                "Reduce risks associated with direct market entry"
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
              src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Technology innovation"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </Section>

      <Section bg="light">
        <h2 className="text-3xl font-bold text-center text-trdwnd-navy mb-12">Four Tech Licensing Business Models</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              icon: <Laptop className="h-12 w-12 text-trdwnd-navy" />,
              title: "Access to Technology",
              description: "License technology from a development partner to enhance your product offerings and capabilities.",
              bgColor: "bg-gradient-to-b from-trdwnd-lightblue to-white"
            },
            {
              icon: <Shield className="h-12 w-12 text-trdwnd-navy" />,
              title: "Freedom to Operate",
              description: "Secure licensing agreements with potential competitors to avoid infringement issues and legal challenges.",
              bgColor: "bg-gradient-to-b from-trdwnd-lightblue to-white"
            },
            {
              icon: <TrendingUp className="h-12 w-12 text-trdwnd-navy" />,
              title: "Vertical Commercial Partner",
              description: "License your technology to companies in different stages of the supply chain to expand market applications.",
              bgColor: "bg-gradient-to-b from-trdwnd-lightblue to-white"
            },
            {
              icon: <Handshake className="h-12 w-12 text-trdwnd-navy" />,
              title: "Horizontal Commercial Partner",
              description: "Form complementary licensing arrangements with companies serving similar markets with different technologies.",
              bgColor: "bg-gradient-to-b from-trdwnd-lightblue to-white"
            }
          ].map((model, index) => (
            <div key={index} className={`${model.bgColor} p-8 rounded-lg shadow-md text-center h-full flex flex-col`}>
              <div className="flex justify-center mb-6">
                <div className="bg-white p-4 rounded-full shadow-md">
                  {model.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-trdwnd-navy mb-3">{model.title}</h3>
              <p className="text-gray-600 flex-grow">{model.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1432888622747-4eb9a8f5a70d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
              alt="Technology licensing agreement"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <FileCode className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-2xl font-bold text-trdwnd-navy mb-4">Our Technology Licensing Services</h2>
            <p className="text-gray-600 mb-6">
              TRDWND provides comprehensive support throughout the technology licensing process, from strategy development to agreement negotiation and implementation.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Licensing Strategy Development",
                  description: "Creating tailored licensing strategies aligned with your business objectives and IP assets"
                },
                {
                  title: "Partner Identification & Evaluation",
                  description: "Finding and vetting potential European licensees with the right capabilities and market position"
                },
                {
                  title: "Valuation & Term Structuring",
                  description: "Determining fair market value and optimal financial structures for your technology licenses"
                },
                {
                  title: "Agreement Negotiation & Documentation",
                  description: "Expert support in negotiating and drafting licensing agreements with European partners"
                },
                {
                  title: "Compliance & Performance Monitoring",
                  description: "Ongoing oversight to ensure licensee compliance and maximize returns"
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
        <h2 className="text-3xl font-bold text-center text-trdwnd-navy mb-12">Key Considerations in EU Technology Licensing</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {[
            {
              icon: <Lock className="h-10 w-10 text-trdwnd-gold" />,
              title: "Intellectual Property Protection",
              points: [
                "EU and national IP protection strategies",
                "Patent, trademark, and copyright considerations",
                "Trade secret protection mechanisms",
                "Enforcement provisions and remedies"
              ]
            },
            {
              icon: <Globe className="h-10 w-10 text-trdwnd-gold" />,
              title: "Regulatory Compliance",
              points: [
                "EU competition law compliance",
                "Technology transfer regulations",
                "Industry-specific regulatory requirements",
                "Data protection and privacy considerations"
              ]
            },
            {
              icon: <TrendingUp className="h-10 w-10 text-trdwnd-gold" />,
              title: "Commercial Terms",
              points: [
                "Upfront fees vs. running royalties",
                "Minimum performance requirements",
                "Territory and field-of-use restrictions",
                "Term and termination provisions"
              ]
            },
            {
              icon: <Handshake className="h-10 w-10 text-trdwnd-gold" />,
              title: "Relationship Management",
              points: [
                "Knowledge transfer protocols",
                "Technical support obligations",
                "Improvement and grant-back provisions",
                "Dispute resolution mechanisms"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to License Your Technology in Europe?</h2>
          <p className="text-gray-300 text-xl mb-8">
            Contact TRDWND today to explore how our technology licensing expertise can help you monetize your innovations across European markets.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium">
              <Link to="/contact">Discuss Licensing Options</Link>
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

export default TechLicensingPage;
