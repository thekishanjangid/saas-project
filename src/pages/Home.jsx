import Background from "../components/ui/Background";
import PremiumNavbar from "../components/layout/PremiumNavbar";
import Hero from "../components/sections/Hero";
import SocialProof from "../components/sections/SocialProof";
import FeatureGrid from "../components/sections/FeatureGrid";

export default function Home() {
  return (
    <main className="relative min-h-screen font-sans antialiased text-slate-900 dark:text-white selection:bg-purple-100 dark:selection:bg-purple-900/30">
      
      {/* 1. Global Animated Background */}
      <Background />

      {/* 2. Floating Navbar */}
      <PremiumNavbar />

      <div className="relative z-10 flex flex-col">
        {/* 3. Hero Section */}
        <Hero />

        {/* 4. Social Proof / Logos */}
        <SocialProof />

        {/* 5. Feature Deep Dive */}
        <FeatureGrid />

        {/* Footer would go here */}
        <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-center text-slate-500 text-sm">
           <div className="container mx-auto px-4">
              © {new Date().getFullYear()} Leedsphere Inc. All rights reserved.
           </div>
        </footer>
      </div>
    </main>
  );
}
