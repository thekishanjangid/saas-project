import { motion } from "framer-motion";
import { Check, ArrowRight, Zap } from "lucide-react";
import RevealSection from "./RevealSection";
import AIChatMock from "./AIChatMock";

export default function AISection() {
  const capabilities = [
    "Instant answers from your knowledge base",
    "Context-aware response generation",
    "Learns from documentation updates instantly",
    "Secure, role-based access control"
  ];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-transparent border-y border-slate-100/20 dark:border-slate-800/30">
      <div className="container mx-auto px-4">
        <RevealSection effect="cinematic">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left: Text Content */}
          <div className="flex-1 max-w-xl">
             <RevealSection>
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-purple-600 dark:text-purple-400 uppercase bg-white dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30 rounded-full shadow-sm">
                  <Zap className="w-3.5 h-3.5 fill-purple-600 dark:fill-purple-400" />
                  Eddy AI 2.0
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-[1.1]">
                  AI that instantly finds answers <br className="hidden md:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                    across your docs.
                  </span>
                </h2>

                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  Stop answering the same questions repeatedly. Eddy AI ingests your documentation and delivers accurate, sourced answers to your customers and team members in seconds.
                </p>

                <ul className="space-y-4 mb-10">
                  {capabilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 mt-0.5">
                        <Check className="w-3.5 h-3.5" strokeWidth={3} />
                      </div>
                      <span className="text-slate-700 dark:text-slate-200 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center gap-2 text-white bg-slate-900 dark:bg-white dark:text-slate-900 px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Try Eddy AI
                  <ArrowRight className="w-4 h-4" />
                </button>
             </RevealSection>
          </div>

          {/* Right: Visual */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
             <RevealSection delay={0.2} className="w-full">
                <AIChatMock />
             </RevealSection>
          </div>

          </div>
        </RevealSection>
      </div>
    </section>
  );
}
