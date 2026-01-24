import React from "react";

export default function Integrations() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Integrations
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">The Hub of Your Workflow</h2>
        <p className="text-xl leading-relaxed mb-8">
          Modern teams use dozens of specialized tools: issue trackers, design software, CRMs, and deployment pipelines. 
          Leedsphere doesn't try to replace them; it connects them.
        </p>
        <p>
          By integrating your existing tool stack into Leedsphere, you create a central command center. 
          Notifications, alerts, and updates from all your other apps flow into your channels. 
          This means you don't have to constantly tab-switch to check status. If a build fails, a ticket is updated, 
          or a lead closes, your team knows about it instantly.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Workflow Continuity</h2>
        <p>
          Integrations allow for actionable workflows. You can not only receive alerts but often take action directly 
          from the chat interface. Approve a deployment, close a support ticket, or schedule a calendar meeting 
          without breaking your flow.
        </p>
        <p>
          This continuity preserves focus. It allows developers to stay in the context of their code while still 
          being aware of the broader project status. It allows support agents to collaborate on tickets 
          without leaving their queue.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Connecting the Ecosystem</h2>
        <p>
          Whether you are using standard industry tools or custom internal software, Leedsphere acts as the glue. 
          Our robust API and Webhooks allow you to pipe any data stream into a channel.
        </p>
        <p>
          This programmability turns your communication platform into a custom dashboard for your business health. 
          Monitor server uptime, track daily sales stats, or celebrate team wins automatically. 
          Leedsphere adapts to the way your specific team works, not the other way around.
        </p>
      </div>
    </div>
  );
}
