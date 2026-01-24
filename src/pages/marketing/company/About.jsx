import React from "react";

export default function About() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        About Leedsphere
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Why We Exist</h2>
        <p className="text-xl leading-relaxed mb-8">
          Leedsphere was born from a simple observation: modern work is noisy. 
          Between email, instant messaging, and project management tools, teams are drowning in notifications 
          but starving for context. We built Leedsphere to quiet the noise and amplify the signal.
        </p>
        <p>
          We believe that collaboration shouldn't be a distraction. It should be the engine that drives your business forward. 
          Our mission is to build the operating system for high-performing teams—a place where work actually happens, 
          not just where people talk about work.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">The Problem with "More"</h2>
        <p>
          Most software companies measure success by how much time you spend in their app. We measure it by how 
          quickly you can get in, find what you need, and get back to deep work.
        </p>
        <p>
          We reject the idea that "more features" equals "better product." Instead, we focus on reliability, speed, and clarity. 
          We strip away the non-essential to reveal a tool that feels invisible when you're using it, 
          yet indispensable when you're not.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Our Values</h2>
        
        <h3 className="text-xl font-bold text-white mt-8 mb-2">Transparency Default</h3>
        <p>
          We believe in working in the open. Information hoarding creates power struggles and slows down decision-making. 
          By defaulting to transparency, we empower every member of the team to act like an owner.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-2">Respect for Attention</h3>
        <p>
          Your time is your most valuable asset. We design every feature with the goal of protecting your focus. 
          From robust "Do Not Disturb" controls to intelligent notification batching, we fight against the culture of "always-on" urgency.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-2">Long-Term Thinking</h3>
        <p>
          We are not building for the next quarter; we are building for the next decade. 
          We prioritize sustainable growth, code quality, and customer trust over short-term hacks. 
          We want Leedsphere to be the tool your team relies on for years to come.
        </p>
      </div>
    </div>
  );
}
