import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Contact Leedsphere
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">We're Here to Help</h2>
        <p className="text-xl leading-relaxed mb-8">
          Whether you have a technical question, a billing inquiry, or just want to say hello, we are listening. 
          Please use the appropriate channel below to ensure your message gets to the right person quickly.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-2">Customer Support</h3>
                <p className="text-slate-400 mb-4 h-20">
                    Having trouble with your workspace? Our support team is technical, friendly, and fast.
                </p>
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-slate-500 uppercase font-bold tracking-wider">Email Us</span>
                    <a href="mailto:support@leedsphere.com" className="text-purple-400 hover:text-purple-300 font-medium text-lg">support@leedsphere.com</a>
                </div>
            </div>

            <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-2">Sales & Enterprise</h3>
                <p className="text-slate-400 mb-4 h-20">
                    Interested in SSO, compliance features, or volume pricing for large teams (>500 users)?
                </p>
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-slate-500 uppercase font-bold tracking-wider">Contact Sales</span>
                    <a href="mailto:sales@leedsphere.com" className="text-purple-400 hover:text-purple-300 font-medium text-lg">sales@leedsphere.com</a>
                </div>
            </div>

            <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-2">Press & Media</h3>
                <p className="text-slate-400 mb-4 h-20">
                    For brand assets, interview requests, or general media inquiries.
                </p>
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-slate-500 uppercase font-bold tracking-wider">Media Inquiries</span>
                    <a href="mailto:press@leedsphere.com" className="text-purple-400 hover:text-purple-300 font-medium text-lg">press@leedsphere.com</a>
                </div>
            </div>

            <div className="p-8 bg-slate-900/40 border border-slate-800 rounded-xl">
                <h3 className="text-xl font-bold text-white mb-2">Security</h3>
                <p className="text-slate-400 mb-4 h-20">
                    To report a potential vulnerability or security concern, please contact our security team directly.
                </p>
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-slate-500 uppercase font-bold tracking-wider">Secure Channel</span>
                    <a href="mailto:security@leedsphere.com" className="text-purple-400 hover:text-purple-300 font-medium text-lg">security@leedsphere.com</a>
                </div>
            </div>
        </div>

        <h2 className="text-3xl font-semibold text-white mt-16 mb-6">Response Expectations</h2>
        <p>
            We are a small team, but we care deeply about every message. 
            For support inquiries, you can generally expect a reply within <strong>4 business hours</strong>. 
            For sales and other inquiries, we aim to respond within <strong>1 business day</strong>.
        </p>
        <p>
            Our office hours are Monday through Friday, 9:00 AM to 5:00 PM EST, though our support team covers multiple time zones.
        </p>
      </div>
    </div>
  );
}
