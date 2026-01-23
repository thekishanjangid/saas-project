import { Link } from "react-router-dom";
import { Twitter, Linkedin, Facebook, Github } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Knowledge Base", href: "/product/knowledge-base" },
        { name: "API Documentation", href: "/product/api-docs" },
        { name: "Eddy AI", href: "/product/ai" },
        { name: "Integrations", href: "/integrations" },
        { name: "Security", href: "/security" },
        { name: "Enterprise", href: "/enterprise" },
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "Customer Support", href: "/solutions/support" },
        { name: "SaaS Companies", href: "/solutions/saas" },
        { name: "Internal Wiki", href: "/solutions/wiki" },
        { name: "Technical Docs", href: "/solutions/technical" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/customers" },
        { name: "Community", href: "/community" },
        { name: "Help Center", href: "/help" },
        { name: "Glossary", href: "/glossary" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Partners", href: "/partners" },
        { name: "Contact", href: "/contact" },
        { name: "Legal", href: "/legal" },
      ]
    }
  ];

  return (
    <footer className="relative z-10 bg-slate-950/80 backdrop-blur-md text-slate-300 border-t border-slate-800/50">
      <div className="container mx-auto px-4 py-16">
        
        {/* Top Section: Logo & Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-16">
          {/* Brand Column (2 cols wide on large screens) */}
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
               <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-white">
                 <span className="text-xl font-bold">D</span>
               </div>
               <span className="text-xl font-bold text-white tracking-tight">DocModel</span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              The AI-powered documentation platform that helps you build, manage, and scale your knowledge base with confidence. 
              <br /><br />
              Trusted by 10,000+ teams worldwide.
            </p>
            <div className="flex gap-4 mt-2">
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"><Twitter className="w-5 h-5"/></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"><Linkedin className="w-5 h-5"/></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 hover:text-white transition-colors"><Github className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Link Columns */}
          {footerSections.map((section) => (
            <div key={section.title} className="col-span-1">
              <h4 className="font-semibold text-white mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.href} className="text-sm hover:text-purple-400 transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <div>
            © {new Date().getFullYear()} DocModel Inc. All rights reserved.
          </div>
          <div className="flex gap-8">
            <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link to="/security" className="hover:text-slate-300 transition-colors">Security</Link>
            <Link to="/status" className="hover:text-slate-300 transition-colors">System Status</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
