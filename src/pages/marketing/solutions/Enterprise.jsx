import React from "react";

export default function Enterprise() {
    return (
      <div className="container mx-auto px-4 py-24 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
          For Enterprise
        </h1>
        <div className="prose prose-invert prose-lg max-w-none text-slate-300">
          <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Scale With Confidence</h2>
          <p className="text-xl leading-relaxed mb-8">
            Large organizations face a unique challenge: connecting thousands of employees without compromising 
            security or creating unmanageable noise. Leedsphere Enterprise is built to solve this scale.
          </p>

          <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Advanced Governance</h2>
          <p>
            Control is non-negotiable. Our Enterprise Grid allows you to federate multiple workspaces 
            while maintaining centralized administrative control. Manage users with SCIM provisioning, 
            enforce strict 2FA policies, and integrate with your existing Identity Provider (IdP) for seamless access management.
          </p>
          <p>
            Audit logs give you complete visibility into who is accessing what, ensuring that you can meet 
            internal compliance standards and external regulatory requirements.
          </p>

          <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Breaking Down Silos</h2>
          <p>
            In an enterprise, the left hand often doesn't know what the right hand is doing. 
            Leedsphere creates a mesh network of communication across departments. 
            Marketing can view product launch timelines, Sales can query Legal, and HR can broadcast global updates—all 
            within a structured, searchable environment.
          </p>

          <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Reliability at Scale</h2>
          <p>
            We offer a 99.99% uptime SLA for our enterprise customers. Our infrastructure is designed for high availability 
            and data residency requirements. Whether you are a financial institution or a healthcare provider, 
            you can rely on Leedsphere to be the always-on nervous system of your company.
          </p>
        </div>
      </div>
    );
}
