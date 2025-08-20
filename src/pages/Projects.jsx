import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import fetchProjectsGithub from "../utils/fetchProjectsGithub";
import { motion, AnimatePresence } from "framer-motion";

// Images
import alisaAvatar from "../assets/alisa-avatar_400x600.webp"
import ultimeTicketBot from "../assets/ultimate-ticket-bot.webp";
import ultimateStatBot from "../assets/ultimate-stat-bot.webp";

import modulesImg from "../assets/modules_400x600.webp";

import dcjsUtil from "../assets/dcjs-util_400x600.webp";

import sudokuWeb from "../assets/sudoku-web_400x600.webp";
import personalPortfolio from "../assets/personal-portfolio.webp";

const projectsSettings = {
  // Discord Botları
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

  // NPM modülleri
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

  // Web
  "sudoku-pdf-generator": {
    icon: sudokuWeb,
    onGoing: true,
  },
  "personal-portfolio": {
    icon: personalPortfolio,
    onGoing: true,
  }
};

const SearchIcon = () => (
  <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      className="absolute opacity-0 w-0 h-0" // Varsayılan checkbox'ı gizle
    />
    <div className={`w-5 h-5 border-2 flex items-center justify-center rounded-md transition-all duration-200 
      ${checked
        ? 'bg-cyan-600 border-cyan-600'
        : 'bg-transparent border-slate-300 dark:border-gray-500 group-hover:border-cyan-500'}`
    }>
      {/* İşaretliyken görünecek tik ikonu */}
      {checked && (
        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )}
    </div>
    <span className="capitalize text-slate-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors duration-200">{label}</span>
  </label>
);

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filtreleme için state'ler
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [searchIn, setSearchIn] = useState({
    name: true,
    description: true,
    topics: true,
  });
  const [dateFilters, setDateFilters] = useState({
    created: { start: "", end: "" },
    updated: { start: "", end: "" },
  });

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetchProjectsGithub();
        setProjects(response);
        setFilteredProjects(response);
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

  // useMemo kullanarak, sadece filtreler değiştiğinde yeniden hesaplama yapılmasını sağlıyoruz.
  useEffect(() => {
    const words = searchQuery.toLowerCase().split(/\s+/).filter(Boolean);
    const resultProjects = [];

    function checkWord(project, word) {
      return (
        (searchIn.name && project.name && project.name.toLowerCase().includes(word)) ||
        (searchIn.description && project.description && project.description.toLowerCase().includes(word)) ||
        (searchIn.topics && project.topics && project.topics.some(topic => topic.toLowerCase().includes(word)))
      );
    }

    for (const project of projects) {
      if (
        // 1. Metin bazlı arama filtresi
        (words.length > 0 && !words.every(word => checkWord(project, word))) ||

        // 2. Oluşturulma tarihi filtresi
        (dateFilters.created.start && new Date(project.created_at) < new Date(dateFilters.created.start)) ||
        (dateFilters.created.end && new Date(project.created_at) > new Date(dateFilters.created.end)) ||

        // 3. Güncellenme tarihi filtresi
        (dateFilters.updated.start && new Date(project.updated_at) < new Date(dateFilters.updated.start)) ||
        (dateFilters.updated.end && new Date(project.updated_at) > new Date(dateFilters.updated.end))
      ) {
        continue; // Eğer proje sağlanan filtreleri geçmiyorsa atla
      }

      resultProjects.push(project);
    }

    setFilteredProjects(resultProjects);
  }, [searchQuery, searchIn, dateFilters, projects]);

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
    setSearchIn({ name: true, description: true, topics: true });
    setDateFilters({ created: { start: "", end: "" }, updated: { start: "", end: "" } });
    document.getElementById("search-input").value = "";
  };


  if (loading) {
    return <div className="text-center text-slate-800 dark:text-white text-xl">Loading projects...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-xl">{error}</div>;
  }

  return (
    <section id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">My Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Latest updated works from my GitHub profile.</p>
        </div>
        <div className="mb-8 w-full max-w-2xl mx-auto">
          <div className="flex items-center gap-2">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder="Search by name, description, or topic..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-full bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition-all duration-300"
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button
              onClick={() => setShowAdvanced(prev => !prev)}
              className="p-2 rounded-full bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
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
                className="overflow-hidden mt-4 bg-slate-100 dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Checkbox'lar */}
                  <div>
                    <h4 className="font-semibold mb-2 text-slate-800 dark:text-white">Search In:</h4>
                    <div className="flex flex-col gap-2">
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

                  {/* Tarih Filtreleri */}
                  <div>
                    <h4 className="font-semibold mb-3 text-slate-800 dark:text-white">Date Filters:</h4>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Created Between:</label>
                        <div className="flex gap-2">
                          <input type="date" onChange={(e) => handleDateChange(e, 'created', 'start')} value={dateFilters.created.start} className="custom-date-picker w-full p-2 border rounded-lg bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 text-slate-800 dark:text-white focus:ring-cyan-500 focus:border-cyan-500" />
                          <input type="date" onChange={(e) => handleDateChange(e, 'created', 'end')} value={dateFilters.created.end} className="custom-date-picker w-full p-2 border rounded-lg bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 text-slate-800 dark:text-white focus:ring-cyan-500 focus:border-cyan-500" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Updated Between:</label>
                        <div className="flex gap-2">
                          <input type="date" onChange={(e) => handleDateChange(e, 'updated', 'start')} value={dateFilters.updated.start} className="custom-date-picker w-full p-2 border rounded-lg bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 text-slate-800 dark:text-white focus:ring-cyan-500 focus:border-cyan-500" />
                          <input type="date" onChange={(e) => handleDateChange(e, 'updated', 'end')} value={dateFilters.updated.end} className="custom-date-picker w-full p-2 border rounded-lg bg-white dark:bg-slate-700 border-gray-300 dark:border-gray-600 text-slate-800 dark:text-white focus:ring-cyan-500 focus:border-cyan-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-right">
                  <button onClick={resetFilters} className="text-sm text-cyan-600 dark:text-cyan-400 hover:underline">Reset Filters</button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {!loading && (
          <p className="text-md text-gray-500 dark:text-gray-400 mt-4 pb-4">
            Showing <span className="font-bold text-cyan-600 dark:text-cyan-400">{filteredProjects.length}</span> of <span className="font-bold text-slate-800 dark:text-white">{projects.length}</span> projects.
          </p>
        )}

        <motion.div
          layout // Bu prop, grid içindeki elemanların pozisyon değişikliklerini canlandırır
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {
              filteredProjects.length != 0 ? (
                filteredProjects.map(project => (
                  <motion.div
                    layout // Bu prop, kartın kendi pozisyon değişikliğini canlandırır
                    key={project.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ProjectCard
                      key={project.id}
                      project={{
                        title: project.name,
                        description: project.description || "No description available for this project.",
                        imageUrl: projectsSettings[project.name]?.icon || `https://placehold.co/600x400/1e293b/ffffff?text=${project.name}`,
                        projectUrl: project.homepage,
                        githubUrl: project.html_url,
                        npmLink: projectsSettings[project.name]?.npmLink,
                        stars: project.stargazers_count,
                        topics: project.topics,
                        createdAt: project.created_at,
                        updatedAt: project.updated_at,
                        onGoing: projectsSettings[project.name]?.onGoing || false,
                      }}
                    />
                  </motion.div>
                ))
              ) : (
                <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center text-gray-500">
                  No projects found.
                </div>
              )
            }
          </AnimatePresence>
        </motion.div>
      </div>
    </section >
  );
}

export default Projects;
