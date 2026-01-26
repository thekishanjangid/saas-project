import React from "react";

export default function Help() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        Help Center
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">How Can We Support You?</h2>
        <p className="text-xl leading-relaxed mb-8">
          Whether you are a new user trying to find your way or an admin managing an enterprise grid, 
          we are here to help. Our support philosophy is simple: we want to unblock you so you can get back to work.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Troubleshooting Common Issues</h2>
        <p>
          <strong>Notifications not working?</strong> Check your "Do Not Disturb" schedule. Leedsphere respects your working hours 
          by default. You can adjust this in your Preferences &gt; Notifications menu.
        </p>
        <p>
          <strong>Can't find a file?</strong> Remember that Workspace Search (Cmd+K) indexes the <em>content</em> of documents, 
          not just the names. Try searching for a unique phrase inside the document.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Managing Your Account</h2>
        <p>
          Your profile is your digital identity. We encourage you to upload a clear photo and set your status 
          (e.g., "In a meeting," "Vacation until Monday"). This small act of transparency helps your teammates 
          know when they can expect a response.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Roles & Permissions</h2>
        <p>
          <strong>Workspace Owners:</strong> Have full control over billing, security settings, and workspace deletion.
        </p>
        <p>
          <strong>Admins:</strong> Can manage members, create channels, and handle day-to-day moderation.
        </p>
        <p>
          <strong>Members:</strong> Can join open channels, create private groups, and collaborate freely.
        </p>
        <p>
          <strong>Guests:</strong> Restricted access to only specific channels (great for contractors or clients).
        </p>

        <div className="mt-12 p-6 bg-slate-900/50 border border-slate-800 rounded-xl">
            <h4 className="font-bold text-white mb-2">Still stuck?</h4>
            <p className="text-sm text-slate-400">
                Our support team is available 24/7. Drop us a note at <a href="mailto:support@leedsphere.com" className="text-purple-400 hover:text-purple-300">support@leedsphere.com</a> and a real human will get back to you within hours.
            </p>
        </div>
      </div>
    </div>
  );
}
