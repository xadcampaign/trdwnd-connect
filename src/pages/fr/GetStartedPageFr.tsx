
import { useState } from "react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, MessageSquare, Clock, Link } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ContactForm from "@/components/ContactForm";

const GetStartedPageFr = () => {
  const { toast } = useToast();

  return (
    <main>
      <Hero
        title="Commencer"
        subtitle="Commencez votre parcours d'expansion vers les marchés européens avec les conseils d'experts d'EUROGROWTH"
        image="https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        height="lg:h-[60vh]"
      />

      <Section className="py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-trdwnd-navy mb-6">Envoyez-nous un Message</h2>
            <p className="text-gray-600 mb-8">
              Remplissez le formulaire ci-dessous et un de nos spécialistes en affaires internationales vous répondra dans les 24 heures.
            </p>
            
            <ContactForm />

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <Link className="h-6 w-6 text-trdwnd-gold" />
                <h3 className="text-xl font-semibold text-trdwnd-navy">Motif de Contact</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Pour une approche plus structurée, veuillez remplir notre questionnaire Google Forms. Cela nous aide à recueillir des informations complètes sur votre entreprise et vos objectifs d'expansion.
              </p>
              <Button 
                asChild
                className="bg-trdwnd-gold hover:bg-trdwnd-gold/90 text-trdwnd-navy font-medium"
              >
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSf6ef8G0TUE0oHvUmD3Ik7Pxz6hJkC4THU4kTotAstCUZ25og/viewform?usp=header" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Link className="mr-2 h-4 w-4" />
                  Comment Pouvons-Nous Vous Aider?
                </a>
              </Button>
            </div>
          </div>
          
          <div>
            <div className="bg-trdwnd-navy text-white rounded-lg shadow-md p-8 mb-8">
              <h3 className="text-xl font-semibold mb-6">Informations de Contact</h3>
              <ul className="space-y-6">
                <li className="flex items-start">
                  <Mail className="h-6 w-6 text-trdwnd-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Eric Dauchy</p>
                    <a href="mailto:Eric.Dauchy@EuroGrowth.ca" className="text-gray-300 hover:text-trdwnd-gold transition-colors">
                      Contact
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Mail className="h-6 w-6 text-trdwnd-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Eric Gerritsen</p>
                    <a href="mailto:Eric.Gerritsen@EuroGrowth.ca" className="text-gray-300 hover:text-trdwnd-gold transition-colors">
                      Contact
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Phone className="h-6 w-6 text-trdwnd-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <a href="tel:+32498513077" className="text-gray-300 hover:text-trdwnd-gold transition-colors">
                      +32 498 51 30 77
                    </a>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <MapPin className="h-6 w-6 text-trdwnd-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Bureaux</p>
                    <address className="text-gray-300 not-italic">
                      Bureaux à Toronto, Vancouver, Bruxelles, Londres et Hong Kong
                    </address>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Clock className="h-6 w-6 text-trdwnd-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Heures d'Ouverture</p>
                    <p className="text-gray-300">
                      Lundi - Vendredi<br />
                      9h00 - 17h00 EST
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-semibold text-trdwnd-navy mb-4">Bureau Européen</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-trdwnd-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <address className="text-gray-600 not-italic">
                      Bureaux à Bruxelles, Londres et Hong Kong
                    </address>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-trdwnd-gold mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="tel:+32498513077" className="text-gray-600 hover:text-trdwnd-navy transition-colors">
                      +32 498 51 30 77
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="light" className="py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl font-bold text-trdwnd-navy mb-4">Foire Aux Questions</h2>
          <p className="text-gray-600">
            Trouvez des réponses aux questions courantes sur nos services et notre approche du développement des affaires internationales.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              question: "Combien de temps faut-il généralement pour établir un partenariat européen?",
              answer: "La chronologie varie selon l'industrie et les exigences spécifiques, mais la plupart des partenariats prennent entre 3 et 6 mois à établir. Notre approche structurée aide à rationaliser ce processus autant que possible."
            },
            {
              question: "Travaillez-vous avec des entreprises de toutes tailles?",
              answer: "Nous travaillons avec des entreprises canadiennes ayant un chiffre d'affaires de 50 à 500 millions CAD. Nos services sont adaptés pour répondre aux besoins et ressources spécifiques de chaque client."
            },
            {
              question: "Dans quels pays européens opérez-vous?",
              answer: "Nous fournissons des résultats dans toute l'Union européenne, le Royaume-Uni et Israël."
            },
            {
              question: "Quels sont vos honoraires et votre structure tarifaire?",
              answer: "Nous offrons des modèles d'engagement flexibles incluant des honoraires basés sur les projets, des acomptes et une rémunération basée sur le succès. Nous travaillerons avec vous pour déterminer la structure la plus appropriée selon vos besoins et objectifs spécifiques."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start">
                <MessageSquare className="h-5 w-5 text-trdwnd-gold mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-trdwnd-navy mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
};

export default GetStartedPageFr;
