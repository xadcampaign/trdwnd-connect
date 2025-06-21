
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Handshake,
  Network,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const DistributionDealsPageFr = () => {
  return (
    <main>
      <Hero
        title="Accords de Distribution Européenne"
        subtitle="Connectez votre entreprise avec des distributeurs établis et fiables à travers l'Europe pour accélérer votre présence sur le marché."
        image="/lovable-uploads/00b16b7e-c499-4724-b5ba-f0d5564f8ce1.png"
      />

      <Section 
        title="Accès au Réseau de Distribution Européen" 
        subtitle="Tirez parti de notre vaste réseau de distributeurs vérifiés pour faire entrer rapidement vos produits sur les marchés européens."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Les accords de distribution sont souvent la voie la plus rapide et la plus efficace pour entrer sur de nouveaux marchés européens. Notre service vous connecte avec des distributeurs pré-qualifiés qui correspondent parfaitement à votre secteur et à vos objectifs.
            </p>
            <div className="space-y-4">
              {[
                "Réseau de plus de 500 distributeurs vérifiés",
                "Couverture complète des 27 pays de l'UE",
                "Processus de qualification rigoureux",
                "Support de négociation et juridique",
                "Suivi et optimisation continue"
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
              src="/lovable-uploads/d689885c-f3e4-40b2-b834-e85f77743a06.png" 
              alt="Réseau de distribution européen" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </Section>

      <Section 
        title="Types d'Accords de Distribution" 
        subtitle="Nous facilitons différents types d'accords selon vos besoins et objectifs commerciaux."
        bg="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: <Handshake className="h-8 w-8 text-trdwnd-navy" />,
              title: "Distribution Exclusive",
              description: "Partenariats exclusifs avec des distributeurs de premier plan pour une pénétration de marché maximale.",
              benefits: [
                "Engagement total du distributeur",
                "Investissement marketing partagé",
                "Territoire protégé",
                "Support technique dédié"
              ]
            },
            {
              icon: <Network className="h-8 w-8 text-trdwnd-navy" />,
              title: "Distribution Sélective",
              description: "Réseau de distributeurs spécialisés pour cibler des segments de marché spécifiques.",
              benefits: [
                "Flexibilité géographique",
                "Expertise sectorielle",
                "Couverture de niche",
                "Gestion simplifiée"
              ]
            },
            {
              icon: <TrendingUp className="h-8 w-8 text-trdwnd-navy" />,
              title: "Distribution Intensive",
              description: "Large réseau de distributeurs pour une couverture de marché maximale et une disponibilité étendue.",
              benefits: [
                "Couverture maximale",
                "Volume de ventes élevé",
                "Présence omniprésente",
                "Économies d'échelle"
              ]
            }
          ].map((type, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">{type.icon}</div>
              <h3 className="text-xl font-semibold text-trdwnd-navy mb-3">{type.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{type.description}</p>
              <div className="space-y-2">
                {type.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-trdwnd-gold flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="Notre Processus de Mise en Relation" 
        subtitle="Un processus structuré pour identifier, évaluer et connecter votre entreprise avec les distributeurs les plus appropriés."
        bg="white"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                step: "1-2",
                title: "Profil et Recherche",
                description: "Nous analysons votre produit, votre marché cible et identifions les distributeurs potentiels qui correspondent à vos critères.",
                activities: [
                  "Analyse de votre offre produit",
                  "Définition des critères de sélection",
                  "Recherche dans notre base de données",
                  "Pré-qualification des candidats"
                ],
                duration: "2-3 semaines"
              },
              {
                step: "3-4",
                title: "Évaluation et Contact",
                description: "Évaluation approfondie des distributeurs sélectionnés et prise de contact initiale pour évaluer l'intérêt mutuel.",
                activities: [
                  "Due diligence des distributeurs",
                  "Évaluation financière et opérationnelle",
                  "Premiers contacts et présentations",
                  "Évaluation de l'alignement stratégique"
                ],
                duration: "3-4 semaines"
              },
              {
                step: "5-6",
                title: "Négociation et Accord",
                description: "Support dans les négociations contractuelles et finalisation des accords de distribution mutuellement bénéfiques.",
                activities: [
                  "Préparation des termes de négociation",
                  "Facilitation des discussions",
                  "Révision juridique des contrats",
                  "Finalisation des accords"
                ],
                duration: "4-6 semaines"
              },
              {
                step: "7+",
                title: "Suivi et Optimisation",
                description: "Accompagnement continu pour assurer le succès de la relation et optimiser les performances de distribution.",
                activities: [
                  "Suivi des performances",
                  "Résolution de conflits",
                  "Optimisation des processus",
                  "Expansion du réseau"
                ],
                duration: "En continu"
              }
            ].map((phase, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-trdwnd-navy text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {phase.step}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-trdwnd-navy">{phase.title}</h3>
                    <span className="text-xs text-trdwnd-gold">{phase.duration}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">{phase.description}</p>
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
        </div>
      </Section>

      <Section 
        title="Critères de Sélection des Distributeurs" 
        subtitle="Nous appliquons des critères rigoureux pour garantir la qualité et la fiabilité de nos partenaires distributeurs."
        bg="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: <Shield className="h-6 w-6 text-trdwnd-navy" />,
              title: "Solidité Financière",
              criteria: ["Bilans audités", "Historique de crédit", "Stabilité financière", "Capacité d'investissement"]
            },
            {
              icon: <Network className="h-6 w-6 text-trdwnd-navy" />,
              title: "Réseau Commercial",
              criteria: ["Couverture géographique", "Base de clients", "Équipe de vente", "Canaux de distribution"]
            },
            {
              icon: <TrendingUp className="h-6 w-6 text-trdwnd-navy" />,
              title: "Performance",
              criteria: ["Historique de croissance", "Part de marché", "Références clients", "Indicateurs clés"]
            },
            {
              icon: <Handshake className="h-6 w-6 text-trdwnd-navy" />,
              title: "Alignement Stratégique",
              criteria: ["Vision partagée", "Valeurs communes", "Complémentarité", "Engagement long terme"]
            }
          ].map((criterion, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center gap-3 mb-4">
                {criterion.icon}
                <h3 className="text-lg font-semibold text-trdwnd-navy">{criterion.title}</h3>
              </div>
              <ul className="space-y-2">
                {criterion.criteria.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700 text-sm flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-trdwnd-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        bg="dark"
        className="py-12 sm:py-16 md:py-20"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Prêt à Élargir Votre Réseau de Distribution?</h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
            Accélérez votre expansion européenne en vous connectant avec notre réseau de distributeurs vérifiés. Contactez-nous pour explorer les opportunités de distribution dans votre secteur.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              <Link to="/fr/commencer">
                Explorer les Distributeurs
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              <a href="mailto:Eric.dauchy@eurogrowth.ca?subject=Opportunités de distribution européenne">Nous Contacter</a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default DistributionDealsPageFr;
