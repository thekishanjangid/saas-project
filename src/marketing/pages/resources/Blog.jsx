import React from "react";

export default function Blog() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Blog & Product Updates
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Latest News from Leedsphere</h2>
        <p className="text-xl leading-relaxed mb-8">
          Stay in the loop. This is where we announce new features, share deep dives into our engineering challenges, 
          and highlight stories of how our customers are changing the world.
        </p>

        <div className="space-y-12">
            <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-purple-500/10 text-purple-400 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Product Launch</span>
                    <span className="text-slate-500 text-sm">October 24, 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Introducing Leedsphere AI: Your Intelligent Teammate</h3>
                <p className="text-slate-400 mb-4">
                    Today we are launching a suite of AI-powered features designed to summarize threads, draft replies, 
                    and surface hidden context from your workspace history.
                </p>
                <span className="text-purple-400 font-medium hover:text-purple-300 cursor-pointer">Read more &rarr;</span>
            </div>

            <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-500/10 text-blue-400 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Engineering</span>
                    <span className="text-slate-500 text-sm">October 10, 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">How We Scaled Our WebSocket Infrastructure</h3>
                <p className="text-slate-400 mb-4">
                    A technical deep dive into how we handle millions of concurrent real-time connections with 99.999% reliability using Elixir and Rust.
                </p>
                <span className="text-purple-400 font-medium hover:text-purple-300 cursor-pointer">Read more &rarr;</span>
            </div>

            <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-xl hover:border-purple-500/50 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                    <span className="bg-green-500/10 text-green-400 text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">Customer Story</span>
                    <span className="text-slate-500 text-sm">September 28, 2024</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">How Acme Corp Reduced Meetings by 40%</h3>
                <p className="text-slate-400 mb-4">
                    See how a Fortune 500 logistics company transformed their culture by switching from daily standups to Leedsphere asynchronous check-ins.
                </p>
                <span className="text-purple-400 font-medium hover:text-purple-300 cursor-pointer">Read more &rarr;</span>
            </div>
        </div>
      </div>
    </div>
  );
}
