
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import IndustriesPage from "./pages/IndustriesPage";
import GetStartedPage from "./pages/GetStartedPage";
import NotFoundPage from "./pages/NotFoundPage";
import EUMarketAnalysisPage from "./pages/EUMarketAnalysisPage";
import DistributionDealsPage from "./pages/DistributionDealsPage";
import TechLicensingPage from "./pages/TechLicensingPage";
import JointVenturesPage from "./pages/JointVenturesPage";

// French pages
import HomePageFr from "./pages/fr/HomePageFr";
import AboutPageFr from "./pages/fr/AboutPageFr";
import ServicesPageFr from "./pages/fr/ServicesPageFr";
import IndustriesPageFr from "./pages/fr/IndustriesPageFr";
import GetStartedPageFr from "./pages/fr/GetStartedPageFr";
import ContactPageFr from "./pages/fr/ContactPageFr";
import EUMarketAnalysisPageFr from "./pages/fr/EUMarketAnalysisPageFr";
import DistributionDealsPageFr from "./pages/fr/DistributionDealsPageFr";
import TechLicensingPageFr from "./pages/fr/TechLicensingPageFr";
import JointVenturesPageFr from "./pages/fr/JointVenturesPageFr";

const queryClient = new QueryClient();

console.log('App component loading...');

const App = () => {
  console.log('App component rendering...');
  
  try {
    return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-1">
                <Routes>
                  {/* English routes */}
                  <Route path="/" element={<HomePage />} />
                  <Route path="/about" element={<AboutPage />} />
                  <Route path="/services" element={<ServicesPage />} />
                  <Route path="/industries" element={<IndustriesPage />} />
                  <Route path="/get-started" element={<GetStartedPage />} />
                  <Route path="/eu-market-analysis" element={<EUMarketAnalysisPage />} />
                  <Route path="/distribution-deals" element={<DistributionDealsPage />} />
                  <Route path="/tech-licensing" element={<TechLicensingPage />} />
                  <Route path="/joint-ventures" element={<JointVenturesPage />} />
                  
                  {/* French routes */}
                  <Route path="/fr" element={<HomePageFr />} />
                  <Route path="/fr/a-propos" element={<AboutPageFr />} />
                  <Route path="/fr/services" element={<ServicesPageFr />} />
                  <Route path="/fr/industries" element={<IndustriesPageFr />} />
                  <Route path="/fr/commencer" element={<GetStartedPageFr />} />
                  <Route path="/fr/contact" element={<ContactPageFr />} />
                  <Route path="/fr/analyse-marche-ue" element={<EUMarketAnalysisPageFr />} />
                  <Route path="/fr/accords-distribution" element={<DistributionDealsPageFr />} />
                  <Route path="/fr/licences-technologie" element={<TechLicensingPageFr />} />
                  <Route path="/fr/coentreprises" element={<JointVenturesPageFr />} />
                  
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </main>
              <Footer />
            </div>
            <Analytics />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    );
  } catch (error) {
    console.error('Error in App component:', error);
    return <div>Error loading application</div>;
  }
};

export default App;
