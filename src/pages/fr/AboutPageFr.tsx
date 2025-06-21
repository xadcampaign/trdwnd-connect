
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { ExternalLink } from "lucide-react";

const AboutPageFr = () => {
  return (
    <main>
      <Hero
        title="À propos d'EUROGROWTH"
        subtitle="Votre partenaire de confiance pour l'expansion vers les marchés européens"
        image="/lovable-uploads/01b447e6-649d-4a6d-b1fa-0abac25589bb.png"
        height="lg:h-[70vh]"
      />

      <Section title="Pourquoi nous choisir" subtitle="Créer des ponts entre l'innovation canadienne et les marchés européens">
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12 items-center">
          <div>
            <p className="text-gray-600 mb-6 text-xl">
              Fondé en 2015, EUROGROWTH est né de la vision d'Eric Dauchy et Eric Gerritsen, deux experts en affaires internationales qui ont reconnu le potentiel inexploité des entreprises canadiennes sur les marchés européens.
            </p>
            <p className="text-gray-600 mb-6 text-xl">
              Avec des bureaux à Bruxelles (UE) et Vancouver (Canada), notre équipe de direction offre une approche unique à double perspective pour le développement des affaires internationales.
            </p>
            <p className="text-gray-600 mb-6 text-xl">
              Le moment est venu de réduire la dépendance au commerce américain et de s'étendre en Europe. Construisons ensemble votre histoire de succès européen.
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="text-2xl font-bold text-trdwnd-navy">Pourquoi nous choisir?</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-trdwnd-navy">Réseau étendu dans l'UE</h4>
                    <p className="text-gray-600">Des décennies d'expérience et des partenariats de premier plan dans les industries européennes clés.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-trdwnd-navy">Support pour le commerce et l'entrée sur le marché</h4>
                    <p className="text-gray-600">Conseils d'experts sur la conformité réglementaire, la logistique et l'intelligence de marché.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-trdwnd-navy">Atténuation des risques</h4>
                    <p className="text-gray-600">Connexions sécurisées et vérifiées pour éviter les erreurs coûteuses.</p>
                  </div>
                </li>
                <li className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-trdwnd-navy">Mise en relation personnalisée</h4>
                    <p className="text-gray-600">Présentations sur mesure aux acheteurs, fournisseurs et investisseurs européens.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Notre mission et nos valeurs" bg="light">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-trdwnd-navy mb-4">Notre mission</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Permettre aux entreprises canadiennes d'entrer avec succès et de prospérer sur les marchés européens en fournissant des connexions stratégiques, des informations de marché et des opportunités de partenariat qui favorisent une croissance internationale durable.
            </p>
            <div className="border-l-4 border-trdwnd-gold pl-4 italic text-gray-600">
              "Nous croyons que l'innovation canadienne mérite une scène mondiale, et nous nous engageons à faire en sorte que cela se produise grâce à des partenariats européens significatifs."
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-trdwnd-navy mb-4">Nos valeurs</h3>
            <ul className="space-y-4">
              {[
                {
                  title: "Excellence",
                  description: "Nous maintenons les normes les plus élevées dans toutes nos relations d'affaires et nos partenariats."
                },
                {
                  title: "Intégrité",
                  description: "Nous opérons avec transparence et honnêteté, construisant la confiance avec nos clients et partenaires."
                },
                {
                  title: "Innovation",
                  description: "Nous embrassons les solutions créatives et les approches avant-gardistes des affaires internationales."
                },
                {
                  title: "Partenariat",
                  description: "Nous croyons en des relations mutuellement bénéfiques qui créent de la valeur à long terme pour toutes les parties."
                }
              ].map((value, index) => (
                <li key={index} className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-trdwnd-navy">{value.title}</h4>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Notre équipe" subtitle="Rencontrez les fondateurs qui dirigent la mission d'EUROGROWTH">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-trdwnd-navy mb-2">Eric Dauchy</h3>
              <p className="text-trdwnd-gold font-medium mb-4">Co-fondateur et PDG</p>
              <div className="space-y-4 text-gray-600">
                <div className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <p>Fondateur et PDG de The Constellation Group (1998) - agence de développement des affaires paneuropéenne avec des partenaires dans 27 États membres de l'UE, Royaume-Uni, Norvège, Suisse.</p>
                </div>
                <div className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <p>Responsable de diriger les programmes de développement des affaires des clients high-tech et aérospatiale/défense de TCG en Europe.</p>
                </div>
                <div className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <p>A occupé des postes de direction dans la gestion de la chaîne d'approvisionnement, la stratégie, les ventes, la gestion de programmes, les opérations et les communications.</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.linkedin.com/in/ericdauchy/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-trdwnd-navy hover:text-trdwnd-darkblue font-medium inline-flex items-center"
                >
                  Se connecter sur LinkedIn
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="mt-auto">
              <img 
                src="/lovable-uploads/21e2fefa-5229-43b8-9fe9-3c76cac4a51e.png" 
                alt="Eric Dauchy" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-trdwnd-navy mb-2">Eric Gerritsen</h3>
              <p className="text-trdwnd-gold font-medium mb-4">Co-fondateur et COO</p>
              <div className="space-y-4 text-gray-600">
                <div className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <p>Supervise les opérations canadiennes, les communications, le développement des affaires et la stratégie, et les programmes d'entreprise.</p>
                </div>
                <div className="flex">
                  <div className="bg-trdwnd-lightblue rounded-full h-6 w-6 flex items-center justify-center mt-1 mr-3 flex-shrink-0">
                    <div className="bg-trdwnd-navy rounded-full h-2 w-2"></div>
                  </div>
                  <p>Ancien SVP Global Alliances Terra Lycos, devenu VC ; co-fondateur/PDG de diverses startups nord-américaines.</p>
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="https://www.linkedin.com/in/eric-j-gerritsen-6b9117/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-trdwnd-navy hover:text-trdwnd-darkblue font-medium inline-flex items-center"
                >
                  Se connecter sur LinkedIn
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="mt-auto">
              <img 
                src="/lovable-uploads/00b16b7e-c499-4724-b5ba-f0d5564f8ce1.png" 
                alt="Eric Gerritsen" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        bg="dark"
        className="py-20 md:py-28"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-trdwnd-gold mb-2">25+</div>
            <p className="text-white">Années d'expérience combinée</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-trdwnd-gold mb-2">40+</div>
            <p className="text-white">Partenariats UE réussis</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-trdwnd-gold mb-2">27+</div>
            <p className="text-white">UE + Royaume-Uni, Norvège et Suisse</p>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default AboutPageFr;
