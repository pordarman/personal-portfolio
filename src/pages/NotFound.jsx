import React from "react";
import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();
  const path = location.pathname; // Kullanıcının girdiği geçersiz yolu alıyoruz

  return (
    <div className="flex items-center justify-center h-full dark:text-white font-mono p-4">
      <div className="bg-slate-800 border border-red-500/30 rounded-lg shadow-xl w-full max-w-3xl p-6">
        
        {/* Hata Başlığı */}
        <div className="flex items-center mb-4">
          <span className="w-4 h-4 bg-red-500 rounded-full mr-3 animate-pulse"></span>
          <h1 className="text-xl font-bold text-red-400">
            Fatal Error: Unhandled Route Exception
          </h1>
        </div>

        {/* Hata Mesajı */}
        <p className="text-cyan-300 mb-6">
          <span className="text-gray-400">Error Code:</span> 404 <br />
          <span className="text-gray-400">Message:</span> The component for the route "<span className="text-yellow-400">{path}</span>" could not be resolved.
        </p>

        {/* Stack Trace (Yığın İzleme) */}
        <div className="text-sm border-t border-gray-700 pt-4">
          <p className="mb-1 text-gray-400">Stack Trace:</p>
          <div className="pl-4 font-mono bg-black/60 rounded p-3 text-xs overflow-x-auto">
            <p>
              <span className="text-red-400">Error:</span>
              <span className="text-yellow-300"> The component for the route "{path}" could not be resolved.</span>
            </p>
            <p>
              &nbsp;&nbsp;at <span className="text-cyan-400">Router.resolveComponent</span>
              <span className="text-gray-400"> (src/core/router.js:112:15)</span>
            </p>
            <p>
              &nbsp;&nbsp;at <span className="text-cyan-400">navigate</span>
              <span className="text-gray-400"> (src/core/navigation.js:45:29)</span>
            </p>
            <p>
              &nbsp;&nbsp;at <span className="text-cyan-400">UserInteraction.click</span>
              <span className="text-gray-400"> (src/components/Link.jsx:22:5)</span>
            </p>
            <p>
              &nbsp;&nbsp;at <span className="text-cyan-400">App.render</span>
              <span className="text-gray-400"> (src/App.jsx:35:12)</span>
            </p>
            <p>
              &nbsp;&nbsp;at <span className="text-cyan-400">NotFound.display</span>
              <span className="text-gray-400"> (src/pages/NotFound.jsx:10:3)</span>
            </p>
            <p>
              &nbsp;&nbsp;at <span className="text-cyan-400">Route.match</span>
              <span className="text-gray-400"> (src/core/router.js:98:17)</span>
            </p>
            <p>
              &nbsp;&nbsp;at <span className="text-cyan-400">History.push</span>
              <span className="text-gray-400"> (src/core/history.js:56:11)</span>
            </p>
            <p>
              &nbsp;&nbsp;at <span className="text-cyan-400">index.js</span>
              <span className="text-gray-400">:1:1</span>
            </p>
          </div>
          <div className="mt-4 text-gray-500 text-xs">
            <p>
              <span className="font-semibold text-gray-400">Note:</span> This stack trace is simulated for demonstration purposes.
              If you are a developer, check your route configuration and ensure the requested path is correctly mapped to a component.
            </p>
            <p className="mt-2">
              <span className="font-semibold text-gray-400">Tip:</span> You can also inspect the browser console for more details about this error.
            </p>
          </div>
        </div>

        {/* Çözüm Önerisi ve Buton */}
        <div className="mt-8 text-center">
          <p className="text-gray-300 mb-4">Oh, you seem lost. Let me help you find your way back.</p>
          <Link 
            to="/" 
            className="inline-flex dark:text-white bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg transition-colors duration-300"
          >
            Return to Safety Zone
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
