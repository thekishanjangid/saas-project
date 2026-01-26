import React from "react";

export default function Search() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Workspace Search
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Instant Recall for Your Team</h2>
        <p className="text-xl leading-relaxed mb-8">
          Leedsphere's Workspace Search is the collective memory of your organization. It allows you to 
          instantly retrieve any message, file, or piece of context from the entire history of your team.
        </p>
        <p>
          As your company grows, the amount of information you generate explodes. Without a powerful search engine, 
          this information becomes a liability—unmanageable noise. With Leedsphere, it becomes an asset. 
          A single keystroke (Cmd+K) allows you to jump to any conversation or find any document.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Onboarding with Context</h2>
        <p>
          Adding new team members is often a slow, painful process of forwarding emails and re-explaining decisions. 
          Workspace Search changes this dynamic entirely.
        </p>
        <p>
          When a new employee joins a channel, they can scroll up. They can search for "Q3 roadmap" or "Project Alpha" 
          and see every discussion, every pivot, and every file related to that topic from before they were hired. 
          They can onboard themselves by exploring the history of the work, reaching productivity in days rather than weeks.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Advanced Filtering</h2>
        <p>
          Our search isn't just a keyword match. It understands the structure of your team. 
          You can narrow your search to specific channels ("only in #design"), specific people ("from @sarah"), 
          or specific timeframes.
        </p>
        <p>
          This precision saves hours of productivity time. Instead of vaguely remembering "someone mentioned the budget," 
          you can find the exact spreadsheet in seconds. It allows you to validate facts, review past instructions, 
          and maintain consistency across long-running projects.
        </p>
      </div>
    </div>
  );
}
