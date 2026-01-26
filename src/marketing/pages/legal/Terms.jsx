import React from "react";

export default function Terms() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Terms of Service
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <p className="text-xl leading-relaxed mb-8">
          By using Leedsphere, you agree to these terms. Please read them carefully.
        </p>
        
        <h3 className="text-white mt-8">1. Acceptance of Terms</h3>
        <p>By accessing or using our services, you agree to be bound by these Terms. If you do not agree, you may not use the services.</p>
        
        <h3 className="text-white mt-8">2. Acceptable Use</h3>
        <p>You agree not to misuse our services. This includes not violating laws, not infringing on intellectual property, and not distributing malware.</p>

        <h3 className="text-white mt-8">3. Content Ownership</h3>
        <p>You retain ownership of all content you post to your workspace. We claim no ownership rights over your data.</p>
        
        <h3 className="text-white mt-8">4. Termination</h3>
        <p>We may terminate or suspend access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
      </div>
    </div>
  );
}
