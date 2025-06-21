
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Users,
  Handshake,
  TrendingUp,
  Shield,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const JointVenturesPageFr = () => {
  return (
    <main>
      <Hero
        title="Coentreprises Stratégiques Européennes"
        subtitle="Créez des partenariats durables et mutuellement bénéfiques avec des entreprises européennes leaders pour partager ressources, risques et opportunités de marché."
        image="/lovable-uploads/80909d8f-6f03-46f7-a4dc-702d151474b4.png"
      />

      <Section 
        title="Partenariats Stratégiques pour la Croissance" 
        subtitle="Les coentreprises offrent une voie privilégiée pour accéder rapidement aux marchés européens en partageant expertise, ressources et réseaux."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
              Une coentreprise bien structurée peut transformer votre approche du marché européen en combinant vos forces canadiennes avec l'expertise locale de partenaires établis. Nous facilitons la création de partenariats stratégiques qui génèrent une valeur mutuelle significative.
            </p>
            <div className="space-y-4">
              {[
                "Identification de partenaires stratégiques compatibles",
                "Structuration juridique et financière optimisée",
                "Négociation d'accords équilibrés",
                "Gouvernance et gestion opérationnelle",
                "Support continu pour le succès à long terme"
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
              src="/lovable-uploads/b6db057a-109c-4d30-8766-909c77dffe5d.png" 
              alt="Partenariats stratégiques" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </Section>

      <Section 
        title="Types de Coentreprises" 
        subtitle="Nous facilitons différents modèles de coentreprises adaptés à vos objectifs stratégiques et aux spécificités du marché européen."
        bg="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {[
            {
              icon: <Users className="h-10 w-10 text-trdwnd-navy" />,
              title: "JV Opérationnelles",
              description: "Coentreprises focalisées sur les opérations commerciales quotidiennes, la distribution et la gestion de marché.",
              characteristics: [
                "Partage des opérations quotidiennes",
                "Ressources commerciales combinées",
                "Gestion de marché intégrée",
                "Économies d'échelle opérationnelles"
              ],
              idealFor: "Entreprises cherchant une présence opérationnelle immédiate en Europe"
            },
            {
              icon: <TrendingUp className="h-10 w-10 text-trdwnd-navy" />,
              title: "JV Technologiques",
              description: "Partenariats axés sur le développement technologique, l'innovation collaborative et la R&D partagée.",
              characteristics: [
                "Développement technologique conjoint",
                "Partage de la propriété intellectuelle",
                "Recherche et développement collaborative",
                "Innovation accélérée"
              ],
              idealFor: "Entreprises technologiques recherchant l'innovation collaborative"
            },
            {
              icon: <Handshake className="h-10 w-10 text-trdwnd-navy" />,
              title: "JV de Distribution",
              description: "Alliances stratégiques pour la distribution, la commercialisation et l'accès aux réseaux de clients européens.",
              characteristics: [
                "Réseaux de distribution partagés",
                "Accès aux bases de clients",
                "Marketing et ventes coordonnés",
                "Couverture géographique étendue"
              ],
              idealFor: "Entreprises voulant accéder rapidement aux marchés européens"
            },
            {
              icon: <Shield className="h-10 w-10 text-trdwnd-navy" />,
              title: "JV Financières",
              description: "Structures focalisées sur l'investissement, le financement de projets et la gestion de risques partagés.",
              characteristics: [
                "Partage des investissements",
                "Gestion des risques financiers",
                "Accès aux capitaux européens",
                "Optimisation fiscale"
              ],
              idealFor: "Projets nécessitant des investissements importants"
            }
          ].map((jv, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <div className="flex items-center gap-4 mb-4">
                {jv.icon}
                <h3 className="text-xl font-bold text-trdwnd-navy">{jv.title}</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">{jv.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-trdwnd-navy mb-2">Caractéristiques Clés:</h4>
                <div className="space-y-1">
                  {jv.characteristics.map((char, charIndex) => (
                    <div key={charIndex} className="flex items-center gap-2">
                      <CheckCircle className="h-3 w-3 text-trdwnd-gold flex-shrink-0" />
                      <span className="text-gray-700 text-xs">{char}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-3 bg-gray-50 rounded text-xs">
                <span className="font-medium text-trdwnd-navy">Idéal pour: </span>
                <span className="text-gray-600">{jv.idealFor}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="Notre Processus de Création de JV" 
        subtitle="Un processus structuré et éprouvé pour créer des coentreprises durables et performantes."
        bg="white"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                phase: "Phase 1",
                title: "Stratégie & Profil",
                description: "Définition de votre stratégie de coentreprise et création du profil de partenaire idéal.",
                duration: "2-3 semaines",
                activities: [
                  "Analyse des objectifs stratégiques",
                  "Définition des critères de partenaire",
                  "Évaluation des ressources disponibles",
                  "Stratégie de structuration JV"
                ]
              },
              {
                phase: "Phase 2",
                title: "Identification de Partenaires",
                description: "Recherche et qualification de partenaires européens potentiels alignés sur vos objectifs.",
                duration: "4-6 semaines",
                activities: [
                  "Recherche ciblée de partenaires",
                  "Évaluation de compatibilité",
                  "Due diligence préliminaire",
                  "Premiers contacts stratégiques"
                ]
              },
              {
                phase: "Phase 3",
                title: "Évaluation & Sélection",
                description: "Évaluation approfondie des candidats et sélection du ou des partenaires optimaux.",
                duration: "3-4 semaines",
                activities: [
                  "Due diligence complète",
                  "Évaluation financière et stratégique",
                  "Analyses de compatibilité culturelle",
                  "Sélection finale des partenaires"
                ]
              },
              {
                phase: "Phase 4",
                title: "Structuration Juridique",
                description: "Développement de la structure légale et financière optimale pour la coentreprise.",
                duration: "4-6 semaines",
                activities: [
                  "Choix de la structure juridique",
                  "Répartition des participations",
                  "Mécanismes de gouvernance",
                  "Accords de partenariat"
                ]
              },
              {
                phase: "Phase 5",
                title: "Négociation & Accord",
                description: "Négociation des termes finaux et finalisation des accords de coentreprise.",
                duration: "6-8 semaines",
                activities: [
                  "Négociation des termes",
                  "Rédaction des accords",
                  "Révision juridique",
                  "Signature et lancement"
                ]
              },
              {
                phase: "Phase 6",
                title: "Mise en Œuvre & Support",
                description: "Support pour le lancement opérationnel et l'optimisation continue de la coentreprise.",
                duration: "En continu",
                activities: [
                  "Setup opérationnel",
                  "Formation des équipes",
                  "Suivi des performances",
                  "Optimisation continue"
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
                <ul className="space-y-1">
                  {phase.activities.map((activity, activityIndex) => (
                    <li key={activityIndex} className="text-gray-700 text-xs flex items-center gap-2">
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
        title="Facteurs de Succès des Coentreprises" 
        subtitle="Les éléments clés que nous intégrons pour assurer le succès à long terme de vos partenariats stratégiques."
        bg="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              title: "Alignement Stratégique",
              description: "Vision partagée et objectifs complémentaires entre les partenaires.",
              elements: ["Objectifs communs", "Stratégies compatibles", "Vision à long terme", "Valeurs partagées"]
            },
            {
              title: "Gouvernance Claire",
              description: "Structures de décision et de gestion transparentes et efficaces.",
              elements: ["Organes de gouvernance", "Processus de décision", "Reporting régulier", "Résolution de conflits"]
            },
            {
              title: "Contribution Équilibrée",
              description: "Apports équitables en ressources, expertise et responsabilités.",
              elements: ["Ressources financières", "Expertise technique", "Accès aux marchés", "Capacités opérationnelles"]
            },
            {
              title: "Communication Efficace",
              description: "Canaux de communication ouverts et réguliers entre tous les partenaires.",
              elements: ["Réunions régulières", "Rapports transparents", "Feedback continu", "Gestion des attentes"]
            },
            {
              title: "Flexibilité Opérationnelle",
              description: "Capacité d'adaptation aux changements de marché et aux opportunités.",
              elements: ["Structures adaptables", "Processus agiles", "Innovation continue", "Évolution stratégique"]
            },
            {
              title: "Gestion des Risques",
              description: "Identification, évaluation et mitigation proactive des risques potentiels.",
              elements: ["Analyse des risques", "Plans de mitigation", "Assurances appropriées", "Mécanismes de sortie"]
            }
          ].map((factor, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-trdwnd-navy mb-3">{factor.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{factor.description}</p>
              <div className="space-y-2">
                {factor.elements.map((element, elementIndex) => (
                  <div key={elementIndex} className="flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-trdwnd-gold flex-shrink-0" />
                    <span className="text-gray-700 text-xs">{element}</span>
                  </div>
                ))}
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Prêt à Créer des Partenariats Stratégiques?</h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
            Accélérez votre expansion européenne grâce à des coentreprises stratégiques. Contactez-nous pour explorer les opportunités de partenariat dans votre secteur.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              <Link to="/fr/commencer">
                Explorer les Partenariats
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              <a href="mailto:Eric.dauchy@eurogrowth.ca?subject=Opportunités de coentreprise européenne">Nous Contacter</a>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default JointVenturesPageFr;
