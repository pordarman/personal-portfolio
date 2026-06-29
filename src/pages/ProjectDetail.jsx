import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProjectDetails, markdownToHtml } from '../utils/GithubUtils';
import { otherProjects } from '../data/otherProjectsData';
import { ExternalLink, Star, GitFork, ArrowLeft, Calendar, Clock, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import '../assets/github-markdown-styles.css';

const Github = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
    >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492 .997 .108-.775 .418-.997 .762-1.225-2.665-.3-5.467-1.332-5.467-5.93 0-1.31 .468-2.38 1.236-3.22-.124-.303-.536-1.523 .117-3.176 0 0 1.008-.322 3.301 1.23 .957-.266 1.983-.399 3.003-.404 1.02 .005 2.047 .138 3.006 .404 2.291-1.552 3.297-1.23 3.297-1.23 .655 1.653 .243 2.873 .12 3.176 .77 .84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.921 .43 .372 .823 1.102 .823 2.222v3.293c0 .319 .218 .694 .825 .576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
);

const ProjectDetail = () => {
    const { id } = useParams();
    const [projectData, setProjectData] = useState(null);
    const [readme, setReadme] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [projectNotFound, setProjectNotFound] = useState(false);

    useEffect(() => {
        const loadProjectData = async () => {
            try {
                setLoading(true);
                setError(null);
                setProjectNotFound(false);

                const localProject = otherProjects.find(p => p.id === id);

                if (localProject) {
                    setProjectData(localProject);
                    const htmlContent = await markdownToHtml(localProject.readme);
                    setReadme(htmlContent);
                } else {
                    const githubData = await fetchProjectDetails(id);

                    if (!githubData) {
                        setProjectNotFound(true);
                    } else {
                        setProjectData(githubData.project);
                        setReadme(githubData.readmeHtml);
                    }
                }
            } catch (err) {
                setError("Error loading project data.");
                console.error(err);
                if (err.response && err.response.status === 404) {
                    setProjectNotFound(true);
                }
            } finally {
                setLoading(false);
            }
        };
        loadProjectData();
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen pt-32 flex justify-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
        );
    }

    if (projectNotFound) {
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
                            <span className="w-4 h-4 bg-red-500 rounded-full mr-4 animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.6)] dark:shadow-[0_0_12px_rgba(239,68,68,0.8)]"></span>
                            <h1 className="text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400 tracking-wide">
                                Fatal Error: Project Data Exception
                            </h1>
                        </div>

                        <p className="text-cyan-700 dark:text-cyan-300 mb-8 text-lg md:text-xl leading-relaxed">
                            <span className="text-slate-500 dark:text-slate-400">Error Code:</span> 404 <br />
                            <span className="text-slate-500 dark:text-slate-400">Message:</span> The project with ID "<span className="text-yellow-600 dark:text-yellow-400 font-semibold">{id}</span>" could not be resolved.
                        </p>

                        <div className="text-sm border-t border-slate-200 dark:border-slate-700/50 pt-6 overflow-x-auto bg-slate-50 dark:bg-slate-950/50 p-6 rounded-xl relative z-10 transition-colors duration-300">
                            <p className="font-bold text-slate-800 dark:text-slate-300 mb-4 text-base">Stack Trace:</p>
                            <div className="text-slate-600 dark:text-slate-400 font-normal space-y-2 md:space-y-3 font-mono text-sm md:text-base">
                                <p>
                                    &nbsp;&nbsp;at <span className="text-cyan-600 dark:text-cyan-400">findProjectById</span>
                                    <span className="text-slate-400 dark:text-slate-500"> (src/utils/ProjectUtils.js:25:15)</span>
                                </p>
                                <p>
                                    &nbsp;&nbsp;at <span className="text-cyan-600 dark:text-cyan-400">ProjectDetail.useEffect</span>
                                    <span className="text-slate-400 dark:text-slate-500"> (src/pages/ProjectDetail.jsx:30:9)</span>
                                </p>
                                <p>
                                    &nbsp;&nbsp;at <span className="text-cyan-600 dark:text-cyan-400">renderWithHooks</span>
                                    <span className="text-slate-400 dark:text-slate-500"> (src/core/renderer.js:149:18)</span>
                                </p>
                                <p>
                                    &nbsp;&nbsp;at <span className="text-cyan-600 dark:text-cyan-400">mountIndeterminateComponent</span>
                                    <span className="text-slate-400 dark:text-slate-500"> (src/core/router.js:98:17)</span>
                                </p>
                            </div>
                            <div className="mt-8 text-slate-500 text-xs md:text-sm italic border-t border-slate-200 dark:border-slate-800 pt-4 transition-colors duration-300">
                                <p>
                                    <span className="font-semibold text-slate-600 dark:text-slate-400">Note:</span> This stack trace is simulated.
                                    Please check if the project ID is correct and exists in the data sources.
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 text-center flex flex-col items-center relative z-10">
                            <p className="text-slate-700 dark:text-slate-300 mb-6 text-lg transition-colors">Let's get you back to the full list of projects.</p>
                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 text-white bg-cyan-600 border border-cyan-500/50 py-3 px-8 hover:bg-cyan-700 rounded-xl text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-1"
                            >
                                All Projects
                            </Link>
                        </div>

                    </div>
                </motion.div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen pt-32 flex flex-col items-center bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                <h2 className="text-4xl font-bold text-red-500 mb-6">Oops!</h2>
                <p className="text-xl text-slate-700 dark:text-slate-300 mb-10">{error}</p>
                <Link to="/projects" className="px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl transition-colors shadow-lg">
                    Go Back to Projects
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300 pt-24 pb-20">
            <div className="max-w-5xl mx-auto px-4">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link to="/projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors mb-10 font-semibold text-lg">
                        <ArrowLeft size={24} />
                        Back to Projects
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-14 shadow-2xl border border-slate-200 dark:border-slate-700 mb-12"
                >
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-10">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                                {projectData.name}
                            </h1>
                            <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                                {projectData.description}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 shrink-0 mt-2 md:mt-0">
                            {projectData.html_url && (
                                <a href={projectData.html_url} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-1">
                                    <Github size={22} />
                                    Source Code
                                </a>
                            )}
                            {projectData.homepage && (
                                <a href={projectData.homepage} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-cyan-500/30 hover:-translate-y-1">
                                    <ExternalLink size={22} />
                                    Live Demo
                                </a>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-8 py-8 border-y border-slate-200 dark:border-slate-700 mb-10">
                        {projectData.stargazers_count !== undefined && (
                            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-semibold text-lg">
                                <Star size={24} className="text-yellow-500" />
                                {projectData.stargazers_count} Stars
                            </div>
                        )}
                        {projectData.forks_count !== undefined && (
                            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-semibold text-lg">
                                <GitFork size={24} className="text-slate-500 dark:text-slate-400" />
                                {projectData.forks_count} Forks
                            </div>
                        )}
                        {projectData.created_at && (
                            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-semibold text-lg">
                                <Calendar size={24} className="text-cyan-600 dark:text-cyan-400" />
                                {new Date(projectData.created_at).toLocaleDateString()}
                            </div>
                        )}
                        {projectData.updated_at && (
                            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 font-semibold text-lg">
                                <Clock size={24} className="text-cyan-600 dark:text-cyan-400" />
                                {new Date(projectData.updated_at).toLocaleDateString()}
                            </div>
                        )}
                    </div>

                    {projectData.topics && projectData.topics.length > 0 && (
                        <div className="flex flex-wrap gap-3 mb-12">
                            {projectData.topics.map(topic => (
                                <span key={topic} className="px-5 py-2.5 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm font-bold tracking-wide rounded-xl border border-slate-200 dark:border-slate-700 uppercase">
                                    {topic}
                                </span>
                            ))}
                        </div>
                    )}

                    <div
                        className="markdown-body p-6 md:p-12 bg-slate-50 dark:bg-slate-900/50 rounded-3xl border border-slate-200 dark:border-slate-700/50"
                        dangerouslySetInnerHTML={{ __html: readme }}
                    />

                </motion.div>
            </div>
        </div>
    );
};

export default ProjectDetail;