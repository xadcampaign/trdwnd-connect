
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ChevronRight,
  TrendingUp,
  Users,
  Globe,
  Award
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const IndustriesPageFr = () => {
  return (
    <main>
      <Hero
        title="Industries que Nous Servons"
        subtitle="Nous nous spécialisons dans la connexion d'entreprises canadiennes avec des partenaires européens dans des secteurs à forte valeur ajoutée et à fort potentiel de croissance."
        image="/lovable-uploads/8e0b7229-b916-442c-83b2-884b8c9062f1.png"
      />

      <Section 
        title="Secteurs d'Excellence" 
        subtitle="Notre expertise couvre les industries les plus dynamiques et innovantes du marché canadien-européen."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {[
            {
              title: "Technologie & Intelligence Artificielle",
              description: "Le secteur technologique canadien est reconnu mondialement pour son innovation. Nous connectons les entreprises tech canadiennes avec des partenaires européens pour l'implémentation, la distribution et le développement conjoint.",
              image: "/lovable-uploads/59509fef-cf6c-4679-9dea-230290168db0.png",
              highlights: [
                "Solutions logicielles innovantes",
                "Intelligence artificielle et apprentissage automatique",
                "Technologies blockchain et fintech",
                "Cybersécurité et protection des données",
                "Internet des objets (IoT) et technologies émergentes"
              ]
            },
            {
              title: "Aérospatiale & Défense",
              description: "Le Canada possède l'une des industries aérospatiales les plus avancées au monde. Nous facilitons les partenariats avec des contractants européens de défense et des entreprises aérospatiales.",
              image: "/lovable-uploads/bb13e67d-0e28-40c8-956a-956eb2d39cf1.png",
              highlights: [
                "Systèmes de défense avancés",
                "Technologies satellitaires",
                "Équipements aéronautiques spécialisés",
                "Systèmes de navigation et communication",
                "Technologies de sécurité et surveillance"
              ]
            }
          ].map((industry, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img 
                src={industry.image} 
                alt={industry.title}
                className="w-full h-48 sm:h-64 object-cover"
              />
              <div className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-bold text-trdwnd-navy mb-4">{industry.title}</h3>
                <p className="text-gray-600 mb-6 text-base sm:text-lg leading-relaxed">{industry.description}</p>
                <div className="space-y-2 mb-6">
                  {industry.highlights.map((highlight, highlightIndex) => (
                    <div key={highlightIndex} className="flex items-center gap-3">
                      <ChevronRight className="h-4 w-4 text-trdwnd-gold flex-shrink-0" />
                      <span className="text-gray-700 text-sm sm:text-base">{highlight}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full bg-trdwnd-navy hover:bg-trdwnd-darkblue">
                  <Link to="/fr/commencer">Explorer les Opportunités</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="Secteurs Émergents" 
        subtitle="De nouvelles opportunités dans des industries en pleine croissance."
        bg="light"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Sciences de la Vie",
              description: "Biotechnologie, dispositifs médicaux et innovations en santé avec un fort potentiel européen.",
              image: "/lovable-uploads/d689885c-f3e4-40b2-b834-e85f77743a06.png",
              growth: "+15%"
            },
            {
              title: "Énergie Propre",
              description: "Technologies renouvelables et solutions durables alignées avec les objectifs européens.",
              image: "/lovable-uploads/21e2fefa-5229-43b8-9fe9-3c76cac4a51e.png",
              growth: "+22%"
            },
            {
              title: "Fintech",
              description: "Services financiers innovants et technologies de paiement pour le marché européen.",
              image: "/lovable-uploads/2c80b797-3521-4700-92e9-711c22bdf138.png",
              growth: "+18%"
            },
            {
              title: "Industrie 4.0",
              description: "Automatisation, robotique et manufacturing intelligent pour l'industrie européenne.",
              image: "/lovable-uploads/b063649b-d09d-4cbb-8610-7a06b6953065.png",
              growth: "+12%"
            },
            {
              title: "AgriTech",
              description: "Technologies agricoles innovantes pour l'agriculture de précision européenne.",
              image: "/lovable-uploads/01b447e6-649d-4a6d-b1fa-0abac25589bb.png",
              growth: "+20%"
            },
            {
              title: "Mobilité Durable",
              description: "Solutions de transport électrique et mobilité intelligente pour les villes européennes.",
              image: "/lovable-uploads/4a4d0292-880e-4a42-80aa-4b66a781fdc0.png",
              growth: "+25%"
            }
          ].map((sector, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={sector.image} 
                  alt={sector.title}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 bg-trdwnd-gold text-trdwnd-navy px-2 py-1 rounded text-xs font-bold">
                  Croissance {sector.growth}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-trdwnd-navy mb-3">{sector.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{sector.description}</p>
                <Link 
                  to="/fr/commencer" 
                  className="text-trdwnd-navy hover:text-trdwnd-darkblue font-medium inline-flex items-center group text-sm"
                >
                  En savoir plus
                  <ChevronRight className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="Pourquoi Ces Industries?" 
        subtitle="Les secteurs que nous servons sont choisis pour leur potentiel exceptionnel sur le marché européen."
        bg="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
          {[
            {
              icon: <TrendingUp className="h-8 w-8 text-trdwnd-navy mx-auto mb-4" />,
              title: "Croissance Rapide",
              description: "Industries en forte expansion avec des opportunités de partenariat nombreuses."
            },
            {
              icon: <Users className="h-8 w-8 text-trdwnd-navy mx-auto mb-4" />,
              title: "Expertise Canadienne",
              description: "Secteurs où le Canada excelle et possède un avantage concurrentiel reconnu."
            },
            {
              icon: <Globe className="h-8 w-8 text-trdwnd-navy mx-auto mb-4" />,
              title: "Demande Européenne",
              description: "Marchés européens avec une forte demande pour l'innovation canadienne."
            },
            {
              icon: <Award className="h-8 w-8 text-trdwnd-navy mx-auto mb-4" />,
              title: "Potentiel de Partenariat",
              description: "Opportunités de collaboration stratégique mutuellement bénéfiques."
            }
          ].map((reason, index) => (
            <div key={index} className="p-6">
              {reason.icon}
              <h3 className="text-lg font-semibold text-trdwnd-navy mb-3">{reason.title}</h3>
              <p className="text-gray-600 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        bg="dark"
        className="py-12 sm:py-16 md:py-20"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Votre Industrie N'est Pas Listée?</h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
            Nous évaluons constamment de nouveaux secteurs et opportunités. Contactez-nous pour discuter du potentiel européen de votre industrie spécifique.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              <Link to="/fr/commencer">Consulter Notre Équipe</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              <a href="mailto:Eric.dauchy@eurogrowth.ca?subject=Opportunités dans mon industrie">Nous Contacter</a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default IndustriesPageFr;
