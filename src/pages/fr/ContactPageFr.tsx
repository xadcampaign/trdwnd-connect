
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";

const ContactPageFr = () => {
  return (
    <main className="pt-20 sm:pt-24 md:pt-28">
      <Section 
        title="Contactez-Nous" 
        subtitle="Prêt à étendre votre entreprise en Europe? Contactez notre équipe pour discuter de vos objectifs d'expansion et découvrir comment nous pouvons vous aider."
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md border">
              <div className="flex items-center mb-4">
                <Mail className="h-6 w-6 text-trdwnd-navy mr-3" />
                <h3 className="text-xl font-semibold text-trdwnd-navy">Email</h3>
              </div>
              <p className="text-gray-600 mb-2">Contactez-nous directement:</p>
              <a 
                href="mailto:Eric.dauchy@eurogrowth.ca" 
                className="text-trdwnd-navy hover:text-trdwnd-darkblue font-medium"
              >
                Eric.dauchy@eurogrowth.ca
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <div className="flex items-center mb-4">
                <Phone className="h-6 w-6 text-trdwnd-navy mr-3" />
                <h3 className="text-xl font-semibold text-trdwnd-navy">Téléphone</h3>
              </div>
              <p className="text-gray-600 mb-2">Parlons de vos objectifs:</p>
              <p className="text-trdwnd-navy font-medium">Disponible sur rendez-vous</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-trdwnd-navy mr-3" />
                <h3 className="text-xl font-semibold text-trdwnd-navy">Localisation</h3>
              </div>
              <p className="text-gray-600 mb-2">Basé au Canada, connecté à l'Europe</p>
              <p className="text-trdwnd-navy font-medium">Service dans toute l'Amérique du Nord et l'UE</p>
            </div>

            <div className="bg-trdwnd-lightblue p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-trdwnd-navy mb-3">Pourquoi Nous Choisir?</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-trdwnd-navy mr-2">•</span>
                  Expertise approfondie des marchés européens
                </li>
                <li className="flex items-start">
                  <span className="text-trdwnd-navy mr-2">•</span>
                  Réseau établi de partenaires de confiance
                </li>
                <li className="flex items-start">
                  <span className="text-trdwnd-navy mr-2">•</span>
                  Approche personnalisée pour chaque client
                </li>
                <li className="flex items-start">
                  <span className="text-trdwnd-navy mr-2">•</span>
                  Support continu tout au long du processus
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <h3 className="text-2xl font-semibold text-trdwnd-navy mb-4">Envoyez-nous un Message</h3>
            <p className="text-gray-600 mb-6">
              Remplissez notre formulaire détaillé pour nous aider à mieux comprendre vos besoins d'expansion européenne.
            </p>
            <ContactForm className="w-full" />
          </div>
        </div>
      </Section>

      <Section bg="dark" className="py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Commençons Votre Voyage d'Expansion Européenne
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            Chaque grande expansion commence par une conversation. Contactez-nous aujourd'hui pour transformer vos ambitions européennes en réalité.
          </p>
          <Button asChild size="lg" className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium px-8 py-4 text-lg">
            <a href="mailto:Eric.dauchy@eurogrowth.ca?subject=Demande d'expansion du marché européen">
              <Mail className="mr-2 h-5 w-5" />
              Envoyer un Email Maintenant
            </a>
          </Button>
        </div>
      </Section>
    </main>
  );
};

export default ContactPageFr;
