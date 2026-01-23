import { motion, useScroll, useTransform } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, PlayCircle, CheckCircle2 } from "lucide-react";
import { useRef, useState } from "react";
import HeroLightingOverlay from "./HeroLightingOverlay";

const TrustedLogos = () => {
  // Placeholder logos - using text for now to keep it lightweight but styled like logos
  const logos = [
    "Acme Corp", "GlobalTech", "Nebula", "FoxRun", "Circle", "Trevizo"
  ];

  return (
    <div className="mt-16 pt-8 border-t border-slate-200/20 dark:border-slate-800/20">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-6 font-mono tracking-wide uppercase text-[10px]">
        Trusted by 10,000+ forward-thinking teams
      </p>
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 opacity-40 hover:opacity-80 transition-opacity duration-500">
        {logos.map((logo) => (
          <span key={logo} className="text-lg font-bold text-slate-400 dark:text-slate-300 transition-colors cursor-default tracking-tight">
            {logo}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function HeroSection() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      navigate(`/signup?email=${encodeURIComponent(email)}`);
    } else {
      navigate("/signup");
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden px-4"
    >
      {/* Cinematic Lighting System */}
      <HeroLightingOverlay />

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto max-w-5xl text-center relative z-10"
      >
        {/* 1. Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-50/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-700/50 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-white/50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer backdrop-blur-sm shadow-sm hover:shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
            </span>
            New: AI-Powered Knowledge Base v2.0
            <ArrowRight className="w-3.5 h-3.5 ml-1 opacity-50" />
          </div>
        </motion.div>

        {/* 2. Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-8 leading-[1.05] drop-shadow-sm"
        >
          Centralize your knowledge. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-300 dark:to-blue-300">
            Empower your team.
          </span>
        </motion.h1>

        {/* 3. Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          The enterprise-grade documentation platform that turns scattered information into a single source of truth. Instant answers, happier customers, and significantly fewer support tickets.
        </motion.p>

        {/* 4. CTA Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col sm:flex-row gap-3 relative">
            <div className="relative flex-1 group">
               <input
                 type="email"
                 placeholder="Enter your work email"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 className="w-full px-5 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/60 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all shadow-sm backdrop-blur-sm"
                 required
               />
            </div>

            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Start Free Trial
            </button>
          </form>

          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-slate-500 dark:text-slate-400 font-medium">
            <div className="flex gap-6">
              <span className="flex items-center gap-1.5 transition-colors hover:text-slate-700 dark:hover:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-500" /> 14-day free trial
              </span>
              <span className="flex items-center gap-1.5 transition-colors hover:text-slate-700 dark:hover:text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-purple-500" /> No credit card required
              </span>
            </div>
          </div>
        </motion.div>

        {/* 5. Secondary CTA */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 0.8, delay: 0.8 }}
           className="mt-10"
        >
            <Link to="/demo" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300 font-medium hover:text-purple-600 dark:hover:text-purple-400 transition-colors group">
              <PlayCircle className="w-5 h-5 group-hover:scale-110 transition-transform text-purple-600" />
              Watch 2-minute product tour
            </Link>
        </motion.div>

        {/* 6. Trust Signals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <TrustedLogos />
        </motion.div>

      </motion.div>
    </section>
  );
}
