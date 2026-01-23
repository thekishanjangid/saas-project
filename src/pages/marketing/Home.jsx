import RevealSection from "../../components/marketing/RevealSection";
import HeroSection from "../../components/marketing/HeroSection";
import FeatureRow from "../../components/marketing/FeatureRow";
import FeatureGrid from "../../components/marketing/FeatureGrid";
import AISection from "../../components/marketing/AISection";
import TestimonialsSection from "../../components/marketing/TestimonialsSection";
import PricingPreview from "../../components/marketing/PricingPreview";

export default function Home() {
  return (
    <>
      {/* 1. Hero Section */}
      <HeroSection />

      {/* Feature Pillar 1: Knowledge Management (Left) */}
      <FeatureRow 
        badge="Centralized Knowledge"
        title="Your Single Source of Truth"
        description="Stop searching through Slack, Email, and Google Drive. Organize all your SOPs, product guides, and technical docs in one structured, searchable portal."
        bullets={[
          "Drag-and-drop category management",
          "Advanced version control & rollback",
          "Internal & External visibility controls"
        ]}
        align="left"
      />

      {/* Feature Pillar 2: AI (Specialized Section) */}
      <AISection />

      {/* Feature Pillar 3: Grid (Security/Scale) */}
      <FeatureGrid />

      {/* Social Proof & Metrics */}
      <TestimonialsSection />

      {/* Pricing & Final CTA */}
      <PricingPreview />
    </>
  );
}
