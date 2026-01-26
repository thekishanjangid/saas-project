import React from "react";

export default function Files() {
  return (
    <div className="container mx-auto px-4 py-24 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
        File Sharing
      </h1>
      <div className="prose prose-invert prose-lg max-w-none text-slate-300">
        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Content in Context</h2>
        <p className="text-xl leading-relaxed mb-8">
          Files shouldn't live in a separate silo from the conversation about them. In Leedsphere, 
          file sharing is integrated directly into your communication flow.
        </p>
        <p>
          Drag and drop PDFs, images, design mockups, and spreadsheets right into a channel or direct message. 
          The file instantly becomes part of the discussion. Your team can preview it, comment on it, and download it 
          without ever leaving the application. This tightness between content and conversation reduces 
          switching costs and keeps everyone on the same page.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">No Lost Attachments</h2>
        <p>
          We've all experienced the pain of searching for "that final_v2.pdf" attachment in a messy email inbox. 
          Leedsphere treats files as first-class citizens.
        </p>
        <p>
          Every file shared is automatically indexed. You can view a "Files" tab in any channel to see a gallery 
          of every document ever shared there. You can search for files by name, by type, or by the person who sent them. 
          Nothing gets lost. The asset library of your project is built automatically as you work.
        </p>

        <h2 className="text-3xl font-semibold text-white mt-12 mb-6">Daily Usage Scenarios</h2>
        <p>
          Imagine a marketing team launching a new campaign. The copywriter posts a Word doc with the draft. 
          Configuration happens in a thread. The designer drops in a PNG of the new banner. The manager approves it with an emoji reaction.
        </p>
        <p>
          Later, a developer needs the assets. Instead of asking "Hey, can you resend that?", they simply scroll up or check the channel sidebar. 
          The file is there, exactly where it should be. This self-serve access creates a smoother, faster workflow for everyone.
        </p>
      </div>
    </div>
  );
}
