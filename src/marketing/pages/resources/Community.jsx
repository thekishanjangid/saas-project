import React from "react";

export default function Community() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Leedsphere Community
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Connect with Peers</h2>
        <p className="text-xl leading-relaxed mb-8">
          You are not alone on this journey. The Leedsphere Community is a global network of team leaders, 
          developers, and productivity enthusiasts who are rewriting the rules of work.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Knowledge Sharing Framework</h2>
        <p>
          We believe that the best way to learn is from each other. Our community forums are a place to:
        </p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>Share Workflows:</strong> Show off how your marketing team uses automated bots to track leads.</li>
            <li><strong>Ask for Advice:</strong> "How do you handle channel naming for a 500-person engineering org?"</li>
            <li><strong>Find Partners:</strong> Connect with consultants and experts who can help you deploy Leedsphere.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">User Groups & Events</h2>
        <p>
          We host quarterly virtual meetups and annual user conferences. These events are opportunities to see 
          behind the curtain, hear from our product team, and network with other industry leaders.
        </p>
        <p>
          Check our events calendar to find a local Leedsphere User Group (LUG) in your city. 
          Pizza and collaborative software talk—what could be better?
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Shape the Product</h2>
        <p>
          Our roadmap is heavily influenced by our community. We have a dedicated "Feature Request" space where 
          you can upvote ideas and provide feedback on beta features. We build Leedsphere <em>with</em> you, not just for you.
        </p>
      </div>
    </div>
  );
}
