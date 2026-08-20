import { useState, useMemo, useEffect, useSyncExternalStore } from 'react';
import Radar from '../components/Radar';
import BorderGlow from '../components/BorderGlow';
import { ExternalLink, Star, Code2, Search, Calendar, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

import teknofestIcon from '../assets/teknofest_preview.webp';
import spiritfallIcon from '../assets/spiritfall_preview.webp';
import alisaAvatar from '../assets/alisa_avatar.webp';
import pixifyAvatar from '../assets/pixify_avatar.webp';
import ultimeTicketBot from '../assets/ultimate-ticket-bot.webp';
import ultimateStatBot from '../assets/ultimate-stat-bot.webp';
import dcjsUtil from '../assets/dcjs-util.webp';
import modulesImg from '../assets/modules.webp';
import sudokuWeb from '../assets/sudoku-web_avatar.webp';
import personalPortfolio from '../assets/personal-portfolio.webp';

const Github = () => (
  <svg height="32" viewBox="0 0 16 16" width="32" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);
const projectsSettings = {
  "alisa": {
    icon: alisaAvatar,
    onGoing: false,
    order: 2
  },
  "Pixify": {
    icon: pixifyAvatar,
    onGoing: false
  },
  "ultimate-ticket-bot": {
    icon: ultimeTicketBot,
    onGoing: false,
  },
  "ultimate-stat-bot": {
    icon: ultimateStatBot,
    onGoing: false,
  },
  "dcjs-util": {
    icon: dcjsUtil,
    onGoing: false,
  },
  "alisa.db": {
    icon: modulesImg,
    onGoing: false,
    npmLink: "https://www.npmjs.com/package/alisa.db"
  },
  "alisa.map": {
    icon: modulesImg,
    onGoing: false,
    npmLink: "https://www.npmjs.com/package/alisa.map"
  },
  "Strong-Set": {
    icon: modulesImg,
    onGoing: false,
    npmLink: "https://www.npmjs.com/package/strong-set"
  },
  "alisa.array": {
    icon: modulesImg,
    onGoing: false,
    npmLink: "https://www.npmjs.com/package/alisa.array"
  },
  "alisa.ms": {
    icon: modulesImg,
    onGoing: false,
    npmLink: "https://www.npmjs.com/package/alisa.ms"
  },
  "alisa.cache": {
    icon: modulesImg,
    onGoing: false,
    npmLink: "https://www.npmjs.com/package/alisa.cache"
  },
  "sudoku-pdf-generator": {
    icon: sudokuWeb,
    projectUrl: "https://pordarman.github.io/sudoku-pdf-generator/",
    onGoing: true,
    order: 3,
  },
  "personal-portfolio": {
    icon: personalPortfolio,
    projectUrl: "https://alicelik.dev",
    onGoing: true,
    order: 1,
  },
  "utaa-web": {
    icon: "https://odeme.thk.edu.tr/images/thk_logo.png",
    projectUrl: "https://thkuogrenci.com/",
    onGoing: true,
    order: 5,
  },
  "school-lab": {
    skip: true
  },
  "Java-Swing-Test": {
    skip: true
  },
  "DPP-discord-bot": {
    icon: "https://dpp.dev/DPP-Logo.png",
    onGoing: true,
    order: 4,
  }
};
const localProjects = [
  {
    id: 'teknofest-2025-uav-competition',
    name: 'TEKNOFEST 2025 - UAV Competition Finalist',
    description: 'Led the software development for a high school team in an Unmanned Aerial Vehicle (UAV) competition, reaching the finals. We developed an autonomous drone capable of complex tasks like image recognition, payload delivery, and route tracking, finishing 16th out of 30 finalist teams.',
    imageUrl: teknofestIcon,
    topics: ['Python', 'DroneKit', 'MAVLink', 'Pixhawk', 'Raspberry Pi', 'OpenCV', 'YOLO'],
    language: 'Python',
    projectUrl: null,
    html_url: null,
    stargazers_count: null,
    forks_count: null,
    source: 'local',
    createdAt: '2025-07-01',
    updatedAt: '2025-08-25',
    onGoing: false,
    order: 1,
    isLocal: true,
  },
  {
    id: 'spiritfall-2d-pixel-game',
    name: 'Spiritfall - 2D Pixel Game',
    description: 'Face a corrupted wilderness in this top-down action roguelite. A vile spirit has twisted animals into monsters, and you must survive their hordes. Your goal: purify, don\'t kill.',
    imageUrl: spiritfallIcon,
    topics: ['C#', 'Unity', 'Game Development', 'Pixel Art'],
    language: 'C#',
    projectUrl: null,
    html_url: null,
    stargazers_count: null,
    forks_count: null,
    source: 'local',
    createdAt: '2025-06-28',
    updatedAt: '2025-08-14',
    onGoing: true,
    order: 2,
    isLocal: true,
  }
];

const projectsStore = {
  projects: [],
  isLoading: true,
  listeners: new Set(),
  promise: null,
};

const notifyProjectsStore = () => {
  projectsStore.listeners.forEach((listener) => listener());
};

const sortProjects = (projects) => projects.sort((a, b) => {
  if ("order" in a || "order" in b) return (a.order || Infinity) - (b.order || Infinity);
  if (a.onGoing && !b.onGoing) return -1;
  if (!a.onGoing && b.onGoing) return 1;
  return 0;
});

const loadProjects = () => {
  if (projectsStore.promise) return projectsStore.promise;

  projectsStore.isLoading = true;
  notifyProjectsStore();

  projectsStore.promise = Promise.all([
    fetch('/api/github'),
    new Promise((resolve) => setTimeout(resolve, 2500)),
  ])
    .then(async ([githubResponse]) => {
      if (!githubResponse.ok) throw new Error(`GitHub request failed: ${githubResponse.status}`);
      
      const githubData = await githubResponse.json();
      projectsStore.projects = sortProjects([
        ...localProjects,
        ...githubData.map((repo) => ({
          ...repo,
          topics: repo.topics || [],
          source: 'github',
          isLocal: false,
        })),
      ]);
    })
    .catch((error) => {
      console.error('Error fetching projects:', error);
      projectsStore.projects = localProjects;
    })
    .finally(() => {
      projectsStore.isLoading = false;
      notifyProjectsStore();
    });

  return projectsStore.promise;
};

const subscribeToProjects = (listener) => {
  projectsStore.listeners.add(listener);
  return () => projectsStore.listeners.delete(listener);
};

const getProjectsSnapshot = () => projectsStore;

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const { projects, isLoading } = useSyncExternalStore(
    subscribeToProjects,
    getProjectsSnapshot,
    getProjectsSnapshot,
  );

  useEffect(() => {
    if (!projectsStore.promise) {
       loadProjects();
    }
  }, []);

  const filteredProjects = useMemo(() => {
    if (!searchQuery.trim()) return projects;
    const lowerQuery = searchQuery.toLowerCase();

    return projects.filter((project) => {
      const matchName = project.name?.toLowerCase().includes(lowerQuery);
      const matchDesc = project.description?.toLowerCase().includes(lowerQuery);
      const matchTopics = project.topics?.some(topic => topic.toLowerCase().includes(lowerQuery));
      return matchName || matchDesc || matchTopics;
    });
  }, [searchQuery, projects]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-[#0f172a] relative overflow-hidden">
        <div className="relative w-[800px] h-[800px] flex items-center justify-center">
          <Radar
            color="#3b82f6"
            backgroundColor="#0f172a"
            speed={1.5}
            scale={1}
            ringCount={15}
            spokeCount={4}
            ringThickness={0.1}
            spokeThickness={0.01}
            sweepSpeed={1}
            sweepWidth={3}
            sweepLobes={1}
            falloff={1.6}
            brightness={1.3}
            enableMouseInteraction={false}
          />
          <h2 className="absolute bottom-12 left-1/2 -translate-x-1/2 text-blue-400 text-xl font-mono animate-pulse tracking-widest whitespace-nowrap drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10 pointer-events-none">
            Fetching Projects...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen pt-32 px-8 md:px-16 lg:px-24 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h1 className="text-5xl font-bold mb-4 text-white">All Projects</h1>
            <p className="text-gray-400 text-lg max-w-2xl">
              A collection of my local works, game development journey, and open-source GitHub repositories.
            </p>
          </div>

          <div className="relative w-full md:w-96 group">
            <label htmlFor="project-search" className="block mb-2 text-sm font-medium text-gray-300">
              Search projects
            </label>
            <div className="absolute top-8 bottom-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              id="project-search"
              type="text"
              aria-placeholder="Search by name, desc or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by name, desc or topic..."
              className="w-full pl-12 pr-4 py-3 bg-slate-900/80 backdrop-blur-sm border border-white/10 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-transform placeholder:text-gray-500 shadow-xl"
            />
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <div className="w-full text-center py-32 text-gray-500 text-xl font-medium border border-dashed border-white/10 rounded-3xl">
            No projects found matching "{searchQuery}".
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-20">
            {filteredProjects
              .reduce((acc, project) => {
                if (!projectsSettings[project.name]?.skip && project.name != "pordarman") {
                  acc.push(
                    <BorderGlow
                      key={project.id || project.name}
                      className="w-full h-full bg-slate-900"
                      glowColor="210 100% 60%"
                      borderRadius={16}
                    >
                      <div className="flex flex-col h-full bg-slate-900 rounded-2xl relative overflow-hidden group">

                        <div className="absolute top-0 right-0 flex z-20">
                          {project.isLocal && (
                            <div className="px-3 py-1 bg-blue-600/90 backdrop-blur-md text-white text-xs font-bold rounded-bl-lg">
                              Local
                            </div>
                          )}
                          {project.onGoing && (
                            <div className="px-3 py-1 bg-yellow-600/90 backdrop-blur-md text-white text-xs font-bold rounded-bl-lg">
                              On Going
                            </div>
                          )}
                        </div>

                        {(project.imageUrl || projectsSettings[project.id] || projectsSettings[project.name]) && (
                          <div className="w-full h-48 relative overflow-hidden border-b border-white/5 flex-shrink-0">
                            <img
                              src={project.imageUrl || projectsSettings[project.id]?.icon || projectsSettings[project.name]?.icon}
                              alt={project.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent"></div>
                          </div>
                        )}

                        <div className="flex flex-col flex-grow p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20">
                              <Code2 className="w-6 h-6 text-blue-400" />
                            </div>
                            <div className="flex gap-3 relative z-10">
                              {project.html_url && project.html_url !== '#' && (
                                <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg text-gray-400 hover:text-white hover:bg-slate-700 transition-transform" aria-label="View on GitHub">
                                  <Github className="w-5 h-5" />
                                </a>
                              )}
                              {((project.projectUrl && project.projectUrl !== '#') || (projectsSettings[project.name]?.projectUrl)) && (
                                <a href={project.projectUrl || projectsSettings[project.name]?.projectUrl} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-lg text-gray-400 hover:text-white hover:bg-slate-700 transition-transform" aria-label="View Project">
                                  <ExternalLink className="w-7 h-7" />
                                </a>
                              )}
                              {projectsSettings[project.name]?.npmLink && (
                                <a href={projectsSettings[project.name].npmLink} target="_blank" rel="noopener noreferrer" className="p-2 bg-red-500/20 rounded-lg text-gray-400 hover:text-white hover:bg-red-500/20 transition-transform" aria-label="View on NPM">
                                  <span className="text-xs font-bold">NPM</span>
                                </a>
                              )}
                            </div>
                          </div>

                          <h3 className="text-2xl font-bold text-white mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                            {project.html_url && project.html_url !== '#' ? (
                              <a
                                href={project.html_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                                aria-label={`View ${project.name} on GitHub`}
                              >
                                {project.name}
                              </a>
                            ) : (
                              <span>{project.name}</span>
                            )}
                          </h3>

                          <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                            {project.description || 'No description provided for this repository.'}
                          </p>

                          {project.topics && project.topics.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.topics.slice(0, 4).map(topic => (
                                <span key={topic} className="px-2.5 py-1 bg-slate-950 text-blue-300 text-xs font-semibold rounded-md border border-white/5">
                                  {topic}
                                </span>
                              ))}
                              {project.topics.length > 4 && (
                                <span className="px-2.5 py-1 bg-slate-950 text-gray-400 text-xs font-semibold rounded-md border border-white/5">
                                  +{project.topics.length - 4}
                                </span>
                              )}
                            </div>
                          )}

                          <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/10">
                            <div className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                              <span className="text-sm font-bold text-gray-300 tracking-wide">
                                {project.language || 'Markdown'}
                              </span>
                            </div>

                            <div className="flex items-center gap-4 text-gray-400 text-sm font-medium">
                              {project.stargazers_count !== null && (
                                <div className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors">
                                  <Star className="w-4 h-4" />
                                  <span>{project.stargazers_count}</span>
                                </div>
                              )}
                              {project.createdAt && (
                                <div className="flex items-center gap-1.5" title="Start Date">
                                  <Calendar className="w-4 h-4 text-slate-500" />
                                  <span>{new Date(project.createdAt).getFullYear()}</span>
                                </div>
                              )}
                              {project.updatedAt && !project.onGoing && (
                                <div className="flex items-center gap-1.5" title="Completed">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                      </div>
                    </BorderGlow>
                  );
                }
                return acc;
              }, [])}
          </div>
        )}
      </div>
    </div>
  );
}