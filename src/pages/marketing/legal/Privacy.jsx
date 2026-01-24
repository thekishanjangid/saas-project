import React from "react";

export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Privacy Policy
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <p className="text-xl leading-relaxed mb-8">
          We believe in handling user data responsibly and transparently. 
          This policy outlines what we collect and how we use it.
        </p>
        
        <h3 className="text-white mt-8">1. Data Collection</h3>
        <p>We collect information you provide directly to us when you create an account, create a workspace, or communicate with us.</p>
        
        <h3 className="text-white mt-8">2. Data Usage</h3>
        <p>We use your data to provide, maintain, and improve our services, and to communicate with you about updates and security alerts.</p>

        <h3 className="text-white mt-8">3. Data Sharing</h3>
        <p>We do not sell your personal data. We only share data with service providers who help us run our infrastructure (e.g., hosting, email).</p>
        
        <h3 className="text-white mt-8">4. Your Rights</h3>
        <p>You have the right to access, correct, or delete your personal data at any time. Contact privacy@leedsphere.com for assistance.</p>
      </div>
    </div>
  );
}
