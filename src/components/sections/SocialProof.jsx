import ScrollReveal from "../ui/ScrollReveal";

const logos = [
  { name: "SaaS Corp", color: "bg-blue-500" },
  { name: "Enterprise AI", color: "bg-purple-500" },
  { name: "TechFlow", color: "bg-emerald-500" },
  { name: "DataSystems", color: "bg-orange-500" },
  { name: "CloudScale", color: "bg-cyan-500" },
  { name: "SecurityPlus", color: "bg-red-500" },
];

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="text-center mb-8">
            <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Trusted by 10,000+ Teams Worldwide</p>
          </div>
        </ScrollReveal>
        
        {/* Logo Slider (Mock) */}
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center flex-wrap gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Using simple text placeholders for logos, or SVGs if available. Using placeholders for now to keep it clean. */}
             {logos.map((logo, idx) => (
               <div key={idx} className="flex items-center gap-2 font-bold text-xl text-slate-700 dark:text-slate-300">
                  <div className={`w-6 h-6 rounded ${logo.color}`}></div>
                  {logo.name}
               </div>
             ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 text-center">
           {[
             { label: "Daily Users", value: "2M+" },
             { label: "Articles Published", value: "500k+" },
             { label: "Support Saved", value: "$40M" },
             { label: "Uptime", value: "99.99%" },
           ].map((stat, idx) => (
             <ScrollReveal key={idx} delay={0.3 + (idx * 0.1)}>
               <div className="p-4">
                 <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                 <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
               </div>
             </ScrollReveal>
           ))}
        </div>
      </div>
    </section>
  );
}
