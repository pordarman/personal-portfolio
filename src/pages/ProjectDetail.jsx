import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjectByName, fetchProjectReadme, markdownToHtml } from '../utils/GithubUtils';
import "../assets/github-markdown-styles.css"

// Star Icon SVG'si
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
);

function ProjectDetail() {
  const { projectName } = useParams(); // URL'den proje adını alıyoruz
  const [project, setProject] = useState(null);
  const [markdownHtml, setMarkdownHtml] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjectData = async () => {
      try {
        setLoading(true);
        setError(null);
        const [projectData, readmeData] = await Promise.all([
          fetchProjectByName(projectName),
          fetchProjectReadme(projectName)
        ]);

        setProject(projectData);
        setMarkdownHtml(await markdownToHtml(readmeData));
      } catch (err) {
        setError('Proje verileri yüklenirken bir hata oluştu.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProjectData();
  }, [projectName]);

  if (loading) return <div className="text-center dark:text-white text-xl">Loading Project...</div>;
  if (error) return <div className="text-center text-red-500 text-xl">{error}</div>;
  if (!project) return <div className="text-center dark:text-white text-xl">Project not found.</div>;


  return (
    <div className="container mx-auto px-4 py-8">
      {/* Proje Başlığı ve Bilgileri */}
      <div className="mb-8 p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
        <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-2">{project.name}</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <div className="flex items-center text-slate-900 dark:text-white">
            <StarIcon />
            <span>{project.stargazers_count} stars</span>
          </div>
          {project.language && (
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">Language: {project.language}</span>
          )}
          <a href={project.html_url} target="_blank" rel="noopener noreferrer"
            className="text-cyan-600 dark:text-cyan-400 hover:underline font-semibold">
            View on GitHub ↗
          </a>
        </div>
      </div>

      {/* README İçeriği - Gelişmiş */}
      <div className="markdown-body bg-white dark:bg-[#0d1117] p-6 sm:p-8 rounded-lg">
        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          <div
            className='markdown-body'
            dangerouslySetInnerHTML={{ __html: markdownHtml }}
          />
        </p>
      </div>
    </div>
  );
}

export default ProjectDetail;