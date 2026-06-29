import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { Terminal, AlertCircle } from 'lucide-react';

function NotFound() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="min-h-screen pt-24 pb-20 flex items-center justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300 px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-3xl font-mono"
      >
        <div className="bg-white dark:bg-slate-900 border border-red-200 dark:border-red-500/30 rounded-2xl shadow-2xl shadow-red-500/5 dark:shadow-red-500/10 w-full p-8 relative overflow-hidden transition-colors duration-300">
          
          <div className="absolute top-0 right-0 opacity-5 dark:opacity-5 p-8 pointer-events-none text-slate-900 dark:text-white">
            <Terminal size={200} />
          </div>

          <div className="flex items-center mb-8 border-b border-slate-200 dark:border-slate-700/50 pb-5 transition-colors duration-300">
            <AlertCircle className="w-8 h-8 text-red-500 mr-4 animate-pulse" />
            <h1 className="text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400 tracking-wide">
              Fatal Error: Unhandled Route Exception
            </h1>
          </div>

          <p className="text-cyan-700 dark:text-cyan-300 mb-8 text-lg md:text-xl leading-relaxed">
            <span className="text-slate-500 dark:text-slate-400">Error Code:</span> 404 <br />
            <span className="text-slate-500 dark:text-slate-400">Message:</span> The component for the route "<span className="text-yellow-600 dark:text-yellow-400 font-semibold">{path}</span>" could not be resolved.
          </p>

          <div className="text-sm border-t border-slate-200 dark:border-slate-700/50 pt-6 overflow-x-auto bg-slate-50 dark:bg-slate-950/50 p-6 rounded-xl relative z-10 transition-colors duration-300">
            <p className="font-bold text-slate-800 dark:text-slate-300 mb-4 text-base">Stack Trace:</p>
            <div className="text-slate-600 dark:text-slate-400 font-normal space-y-2 md:space-y-3 font-mono text-xs md:text-sm">
              <p>at <span className="text-cyan-600 dark:text-cyan-400">Router.resolveComponent</span> (src/core/router.js:112:15)</p>
              <p>at <span className="text-cyan-600 dark:text-cyan-400">navigate</span> (src/core/navigation.js:45:29)</p>
              <p>at <span className="text-cyan-600 dark:text-cyan-400">UserInteraction.click</span> (src/components/Link.jsx:22:5)</p>
              <p>at <span className="text-cyan-600 dark:text-cyan-400">App.render</span> (src/App.jsx:35:12)</p>
              <p>at <span className="text-cyan-600 dark:text-cyan-400">NotFound.display</span> (src/pages/NotFound.jsx:10:3)</p>
              <p>at <span className="text-cyan-600 dark:text-cyan-400">Route.match</span> (src/core/router.js:98:17)</p>
            </div>
            
            <div className="mt-8 text-slate-500 text-xs md:text-sm italic border-t border-slate-200 dark:border-slate-800 pt-4 transition-colors duration-300">
              <p>
                <span className="font-semibold text-slate-600 dark:text-slate-400">Note:</span> This stack trace is simulated.
                If you are a developer, check your route configuration.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center flex flex-col items-center relative z-10">
            <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg transition-colors">
              Oh, you seem lost. Let me help you find your way back.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-white bg-cyan-600 py-3 px-8 hover:bg-cyan-700 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-1"
            >
              Return to Safety Zone
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default NotFound;