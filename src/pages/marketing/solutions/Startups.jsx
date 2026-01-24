import React from "react";

export default function Startups() {
    return (
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          For Startups
        </h1>
        <div className="prose prose-invert prose-lg max-w-none text-slate-300">
          <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Move Fast, Stay Aligned</h2>
          <p className="text-xl leading-relaxed mb-8">
            Speed is a startup's only advantage. Leedsphere is designed to capitalize on that speed while 
            preventing the chaos that often kills early-stage companies.
          </p>

          <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Avoid Tool Sprawl</h2>
          <p>
            In the early days, you don't need a heavy CRM, a complex project management suite, and a separate wiki. 
            Leedsphere can handle it all. Usage text channels for updates, canvas for light documentation, 
            and lightweight integrations to keep everything in one window.
          </p>
          <p>
            Focus your limited runway on building your product, not managing your software licenses. 
            Leedsphere gives you a robust communication backbone that works as well for 5 people as it does for 50.
          </p>

          <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Onboard Employee #10 (and #100)</h2>
          <p>
            When you're doubling your headcount every year, onboarding is a bottleneck. 
            With Leedsphere, your history is your handbook. New hires can search for "founding story," 
            "product vision," or "pricing strategy" and see exactly how you arrived at today's decisions.
          </p>

          <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Aligned Autonomy</h2>
          <p>
            Startups thrive when individuals can take ownership. Leedsphere's open channel structure allows 
            founders to broadcast vision and feedback to everyone, ensuring that even as the team grows, 
            everyone remains pulling in the same direction.
          </p>
        </div>
      </div>
    );
}
