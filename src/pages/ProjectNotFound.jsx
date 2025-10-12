// src/components/ProjectNotFound.jsx

import React from "react";
import { Link } from "react-router-dom";

function ProjectNotFound({ projectId }) {
  return (
    <div className="flex items-center justify-center h-full dark:text-white font-mono p-4">
      <div className="bg-slate-800 border border-red-500/30 rounded-lg shadow-xl w-full max-w-3xl p-6">
        
        {/* Hata Başlığı */}
        <div className="flex items-center mb-4">
          <span className="w-4 h-4 bg-red-500 rounded-full mr-3 animate-pulse"></span>
          <h1 className="text-xl font-bold text-red-400">
            Fatal Error: Project Data Exception
          </h1>
        </div>

        {/* Hata Mesajı */}
        <p className="text-cyan-300 mb-6">
          <span className="text-gray-400">Error Code:</span> 404 <br />
          <span className="text-gray-400">Message:</span> The project with ID "<span className="text-yellow-400">{projectId}</span>" could not be resolved.
        </p>

        {/* Stack Trace (Yığın İzleme) - Projeye Özel Simülasyon */}
        <div className="text-sm border-t border-gray-700 pt-4 overflow-x-auto">
          <p className="font-semibold text-gray-300 mb-2">Stack Trace:</p>
          <div className="text-gray-400 font-normal">
            <p>
              &nbsp;&nbsp;at <span className="text-cyan-400">findProjectById</span>
              <span className="text-gray-400"> (src/utils/ProjectUtils.js:25:15)</span>
            </p>
            <p>
              &nbsp;&nbsp;at <span className="text-cyan-400">ProjectDetail.useEffect</span>
              <span className="text-gray-400"> (src/pages/ProjectDetail.jsx:30:9)</span>
            </p>
            <p>
              &nbsp;&nbsp;at <span className="text-cyan-400">renderWithHooks</span>
              <span className="text-gray-400"> (src/core/renderer.js:149:18)</span>
            </p>
            <p>
              &nbsp;&nbsp;at <span className="text-cyan-400">mountIndeterminateComponent</span>
              <span className="text-gray-400"> (src/core/router.js:98:17)</span>
            </p>
          </div>
          <div className="mt-4 text-gray-500 text-xs">
            <p>
              <span className="font-semibold text-gray-400">Note:</span> This stack trace is simulated.
              Please check if the project ID is correct and exists in the data sources.
            </p>
          </div>
        </div>

        {/* Çözüm Önerisi ve Buton */}
        <div className="mt-8 text-center">
          <p className="text-gray-300 mb-4">Let's get you back to the full list of projects.</p>
          <Link 
            to="/projects" 
            className="inline-flex dark:text-white bg-cyan-600 border-0 py-2 px-6 focus:outline-none hover:bg-cyan-700 rounded text-lg"
          >
            All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectNotFound;