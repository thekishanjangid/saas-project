import React from "react";

export default function Remote() {
    return (
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          Remote & Hybrid Teams
        </h1>
        <div className="prose prose-invert prose-lg max-w-none text-slate-300">
          <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Your Digital Headquarters</h2>
          <p className="text-xl leading-relaxed mb-8">
            In a world without physical offices, your collaboration tool is your building. Leedsphere gives 
            remote and hybrid teams a sense of place, presence, and belonging, regardless of time zone.
          </p>

          <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Asynchronous by Design</h2>
          <p>
            Great remote work requires moving beyond the 9-to-5 synchronous mindset. Leedsphere is built to 
            bridge time zones. Write a detailed update in London, and your colleague in San Francisco will read 
            it when they wake up—with full context and no missed meetings.
          </p>
          <p>
            Work doesn't disappear into the ether. Decisions made while you sleep are waiting for you in 
            organized channels, allowing projects to move forward 24/7 without burning anyone out.
          </p>

          <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Replacing the Watercooler</h2>
          <p>
            Remote isolation is real. Leedsphere helps sustain culture through social channels, interest groups, 
            and casual chatter. Whether it's <code className="text-purple-400">#pets</code>, <code className="text-purple-400">#gaming</code>, 
            or just a space to share weekend photos, these interactions build the trust that effective teammates rely on.
          </p>

          <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Visibility Without Micro-Management</h2>
          <p>
            Managers often struggle to know what's happening in a remote team. Leedsphere solves this through transparency. 
            By working in open public channels, progress is visible by default. 
            Nobody needs to ask "What are you working on?" because the work is happening right there in the open.
          </p>
        </div>
      </div>
    );
}
