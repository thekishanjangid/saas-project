import React from "react";

export default function Engineering() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        For Product & Engineering Teams
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Build the Future, Together</h2>
        <p className="text-xl leading-relaxed mb-8">
          Great products aren't built in isolation. They require a tight feedback loop between product managers, 
          designers, and engineers. Leedsphere bridges the gap between these disciplines, creating a shared 
          environment where ideas turn into shipped code faster.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">For Product Teams</h2>
        <p>
          <strong>Align on Strategy:</strong> Shift discussions from transient whiteboard sessions to persistent channels. 
          Document the "why" behind every feature request in a searchable history that stakeholders can reference months later.
        </p>
        <p>
          <strong>Prioritize with Clarity:</strong> Use dedicated channels for sprint planning and roadmap reviews. 
          Pin key requirements, timelines, and design mocks so they are always one click away for the engineering team.
        </p>
        <p>
          <strong>Cross-Functional Feedback:</strong> Break down the walls between sales, support, and product. 
          Create public channels like <code className="text-purple-400">#feedback-mobile-app</code> where customer-facing 
          teams can drop insights directly to the people building the solution.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">For Engineering Teams</h2>
        <p>
          <strong>Ship Without the Noise:</strong> Engineers need long blocks of focus time. Leedsphere's asynchronous-first 
          design encourages threaded discussions and "do not disturb" modes that respect deep work. 
          Integrate your alerts so they go to a triage channel, not your direct messages.
        </p>
        <p>
          <strong>Code-Centric Collaboration:</strong> Paste code snippets with syntax highlighting directly into the chat. 
          Discuss technical architecture in threads without polluting the main channel. 
          Make decisions on API contracts and database schemas in a place where the logic is preserved forever.
        </p>
        <p>
          <strong>Automate Your Workflow:</strong> Connect GitHub, GitLab, or Sentry. Get meaningful notifications about 
          failed builds or merged PRs right where you are already communicating. Turn Leedsphere into the 
          command center for your entire DevOps lifecycle.
        </p>
      </div>
    </div>
  );
}
