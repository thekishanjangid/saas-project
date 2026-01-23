import ScrollReveal from "../ui/ScrollReveal";
import { Search, PenTool, MessageSquare, BookOpen, Volume2, FileText } from "lucide-react";

const features = [
  {
    icon: Search,
    title: "AI Search",
    description: "Deliver instant, ChatGPT-style answers that get straight to the point, saving your customers from raising a support ticket.",
    color: "text-blue-600",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    icon: PenTool,
    title: "AI Writing Agent",
    description: "Generate complete, step-by-step documentation just by uploading a video, text file, audio, or prompt.",
    color: "text-purple-600",
    bg: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot",
    description: "Deliver 24/7 support using a smart, documentation-driven chatbot that reduces support costs.",
    color: "text-emerald-600",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    icon: BookOpen,
    title: "AI Glossary",
    description: "Bridge the knowledge gap by auto-generating glossaries that simplify technical jargon.",
    color: "text-orange-600",
    bg: "bg-orange-100 dark:bg-orange-900/30",
  },
  {
    icon: Volume2,
    title: "Text to Audio",
    description: "Convert your documents to natural-sounding audio so users can listen to them anytime, anywhere.",
    color: "text-pink-600",
    bg: "bg-pink-100 dark:bg-pink-900/30",
  },
  {
    icon: FileText,
    title: "Article Summarizer",
    description: "Turn complex documents into clear, concise summaries so customers & support teams get answers faster.",
    color: "text-cyan-600",
    bg: "bg-cyan-100 dark:bg-cyan-900/30",
  }
];

export default function FeatureGrid() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
              Turn ideas into documents with <span className="text-purple-600 dark:text-purple-400">Eddy AI</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Supercharge your documentation with our suite of AI tools designed to create, manage, and deliver content faster than ever.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <ScrollReveal key={idx} delay={0.1 + (idx * 0.1)}>
              <div className="group relative h-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-transparent to-slate-50 dark:to-slate-800 rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 relative z-10">
                  {feature.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
