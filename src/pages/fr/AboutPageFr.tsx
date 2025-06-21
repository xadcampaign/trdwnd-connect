
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Users, 
  TrendingUp, 
  Award,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Linkedin
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const AboutPageFr = () => {
  return (
    <main>
      <Hero
        title="Votre Passerelle vers l'Expansion Européenne"
        subtitle="EuroGrowth connecte les entreprises canadiennes ambitieuses avec des partenaires européens stratégiques, ouvrant de nouveaux horizons de croissance et d'innovation."
        image="/lovable-uploads/17dad340-be33-4a0f-b331-5283eb3fc722.png"
      />

      <Section 
        title="Notre Mission" 
        subtitle="Nous facilitons l'expansion internationale des entreprises canadiennes en créant des partenariats stratégiques durables avec l'Union européenne."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-4 sm:mb-6 text-lg sm:text-xl leading-relaxed">
              Chez EuroGrowth, nous croyons que l'avenir du commerce international repose sur des partenariats authentiques et mutuellement bénéfiques. Notre mission est de connecter les entreprises canadiennes innovantes avec les bonnes opportunités européennes.
            </p>
            <p className="text-gray-600 mb-6 sm:mb-8 text-lg sm:text-xl leading-relaxed">
              Nous nous spécialisons dans l'identification, l'évaluation et la facilitation de partenariats stratégiques qui créent de la valeur réelle pour toutes les parties impliquées.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-trdwnd-navy flex-shrink-0" />
                <span className="text-gray-700 font-medium">Portée Internationale</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-trdwnd-navy flex-shrink-0" />
                <span className="text-gray-700 font-medium">Expertise Locale</span>
              </div>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-6 w-6 text-trdwnd-navy flex-shrink-0" />
                <span className="text-gray-700 font-medium">Croissance Prouvée</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-trdwnd-navy flex-shrink-0" />
                <span className="text-gray-700 font-medium">Excellence Reconnue</span>
              </div>
            </div>
          </div>
          <div>
            <img 
              src="/lovable-uploads/80909d8f-6f03-46f7-a4dc-702d151474b4.png" 
              alt="Équipe EuroGrowth" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </Section>

      <Section 
        title="Notre Équipe de Direction" 
        subtitle="Dirigée par des experts reconnus en développement des affaires internationales avec des décennies d'expérience combinée."
        bg="light"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 max-w-4xl mx-auto">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center">
            <img 
              src="/lovable-uploads/a7201968-6e87-4ad2-afe9-1217fb1720ce.png" 
              alt="Eric Dauchy" 
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 object-cover"
            />
            <h3 className="text-xl sm:text-2xl font-bold text-trdwnd-navy mb-2">Eric Dauchy</h3>
            <p className="text-trdwnd-gold font-semibold mb-3 sm:mb-4">Directeur Général</p>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Avec plus de 20 ans d'expérience dans le développement des affaires internationales, Eric a facilité plus de 100 partenariats réussis entre des entreprises canadiennes et européennes.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/in/ericdauchy/"
                className="text-trdwnd-navy hover:text-trdwnd-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:Eric.dauchy@eurogrowth.ca"
                className="text-trdwnd-navy hover:text-trdwnd-gold transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg text-center">
            <img 
              src="/lovable-uploads/b6db057a-109c-4d30-8766-909c77dffe5d.png" 
              alt="Eric Gerritsen" 
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto mb-4 sm:mb-6 object-cover"
            />
            <h3 className="text-xl sm:text-2xl font-bold text-trdwnd-navy mb-2">Eric Gerritsen</h3>
            <p className="text-trdwnd-gold font-semibold mb-3 sm:mb-4">Directeur Européen</p>
            <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Basé en Europe, Eric apporte une expertise inestimable du marché européen et maintient des relations étroites avec des partenaires clés à travers l'UE.
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="mailto:Eric@imperialyellowventures.com"
                className="text-trdwnd-navy hover:text-trdwnd-gold transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section 
        title="Notre Approche" 
        subtitle="Une méthodologie éprouvée pour créer des partenariats réussis et durables."
        bg="white"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {[
            {
              step: "01",
              title: "Découverte",
              description: "Nous analysons en profondeur votre entreprise, vos objectifs et votre positionnement sur le marché pour identifier les meilleures opportunités européennes."
            },
            {
              step: "02", 
              title: "Connexion",
              description: "Grâce à notre vaste réseau, nous identifions et connectons votre entreprise avec des partenaires européens alignés sur vos valeurs et objectifs."
            },
            {
              step: "03",
              title: "Facilitation",
              description: "Nous accompagnons le processus de négociation et de partenariat pour assurer un succès mutuel et une relation durable."
            }
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-trdwnd-navy text-white rounded-full flex items-center justify-center text-lg sm:text-xl font-bold mx-auto mb-4 sm:mb-6">
                {item.step}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-trdwnd-navy mb-3 sm:mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        title="Nos Réussites" 
        subtitle="Des résultats concrets qui parlent d'eux-mêmes."
        bg="light"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { number: "100+", label: "Partenariats Facilités" },
            { number: "€50M+", label: "Valeur des Accords" },
            { number: "15", label: "Pays Européens" },
            { number: "95%", label: "Taux de Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white p-6 sm:p-8 rounded-lg shadow-md">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-trdwnd-navy mb-2 sm:mb-3">{stat.number}</div>
              <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section 
        bg="dark"
        className="py-12 sm:py-16 md:py-20"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">Prêt à Commencer Votre Expansion Européenne?</h2>
          <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8">
            Contactez notre équipe dès aujourd'hui et découvrez comment nous pouvons transformer votre vision d'expansion en réalité.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              <Link to="/fr/commencer">Commencer Maintenant</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white bg-white/10 hover:bg-white/20 w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg">
              <Link to="/fr/services">Nos Services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default AboutPageFr;
