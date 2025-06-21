
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Handshake, 
  TrendingUp, 
  Users,
  Search,
  BarChart4,
  Building,
  Briefcase,
  Shield,
  Cpu,
  Plane,
  LineChart,
  FileCode,
  Laptop,
  Network,
  Key,
  CheckCircle2,
  Rocket,
  MapPin
} from "lucide-react";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ServicesPageFr = () => {
  return (
    <main>
      <Hero
        title="Expansion des Marchés d'Exportation Canadiens"
        subtitle="Grâce à des Partenariats d'Élite avec l'UE et aux Avantages de l'AECG"
        image="/lovable-uploads/1d265835-a059-478d-a81e-38582d71462d.png"
        height="lg:h-[70vh]"
      />

      <Section>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-trdwnd-navy mb-6">Accélérer les Affaires Canadiennes en Europe</h2>
          <p className="text-lg text-gray-600 mb-4">
            Avec les tarifs américains sur les produits canadiens atteignant 25%, l'urgence pour les entreprises canadiennes de diversifier leurs marchés d'exportation n'a jamais été aussi grande. EuroGrowth LLC est le connecteur de premier plan pour les entreprises canadiennes cherchant des partenariats de haute qualité dans l'Union européenne.
          </p>
          <p className="text-lg text-gray-600">
            En tirant parti de l'Accord Économique et Commercial Global (AECG) Canada-UE, nous aidons les entreprises à accéder à un marché de plus de 440 millions de consommateurs européens avec des tarifs réduits, des réglementations simplifiées et une entrée sur le marché plus rapide. Notre réseau profond de fabricants, distributeurs et investisseurs européens de confiance garantit que les entreprises canadiennes établissent des relations rentables et durables dans diverses industries.
          </p>
        </div>
      </Section>

      <Section bg="light" id="business-approach">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-10">
          <div>
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <Briefcase className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-3xl font-bold text-trdwnd-navy mb-4">Notre Approche Commerciale</h2>
            <p className="text-gray-600 mb-6">
              EuroGrowth travaille avec les propriétaires d'entreprises, les dirigeants et les conseils d'administration pour livrer des résultats mesurables avec des capacités prouvées en leadership d'accords, négociation et intelligence de marché.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <Handshake className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Leadership d'Accords Prouvé",
                  description: "Expertise dans la structuration et l'exécution de partenariats internationaux réussis"
                },
                {
                  icon: <Users className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Négociation de Coentreprises",
                  description: "Négociation qualifiée d'accords de coentreprise complexes"
                },
                {
                  icon: <FileCode className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Expérience en Licences Technologiques",
                  description: "Connaissance spécialisée en transfert de technologie et arrangements de licences"
                },
                {
                  icon: <Search className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Collecte de Renseignements",
                  description: "Capacités implacables de recherche de marché et d'intelligence concurrentielle"
                },
                {
                  icon: <CheckCircle2 className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Engagement de Bout en Bout",
                  description: "Support complet de la planification initiale à la finalisation de l'accord"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-2 rounded-md mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-trdwnd-navy">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt="Réunion d'affaires avec des dirigeants"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
        </div>
      </Section>

      <Section id="industries">
        <h2 className="text-3xl font-bold text-center text-trdwnd-navy mb-12">Industries que Nous Servons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-t-4 border-t-trdwnd-navy shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-2">
                <Cpu className="h-8 w-8 text-trdwnd-navy" />
              </div>
              <CardTitle className="text-2xl">High-Tech & IA</CardTitle>
              <CardDescription>Solutions technologiques de pointe</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Aider les entreprises canadiennes à exploiter la demande européenne pour l'Industrie 4.0, la cybersécurité, l'IA, la Transformation Numérique et les solutions GreenTech - dans diverses industries verticales. Notre expertise aide les entreprises technologiques à naviguer dans les réglementations complexes de l'UE et à trouver les partenaires parfaits.
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Solutions IA</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Cybersécurité</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">GreenTech</span>
              </div>
            </CardFooter>
          </Card>

          <Card className="border-t-4 border-t-trdwnd-navy shadow-md hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mb-2">
                <Plane className="h-8 w-8 text-trdwnd-navy" />
              </div>
              <CardTitle className="text-2xl">Aérospatiale & Défense</CardTitle>
              <CardDescription>Partenariats stratégiques de défense</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Atténuer les problèmes de chaîne d'approvisionnement et former des alliances stratégiques dans le secteur de la défense européenne en croissance. Participer aux Programmes de Croissance à Double Usage où l'industrie de défense de l'UE peut être un catalyseur pour faire évoluer votre technologie plus rapidement et la valider pour le marché commercial.
              </p>
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-2">
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Tech à Double Usage</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Défense</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Aérospatiale</span>
              </div>
            </CardFooter>
          </Card>
        </div>
      </Section>

      <Section bg="light" id="market-analysis">
        <h2 className="text-3xl font-bold text-center text-trdwnd-navy mb-12">Notre Expertise</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <Globe className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-3xl font-bold text-trdwnd-navy mb-4">Analyse du Marché UE</h2>
            <p className="text-gray-600 mb-6">
              Tirer parti d'insights intelligents pour de meilleures décisions commerciales. Notre solution de recherche de marché EuroCanadensis est personnalisée pour répondre à vos besoins uniques en matière de renseignements de marché et concurrentiels.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <LineChart className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Plateforme de Renseignements de Bout en Bout",
                  description: "Stimuler la croissance, rationaliser la gestion des risques et améliorer l'efficacité"
                },
                {
                  icon: <BarChart4 className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Recherche Personnalisée",
                  description: "Analyse de marché sur mesure pour votre industrie et vos besoins spécifiques"
                },
                {
                  icon: <Building className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Paysage Concurrentiel",
                  description: "Analyse approfondie des concurrents européens et du positionnement sur le marché"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-2 rounded-md mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-trdwnd-navy">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Analyse du Marché UE"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </Section>

      <Section id="distribution">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/lovable-uploads/4a4d0292-880e-4a42-80aa-4b66a781fdc0.png"
              alt="Accords de Distribution en Europe"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <Handshake className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-3xl font-bold text-trdwnd-navy mb-4">Accords de Distribution en Europe</h2>
            <p className="text-gray-600 mb-6">
              Faire entrer vos produits sur les marchés européens nécessite la bonne stratégie de distribution et les bons partenaires. Nous vous aidons à développer une stratégie de marketing d'exportation vers l'UE et à naviguer dans les complexités de la distribution européenne.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <MapPin className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Stratégies d'Accès au Marché",
                  description: "Évaluer les modèles d'agent vs distributeur pour une entrée optimale sur le marché"
                },
                {
                  icon: <Network className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Approche Personnelle",
                  description: "Construire des connexions avec des distributeurs européens clés"
                },
                {
                  icon: <Briefcase className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Canaux de Distribution",
                  description: "Identifier et sécuriser les routes les plus efficaces vers le marché"
                },
                {
                  icon: <Key className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Négociation de Contrats",
                  description: "Guidance experte pour comprendre et négocier les contrats européens"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-2 rounded-md mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-trdwnd-navy">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section bg="light" id="licensing">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <TrendingUp className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-3xl font-bold text-trdwnd-navy mb-4">Licences Technologiques</h2>
            <p className="text-gray-600 mb-6">
              Les licences UE peuvent réduire les coûts de développement, augmenter la vitesse et réduire les risques juridiques via une Liberté d'Exploitation (FTO) Améliorée. Pour les entreprises technologiques, les licences peuvent être un moyen efficace de monétiser vos innovations sur les marchés européens.
            </p>
            <div className="space-y-4 mb-8">
              <h3 className="text-xl font-semibold text-trdwnd-navy mb-2">4 Modèles Commerciaux de Licences Technologiques :</h3>
              {[
                {
                  icon: <Laptop className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Accès à la Technologie",
                  description: "D'un partenaire de développement"
                },
                {
                  icon: <Shield className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Liberté d'Exploitation",
                  description: "D'un concurrent potentiel"
                },
                {
                  icon: <TrendingUp className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Partenaire Commercial Vertical",
                  description: "Modèles de licence vs production"
                },
                {
                  icon: <Handshake className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Partenaire Commercial Horizontal",
                  description: "Arrangements de licence complémentaires"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-2 rounded-md mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-trdwnd-navy">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Licences Technologiques"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </Section>

      <Section id="joint-ventures">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img
              src="/lovable-uploads/a7201968-6e87-4ad2-afe9-1217fb1720ce.png"
              alt="Coentreprises"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
              <Users className="h-8 w-8 text-trdwnd-gold" />
            </div>
            <h2 className="text-3xl font-bold text-trdwnd-navy mb-4">Coentreprises</h2>
            <p className="text-gray-600 mb-6">
              Les coentreprises stratégiques peuvent fournir un accès aux canaux de marché établis, à l'expertise locale et aux ressources partagées. Nous facilitons les partenariats qui créent des synergies et stimulent la croissance pour toutes les parties impliquées.
            </p>
            <div className="space-y-4 mb-8">
              {[
                {
                  icon: <Search className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Identification de Partenariats Stratégiques",
                  description: "Accélérer la croissance et améliorer l'entrée sur le marché grâce à des partenaires soigneusement sélectionnés"
                },
                {
                  icon: <Network className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Introductions Industrielles Clés",
                  description: "Accès aux opportunités de coentreprise et visibilité de l'écosystème"
                },
                {
                  icon: <Rocket className="h-5 w-5 text-trdwnd-navy" />,
                  title: "Croissance Accélérée",
                  description: "Tirer parti des partenariats européens pour évoluer plus rapidement avec moins de risques"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-2 rounded-md mr-4 mt-1">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-trdwnd-navy">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section bg="light" id="business-case">
        <h2 className="text-3xl font-bold text-center text-trdwnd-navy mb-12">Cas d'Affaires & Processus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-trdwnd-navy mb-4">Moteurs du Cas d'Affaires</h3>
            <ul className="space-y-4">
              {[
                {
                  icon: <Briefcase className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Chronologie : 6-9 Mois",
                  description: "Processus efficace de l'engagement initial à la finalisation de l'accord"
                },
                {
                  icon: <Plane className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Engagement et Voyage",
                  description: "Chef de projet de l'entreprise canadienne attendu 1 rencontre mensuelle UE in situ à partir du Mois 3"
                },
                {
                  icon: <Users className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Briefings et Événements Industriels",
                  description: "Réunions en tête-à-tête incluant l'étiquette commerciale UE ; Réunions B2B réciproques au Canada"
                },
                {
                  icon: <Handshake className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Approche Pratique",
                  description: "Support direct et accessible tout au long du processus"
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1">{item.icon}</div>
                  <div>
                    <span className="font-medium text-trdwnd-navy">{item.title}</span>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-trdwnd-navy mb-4">Le Processus EuroGrowth</h3>
            <ul className="space-y-4">
              {[
                {
                  icon: <Users className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Créer une Équipe Sur Mesure",
                  description: "Équipe personnalisée pour la croissance des revenus, les coentreprises, les licences PI et les accords de fusion-acquisition"
                },
                {
                  icon: <LineChart className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Décrire le Processus de Flux d'Accords",
                  description: "Feuille de route claire de l'engagement initial aux partenariats réussis"
                },
                {
                  icon: <Search className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Sélectionner les Partenaires Européens",
                  description: "Identifier les partenaires les plus adaptés à vos besoins commerciaux spécifiques"
                },
                {
                  icon: <Handshake className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Faciliter les Négociations",
                  description: "Support expert à travers la diligence raisonnable et la structuration d'accords"
                },
                {
                  icon: <Shield className="h-5 w-5 text-trdwnd-gold" />,
                  title: "Définir les Menaces et Contre-mesures",
                  description: "Gestion proactive des risques pour protéger vos intérêts"
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 mt-1">{item.icon}</div>
                  <div>
                    <span className="font-medium text-trdwnd-navy">{item.title}</span>
                    <p className="text-gray-600 mt-1">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section bg="dark" className="py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Pourquoi Choisir EuroGrowth ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
            {[
              {
                icon: <Globe className="h-6 w-6 text-trdwnd-gold" />,
                title: "Réseau UE Exclusif",
                description: "Décennies d'expérience et partenariats de premier plan dans les industries européennes clés"
              },
              {
                icon: <Briefcase className="h-6 w-6 text-trdwnd-gold" />,
                title: "Support Commerce & Entrée Marché",
                description: "Guidance experte sur la conformité réglementaire, la logistique et l'intelligence de marché"
              },
              {
                icon: <Shield className="h-6 w-6 text-trdwnd-gold" />,
                title: "Atténuation des Risques",
                description: "Connexions sécurisées et vérifiées pour prévenir les erreurs coûteuses"
              },
              {
                icon: <Handshake className="h-6 w-6 text-trdwnd-gold" />,
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
              <Link to="/fr/commencer">Commencez Votre Parcours UE</Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-trdwnd-gold text-trdwnd-gold bg-transparent hover:bg-trdwnd-gold hover:text-trdwnd-navy"
            >
              <Link to="/fr/industries">Explorer les Industries</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default ServicesPageFr;
