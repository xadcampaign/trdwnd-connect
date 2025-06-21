
import { Button } from "@/components/ui/button";
import { 
  CheckCircle,
  Clock,
  Users,
  Globe,
  ArrowRight,
  Mail,
  Phone,
  Calendar
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

const GetStartedPageFr = () => {
  return (
    <main>
      <Hero
        title="Commencez Votre Expansion Européenne"
        subtitle="Prenez le premier pas vers une croissance internationale réussie. Notre équipe d'experts vous guidera à chaque étape du processus."
        image="/lovable-uploads/1a9c0d1b-f8d3-4b1a-a72d-8d15e3e9765d.png"
      />

      <Section 
        title="Comment Nous Pouvons Vous Aider" 
        subtitle="Un processus structuré pour maximiser vos chances de succès sur les marchés européens."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              icon: <Globe className="h-10 w-10 text-trdwnd-navy" />,
              title: "Évaluation Gratuite",
              description: "Analyse complète de votre potentiel d'expansion européenne et identification des meilleures opportunités.",
              duration: "30-45 minutes",
              included: [
                "Analyse de marché préliminaire",
                "Évaluation du potentiel",
                "Recommandations stratégiques",
                "Plan d'action personnalisé"
              ]
            },
            {
              icon: <Users className="h-10 w-10 text-trdwnd-navy" />,
              title: "Stratégie Sur Mesure",
              description: "Développement d'une stratégie personnalisée basée sur vos objectifs spécifiques et votre secteur d'activité.",
              duration: "2-3 semaines",
              included: [
                "Recherche de marché approfondie",
                "Identification des partenaires potentiels",
                "Stratégie d'approche",
                "Timeline détaillée"
              ]
            },
            {
              icon: <CheckCircle className="h-10 w-10 text-trdwnd-navy" />,
              title: "Exécution & Support",
              description: "Mise en œuvre de votre stratégie avec accompagnement continu jusqu'à la finalisation des partenariats.",
              duration: "3-6 mois",
              included: [
                "Présentation aux partenaires",
                "Négociation assistée",
                "Support juridique",
                "Suivi post-accord"
              ]
            }
          ].map((step, index) => (
            <div key={index} className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-4">
                {step.icon}
                <div className="text-sm bg-trdwnd-lightblue text-trdwnd-navy px-3 py-1 rounded-full font-medium">
                  Étape {index + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold text-trdwnd-navy mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-4 text-sm sm:text-base">{step.description}</p>
              <div className="flex items-center gap-2 mb-4 text-trdwnd-gold">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">{step.duration}</span>
              </div>
              <div className="space-y-2">
                {step.included.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-trdwnd-gold flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="Options de Contact" 
        subtitle="Choisissez la méthode qui vous convient le mieux pour commencer votre parcours d'expansion."
        bg="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Mail className="h-8 w-8 text-trdwnd-navy mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-trdwnd-navy mb-3">Email Direct</h3>
            <p className="text-gray-600 text-sm mb-4">Contactez-nous directement pour une réponse rapide à vos questions.</p>
            <Button asChild className="w-full bg-trdwnd-navy hover:bg-trdwnd-darkblue">
              <a href="mailto:Eric.dauchy@eurogrowth.ca?subject=Demande d'expansion européenne">
                Envoyer un Email
              </a>
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Phone className="h-8 w-8 text-trdwnd-navy mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-trdwnd-navy mb-3">Appel Téléphonique</h3>
            <p className="text-gray-600 text-sm mb-4">Discutez directement avec notre équipe pour une consultation immédiate.</p>
            <Button asChild className="w-full bg-trdwnd-navy hover:bg-trdwnd-darkblue">
              <a href="tel:+32498513077">
                Appeler Maintenant
              </a>
            </Button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Calendar className="h-8 w-8 text-trdwnd-navy mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-trdwnd-navy mb-3">Questionnaire Détaillé</h3>
            <p className="text-gray-600 text-sm mb-4">Remplissez notre formulaire pour une analyse personnalisée approfondie.</p>
            <Button asChild className="w-full bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSf6ef8G0TUE0oHvUmD3Ik7Pxz6hJkC4THU4kTotAstCUZ25og/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Remplir le Formulaire
              </a>
            </Button>
          </div>
        </div>
      </Section>

      <Section 
        title="Questions Fréquentes" 
        subtitle="Réponses aux questions les plus courantes sur notre processus d'expansion européenne."
        bg="white"
      >
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              question: "Combien de temps prend le processus complet?",
              answer: "Le processus varie selon la complexité et le type de partenariat recherché. En moyenne, de l'évaluation initiale à la signature d'un accord, comptez entre 4 à 8 mois. Nous travaillons pour accélérer ce processus autant que possible."
            },
            {
              question: "Quels sont vos honoraires?",
              answer: "Nos honoraires sont basés sur le succès - nous ne sommes payés que lorsque vous réussissez. L'évaluation initiale est gratuite, et nous discutons de notre structure tarifaire transparente lors de notre première consultation."
            },
            {
              question: "Dans quels pays européens travaillez-vous?",
              answer: "Nous avons des contacts établis dans tous les pays de l'UE, avec une expertise particulière en Allemagne, France, Pays-Bas, Belgique, et dans les pays nordiques. Notre réseau s'étend également aux marchés émergents d'Europe de l'Est."
            },
            {
              question: "Que se passe-t-il si aucun partenariat ne se concrétise?",
              answer: "Notre approche basée sur le succès signifie que vous ne payez que pour les résultats obtenus. Si aucun partenariat ne se concrétise malgré nos efforts, vous ne nous devez rien au-delà des frais convenus initialement."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-trdwnd-navy mb-3">{faq.question}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="Prêt à Commencer?" 
        subtitle="Remplissez notre formulaire détaillé ci-dessous pour une évaluation personnalisée de votre potentiel d'expansion européenne."
        bg="light"
      >
        <ContactForm className="max-w-4xl mx-auto" />
      </Section>

      <Section 
        bg="dark"
        className="py-12 sm:py-16"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Votre Succès Européen Commence Aujourd'hui</h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
            Rejoignez les nombreuses entreprises canadiennes qui ont déjà réussi leur expansion européenne avec notre aide. Le moment idéal pour commencer, c'est maintenant.
          </p>
          <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium px-8 py-4 text-lg">
            <a href="mailto:Eric.dauchy@eurogrowth.ca?subject=Prêt à commencer l'expansion européenne" className="inline-flex items-center">
              Commencer Maintenant
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </Section>
    </main>
  );
};

export default GetStartedPageFr;
