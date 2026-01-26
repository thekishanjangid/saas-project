import React from "react";

export default function Start() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Getting Started with Leedsphere
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Welcome to Your New HQ</h2>
        <p className="text-xl leading-relaxed mb-8">
          You've taken the first step toward a more organized, transparent, and efficient way of working. 
          Leedsphere isn't just a chat app; it's a new operating system for your team's culture.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Step 1: Create Your Workspace</h2>
        <p>
          Your workspace is the digital building where your team lives. When you create a new workspace, 
          you choose a unique URL (e.g., <code className="text-purple-400">yourcompany.leedsphere.com</code>). 
          This will be your team's permanent address.
        </p>
        <p>
          <strong>Tip:</strong> Keep the name short and recognizable. If you are a large organization, you might eventually 
          have multiple workspaces connected by an Enterprise Grid, but for now, start with one central hub.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Step 2: Invite Your Teammates</h2>
        <p>
          Leedsphere is lonely without people. Go to your admin dashboard and send invites via email. 
          We recommend starting with a small "pilot group"—perhaps your immediate team or a specific project squad—to 
          establish norms before inviting the whole company.
        </p>
        <p>
          <strong>Best Practice:</strong> Send a personal note along with the invite explaining <em>why</em> you are moving to Leedsphere. 
          Explain that this is where work will happen from now on.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Step 3: Set Up Your Channels</h2>
        <p>
          Good channel hygiene is the secret to success. Avoid creating a channel for every random thought. 
          Start with the basics:
        </p>
        <ul className="list-disc pl-5 space-y-2">
            <li><code className="text-purple-400">#general</code>: For company-wide announcements (keep this low volume).</li>
            <li><code className="text-purple-400">#random</code>: For social chatter, pet photos, and culture building.</li>
            <li><code className="text-purple-400">#team-[name]</code>: For department-specific work (e.g., #team-design, #team-sales).</li>
            <li><code className="text-purple-400">#proj-[name]</code>: For temporary project-based collaboration.</li>
        </ul>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Step 4: Send the First Message</h2>
        <p>
          Lead by example. Post a welcome message in <code className="text-purple-400">#general</code>. 
          Encourage people to fill out their profiles with photos and job titles—it helps remote teams feel more connected. 
          Start a thread to show people how to keep conversations tidy.
        </p>
      </div>
    </div>
  );
}
