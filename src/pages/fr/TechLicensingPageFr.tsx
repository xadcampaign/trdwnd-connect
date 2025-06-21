
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Brain,
  Lock,
  DollarSign,
  FileText,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const TechLicensingPageFr = () => {
  return (
    <main>
      <Hero
        title="Licences de Technologie Européenne"
        subtitle="Monétisez votre propriété intellectuelle sur les marchés européens grâce à des accords de licence stratégiques et mutuellement bénéfiques."
        image="/lovable-uploads/1a9c0d1b-f8d3-4b1a-a72d-8d15e3e9765d.png"
      />

      <Section 
        title="Maximisez la Valeur de Votre Propriété Intellectuelle" 
        subtitle="Transformez vos innovations en revenus durables grâce à notre expertise en licences technologiques européennes."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Le marché européen offre d'immenses opportunités pour la licence de technologies canadiennes. Nous vous aidons à naviguer dans ce paysage complexe pour créer des accords de licence qui génèrent des revenus significatifs tout en protégeant vos droits de propriété intellectuelle.
            </p>
            <div className="space-y-4">
              {[
                "Évaluation complète de votre portefeuille PI",
                "Identification de licenciés européens qualifiés",
                "Négociation d'accords optimisés",
                "Protection juridique renforcée",
                "Gestion continue des licences"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-trdwnd-gold flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img 
              src="/lovable-uploads/59509fef-cf6c-4679-9dea-230290168db0.png" 
              alt="Licences technologiques" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </Section>

      <Section 
        title="Types de Licences Technologiques" 
        subtitle="Nous facilitons différents modèles de licence adaptés à vos objectifs commerciaux et au potentiel de marché."
        bg="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {[
            {
              icon: <Brain className="h-10 w-10 text-trdwnd-navy" />,
              title: "Licences Exclusives",
              description: "Accords exclusifs offrant aux licenciés des droits complets sur un territoire ou segment spécifique.",
              advantages: [
                "Revenus garantis plus élevés",
                "Engagement maximal du licencié",
                "Protection de territoire assurée",
                "Investissement marketing partagé"
              ],
              suitableFor: "Technologies révolutionnaires, innovations brevetées, marchés de niche"
            },
            {
              icon: <Lock className="h-10 w-10 text-trdwnd-navy" />,
              title: "Licences Non-Exclusives",
              description: "Accords flexibles permettant de licencier la même technologie à plusieurs partenaires européens.",
              advantages: [
                "Diversification des revenus",
                "Réduction des risques",
                "Couverture de marché étendue",
                "Flexibilité stratégique"
              ],
              suitableFor: "Technologies standardisées, solutions logicielles, innovations modulaires"
            },
            {
              icon: <DollarSign className="h-10 w-10 text-trdwnd-navy" />,
              title: "Licences Cross-License",
              description: "Échange mutuel de technologies avec des entreprises européennes pour l'innovation collaborative.",
              advantages: [
                "Accès à des technologies complémentaires",
                "Réduction des coûts de R&D",
                "Innovation accélérée",
                "Partenariats stratégiques"
              ],
              suitableFor: "R&D collaborative, industries convergentes, innovation ouverte"
            },
            {
              icon: <FileText className="h-10 w-10 text-trdwnd-navy" />,
              title: "Licences de Savoir-Faire",
              description: "Transfert de connaissances techniques et d'expertise opérationnelle au-delà des brevets.",
              advantages: [
                "Valorisation de l'expertise",
                "Relations à long terme",
                "Support technique continu",
                "Revenus récurrents"
              ],
              suitableFor: "Processus industriels, méthodologies, expertise technique"
            }
          ].map((license, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                {license.icon}
                <h3 className="text-xl font-bold text-trdwnd-navy">{license.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">{license.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-trdwnd-navy mb-2">Avantages Clés:</h4>
                <div className="space-y-1">
                  {license.advantages.map((advantage, advantageIndex) => (
                    <div key={advantageIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-trdwnd-gold flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{advantage}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-3 bg-gray-50 rounded text-xs">
                <span className="font-medium text-trdwnd-navy">Idéal pour: </span>
                <span className="text-gray-600">{license.suitableFor}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="Notre Processus de Licence" 
        subtitle="Une approche méthodique pour maximiser la valeur de vos licences technologiques européennes."
        bg="white"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                phase: "Phase 1",
                title: "Évaluation PI",
                description: "Audit complet de votre portefeuille de propriété intellectuelle et évaluation du potentiel de licence.",
                duration: "2-3 semaines",
                deliverables: [
                  "Audit du portefeuille PI",
                  "Évaluation de la valeur",
                  "Analyse de brevetabilité",
                  "Stratégie de protection"
                ]
              },
              {
                phase: "Phase 2", 
                title: "Recherche de Licenciés",
                description: "Identification et qualification de licenciés potentiels dans votre secteur technologique.",
                duration: "3-4 semaines",
                deliverables: [
                  "Base de données de licenciés",
                  "Profils d'entreprises cibles",
                  "Analyse de compatibilité",
                  "Stratégie d'approche"
                ]
              },
              {
                phase: "Phase 3",
                title: "Structuration d'Accords",
                description: "Développement de structures contractuelles optimisées pour vos objectifs commerciaux.",
                duration: "2-3 semaines", 
                deliverables: [
                  "Modèles de contrats",
                  "Structures de redevances",
                  "Termes et conditions",
                  "Mécanismes de protection"
                ]
              },
              {
                phase: "Phase 4",
                title: "Négociation",
                description: "Support expert dans les négociations pour maximiser la valeur et minimiser les risques.",
                duration: "4-8 semaines",
                deliverables: [
                  "Préparation de négociation",
                  "Support en temps réel",
                  "Révision juridique",
                  "Finalisation des accords"
                ]
              },
              {
                phase: "Phase 5",
                title: "Gestion & Suivi",
                description: "Gestion continue des relations de licence et optimisation des performances.",
                duration: "En continu",
                deliverables: [
                  "Suivi des royalties",
                  "Rapports de performance",
                  "Gestion des conflits",
                  "Expansion du portefeuille"
                ]
              }
            ].map((phase, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-trdwnd-navy text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <span className="text-trdwnd-gold text-xs font-medium">{phase.phase}</span>
                    <h3 className="text-lg font-semibold text-trdwnd-navy">{phase.title}</h3>
                  </div>
                </div>
                <p className="text-gray-600 mb-3 text-sm">{phase.description}</p>
                <div className="text-xs text-gray-500 mb-3 bg-white px-2 py-1 rounded inline-block">
                  {phase.duration}
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-trdwnd-navy mb-2">Livrables:</h4>
                  <ul className="space-y-1">
                    {phase.deliverables.map((deliverable, deliverableIndex) => (
                      <li key={deliverableIndex} className="text-gray-700 text-xs flex items-center gap-2">
                        <div className="w-1 h-1 bg-trdwnd-gold rounded-full"></div>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section 
        title="Secteurs Technologiques d'Expertise" 
        subtitle="Nous avons une expertise approfondie dans les secteurs technologiques à forte valeur ajoutée."
        bg="light"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Intelligence Artificielle & Machine Learning",
            "Biotechnologie & Sciences de la Vie",
            "Logiciels & Systèmes",
            "Semiconducteurs & Électronique",
            "Télécommunications & 5G",
            "Blockchain & Fintech",
            "Énergies Renouvelables",
            "Internet des Objets (IoT)",
            "Cybersécurité",
            "Nanotechnologies",
            "Robotique & Automatisation",
            "Technologies Médicales"
          ].map((sector, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm text-center border-l-4 border-trdwnd-gold">
              <span className="text-gray-700 font-medium text-sm">{sector}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        bg="dark"
        className="py-12 sm:py-16 md:py-20"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Prêt à Monétiser Votre Technologie en Europe?</h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
            Transformez votre propriété intellectuelle en source de revenus durable sur le marché européen. Contactez nos experts en licences technologiques pour explorer les opportunités.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              <Link to="/fr/commencer">
                Évaluer Mes Technologies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              <a href="mailto:Eric.dauchy@eurogrowth.ca?subject=Opportunités de licence technologique">Nous Contacter</a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default TechLicensingPageFr;
