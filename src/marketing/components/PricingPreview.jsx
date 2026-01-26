import RevealSection from "./RevealSection";
import PricingCard from "./PricingCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function PricingPreview() {
  const plans = [
    {
      title: "Free",
      price: "$0",
      description: "For small teams getting started with team communication.",
      features: ["Channels and direct messages", "File sharing", "Limited message history", "Basic search"],
      ctaText: "Get started",
      ctaLink: "/signup",
      delay: 0.1
    },
    {
      title: "Pro",
      price: "$99",
      description: "For growing teams that need more power and history.",
      features: ["Unlimited message history", "App integrations", "Advanced search", "Priority support", "Group calls"],
      ctaText: "Try it free",
      ctaLink: "/signup",
      isPopular: true,
      delay: 0.2
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "For large organizations with security and compliance needs.",
      features: ["Enterprise-grade security", "SSO & SAML 2.0", "Compliance & audit logs", "Dedicated support", "Custom onboarding"],
      ctaText: "Contact sales",
      ctaLink: "mailto:sales@leedsphere.com",
      delay: 0.3
    }
  ];

  return (
    <section className="py-24 bg-white/40 dark:bg-slate-950/20 border-t border-slate-100/30 dark:border-slate-800/30 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <RevealSection effect="cinematic">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealSection>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Choose the plan that fits your team size and needs. No hidden fees.
            </p>
          </RevealSection>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-32">
           {plans.map((plan, idx) => (
             <PricingCard key={idx} {...plan} />
           ))}
        </div>

        {/* Final CTA Block */}
        <div className="max-w-4xl mx-auto text-center">
           <RevealSection>
              <div className="relative p-12 rounded-3xl bg-slate-900 dark:bg-white overflow-hidden shadow-2xl">
                 {/* Background decorative glow */}
                 <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/50 to-blue-900/50 dark:from-purple-100 dark:to-blue-100 opacity-50 z-0"></div>
                 
                 <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-slate-900 mb-6">
                      Start collaborating with your team today
                    </h2>
                    <p className="text-lg text-slate-300 dark:text-slate-600 mb-10 max-w-xl mx-auto">
                      Join 10,000+ teams who use Leedsphere to communicate like pros. Easy to set up.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                       <Link 
                         to="/signup"
                         className="px-8 py-3.5 rounded-full bg-purple-600 text-white font-bold hover:bg-purple-700 transition-all shadow-lg hover:shadow-purple-500/25 hover:-translate-y-0.5 inline-flex items-center gap-2"
                       >
                         Get Started
                         <ArrowRight className="w-4 h-4" />
                       </Link>
                       <Link 
                         to="/login"
                         className="px-8 py-3.5 rounded-full bg-transparent border border-white/20 dark:border-slate-300 text-white dark:text-slate-700 font-medium hover:bg-white/10 dark:hover:bg-slate-100 transition-colors"
                       >
                         Already have a workspace?
                       </Link>
                    </div>
                 </div>
              </div>
           </RevealSection>
        </div>
        </RevealSection>

      </div>
    </section>
  );
}
