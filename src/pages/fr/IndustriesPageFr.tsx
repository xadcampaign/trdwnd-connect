
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { 
  ChevronRight, 
  Cpu, 
  Plane, 
  Globe, 
  LineChart, 
  Building, 
  Briefcase, 
  Shield, 
  Network, 
  Rocket, 
  TrendingUp, 
  Users, 
  FileCode, 
  Search,
  BarChart4
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const IndustriesPageFr = () => {
  return (
    <main>
      <Hero
        title="Industries que Nous Servons"
        subtitle="Partenariats stratégiques pour les entreprises canadiennes qui s'étendent aux marchés européens"
        image="/lovable-uploads/d70aa86b-313f-4528-b680-3a6b4f002042.png"
        height="lg:h-[70vh]"
      />

      <Section>
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold text-trdwnd-navy mb-6">TRDWND LLC travaille avec les propriétaires d'entreprises, les dirigeants et les conseils d'administration</h2>
          <p className="text-xl text-gray-600 mb-8">
            Offrant des résultats mesurables avec des capacités éprouvées en leadership d'affaires, négociation et intelligence de marché.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <ul className="space-y-4">
                {[
                  "Capacité de leadership d'affaires éprouvée",
                  "Capacité de négociation de coentreprises éprouvée",
                  "Expérience éprouvée en licences technologiques",
                  "Expérience approfondie dans tous les secteurs majeurs",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-trdwnd-gold mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <ul className="space-y-4">
                {[
                  "Capacité de collecte d'intelligence implacable",
                  "Peut mobiliser les parties prenantes clés",
                  "Engagé du début à la fin",
                  "Livrer des résultats mesurables",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-trdwnd-gold mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="light" id="eu-accelerator">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-trdwnd-navy mb-8 text-center">TRDWND - L'Accélérateur d'Affaires UE pour le Canada</h2>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 mb-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-trdwnd-navy mb-4">Notre Processus</h3>
                <ul className="space-y-3">
                  {[
                    "Créer une équipe sur mesure pour la croissance des revenus, les coentreprises, les licences de propriété intellectuelle et les transactions de fusions-acquisitions",
                    "Délimiter le processus de flux d'affaires",
                    "Présélectionner les partenaires européens potentiels",
                    "Faciliter les négociations - Diligence raisonnable",
                    "Conseils en temps réel d'executives de confiance, investisseurs pour l'analyse de marché et le développement de stratégie",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-trdwnd-lightblue p-1 rounded-full mr-3 mt-1">
                        <ChevronRight className="h-4 w-4 text-trdwnd-navy" />
                      </div>
                      <span className="text-gray-700 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-trdwnd-navy mb-4">Avantages Stratégiques</h3>
                <ul className="space-y-3">
                  {[
                    "Identifier les technologies disruptives pertinentes",
                    "Définir les menaces et les contre-mesures",
                    "Obtenir l'accès au niveau C aux startups/scaleups et partenaires financiers",
                    "Aligné avec les propriétaires d'entreprises, les dirigeants et les conseils d'administration",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-trdwnd-lightblue p-1 rounded-full mr-3 mt-1">
                        <ChevronRight className="h-4 w-4 text-trdwnd-navy" />
                      </div>
                      <span className="text-gray-700 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="main-industries">
        <h2 className="text-3xl font-bold text-trdwnd-navy mb-12 text-center">Industries Principales que Nous Servons</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform hover:translate-y-[-5px]">
            <div className="p-1 bg-gradient-to-r from-trdwnd-navy to-blue-500"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-trdwnd-lightblue p-3 rounded-lg mr-4">
                  <Cpu className="h-8 w-8 text-trdwnd-navy" />
                </div>
                <h3 className="text-2xl font-bold text-trdwnd-navy">High-Tech & IA</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Aider les entreprises canadiennes à exploiter la demande européenne pour l'Industrie 4.0, la cybersécurité, l'IA, la transformation numérique et les solutions GreenTech - dans diverses industries verticales.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-trdwnd-navy mb-2">Services Clés:</h4>
                <ul className="space-y-2 ml-2">
                  {[
                    "Implémentation et intégration de solutions IA",
                    "Partenariats technologiques en cybersécurité",
                    "Conseil en transformation numérique",
                    "Partenariats d'innovation GreenTech",
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-trdwnd-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Solutions IA</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Cybersécurité</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Industrie 4.0</span>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 transition-transform hover:translate-y-[-5px]">
            <div className="p-1 bg-gradient-to-r from-trdwnd-navy to-blue-500"></div>
            <div className="p-8">
              <div className="flex items-center mb-6">
                <div className="bg-trdwnd-lightblue p-3 rounded-lg mr-4">
                  <Plane className="h-8 w-8 text-trdwnd-navy" />
                </div>
                <h3 className="text-2xl font-bold text-trdwnd-navy">Aérospatiale & Défense</h3>
              </div>
              
              <p className="text-gray-700 mb-6">
                Atténuer les problèmes de chaîne d'approvisionnement et former des alliances stratégiques dans le secteur de la défense européen en croissance. Participer aux programmes de croissance à double usage où l'industrie de la défense de l'UE peut être un catalyseur pour faire évoluer votre technologie.
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-trdwnd-navy mb-2">Services Clés:</h4>
                <ul className="space-y-2 ml-2">
                  {[
                    "Formation d'alliances stratégiques avec des contractants de défense",
                    "Optimisation et intégration de la chaîne d'approvisionnement",
                    "Applications à double usage de technologies de défense",
                    "Navigation de conformité réglementaire",
                  ].map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-trdwnd-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Tech Défense</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Aérospatiale</span>
                <span className="bg-trdwnd-lightblue px-3 py-1 rounded-full text-sm text-trdwnd-navy">Double Usage</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="dual-use">
        <h2 className="text-3xl font-bold text-trdwnd-navy mb-8 text-center">Croissance à Double Usage: Priorité en Europe</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-trdwnd-navy mb-6">Participer aux Programmes de Croissance à Double Usage en Europe</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                  <Rocket className="h-5 w-5 text-trdwnd-navy" />
                </div>
                <p className="text-gray-700">
                  L'industrie de la défense de l'UE peut être un catalyseur pour faire évoluer votre technologie plus rapidement et la valider pour le marché commercial.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                  <TrendingUp className="h-5 w-5 text-trdwnd-navy" />
                </div>
                <p className="text-gray-700">
                  Reconnaître l'opportunité comme un choix stratégique, pas catégorique.
                </p>
              </li>
              <li className="flex items-start">
                <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                  <Shield className="h-5 w-5 text-trdwnd-navy" />
                </div>
                <p className="text-gray-700">
                  Tirer parti de la validation du secteur de la défense pour accélérer les applications commerciales.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <img 
              src="/lovable-uploads/d2c017e4-584b-4175-b890-769544daff6a.png" 
              alt="Drone de technologie de défense et aérospatiale" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </Section>

      <Section id="our-expertise">
        <h2 className="text-3xl font-bold text-trdwnd-navy mb-12 text-center">Nos Domaines d'Expertise</h2>
        
        <div className="space-y-16">
          {/* Market Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
                <Globe className="h-8 w-8 text-trdwnd-gold" />
              </div>
              <h3 className="text-2xl font-bold text-trdwnd-navy mb-4">Analyse du Marché UE</h3>
              <p className="text-gray-700 mb-6">
                Tirer parti d'insights intelligents pour de meilleures décisions d'affaires. Notre solution de recherche de marché EuroCanadensis est personnalisée pour répondre à vos besoins uniques d'intelligence de marché et concurrentielle.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <LineChart className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <p className="text-gray-700">
                    Découvrir comment notre plateforme d'intelligence de bout en bout stimulera la croissance, rationalisera la gestion des risques et améliorera l'efficacité.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <Search className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <p className="text-gray-700">
                    Recherche de marché personnalisée pour répondre à vos besoins spécifiques d'intelligence.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Analyse de données et recherche de marché" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Distribution Deals */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Partenariat d'affaires Canada-UE" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
                <Building className="h-8 w-8 text-trdwnd-gold" />
              </div>
              <h3 className="text-2xl font-bold text-trdwnd-navy mb-4">Accords de Distribution en Europe</h3>
              <p className="text-gray-700 mb-6">
                Du développement de votre stratégie de marketing d'exportation UE à l'établissement de canaux de distribution à travers l'Europe, nous fournissons un support complet.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Développer une stratégie de marketing d'exportation UE",
                  "Entrer sur le marché UE: Accès au marché - Stratégies d'entrée - Agent ou distributeur?",
                  "Approche personnelle pour établir des connexions",
                  "Transport de vos produits",
                  "Canaux de distribution",
                  "Comprendre les contrats",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <ChevronRight className="h-5 w-5 text-trdwnd-gold mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Licensing */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
                <FileCode className="h-8 w-8 text-trdwnd-gold" />
              </div>
              <h3 className="text-2xl font-bold text-trdwnd-navy mb-4">Licences Technologiques</h3>
              <p className="text-gray-700 mb-6">
                Les licences UE peuvent réduire les coûts de développement, augmenter la vitesse et réduire les risques juridiques via une liberté d'exploitation (FTO) améliorée.
              </p>
              
              <div className="mb-6">
                <p className="text-gray-700 mb-4">
                  Les licences pour la commercialisation peuvent aider les entreprises à générer des revenus dans des domaines où la participation directe sur le marché pour le produit ou service concerné est un défi.
                </p>
                
                <h4 className="font-semibold text-trdwnd-navy mb-3">4 Modèles d'Affaires de Licences Technologiques:</h4>
                <ul className="space-y-3">
                  {[
                    "Accès à la technologie d'un partenaire de développement",
                    "Liberté d'exploitation d'un concurrent potentiel",
                    "Partenaire commercial vertical: licences vs. production",
                    "Partenaire commercial horizontal: licences complémentaires",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-trdwnd-gold mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <img 
                src="/lovable-uploads/59509fef-cf6c-4679-9dea-230290168db0.png" 
                alt="Technologie et innovation" 
                className="rounded-lg shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Joint Ventures */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                alt="Réunion de partenariat d'affaires" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-trdwnd-navy inline-flex p-3 rounded-lg mb-6">
                <Users className="h-8 w-8 text-trdwnd-gold" />
              </div>
              <h3 className="text-2xl font-bold text-trdwnd-navy mb-4">Coentreprises</h3>
              <p className="text-gray-700 mb-6">
                Identifier et établir des partenariats stratégiques pour accélérer la croissance et améliorer l'entrée sur le marché.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <Network className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <p className="text-gray-700">
                    Introductions aux acteurs clés de l'industrie, coentreprise, fourniture d'intelligence de marché sur les partenaires potentiels pour construire la visibilité dans l'écosystème approprié.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <Briefcase className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <p className="text-gray-700">
                    Guidance experte à travers la diligence raisonnable et la structuration d'accords avec des partenaires européens.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <Shield className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <p className="text-gray-700">
                    Gestion proactive des risques avec évaluation intégrée des menaces et contre-mesures.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="light" id="business-case">
        <h2 className="text-3xl font-bold text-trdwnd-navy mb-8 text-center">Développement de Cas d'Affaires</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="bg-trdwnd-navy inline-flex p-2 rounded-lg mb-4">
              <Cpu className="h-6 w-6 text-trdwnd-gold" />
            </div>
            <h3 className="text-xl font-bold text-trdwnd-navy mb-3">Intelligence Artificielle (IA)</h3>
            <p className="text-gray-600 text-sm mb-4">
              Pour les organisations cherchant à tirer parti des technologies avancées pour stimuler l'innovation, l'efficacité et l'avantage concurrentiel.
            </p>
            <h4 className="font-semibold text-trdwnd-navy mb-2 text-sm">Composants Clés:</h4>
            <ul className="space-y-1 text-sm">
              {[
                "Énoncé du problème",
                "Solution IA proposée",
                "Analyse des avantages",
                "Coût et investissement",
                "Évaluation des risques",
                "Plan d'implémentation",
                "ROI et métriques de performance",
                "Considérations réglementaires et éthiques",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <ChevronRight className="h-4 w-4 text-trdwnd-gold mr-1 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="bg-trdwnd-navy inline-flex p-2 rounded-lg mb-4">
              <BarChart4 className="h-6 w-6 text-trdwnd-gold" />
            </div>
            <h3 className="text-xl font-bold text-trdwnd-navy mb-3">Investissement en Actions</h3>
            <p className="text-gray-600 text-sm mb-4">
              Explique pourquoi une entreprise et ses investisseurs devraient (et vont) investir dans une entreprise.
            </p>
            <ul className="space-y-2 text-sm">
              {[
                "L'opportunité et le retour sur investissement pour l'investisseur ou le financier",
                "Comment l'entreprise ou la coentreprise se développe et atteint la croissance projetée",
                "Détaille où le financement sera appliqué dans l'entreprise",
                "Explique le retour sur investissement (ROI) de l'investissement",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <ChevronRight className="h-4 w-4 text-trdwnd-gold mr-1 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <div className="bg-trdwnd-navy inline-flex p-2 rounded-lg mb-4">
              <Globe className="h-6 w-6 text-trdwnd-gold" />
            </div>
            <h3 className="text-xl font-bold text-trdwnd-navy mb-3">Expansion vers de Nouveaux Marchés</h3>
            <p className="text-gray-600 text-sm mb-4">
              Mouvement stratégique pour diversifier les flux de revenus et stimuler la croissance des affaires.
            </p>
            <h4 className="font-semibold text-trdwnd-navy mb-2 text-sm">Éléments Clés:</h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-sm">
              {[
                "Recherche et analyse de marché",
                "Stratégie d'entrée",
                "Projections financières",
                "Considérations réglementaires",
                "Paysage concurrentiel", 
                "Évaluation des risques",
                "Stratégies marketing",
                "Analyse ROI",
                "Plan d'implémentation",
                "Surveillance et évaluation",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <ChevronRight className="h-4 w-4 text-trdwnd-gold mr-1 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-bold text-trdwnd-navy mb-6 text-center">Comment Justifions-nous le Cas d'Affaires?</h3>
          <p className="text-gray-700 mb-6 text-center">
            Nous travaillons conjointement ensemble dès le jour 1 avec le client pour livrer une analyse de valeur complète et des calculs de ROI.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <LineChart className="h-6 w-6 text-trdwnd-navy" />,
                title: "Quantifier la Valeur",
                description: "Calculer la valeur d'un investissement"
              },
              {
                icon: <TrendingUp className="h-6 w-6 text-trdwnd-navy" />,
                title: "Déterminer la Valeur du Projet",
                description: "Évaluer la valeur stratégique du projet"
              },
              {
                icon: <BarChart4 className="h-6 w-6 text-trdwnd-navy" />,
                title: "Analyse des Coûts",
                description: "Aider à calculer le coût du projet"
              },
              {
                icon: <Briefcase className="h-6 w-6 text-trdwnd-navy" />,
                title: "Calculs de ROI",
                description: "Aider à calculer le retour sur investissement"
              },
              {
                icon: <Building className="h-6 w-6 text-trdwnd-navy" />,
                title: "Modélisation Financière",
                description: "Construire l'analyse et la modélisation financière"
              },
              {
                icon: <Shield className="h-6 w-6 text-trdwnd-navy" />,
                title: "Atténuation des Risques",
                description: "Identifier et traiter les risques potentiels"
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-trdwnd-lightblue rounded-lg p-5">
                <div className="flex items-center mb-3">
                  <div className="bg-white p-2 rounded-md mr-3">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-trdwnd-navy">{item.title}</h4>
                </div>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="business-drivers">
        <h2 className="text-3xl font-bold text-trdwnd-navy mb-8 text-center">Moteurs de Cas d'Affaires</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="p-1 bg-gradient-to-r from-trdwnd-navy to-blue-400"></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-trdwnd-navy mb-6">Moteurs Stratégiques</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <TrendingUp className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <p className="text-gray-700">
                    Intrants et activités clés qui stimulent les résultats stratégiques, opérationnels et financiers du cas d'affaires.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <LineChart className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <p className="text-gray-700">
                    Impact significatif sur les résultats financiers et les avantages.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <BarChart4 className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <p className="text-gray-700">
                    Avant de construire un modèle financier, modéliser les moteurs d'affaires pour évaluer les forces et faiblesses relatives afin de faire les meilleurs choix.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
            <div className="p-1 bg-gradient-to-r from-trdwnd-navy to-blue-400"></div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-trdwnd-navy mb-6">Approche Opérationnelle</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <Clock className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-trdwnd-navy">Calendrier: 6-9 Mois</p>
                    <p className="text-gray-600 text-sm">Processus efficace de l'engagement à l'achèvement</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <Plane className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-trdwnd-navy">Engagement et Voyage</p>
                    <p className="text-gray-600 text-sm">Gestionnaire de projet de l'entreprise canadienne attendu 1 rencontre mensuelle UE sur place à partir du mois 3</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <Users className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-trdwnd-navy">Briefings et Événements Industriels</p>
                    <p className="text-gray-600 text-sm">Réunions en tête-à-tête incluant l'étiquette d'affaires UE; Réunions B2B réciproques au Canada</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-trdwnd-lightblue p-1.5 rounded-md mr-3 mt-0.5">
                    <Briefcase className="h-5 w-5 text-trdwnd-navy" />
                  </div>
                  <div>
                    <p className="font-semibold text-trdwnd-navy">Approche Pratique</p>
                    <p className="text-gray-600 text-sm">Nous sommes pratiques, directs et présents tout au long du processus</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="dark" className="py-20 md:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Pourquoi Choisir EUROGROWTH?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {[
              {
                icon: <Globe className="h-6 w-6 text-trdwnd-gold" />,
                title: "Réseau UE Étendu",
                description: "Des décennies d'expérience et des partenariats de premier plan dans les industries européennes clés"
              },
              {
                icon: <Building className="h-6 w-6 text-trdwnd-gold" />,
                title: "Support Commerce & Entrée de Marché",
                description: "Guidance experte sur la conformité réglementaire, la logistique et l'intelligence de marché"
              },
              {
                icon: <Shield className="h-6 w-6 text-trdwnd-gold" />,
                title: "Atténuation des Risques",
                description: "Connexions sécurisées et organisées pour prévenir les erreurs coûteuses"
              },
              {
                icon: <Users className="h-6 w-6 text-trdwnd-gold" />,
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
              <Link to="/fr/commencer">Commencez Votre Voyage UE</Link>
            </Button>
            <Button asChild variant="static" size="lg" className="border-white text-white bg-white/10">
              <Link to="/fr/services">Voir Nos Services</Link>
            </Button>
          </div>
        </div>
      </Section>
    </main>
  );
};

export default IndustriesPageFr;

const Clock = ({ className }: { className: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
