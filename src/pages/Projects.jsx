import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchProjectsGithub } from "../utils/GithubUtils";
import { otherProjects } from "../data/otherProjectsData";
import { motion, AnimatePresence } from "framer-motion";

import alisaAvatar from "../assets/alisa-avatar_400x600.webp"
import ultimeTicketBot from "../assets/ultimate-ticket-bot.webp";
import ultimateStatBot from "../assets/ultimate-stat-bot.webp";
import modulesImg from "../assets/modules_400x600.webp";
import dcjsUtil from "../assets/dcjs-util_400x600.webp";
import sudokuWeb from "../assets/sudoku-web_400x600.webp";
import personalPortfolio from "../assets/personal-portfolio.webp";

const projectsSettings = {
  "alisa": {
    icon: alisaAvatar,
    onGoing: false,
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
    onGoing: true,
    order: 4,
  },
  "personal-portfolio": {
    icon: personalPortfolio,
    onGoing: true,
    order: 3,
  },
  "utaa-web": {
    skip: true
  },
  "school-lab": {
    skip: true
  },
  "Java-Swing-Test": {
    skip: true
  }
};

const SearchIcon = () => (
  <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const FilterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
  </svg>
);

const StyledCheckbox = ({ label, name, checked, onChange }) => (
  <label className="flex items-center gap-3 cursor-pointer group">
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={onChange}
      className="absolute opacity-0 w-0 h-0" 
    />
    <div className={`w-5 h-5 border-2 flex items-center justify-center rounded-md transition-all duration-200 
      ${checked
        ? 'bg-cyan-600 border-cyan-600'
        : 'bg-transparent border-slate-300 dark:border-slate-500 group-hover:border-cyan-500'}`
    }>
      {checked && (
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
    <span className="capitalize text-slate-700 dark:text-slate-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">{label}</span>
  </label>
);

function Projects() {
  const [allProjects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  
  const [searchIn, setSearchIn] = useState({
    name: true,
    description: true,
    tags: true,
  });
  
  const [dateFilters, setDateFilters] = useState({
    created: { start: "", end: "" },
    updated: { start: "", end: "" },
  });

  useEffect(() => {
    async function fetchProjects() {
      try {
        const githubRepos = await fetchProjectsGithub();

        const githubProjects = githubRepos.map(repo => ({
          id: repo.name,
          name: repo.name,
          description: repo.description || "No description available.",
          tags: repo.topics || [],
          imageUrl: projectsSettings[repo.name]?.icon || null,
          projectUrl: repo.homepage,
          githubUrl: repo.html_url,
          npmLink: projectsSettings[repo.name]?.npmLink || null,
          stars: repo.stargazers_count,
          createdAt: repo.created_at,
          updatedAt: repo.updated_at,
          source: "github",
          order: projectsSettings[repo.name]?.order || 0,
          onGoing: projectsSettings[repo.name]?.onGoing || false,
        }));

        const combinedProjects = [...otherProjects, ...githubProjects].filter(project => !projectsSettings[project.id]?.skip).sort((a, b) => {
          const aOrder = a.order || Infinity;
          const bOrder = b.order || Infinity;
          if (aOrder !== bOrder) {
            return aOrder - bOrder; 
          }

          const aGoing = a.onGoing || false;
          const bGoing = b.onGoing || false;
          if (aGoing !== bGoing) {
            return Number(bGoing) - Number(aGoing);
          }

          const aStars = a.stars || 0;
          const bStars = b.stars || 0;
          if (aStars !== bStars) {
            return bStars - aStars;
          }

          const aUpdatedDate = new Date(a.updatedAt || 0);
          const bUpdatedDate = new Date(b.updatedAt || 0);
          if (aUpdatedDate.getTime() !== bUpdatedDate.getTime()) {
            return bUpdatedDate - aUpdatedDate;
          }

          const aCreatedDate = new Date(a.createdAt || 0);
          const bCreatedDate = new Date(b.createdAt || 0);
          if (aCreatedDate.getTime() !== bCreatedDate.getTime()) {
            return bCreatedDate - aCreatedDate;
          }

          return a.name.localeCompare(b.name);
        });

        setAllProjects(combinedProjects);
        setFilteredProjects(combinedProjects);
      } catch (err) {
        const errorMessage = err.response
          ? `Error: ${err.response.status} - ${err.response.data.message}`
          : `An error occurred: ${err.message}`;
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  useEffect(() => {
    const words = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
    const resultProjects = [];

    function checkWord(project, word) {
      return (
        (searchIn.name && project.name && project.name.toLowerCase().includes(word)) ||
        (searchIn.description && project.description && project.description.toLowerCase().includes(word)) ||
        (searchIn.tags && project.tags && project.tags.some(tag => tag.toLowerCase().includes(word)))
      );
    }

    function setDateToEnd(dateString) {
      const date = new Date(dateString);
      date.setHours(23, 59, 59, 999);
      return date;
    }

    for (const project of allProjects) {
      if (
        (words.length > 0 && !words.every(word => checkWord(project, word))) ||
        (dateFilters.created.start && new Date(project.createdAt) < new Date(dateFilters.created.start)) ||
        (dateFilters.created.end && new Date(project.createdAt) > setDateToEnd(dateFilters.created.end)) ||
        (dateFilters.updated.start && new Date(project.updatedAt) < new Date(dateFilters.updated.start)) ||
        (dateFilters.updated.end && new Date(project.updatedAt) > setDateToEnd(dateFilters.updated.end))
      ) {
        continue; 
      }
      resultProjects.push(project);
    }

    setFilteredProjects(resultProjects);
  }, [searchQuery, searchIn, dateFilters, allProjects]);

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSearchIn(prev => ({ ...prev, [name]: checked }));
  };

  const handleDateChange = (e, type, range) => {
    const { value } = e.target;
    setDateFilters(prev => ({
      ...prev,
      [type]: { ...prev[type], [range]: value }
    }));
  };

  const resetFilters = () => {
    setSearchQuery("");
    setSearchIn({ name: true, description: true, tags: true });
    setDateFilters({ created: { start: "", end: "" }, updated: { start: "", end: "" } });
    if(document.getElementById("search-input")) document.getElementById("search-input").value = "";
  };

  if (loading) {
    return <div className="min-h-screen pt-32 text-center text-slate-800 dark:text-white text-xl flex justify-center">Loading projects...</div>;
  }

  if (error) {
    return <div className="min-h-screen pt-32 text-center text-red-500 text-xl">{error}</div>;
  }

  return (
    <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">My Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">Explore all my works, applications, and open-source contributions.</p>
        </div>
        
        <div className="mb-16 w-full max-w-3xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="relative flex-grow shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input
                id="search-input"
                type="text"
                value={searchQuery}
                placeholder="Search by name, description, or topic..."
                className="w-full pl-12 pr-4 py-3 border border-slate-300 dark:border-slate-700 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300 shadow-sm"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowAdvanced(prev => !prev)}
              className="p-3 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
              title="Advanced Search"
            >
              <FilterIcon />
            </button>
          </div>

          <AnimatePresence>
            {showAdvanced && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden mt-4 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-200 dark:border-slate-700"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">Search In:</h4>
                    <div className="flex flex-col gap-3">
                      {Object.keys(searchIn).map(key => (
                        <StyledCheckbox
                          key={key}
                          label={key}
                          name={key}
                          checked={searchIn[key]}
                          onChange={handleCheckboxChange}
                        />
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-slate-800 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">Date Filters:</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Created Between:</label>
                        <div className="flex gap-2">
                          <input type="date" onChange={(e) => handleDateChange(e, 'created', 'start')} value={dateFilters.created.start} className="w-full p-2 border rounded-lg bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white focus:ring-cyan-500 focus:border-cyan-500" />
                          <input type="date" onChange={(e) => handleDateChange(e, 'created', 'end')} value={dateFilters.created.end} className="w-full p-2 border rounded-lg bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white focus:ring-cyan-500 focus:border-cyan-500" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-600 dark:text-slate-400 mb-2">Updated Between:</label>
                        <div className="flex gap-2">
                          <input type="date" onChange={(e) => handleDateChange(e, 'updated', 'start')} value={dateFilters.updated.start} className="w-full p-2 border rounded-lg bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white focus:ring-cyan-500 focus:border-cyan-500" />
                          <input type="date" onChange={(e) => handleDateChange(e, 'updated', 'end')} value={dateFilters.updated.end} className="w-full p-2 border rounded-lg bg-slate-50 dark:bg-slate-900 border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white focus:ring-cyan-500 focus:border-cyan-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 text-right">
                  <button onClick={resetFilters} className="text-sm px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600 font-medium transition-colors">
                    Reset Filters
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!loading && (
          <p className="text-md text-slate-500 dark:text-slate-400 mb-12 border-b border-slate-200 dark:border-slate-800 pb-4">
            Showing <span className="font-bold text-cyan-600 dark:text-cyan-400">{filteredProjects.length}</span> of <span className="font-bold text-slate-800 dark:text-white">{allProjects.length}</span> projects.
          </p>
        )}

        <div className="flex flex-col gap-24">
          <AnimatePresence>
            {filteredProjects.length !== 0 ? (
              filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className={`flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12 ${
                    index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  
                  <div className="w-full lg:w-[45%] h-64 lg:h-[320px] relative group rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 flex items-center justify-center hover:shadow-cyan-500/30 transition-shadow duration-500 p-4">
                    {project.imageUrl ? (
                      <img 
                        src={project.imageUrl} 
                        alt={project.name} 
                        className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105" 
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500">
                        <span className="text-6xl font-bold mb-2">{project.name.charAt(0).toUpperCase()}</span>
                        <span className="text-lg font-medium">{project.name}</span>
                      </div>
                    )}

                    {project.onGoing && (
                      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none z-10">
                        <div className="absolute transform rotate-45 bg-red-600 text-center text-white font-semibold py-1 right-[-40px] top-[32px] w-[170px] shadow-md">
                          On Going
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="w-full lg:w-[55%] flex flex-col justify-center py-2">
                    <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-4 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                      <Link to={`/projects/${project.id}`} className="hover:underline">
                        {project.name}
                      </Link>
                    </h3>
                    
                    {project.tags && project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-cyan-50 dark:bg-slate-800 text-cyan-700 dark:text-cyan-400 text-xs font-semibold rounded-full border border-cyan-200 dark:border-slate-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap items-center justify-between border-t border-slate-200 dark:border-slate-700 pt-6 gap-4 mt-auto">
                      
                      <div className="flex flex-col gap-1">
                        {project.createdAt && (
                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                            Created: {new Date(project.createdAt).toLocaleDateString()}
                          </span>
                        )}
                        {project.updatedAt && (
                          <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                            Updated: {new Date(project.updatedAt).toLocaleDateString()}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-6">
                        {project.stars > 0 && (
                          <span className="flex items-center gap-1 text-yellow-500 font-semibold" title="GitHub Stars">
                            ⭐ {project.stars}
                          </span>
                        )}
                        {project.githubUrl && (
                          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-bold flex items-center gap-1 transition-colors">
                            GitHub ↗
                          </a>
                        )}
                        {project.npmLink && (
                          <a href={project.npmLink} target="_blank" rel="noreferrer" className="text-red-500 hover:text-red-400 font-bold flex items-center gap-1 transition-colors">
                            NPM ↗
                          </a>
                        )}
                      </div>

                    </div>
                  </div>

                </motion.div>
              ))
            ) : (
              <div className="w-full text-center py-20 text-slate-500 dark:text-slate-400 text-lg">
                No projects found matching your search criteria.
              </div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

export default Projects;