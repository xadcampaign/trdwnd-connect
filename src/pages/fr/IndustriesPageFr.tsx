
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

const IndustriesPageFr = () => {
  return (
    <main>
      <Hero
        title="Industries que Nous Servons"
        subtitle="Partenariats stratégiques pour les entreprises canadiennes qui s'étendent vers les marchés européens"
        image="/lovable-uploads/e8162130-1cc6-4d7a-b2ef-4c8533d943ec.png"
        height="lg:h-[70vh]"
      />

      <Section>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-trdwnd-navy mb-6">EuroGrowth travaille avec les propriétaires d'entreprises, les dirigeants et les conseils d'administration</h2>
          <p className="text-xl text-gray-600 mb-8">
            Livrer des résultats mesurables avec des capacités éprouvées en leadership de transaction, négociation et intelligence de marché.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <ul className="space-y-4">
                {[
                  "Capacité de leadership de transaction éprouvée",
                  "Capacité de négociation de coentreprise éprouvée",
                  "Expérience de licence technologique éprouvée",
                  "Profondément expérimenté dans les principales verticales",
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
                  "Capacité de collecte d'intelligence implacable",
                  "Peut mobiliser les parties prenantes clés",
                  "Engagé du début à la fin",
                  "Livrer des résultats mesurables",
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
          <h2 className="text-3xl font-bold text-trdwnd-navy mb-8 text-center">EuroGrowth - L'Accélérateur Commercial UE pour le Canada</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-trdwnd-navy mb-4">Notre Processus</h3>
                <ul className="space-y-3">
                  {[
                    "Créer une équipe sur mesure pour faire de la croissance des revenus, des coentreprises, des licences de PI et des transactions de F&A",
                    "Définir le processus de flux de transactions",
                    "Présélectionner les partenaires européens potentiels",
                    "Faciliter les négociations - Diligence raisonnable",
                    "Conseils en temps réel d'exécutifs de confiance, d'investisseurs pour l'analyse de marché et le développement de stratégie",
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
                <h3 className="text-2xl font-semibold text-trdwnd-navy mb-4">Avantages Stratégiques</h3>
                <ul className="space-y-3">
                  {[
                    "Identifier les technologies disruptives pertinentes",
                    "Définir les menaces et les contre-mesures",
                    "Obtenir un accès de niveau C aux startups/scaleups et aux partenaires financiers",
                    "Aligné avec les propriétaires d'entreprises, les dirigeants et les conseils d'administration",
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
        <h2 className="text-3xl font-bold text-trdwnd-navy mb-12 text-center">Industries Principales que Nous Servons</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform hover:translate-y-[-5px]">
            <div className="p-1 bg-gradient-to-r from-trdwnd-navy to-blue-500"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-trdwnd-lightblue p-3 rounded-lg mr-4">
                  <Cpu className="h-8 w-8 text-trdwnd-navy" />
                </div>
                <h3 className="text-2xl font-bold text-trdwnd-navy">High-Tech & IA</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Aider les entreprises canadiennes à exploiter la demande européenne pour l'Industrie 4.0, la cybersécurité, l'IA, la transformation numérique et les solutions GreenTech - dans diverses industries verticales.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-trdwnd-navy mb-2">Services Clés:</h4>
                <ul className="space-y-2 ml-2">
                  {[
                    "Implémentation et intégration de solutions IA",
                    "Partenariats de technologie de cybersécurité",
                    "Conseil en transformation numérique",
                    "Partenariats d'innovation GreenTech",
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-trdwnd-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Solutions IA</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Cybersécurité</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Industrie 4.0</span>
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
                <h3 className="text-2xl font-bold text-trdwnd-navy">Aérospatiale & Défense</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Atténuer les problèmes de chaîne d'approvisionnement et former des alliances stratégiques dans le secteur de la défense européenne en croissance. Participer aux programmes de croissance à double usage où l'industrie de la défense de l'UE peut être un catalyseur pour faire évoluer votre technologie.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-trdwnd-navy mb-2">Services Clés:</h4>
                <ul className="space-y-2 ml-2">
                  {[
                    "Formation d'alliances stratégiques avec les contractants de défense",
                    "Optimisation et intégration de la chaîne d'approvisionnement",
                    "Applications à double usage de la technologie de défense",
                    "Navigation de conformité réglementaire",
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-trdwnd-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Tech Défense</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Aérospatiale</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Double-Usage</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="dark" className="py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Pourquoi Choisir EUROGROWTH?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: <Globe className="h-6 w-6 text-trdwnd-gold" />,
                title: "Réseau UE Étendu",
                description: "Des décennies d'expérience et des partenariats de premier niveau dans les industries européennes clés"
              },
              {
                icon: <Building className="h-6 w-6 text-trdwnd-gold" />,
                title: "Support Commercial & d'Entrée de Marché",
                description: "Conseils d'experts sur la conformité réglementaire, la logistique et l'intelligence de marché"
              },
              {
                icon: <Shield className="h-6 w-6 text-trdwnd-gold" />,
                title: "Atténuation des Risques",
                description: "Connexions sécurisées et organisées pour prévenir les erreurs coûteuses"
              },
              {
                icon: <Users className="h-6 w-6 text-trdwnd-gold" />,
                title: "Mise en Relation Personnalisée",
                description: "Introductions sur mesure aux acheteurs, fournisseurs et investisseurs européens"
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
              <Link to="/fr/commencer">Commencer Votre Voyage UE</Link>
            </Button>
            <Button asChild variant="static" size="lg" className="border-white text-white bg-white/10">
              <Link to="/fr/services">Voir Nos Services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default IndustriesPageFr;
