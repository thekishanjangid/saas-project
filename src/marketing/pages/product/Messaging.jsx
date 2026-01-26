import React from "react";

export default function Messaging() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Team Messaging
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Real-Time Connection</h2>
        <p className="text-xl leading-relaxed mb-8">
          Leedsphere Messaging is designed for the speed of modern business. It enables instant, 
          fluid communication that keeps your team in sync, whether they are in the same office or across the globe.
        </p>
        <p>
          Unlike email, which is formal, slow, and isolated, messaging in Leedsphere feels like a natural conversation. 
          It lowers the barrier to asking questions, sharing ideas, and giving feedback. This immediacy accelerates 
          decision-making loops and helps teams iterate faster.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">The Power of Threaded Conversations</h2>
        <p>
          In busy channels, linear chat can quickly become overwhelming. Leedsphere solves this with Threads. 
          You can reply to any message to start a side discussion that is bundled neatly under the original post.
        </p>
        <p>
          Threads keep the main channel view clean while allowing for deep-dive discussions on specific topics. 
          This prevents the "wall of text" problem and ensures that you can catch up on a busy channel 
          by scanning the high-level topics, drilling down only into the details that matter to you.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Searchable Decision History</h2>
        <p>
          Every message sent in Leedsphere is indexed and permanently improved. We don't delete your history. 
          This means your messaging history becomes a searchable knowledge base of every decision your company has ever made.
        </p>
        <p>
          Why did we choose this vendor last year? Who approved this design? What was the context for this bug fix? 
          Instead of relying on fallible human memory or digging through archived inboxes, you can find the exact 
          answer in seconds.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Escaping Email Chains</h2>
        <p>
          Email was designed for letters, not collaboration. Long chains with varying recipients, "Reply All" disasters, 
          and forked conversations create confusion. Leedsphere replaces internal email entirely. 
          You effectively upgrade your team's bandwidth, moving from high-latency, low-context updates 
          to high-bandwidth, shared-context collaboration.
        </p>
      </div>
    </div>
  );
}
