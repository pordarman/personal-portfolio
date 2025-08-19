import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import fetchProjectsGithub from "../utils/fetchProjectsGithub";

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

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetchProjectsGithub();
        setProjects(response);
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
