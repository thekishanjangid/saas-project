import React from "react";

export default function Overview() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Leedsphere Product
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">A Shared Workspace for Modern Teams</h2>
        <p className="text-xl leading-relaxed mb-8">
          Leedsphere is the central operating system for high-performing teams. It brings your conversations, 
          files, tools, and people into a single, unified digital environment.
        </p>
        <p>
          In today's fragmented digital landscape, teams lose hours every week simply switching contexts. 
          Emails bury critical decisions, chat apps create noise without signal, and files get lost in the void of local drives. 
          Leedsphere was built to solve this fundamental separation.
        </p>
        <p>
          By consolidating communication, we don't just reduce friction; we create a system where work flows naturally. 
          Context is preserved, history is searchable, and every member of the team—whether they joined today or 
          two years ago—has access to the same institutional knowledge.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Why Collaboration is Broken</h2>
        <p>
          Most organizations suffer from information silos. Engineering talks in one tool, sales in another, 
          and management over email. This disconnect leads to miscommunication, duplicated work, and slow decision-making. 
          When information doesn't flow, companies stall.
        </p>
        <p>
          Leedsphere breaks down these walls. It replaces the chaos of scattered apps with a structured, 
          channel-based architecture that organizes communication by topic, project, or department. 
          It transforms "noise" into a searchable, organized archive of your company's collective intelligence.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Centralizing Your Work</h2>
        <p>
          Imagine a workspace where every alert, every file, and every discussion lives in one place. 
          Connect your engineering tools, your customer support tickets, and your project management boards directly into Leedsphere.
        </p>
        <p>
          This isn't just about chatting; it's about executing. It's about turning a discussion into a decision, 
          and a decision into a shipped product, all without leaving the window. Leedsphere is designed to be the 
          layer where work actually happens.
        </p>
      </div>
    </div>
  );
}
