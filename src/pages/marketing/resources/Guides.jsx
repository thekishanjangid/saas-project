import React from "react";

export default function Guides() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Guides & Best Practices
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Mastering Collaboration</h2>
        <p className="text-xl leading-relaxed mb-8">
          Leedsphere is a powerful tool, but tools are only as good as the workflows they support. 
          These guides deep-dive into how high-performing teams structure their communication for maximum impact.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Organizing Channels Effectively</h2>
        <p>
          The number one problem teams face is "channel sprawl." To combat this, adopt a consistent naming convention. 
          Use prefixes to group related channels together in the sidebar.
        </p>
        <ul className="list-disc pl-5 space-y-2">
            <li><strong>#announcements-*:</strong> Read-only channels for one-way updates.</li>
            <li><strong>#ask-*:</strong> Help desks (e.g., #ask-legal, #ask-finance).</li>
            <li><strong>#client-*:</strong> External-facing channels for customer collaboration.</li>
        </ul>
        <p>
          Don't be afraid to archive channels! If a project is done, archive the channel. The history is preserved, 
          but it clears the clutter from everyone's sidebar.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">The Art of the Thread</h2>
        <p>
          Threads are the superpower of Leedsphere. Use them to keep the main channel readable. 
          A good rule of thumb: if your reply is directed at one person or is a detailed follow-up to a specific post, 
          <strong>thread it</strong>. If it's a new standalone topic, <strong>post it to the channel</strong>.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Scaling Communication</h2>
        <p>
          As you grow from 10 to 100 to 1,000 employees, you cannot just "talk louder." You need to structure your communication. 
          Move updates out of meetings and into written weekly digests. Use emoji reactions (✅, 👀, 👍) to acknowledge receipts 
          without sending a notification to everyone.
        </p>
        <p>
          These small habits compound. A team that masters asynchronous written communication moves faster and makes better decisions 
          than a team that relies on tapping people on the shoulder.
        </p>
      </div>
    </div>
  );
}
