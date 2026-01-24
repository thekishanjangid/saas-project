import React from "react";

export default function Channels() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Team Channels
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Structure Your Communication</h2>
        <p className="text-xl leading-relaxed mb-8">
          Team Channels are the fundamental building blocks of Leedsphere. They organize your conversations 
          into dedicated spaces for every project, topic, and team.
        </p>
        <p>
          Without channels, communication is a chaotic stream where important updates get washed away. 
          With channels, you create a dedicated home for every initiative. This ensures that the right people 
          are in the right room, discussing the right topic, at the right time.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Organizing Work that Scales</h2>
        <p>
          As your team grows, so does the volume of communication. Email chains break under the pressure of 
          more than three participants. Group chats become unreadable noise.
        </p>
        <p>
          Leedsphere channels scale with you. You can have a channel for every client, every deployment, 
          or every social event. Users can join the channels relevant to their work and muted the ones that aren't. 
          This autonomy empowers employees to manage their own attention, reducing burnout and "notification fatigue."
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Public vs. Private Spaces</h2>
        <p>
          Transparency is key to speed. By default, open channels allow anyone in the organization to search, 
          view, and join the conversation. This breaks down silos and allows cross-functional teams to collaborate spontaneously.
        </p>
        <p>
          However, some conversations need privacy. Private channels offer a secure space for sensitive discussions, 
          personnel matters, or leadership strategy, visible only to invited members. You have granular control 
          over who sees what, ensuring security without sacrificing openness.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Real-World Examples</h2>
        <ul className="list-disc pl-5 space-y-4">
            <li><strong>#proj-website-redesign:</strong> Designers and developers share mockups and feedback in real-time.</li>
            <li><strong>#help-it:</strong> A centralized place for anyone in the company to request hardware support.</li>
            <li><strong>#announcements:</strong> A read-only channel where leadership broadcasts critical company updates.</li>
            <li><strong>#social-music:</strong> A space for team bonding over shared interests, fostering culture remotely.</li>
        </ul>
      </div>
    </div>
  );
}
