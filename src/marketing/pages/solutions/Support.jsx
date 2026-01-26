import React from "react";

export default function Support() {
    return (
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          For Support Teams
        </h1>
        <div className="prose prose-invert prose-lg max-w-none text-slate-300">
          <h2 className="text-3xl font-semibold text-white mt-12 mb-6">The Frontline of Customer Success</h2>
          <p className="text-xl leading-relaxed mb-8">
            Support teams are the voice of the company. Leedsphere empowers them to solve problems faster by 
            connecting them directly to the rest of the organization. No more siloing customer issues in a separate ticketing tool.
          </p>

          <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Swarm on Critical Issues</h2>
          <p>
            When a high-priority incident occurs, speed is everything. Leedsphere allows support agents to instantly 
            spin up an incident channel, invite on-call engineers, and manage the situation in real-time.
          </p>
          <p>
            This collaborative swarming ensures that the right experts are looking at the problem immediately, 
            drastically reducing Mean Time to Resolution (MTTR). Once resolved, the channel serves as a 
            timestamped post-mortem of exactly what happened.
          </p>

          <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Seamless Handoffs</h2>
          <p>
            Shift changes shouldn't mean dropping the ball. With persistent channel history and threaded conversations, 
            an incoming agent can read the last 15 minutes of discussion and get up to speed instantly.
          </p>
          <p>
            Complex cases that require escalation to Tier 2 or Tier 3 support can be handled by simply @mentioning the right group. 
            The context—screenshots, logs, and customer sentiment—is already there, preserved in the thread.
          </p>

          <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Knowledge Sharing</h2>
          <p>
            Don't solve the same problem twice. Use Leedsphere to build a living library of solutions. 
            When a new tricky issue is solved in a public channel, it becomes searchable for every other agent forever. 
            New hires can learn by osmosis, seeing how experienced agents handle difficult situations.
          </p>
        </div>
      </div>
    );
}
