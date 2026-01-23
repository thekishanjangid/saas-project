import { ArrowRight, PlayCircle } from "lucide-react";
import ScrollReveal from "../ui/ScrollReveal";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Content */}
        <div className="flex flex-col gap-6 text-left z-10">
          <ScrollReveal delay={0.1}>
            <div className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50 dark:bg-purple-900/20 px-3 py-1 text-sm font-medium text-purple-800 dark:text-purple-300 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-purple-600 mr-2 animate-pulse"></span>
              New: AI Documentation Assistant
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Centralize Your <br />
              <span className="text-purple-600 dark:text-purple-400">Knowledge Base</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="max-w-[600px] text-lg text-slate-600 dark:text-slate-300 leading-relaxed md:text-xl">
              Create, publish, and manage documentation with a platform designed for scale. 
              Give your team instant answers and reduce support tickets by 30%.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <button className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors shadow-lg hover:shadow-purple-500/25 cursor-pointer">
                Get Started Free
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center h-12 px-8 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm cursor-pointer">
                <PlayCircle className="mr-2 h-4 w-4 text-purple-600" />
                Watch Demo
              </button>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.5}>
            <div className="text-sm text-slate-500 dark:text-slate-400 mt-2">
              No credit card required · 14-day free trial · SOC 2 Compliant
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Visual */}
        <div className="relative z-10 lg:h-[600px] flex items-center justify-center">
           {/* Abstract UI composition */}
           <motion.div 
             initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
             animate={{ opacity: 1, scale: 1, rotate: 0 }}
             transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
             className="relative w-full max-w-[600px] aspect-square"
           >
             {/* Main Card */}
             <div className="absolute inset-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/50 dark:border-slate-700/50 p-6 flex flex-col gap-4 overflow-hidden transform transition-all hover:scale-[1.01] duration-500">
                <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600">
                     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
                  </div>
                  <div className="h-2 w-32 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                </div>
                <div className="space-y-3">
                   <div className="h-4 w-3/4 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                   <div className="h-4 w-full bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                   <div className="h-4 w-5/6 bg-slate-100 dark:bg-slate-800 rounded-full"></div>
                </div>
                <div className="mt-auto grid grid-cols-2 gap-4">
                   <div className="h-24 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50"></div>
                   <div className="h-24 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50"></div>
                </div>
             </div>

             {/* Floating Elements (Parallax feel) */}
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -right-8 top-20 w-48 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 z-20 hidden md:block"
             >
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs font-bold">✓</div>
                   <div className="text-sm font-semibold">Published</div>
                </div>
                <div className="h-2 w-20 bg-slate-100 rounded-full"></div>
             </motion.div>

             <motion.div 
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -left-8 bottom-32 w-48 p-4 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 z-20 hidden md:block"
             >
                <div className="flex items-center gap-3 mb-2">
                   <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">AI</div>
                   <div className="text-sm font-semibold">Generating...</div>
                </div>
                <div className="h-2 w-full bg-slate-100 rounded-full mb-1"></div>
                <div className="h-2 w-2/3 bg-slate-100 rounded-full"></div>
             </motion.div>

           </motion.div>
        </div>
      </div>
    </section>
  );
}
