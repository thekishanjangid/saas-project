import React from "react";

export default function Security() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Built-in Security
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Security First Design</h2>
        <p className="text-xl leading-relaxed mb-8">
          We understand that you are trusting us with your organization's most private conversations and intellectual property. 
          Security isn't an afterthought at Leedsphere; it is the foundation of our architecture.
        </p>
        <p>
          We employ defense-in-depth strategies to ensure your data is safe from the moment it leaves your device 
          to the moment it is stored in our encrypted databases. We utilize industry-standard encryption protocols (TLS 1.2+ for transit, AES-256 for rest) 
          and perform regular third-party penetration testing to validate our defenses.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Access Control & Governance</h2>
        <p>
          You own your data, and you control who sees it. Leedsphere provides granular permission controls that allow 
          admins to define exactly what users can and cannot do.
        </p>
        <p>
          From Single Sign-On (SSO) integration with major identity providers to enforced Two-Factor Authentication (2FA), 
          we give you the tools to secure user accounts. You can provision and de-provision users automatically, 
          manage session durations, and audit access logs to ensure compliance with internal policies.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Workspace Isolation</h2>
        <p>
          Every Leedsphere workspace is logically isolated. This multi-tenant architecture ensures that your data 
          never leaks to other customers. We strictly segregate resources to prevent cross-contamination.
        </p>
        <p>
          For highly regulated industries, we offer enhanced compliance features including data retention policies, 
          eDiscovery support, and Business Associate Agreements (BAA) for HIPAA compliance. 
          We are committed to helping you meet your regulatory obligations while providing a modern user experience.
        </p>
      </div>
    </div>
  );
}
