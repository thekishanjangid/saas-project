import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { Check, Search, Shield, BarChart3, History, Globe, Layers, Zap } from "lucide-react";
import RevealSection from "./RevealSection";

const FEATURES_DATA = [
  {
    id: "knowledge",
    title: "Centralized Knowledge",
    icon: <Layers className="w-5 h-5" />,
    description: "Organize everything in one place.",
    theme: {
      activeBg: "bg-indigo-50/50 dark:bg-indigo-900/10",
      activeBorder: "border-indigo-200 dark:border-indigo-800/50",
      activeRing: "ring-indigo-100 dark:ring-indigo-900/30",
      iconBg: "bg-indigo-100 dark:bg-indigo-900/40",
      iconText: "text-indigo-600 dark:text-indigo-300",
      titleColor: "text-indigo-900 dark:text-indigo-100"
    },
    windowContent: (
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between p-3 rounded-lg bg-white shadow-sm border border-indigo-100 dark:bg-slate-800 dark:border-indigo-900/30">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-600">
               <Layers className="w-4 h-4" />
             </div>
             <div>
               <div className="h-2 w-24 bg-slate-200 dark:bg-slate-700 rounded mb-1"></div>
               <div className="h-1.5 w-16 bg-slate-100 dark:bg-slate-800 rounded"></div>
             </div>
          </div>
          <div className="px-2 py-1 rounded text-[10px] bg-indigo-100 text-indigo-700 font-medium">Published</div>
        </div>
        <div className="flex items-center justify-between p-3 rounded-lg bg-white/50 border border-slate-100 dark:bg-slate-800/50 dark:border-slate-700/50">
          <div className="flex items-center gap-3">
             <div className="w-8 h-8 rounded bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500">
               <Globe className="w-4 h-4" />
             </div>
             <div>
               <div className="h-2 w-20 bg-slate-200 dark:bg-slate-700 rounded mb-1"></div>
               <div className="h-1.5 w-12 bg-slate-100 dark:bg-slate-800 rounded"></div>
             </div>
          </div>
          <div className="px-2 py-1 rounded text-[10px] bg-slate-100 text-slate-500 font-medium">Draft</div>
        </div>
        <div className="mt-2 space-y-2 pl-4 border-l-2 border-indigo-100 dark:border-indigo-900/30">
           <div className="h-1.5 w-3/4 bg-indigo-50 dark:bg-slate-800 rounded"></div>
           <div className="h-1.5 w-1/2 bg-indigo-50 dark:bg-slate-800 rounded"></div>
        </div>
      </div>
    )
  },
  {
    id: "ai",
    title: "AI Search",
    icon: <Zap className="w-5 h-5" />,
    description: "Instant answers for your team.",
    theme: {
      activeBg: "bg-violet-50/50 dark:bg-violet-900/10",
      activeBorder: "border-violet-200 dark:border-violet-800/50",
      activeRing: "ring-violet-100 dark:ring-violet-900/30",
      iconBg: "bg-violet-100 dark:bg-violet-900/40",
      iconText: "text-violet-600 dark:text-violet-300",
      titleColor: "text-violet-900 dark:text-violet-100"
    },
    windowContent: (
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-violet-500" />
          <div className="w-full h-10 pl-10 pr-4 rounded-lg border border-violet-200 bg-violet-50/50 dark:border-violet-800 dark:bg-violet-900/10 flex items-center text-sm text-violet-700 dark:text-violet-300">
            How do I reset my API key?
          </div>
        </div>
        <div className="p-4 rounded-lg bg-white border border-violet-100 shadow-sm dark:bg-slate-800 dark:border-slate-700">
           <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider">
             <Zap className="w-3 h-3" /> AI Answer
           </div>
           <div className="space-y-2">
             <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded"></div>
             <div className="h-2 w-full bg-slate-200 dark:bg-slate-700 rounded"></div>
             <div className="h-2 w-2/3 bg-slate-200 dark:bg-slate-700 rounded"></div>
           </div>
        </div>
      </div>
    )
  },
  {
    id: "version",
    title: "Version Control",
    icon: <History className="w-5 h-5" />,
    description: "Track every change.",
    theme: {
      activeBg: "bg-blue-50/50 dark:bg-blue-900/10",
      activeBorder: "border-blue-200 dark:border-blue-800/50",
      activeRing: "ring-blue-100 dark:ring-blue-900/30",
      iconBg: "bg-blue-100 dark:bg-blue-900/40",
      iconText: "text-blue-600 dark:text-blue-300",
      titleColor: "text-blue-900 dark:text-blue-100"
    },
    windowContent: (
      <div className="space-y-3">
         <div className="flex items-start gap-3">
            <div className="flex flex-col items-center gap-1">
               <div className="w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30"></div>
               <div className="w-0.5 h-full bg-slate-200 dark:bg-slate-700 min-h-[40px]"></div>
            </div>
            <div className="flex-1 pb-4">
               <div className="flex items-center justify-between mb-1">
                 <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">v2.4.0 Deployment</span>
                 <span className="text-xs text-slate-400">Now</span>
               </div>
               <div className="text-xs text-blue-600 bg-blue-50 dark:bg-blue-900/20 p-2 rounded border border-blue-100 dark:border-blue-800/30">
                  Updated API rate limits documentation
               </div>
            </div>
         </div>
         <div className="flex items-start gap-3 opacity-60">
            <div className="flex flex-col items-center gap-1">
               <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-600"></div>
            </div>
            <div className="flex-1">
               <div className="flex items-center justify-between mb-1">
                 <span className="text-sm font-medium text-slate-700 dark:text-slate-300">v2.3.9 Hotfix</span>
                 <span className="text-xs text-slate-400">2h ago</span>
               </div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: "access",
    title: "Access Control",
    icon: <Shield className="w-5 h-5" />,
    description: "Role-based permissions.",
    theme: {
      activeBg: "bg-teal-50/50 dark:bg-teal-900/10",
      activeBorder: "border-teal-200 dark:border-teal-800/50",
      activeRing: "ring-teal-100 dark:ring-teal-900/30",
      iconBg: "bg-teal-100 dark:bg-teal-900/40",
      iconText: "text-teal-600 dark:text-teal-300",
      titleColor: "text-teal-900 dark:text-teal-100"
    },
    windowContent: (
      <div className="flex flex-col gap-2">
         {[
           { name: "Sarah J.", role: "Admin", color: "bg-teal-100 text-teal-700 border-teal-200" },
           { name: "Mike T.", role: "Editor", color: "bg-slate-100 text-slate-700 border-slate-200" },
           { name: "Global", role: "Viewer", color: "bg-slate-50 text-slate-500 border-transparent" },
         ].map((u, i) => (
           <div key={i} className={`flex items-center justify-between p-2.5 rounded-lg border ${i===0 ? 'border-teal-100 bg-teal-50/30' : 'border-slate-100 bg-white'} dark:bg-slate-800 dark:border-slate-700`}>
              <div className="flex items-center gap-3">
                 <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700"></div>
                 <div className="text-sm font-medium text-slate-900 dark:text-white">{u.name}</div>
              </div>
              <div className={`px-2 py-0.5 rounded text-[10px] font-semibold ${u.color} border opacity-90`}>
                 {u.role}
              </div>
           </div>
         ))}
      </div>
    )
  },
  {
    id: "analytics",
    title: "Analytics",
    icon: <BarChart3 className="w-5 h-5" />,
    description: "Insights that matter.",
    theme: {
      activeBg: "bg-purple-50/50 dark:bg-purple-900/10",
      activeBorder: "border-purple-200 dark:border-purple-800/50",
      activeRing: "ring-purple-100 dark:ring-purple-900/30",
      iconBg: "bg-purple-100 dark:bg-purple-900/40",
      iconText: "text-purple-600 dark:text-purple-300",
      titleColor: "text-purple-900 dark:text-purple-100"
    },
    windowContent: (
      <div className="space-y-4">
         <div className="flex items-end justify-between h-24 px-2 pb-2 border-b border-slate-200 dark:border-slate-700">
            {[40, 70, 45, 90, 60, 80, 50].map((h, i) => (
              <div key={i} className={`w-6 rounded-t opacity-90 hover:opacity-100 transition-opacity ${i === 3 ? 'bg-purple-500' : 'bg-slate-300 dark:bg-slate-700'}`} style={{ height: `${h}%` }}></div>
            ))}
         </div>
         <div className="grid grid-cols-2 gap-2">
            <div className="p-2 rounded bg-purple-50 dark:bg-purple-900/20 border border-purple-100 dark:border-purple-900/30">
               <div className="text-[10px] text-purple-600/70 uppercase">Views</div>
               <div className="text-lg font-bold text-purple-700 dark:text-purple-300">12.5k</div>
            </div>
            <div className="p-2 rounded bg-slate-50 dark:bg-slate-800/50">
               <div className="text-[10px] text-slate-500 uppercase">Avg Time</div>
               <div className="text-lg font-bold text-slate-800 dark:text-white">4m 12s</div>
            </div>
         </div>
      </div>
    )
  },
  {
    id: "integrations",
    title: "Integrations",
    icon: <Globe className="w-5 h-5" />,
    description: "Connect your tools.",
    theme: {
      activeBg: "bg-slate-50/50 dark:bg-slate-800/50",
      activeBorder: "border-slate-300 dark:border-slate-600",
      activeRing: "ring-slate-200 dark:ring-slate-700",
      iconBg: "bg-slate-200 dark:bg-slate-700",
      iconText: "text-slate-700 dark:text-slate-200",
      titleColor: "text-slate-900 dark:text-white"
    },
    windowContent: (
      <div className="grid grid-cols-2 gap-3">
         {["Slack", "GitHub", "Jira", "Figma"].map((tool, i) => (
           <div key={i} className="flex flex-col items-center justify-center p-3 rounded-lg border border-slate-100 bg-white hover:border-slate-300 transition-colors dark:bg-slate-800 dark:border-slate-700">
              <div className="w-8 h-8 rounded mb-2 bg-slate-100 dark:bg-slate-700"></div>
              <div className="text-xs font-medium text-slate-600 dark:text-slate-300">{tool}</div>
           </div>
         ))}
      </div>
    )
  }
];

// --- SCROLLING WRAPPER ---
const AutoScrollWrapper = ({ children, isEnabled = false }) => {
  const shouldReduceMotion = useReducedMotion();

  // If reduced motion, show content statically without scroll
  if (shouldReduceMotion) {
    return (
      <div className="absolute inset-0 overflow-y-auto p-6">
        {children}
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-white dark:from-slate-950 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white dark:from-slate-950 to-transparent z-10" />

      <motion.div
        animate={isEnabled ? { y: ["0%", "-50%"] } : { y: 0 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 40, // Slower, calmer speed
        }}
        className="w-full"
      >
        <div className="flex flex-col">
          <div className="p-6 pb-8 border-b border-transparent">
             {children}
          </div>
          <div className="p-6 pb-8 border-b border-transparent">
             {children}
          </div>
        </div>
      </motion.div>
    </div>
  );
};



export default function FeatureRow({ 
  badge, 
  title, 
  description, 
  bullets = [], 
  align = "left", 
  visualComponent 
}) {
  const isReversed = align === "right";
  const [activeFeatureIndex, setActiveFeatureIndex] = useState(0);
  const [hasActivated, setHasActivated] = useState(false);
  
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.4 });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView && !hasActivated) {
      setHasActivated(true);
    }
  }, [isInView, hasActivated]);

  const activeFeature = FEATURES_DATA[activeFeatureIndex];

  const handleMouseEnter = (idx) => {
     setActiveFeatureIndex(idx);
     setHasActivated(true);
  };

  return (
    <section ref={containerRef} className="py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${isReversed ? "lg:flex-row-reverse" : ""}`}>
          
          {/* LEFT SIDE: Feature Grid */}
          <div className="flex-1 max-w-xl">
            <RevealSection delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {FEATURES_DATA.map((card, idx) => {
                   const isActive = idx === activeFeatureIndex;
                   return (
                     <motion.div 
                       key={card.id} 
                       onMouseEnter={() => handleMouseEnter(idx)}
                       whileHover={!shouldReduceMotion ? { y: -2 } : {}}
                       transition={{ duration: 0.2, ease: "easeOut" }}
                       className={`p-4 rounded-xl border transition-all duration-200 ease-out cursor-default flex flex-col items-start gap-2 shadow-sm
                         ${isActive 
                           ? `${card.theme.activeBg} ${card.theme.activeBorder} ring-1 ${card.theme.activeRing}` 
                           : "bg-white/50 border-slate-200 dark:bg-slate-900/50 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white/80 dark:hover:bg-slate-800/80"
                         }`}
                     >
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl transition-colors duration-200 ${isActive ? `${card.theme.iconBg} ${card.theme.iconText}` : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"}`}>
                          {card.icon}
                        </div>
                        <div>
                          <h3 className={`font-semibold text-sm transition-colors duration-200 ${isActive ? card.theme.titleColor : "text-slate-900 dark:text-white"}`}>
                            {card.title}
                          </h3>
                        </div>
                     </motion.div>
                   );
                 })}
              </div>
            </RevealSection>
          </div>

          {/* RIGHT SIDE: Dynamic Mac Window */}
          <div className="flex-1 w-full relative">
            <RevealSection delay={0.3}>
              <div className="relative rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 p-2 shadow-2xl shadow-slate-200/50 dark:shadow-black/50 overflow-hidden transition-colors duration-500">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-500/10 blur-[80px] rounded-full pointer-events-none" />
                
                <div className="relative aspect-[4/3] bg-white dark:bg-slate-950 rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 flex flex-col">
                     <div className="h-10 border-b border-slate-100 dark:border-slate-800 flex items-center px-4 gap-2 bg-slate-50/50 dark:bg-slate-900/50 z-20 relative">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/80"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400/80"></div>
                        <div className="ml-4 px-3 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-400 font-mono opacity-50">
                           docmodel-app — v2.4
                        </div>
                     </div>

                     <div className="flex-1 relative overflow-hidden bg-slate-50/20 dark:bg-slate-900/20">
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeFeature.id}
                            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -8 }}
                            transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                            className="absolute inset-0"
                          >
                             <AutoScrollWrapper isEnabled={hasActivated}>
                                 <div className="mb-6">
                                    <h4 className={`text-lg font-bold mb-1 transition-colors duration-300 ${activeFeature.theme.titleColor}`}>{activeFeature.title}</h4>
                                    <p className="text-sm text-slate-500 dark:text-slate-400">{activeFeature.description}</p>
                                 </div>
                                 <div className="relative">
                                    {activeFeature.windowContent}
                                 </div>
                                 <div className="h-4"></div>
                             </AutoScrollWrapper>
                          </motion.div>
                        </AnimatePresence>
                     </div>
                </div>
              </div>
            </RevealSection>
          </div>

        </div>
      </div>
    </section>
  );
}
