
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  BarChart,
  TrendingUp,
  Globe,
  FileText,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const EUMarketAnalysisPageFr = () => {
  return (
    <main>
      <Hero
        title="Analyse du Marché de l'Union Européenne"
        subtitle="Des études de marché approfondies et des analyses stratégiques pour identifier les meilleures opportunités d'expansion européenne pour votre entreprise."
        image="/lovable-uploads/09aed651-6a4c-4d99-8e45-c5162d0e1fc0.png"
      />

      <Section 
        title="Service d'Analyse Complète" 
        subtitle="Une approche méthodique pour évaluer le potentiel de votre entreprise sur les marchés européens spécifiques."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Notre service d'analyse du marché UE fournit une évaluation détaillée des opportunités, des défis et du potentiel de croissance pour votre entreprise dans les 27 pays membres de l'Union européenne.
            </p>
            <div className="space-y-4">
              {[
                "Analyse approfondie de la demande du marché",
                "Évaluation de la concurrence locale",
                "Identification des segments cibles",
                "Analyse réglementaire et de conformité",
                "Recommandations stratégiques d'entrée"
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
              src="/lovable-uploads/d4b987db-da88-45c3-994e-780d7e95ba98.png" 
              alt="Analyse de marché européen" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </Section>

      <Section 
        title="Ce Qui Est Inclus" 
        subtitle="Un rapport complet qui vous donne tous les éléments nécessaires pour prendre des décisions éclairées."
        bg="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              icon: <BarChart className="h-8 w-8 text-trdwnd-navy" />,
              title: "Données de Marché",
              description: "Taille du marché, taux de croissance, tendances sectorielles et projections détaillées."
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-trdwnd-navy" />,
              title: "Analyse Concurrentielle",
              description: "Identification des concurrents clés, analyse SWOT et positionnement stratégique."
            },
            {
              icon: <Globe className="h-8 w-8 text-trdwnd-navy" />,
              title: "Segmentation Géographique",
              description: "Analyse pays par pays avec priorités d'entrée et stratégies spécifiques."
            },
            {
              icon: <FileText className="h-8 w-8 text-trdwnd-navy" />,
              title: "Cadre Réglementaire",
              description: "Exigences légales, certifications nécessaires et processus de conformité."
            }
          ].map((component, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="mb-4">{component.icon}</div>
              <h3 className="text-lg font-semibold text-trdwnd-navy mb-3">{component.title}</h3>
              <p className="text-gray-600 text-sm">{component.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="Notre Méthodologie" 
        subtitle="Une approche structurée en 4 phases pour garantir la qualité et la pertinence de notre analyse."
        bg="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {[
            {
              phase: "Phase 1",
              title: "Collecte de Données",
              description: "Recherche approfondie utilisant des sources primaires et secondaires, bases de données européennes officielles et enquêtes sectorielles.",
              duration: "1-2 semaines",
              activities: [
                "Analyse des données Eurostat",
                "Recherche sectorielle spécialisée", 
                "Interviews avec experts locaux",
                "Analyse des tendances réglementaires"
              ]
            },
            {
              phase: "Phase 2",
              title: "Analyse Stratégique",
              description: "Traitement et analyse des données collectées pour identifier les opportunités et les défis spécifiques à votre secteur.",
              duration: "1-2 semaines",
              activities: [
                "Modélisation de la demande",
                "Analyse concurrentielle détaillée",
                "Évaluation des barrières d'entrée",
                "Identification des niches de marché"
              ]
            },
            {
              phase: "Phase 3",
              title: "Développement de Stratégies",
              description: "Formulation de recommandations stratégiques personnalisées basées sur vos objectifs et capacités organisationnelles.",
              duration: "1 semaine",
              activities: [
                "Stratégies d'entrée par pays",
                "Recommandations de positionnement",
                "Plans de mise en œuvre",
                "Évaluation des risques"
              ]
            },
            {
              phase: "Phase 4",
              title: "Rapport et Présentation",
              description: "Livraison d'un rapport complet avec présentation exécutive et session de questions-réponses.",
              duration: "3-5 jours",
              activities: [
                "Rapport détaillé (50-100 pages)",
                "Présentation exécutive",
                "Session Q&R avec l'équipe",
                "Plan d'action recommandé"
              ]
            }
          ].map((phase, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-trdwnd-navy text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <span className="text-trdwnd-gold text-sm font-medium">{phase.phase}</span>
                  <h3 className="text-lg font-semibold text-trdwnd-navy">{phase.title}</h3>
                </div>
              </div>
              <p className="text-gray-600 mb-4 text-sm">{phase.description}</p>
              <div className="text-xs text-gray-500 mb-3 bg-white px-2 py-1 rounded inline-block">
                Durée: {phase.duration}
              </div>
              <ul className="space-y-1">
                {phase.activities.map((activity, activityIndex) => (
                  <li key={activityIndex} className="text-gray-700 text-sm flex items-center gap-2">
                    <div className="w-1 h-1 bg-trdwnd-gold rounded-full"></div>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="Secteurs d'Expertise" 
        subtitle="Nous avons une expérience approfondie dans l'analyse de marchés européens pour ces secteurs clés."
        bg="light"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "Technologie et logiciels",
            "Aérospatiale et défense", 
            "Sciences de la vie",
            "Énergie renouvelable",
            "Services financiers",
            "Industrie manufacturière",
            "Agriculture et agroalimentaire",
            "Télécommunications",
            "Transport et logistique"
          ].map((sector, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-trdwnd-gold">
              <span className="text-gray-700 font-medium">{sector}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        bg="dark"
        className="py-12 sm:py-16 md:py-20"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Prêt à Explorer le Marché Européen?</h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
            Obtenez l'intelligence de marché dont vous avez besoin pour prendre des décisions stratégiques éclairées. Contactez-nous pour discuter de vos besoins spécifiques d'analyse de marché.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              <Link to="/fr/commencer">
                Demander une Analyse
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              <a href="mailto:Eric.dauchy@eurogrowth.ca?subject=Demande d'analyse de marché UE">Nous Contacter</a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default EUMarketAnalysisPageFr;
