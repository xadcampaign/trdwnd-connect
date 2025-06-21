
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Handshake, 
  TrendingUp, 
  Users,
  ChevronRight,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const ServicesPageFr = () => {
  return (
    <main>
      <Hero
        title="Solutions Complètes pour l'Expansion Européenne"
        subtitle="De l'analyse de marché aux partenariats stratégiques, nous offrons tous les services nécessaires pour réussir votre entrée sur les marchés européens."
        image="/lovable-uploads/d2c017e4-584b-4175-b890-769544daff6a.png"
      />

      <Section 
        title="Nos Services Principaux" 
        subtitle="Des solutions sur mesure pour chaque étape de votre expansion européenne."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {[
            {
              icon: <Globe className="h-12 w-12 text-trdwnd-navy" />,
              title: "Analyse du Marché UE",
              description: "Recherche approfondie et analyse stratégique des opportunités européennes spécifiques à votre secteur.",
              features: [
                "Études de marché détaillées",
                "Analyse concurrentielle",
                "Identification des segments cibles",
                "Évaluation réglementaire",
                "Stratégies d'entrée recommandées"
              ],
              link: "/fr/analyse-marche-ue"
            },
            {
              icon: <Handshake className="h-12 w-12 text-trdwnd-navy" />,
              title: "Accords de Distribution",
              description: "Connexion avec des distributeurs établis pour intégrer vos produits dans les réseaux européens.",
              features: [
                "Identification de distributeurs qualifiés",
                "Négociation d'accords",
                "Support juridique",
                "Gestion des relations",
                "Optimisation des canaux"
              ],
              link: "/fr/accords-distribution"
            },
            {
              icon: <TrendingUp className="h-12 w-12 text-trdwnd-navy" />,
              title: "Licences Technologiques",
              description: "Navigation dans les accords de licence complexes pour monétiser votre propriété intellectuelle.",
              features: [
                "Évaluation de la PI",
                "Structuration des accords",
                "Protection juridique",
                "Négociation des redevances",
                "Gestion des licences"
              ],
              link: "/fr/licences-technologie"
            },
            {
              icon: <Users className="h-12 w-12 text-trdwnd-navy" />,
              title: "Coentreprises",
              description: "Formation de partenariats stratégiques pour partager ressources, risques et opportunités.",
              features: [
                "Identification de partenaires",
                "Structuration des JV",
                "Due diligence",
                "Accords de gouvernance",
                "Gestion opérationnelle"
              ],
              link: "/fr/coentreprises"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="mb-4 sm:mb-6">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-bold text-trdwnd-navy mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">{service.description}</p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-gray-700 text-sm sm:text-base">
                    <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-trdwnd-gold flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild className="w-full bg-trdwnd-navy hover:bg-trdwnd-darkblue text-white">
                <Link to={service.link} className="inline-flex items-center justify-center">
                  En Savoir Plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="Notre Processus" 
        subtitle="Une approche méthodique et éprouvée pour garantir le succès de votre expansion."
        bg="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              phase: "Phase 1",
              title: "Évaluation",
              description: "Analyse complète de votre entreprise, produits et objectifs d'expansion.",
              duration: "2-3 semaines"
            },
            {
              phase: "Phase 2", 
              title: "Stratégie",
              description: "Développement d'une stratégie personnalisée basée sur l'analyse de marché.",
              duration: "3-4 semaines"
            },
            {
              phase: "Phase 3",
              title: "Exécution",
              description: "Mise en œuvre de la stratégie avec identification et approche des partenaires.",
              duration: "6-12 semaines"
            },
            {
              phase: "Phase 4",
              title: "Optimisation",
              description: "Support continu et optimisation des partenariats établis.",
              duration: "En continu"
            }
          ].map((phase, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-trdwnd-navy text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                {index + 1}
              </div>
              <h4 className="text-trdwnd-gold font-semibold mb-2 text-sm">{phase.phase}</h4>
              <h3 className="text-lg font-bold text-trdwnd-navy mb-3">{phase.title}</h3>
              <p className="text-gray-600 mb-3 text-sm">{phase.description}</p>
              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{phase.duration}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="Secteurs d'Expertise" 
        subtitle="Nous nous concentrons sur des industries à forte valeur ajoutée avec un potentiel d'expansion significatif."
        bg="white"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Technologie & IA",
              description: "Solutions innovantes, logiciels, intelligence artificielle et technologies émergentes.",
              image: "/lovable-uploads/59509fef-cf6c-4679-9dea-230290168db0.png"
            },
            {
              title: "Aérospatiale & Défense",
              description: "Équipements spécialisés, systèmes de défense et technologies aérospatiales.",
              image: "/lovable-uploads/bb13e67d-0e28-40c8-956a-956eb2d39cf1.png"
            },
            {
              title: "Sciences de la Vie",
              description: "Biotechnologie, dispositifs médicaux et innovations en santé.",
              image: "/lovable-uploads/d689885c-f3e4-40b2-b834-e85f77743a06.png"
            },
            {
              title: "Énergie Propre",
              description: "Technologies renouvelables, solutions durables et innovation énergétique.",
              image: "/lovable-uploads/21e2fefa-5229-43b8-9fe9-3c76cac4a51e.png"
            },
            {
              title: "Fintech",
              description: "Services financiers innovants, blockchain et technologies de paiement.",
              image: "/lovable-uploads/2c80b797-3521-4700-92e9-711c22bdf138.png"
            },
            {
              title: "Industrie 4.0",
              description: "Automatisation, IoT, robotique et manufacturing intelligent.",
              image: "/lovable-uploads/b063649b-d09d-4cbb-8610-7a06b6953065.png"
            }
          ].map((sector, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg bg-white">
              <img 
                src={sector.image} 
                alt={sector.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-lg font-bold text-trdwnd-navy mb-2">{sector.title}</h3>
                <p className="text-gray-600 text-sm">{sector.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        bg="dark"
        className="py-12 sm:py-16 md:py-20"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Commencez Votre Expansion Européenne Aujourd'hui</h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
            Chaque jour de retard est une opportunité manquée. Contactez-nous maintenant pour une consultation gratuite et découvrez comment nous pouvons accélérer votre croissance en Europe.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              <Link to="/fr/commencer">Consultation Gratuite</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              <a href="mailto:Eric.dauchy@eurogrowth.ca?subject=Demande d'information sur les services">Nous Contacter</a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ServicesPageFr;
