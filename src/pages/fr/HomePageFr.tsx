
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Handshake, 
  TrendingUp, 
  Users,
  ChevronRight,
  Link as LinkIcon,
  Mail
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const HomePageFr = () => {
  return (
    <main>
      <Hero
        title="Le moment est venu pour les entreprises canadiennes de diversifier leurs marchés vers l'Europe"
        subtitle={<span>Nous connectons <span className="text-[#ea384c]">les entreprises canadiennes</span> avec des partenaires de haute qualité dans l'Union européenne pour maximiser le potentiel du marché et stimuler la croissance internationale.</span>}
        image="/lovable-uploads/192ae08f-974b-4254-a059-f245c321a59a.png"
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8 justify-center items-center">
          <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation">
            <Link to="/fr/commencer">Commencer</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation">
            <Link to="/fr/contact" className="inline-flex items-center justify-center">
              <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Nous Contacter
            </Link>
          </Button>
        </div>
      </Hero>

      <Section 
        title="Qui Nous Sommes" 
        subtitle="EuroGrowth est un connecteur de premier plan pour les entreprises canadiennes cherchant à étendre leur portée de marché grâce à des partenariats stratégiques dans l'Union européenne."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-gray-600 mb-4 sm:mb-6 text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed">
              Avec des décennies d'expérience combinée dans le développement des affaires internationales, notre équipe se spécialise dans la création de connexions précieuses qui mènent à des entrées de marché réussies, des accords de distribution et des alliances stratégiques.
            </p>
            <p className="text-gray-600 mb-6 sm:mb-8 text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed">
              Nous comprenons les défis uniques auxquels font face les entreprises canadiennes lors de l'expansion vers les marchés européens, et nous fournissons des solutions sur mesure pour surmonter ces barrières.
            </p>
            <div className="flex items-center mt-6 sm:mt-8">
              <Link to="/fr/a-propos" className="text-trdwnd-navy hover:text-trdwnd-darkblue font-bold text-lg sm:text-xl inline-flex items-center group touch-manipulation">
                À Propos de Nous
                <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="/lovable-uploads/142ed3dd-d67c-4553-8f3b-ea7a1aa1a479.png" 
              alt="Drapeaux de l'Union européenne sur carte" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </Section>

      <Section 
        title="Nos Partenaires" 
        subtitle="Nous sommes approuvés par des organisations canadiennes de premier plan et des agences gouvernementales pour faciliter la croissance des affaires internationales."
        bg="light"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-center justify-items-center max-w-6xl mx-auto">
          {[
            "/lovable-uploads/1abfae25-7a35-45ef-9b8d-86b2d4b82ef1.png",
            "/lovable-uploads/9f2314f8-b675-4e0c-832a-d45ef45fb31f.png",
            "/lovable-uploads/bcb8137c-be35-429b-b7a9-0ec3c0cfe957.png",
            "/lovable-uploads/a23d3cf2-3749-484b-aafe-10ed9aa3f1cc.png",
            "/lovable-uploads/db3b1ef1-4be0-47d6-8bba-7316f0b99960.png",
            "/lovable-uploads/03053d81-a5f3-470d-b7e9-121c3c7062e1.png"
          ].map((logo, index) => (
            <div key={index} className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow w-full h-24 sm:h-28 lg:h-32 flex items-center justify-center">
              <img 
                src={logo} 
                alt="Logo partenaire" 
                className="max-h-12 sm:max-h-14 lg:max-h-16 max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="Nos Services" 
        subtitle="Nous offrons des solutions complètes pour aider les entreprises canadiennes à naviguer avec succès et prospérer sur les marchés européens."
        bg="white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {[
            {
              icon: <Globe className="h-8 w-8 sm:h-10 sm:w-10 text-trdwnd-navy" />,
              title: "Analyse du Marché UE",
              description: "Recherche et analyse approfondies des marchés européens pour identifier les opportunités et les stratégies d'entrée."
            },
            {
              icon: <Handshake className="h-8 w-8 sm:h-10 sm:w-10 text-trdwnd-navy" />,
              title: "Accords de Distribution",
              description: "Connectez-vous avec des distributeurs établis pour intégrer vos produits dans les réseaux de vente européens."
            },
            {
              icon: <TrendingUp className="h-8 w-8 sm:h-10 sm:w-10 text-trdwnd-navy" />,
              title: "Licences Technologiques",
              description: "Naviguez dans les accords de licence complexes pour monétiser votre technologie sur les marchés européens."
            },
            {
              icon: <Users className="h-8 w-8 sm:h-10 sm:w-10 text-trdwnd-navy" />,
              title: "Coentreprises",
              description: "Formez des partenariats stratégiques avec des entreprises européennes pour partager ressources et connaissances du marché."
            }
          ].map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex flex-col"
            >
              <div className="mb-3 sm:mb-4">{service.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-trdwnd-navy">{service.title}</h3>
              <p className="text-gray-600 mb-4 sm:mb-5 flex-grow text-sm sm:text-base">{service.description}</p>
              <Link 
                to="/fr/services" 
                className="text-trdwnd-navy hover:text-trdwnd-darkblue font-medium inline-flex items-center mt-auto group touch-manipulation text-sm sm:text-base"
              >
                En savoir plus
                <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <Button asChild size="lg" className="bg-trdwnd-navy hover:bg-trdwnd-darkblue px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation">
            <Link to="/fr/services">Voir Tous les Services</Link>
          </Button>
        </div>
      </Section>

      <Section 
        title="Industries que Nous Servons" 
        subtitle="Nous nous spécialisons dans la connexion d'entreprises à travers une gamme de secteurs à haute valeur sur le marché canadien-UE."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <div className="relative overflow-hidden group rounded-lg shadow-lg">
            <img 
              src="/lovable-uploads/59509fef-cf6c-4679-9dea-230290168db0.png" 
              alt="High-Tech & IA" 
              className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-trdwnd-navy/90 to-transparent p-4 sm:p-6 flex flex-col justify-end">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">High-Tech & IA</h3>
              <p className="text-gray-200 mb-3 sm:mb-4 text-sm sm:text-base">Connecter des entreprises technologiques canadiennes innovantes avec des partenaires de mise en œuvre et des clients européens.</p>
              <Link 
                to="/fr/industries" 
                className="text-trdwnd-gold hover:text-trdwnd-gold/80 font-medium inline-flex items-center group touch-manipulation text-sm sm:text-base"
              >
                Explorer les opportunités
                <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
          
          <div className="relative overflow-hidden group rounded-lg shadow-lg">
            <img 
              src="/lovable-uploads/bb13e67d-0e28-40c8-956a-956eb2d39cf1.png" 
              alt="Aérospatiale & Défense" 
              className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-trdwnd-navy/90 to-transparent p-4 sm:p-6 flex flex-col justify-end">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">Aérospatiale & Défense</h3>
              <p className="text-gray-200 mb-3 sm:mb-4 text-sm sm:text-base">Faciliter les partenariats stratégiques entre les entreprises aérospatiales canadiennes et les contractants de défense européens.</p>
              <Link 
                to="/fr/industries" 
                className="text-trdwnd-gold hover:text-trdwnd-gold/80 font-medium inline-flex items-center group touch-manipulation text-sm sm:text-base"
              >
                Explorer les opportunités
                <ChevronRight className="ml-1 w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
        <div className="text-center mt-8 sm:mt-12">
          <Button asChild size="lg" className="bg-trdwnd-navy hover:bg-trdwnd-darkblue px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation">
            <Link to="/fr/industries">Voir Toutes les Industries</Link>
          </Button>
        </div>
      </Section>

      <Section 
        bg="dark"
        className="py-12 sm:py-16 md:py-20 lg:py-28"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">Prêt à Étendre Votre Entreprise en Europe?</h2>
          <p className="text-gray-300 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8">
            Contactez notre équipe dès aujourd'hui pour discuter de la façon dont nous pouvons vous aider à débloquer de nouvelles opportunités de croissance sur les marchés européens.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation">
              <Link to="/fr/commencer">
                Commencer
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation">
              <Link to="/fr/services">En Savoir Plus</Link>
            </Button>
          </div>
          
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700">
            <div className="flex items-center justify-center gap-3 mb-3 sm:mb-4">
              <LinkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-trdwnd-gold" />
              <h3 className="text-lg sm:text-xl font-semibold text-white">Raison du Contact</h3>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Pour nous aider à mieux comprendre votre entreprise, veuillez prendre quelques minutes pour remplir notre questionnaire détaillé. Cela nous permettra de vous fournir des solutions sur mesure pour votre entrée sur le marché européen.
            </p>
            <Button 
              asChild
              className="bg-white hover:bg-white/90 text-trdwnd-navy w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg touch-manipulation"
            >
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf6ef8G0TUE0oHvUmD3Ik7Pxz6hJkC4THU4kTotAstCUZ25og/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center"
              >
                <LinkIcon className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Comment Pouvons-Nous Vous Aider?
              </a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default HomePageFr;
