import { Outlet } from "react-router-dom";
import UniverseBackground from "../components/marketing/UniverseBackground";
import AtmosphericOverlay from "../components/marketing/AtmosphericOverlay";
import MarketingNavbar from "../components/marketing/MarketingNavbar";
import Footer from "../components/marketing/Footer"; 

export default function MarketingLayout() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans antialiased text-slate-900 dark:text-white selection:bg-purple-100 dark:selection:bg-purple-900/30">
        
        {/* Global Marketing Background - Cosmic System */}
        <UniverseBackground />
        
        {/* Layer 2: Atmospheric Overlay for Depth & Readability */}
        <AtmosphericOverlay />

        {/* Marketing Navbar (Shared) */}
        <MarketingNavbar />

        {/* Main Content Area */}
        <main className="relative z-10 flex-1 flex flex-col">
            <Outlet />
        </main>

        {/* Global Footer */}
        <Footer />
    </div>
  );
}
