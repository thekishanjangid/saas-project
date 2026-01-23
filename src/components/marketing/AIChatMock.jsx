import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Sparkles, User, Bot } from "lucide-react";

export default function AIChatMock() {
  const [step, setStep] = useState(0);

  // Animation sequence controller
  useEffect(() => {
    const sequence = async () => {
      // Step 0: Initial state (User thinking/empty) -> wait 1s
      await new Promise(r => setTimeout(r, 1000));
      setStep(1); // Show user message

      // Step 1: User message shown -> wait 1s before processing
      await new Promise(r => setTimeout(r, 1500));
      setStep(2); // Show processing/searching

      // Step 2: Processing -> wait 2s
      await new Promise(r => setTimeout(r, 2000));
      setStep(3); // Show answer

      // Step 3: Answer shown -> wait 8s then reset loop
      await new Promise(r => setTimeout(r, 8000));
      setStep(0);
    };

    sequence();
  }, [step]); // Re-run when step resets to 0? No, this effect usually runs once on mount if dependency is empty, or we need a way to loop. 
  // Let's use a simpler recursive timeout or interval approach, but useEffect dependent on step works for state transitions if we manage it carefuly.
  // Actually, easiest way for a loop is to just let the effect run fully then reset.
  
  // Correction: The above effect depends on 'step', so it will re-run every time step changes, effectively acting as the sequencer.
  // When Step 3 finishes (after 8s), setting Step 0 will trigger the effect again for Step 0.
  
  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Glass Container */}
      <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border border-white/50 dark:border-slate-800/50 rounded-2xl shadow-2xl shadow-purple-500/10 overflow-hidden flex flex-col h-[400px]">
        
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center gap-3 bg-white/50 dark:bg-slate-900/50">
           <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600">
             <Sparkles className="w-4 h-4" />
           </div>
           <div>
             <div className="text-sm font-bold text-slate-900 dark:text-white">Eddy AI</div>
             <div className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
               <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
               Online
             </div>
           </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 p-5 flex flex-col gap-6 overflow-hidden relative">
          
          <AnimatePresence mode="wait">
            {step >= 1 && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex justify-end"
              >
                <div className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-4 py-3 rounded-2xl rounded-tr-sm text-sm font-medium max-w-[85%] shadow-sm">
                  How do I configure SSO for the marketing team?
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          <AnimatePresence mode="wait">
             {step === 2 && (
               <motion.div 
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500 pl-2"
               >
                 <Bot className="w-4 h-4" />
                 <span className="animate-pulse">Analyzing knowledge base...</span>
               </motion.div>
             )}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            {step >= 3 && (
              <motion.div 
                 initial={{ opacity: 0, y: 10, scale: 0.95 }}
                 animate={{ opacity: 1, y: 0, scale: 1 }}
                 exit={{ opacity: 0, scale: 0.95 }}
                 className="flex justify-start w-full"
              >
                <div className="flex gap-3 max-w-[90%]">
                   <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex-shrink-0 flex items-center justify-center text-purple-600 mt-1">
                     <Sparkles className="w-4 h-4" />
                   </div>
                   <div className="flex flex-col gap-2">
                       <div className="bg-purple-50 dark:bg-purple-900/10 border border-purple-100 dark:border-purple-800/30 text-slate-800 dark:text-slate-200 px-4 py-3 rounded-2xl rounded-tl-sm text-sm leading-relaxed shadow-sm">
                         To configure SSO for a specific team:
                         <ol className="list-decimal ml-4 mt-2 space-y-1 text-slate-600 dark:text-slate-300">
                           <li>Go to <strong>Settings &gt; Security</strong>.</li>
                           <li>Select <strong>SAML 2.0 Identity Provider</strong>.</li>
                           <li>Add the marketing team&apos;s metadata URL.</li>
                         </ol>
                       </div>
                       <div className="flex gap-2 mt-1">
                          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-50 dark:bg-slate-800/50 px-2 py-1 rounded border border-slate-100 dark:border-slate-800">Source: Security SOP</span>
                          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-50 dark:bg-slate-800/50 px-2 py-1 rounded border border-slate-100 dark:border-slate-800">Source: Admin Guide</span>
                       </div>
                   </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>

        {/* Input Area (Visual only) */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50">
           <div className="h-10 bg-slate-50 dark:bg-slate-800/50 rounded-lg border border-slate-200/50 dark:border-slate-700/50 flex items-center px-3 gap-2">
              <div className="w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600"></div>
              <div className="h-2 w-32 bg-slate-200 dark:bg-slate-700 rounded-full opacity-50"></div>
           </div>
        </div>

      </div>

      {/* Decorative Elements behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/10 blur-[60px] rounded-full -z-10" />
    </div>
  );
}
