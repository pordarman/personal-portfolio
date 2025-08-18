import React, { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import fetchProjectsGithub from "../utils/fetchProjectsGithub";

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
          ? `Hata: ${err.response.status} - ${err.response.data.message}` 
          : `Bir hata oluştu: ${err.message}`;
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading) {
    return <div className="text-center text-white text-xl">Projeler yükleniyor...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 text-xl">{error}</div>;
  }

  return (
    <section id="projects">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Projelerim</h2>
          <p className="text-gray-400 mt-2">GitHub profilimden en son güncellenen çalışmalarım.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <ProjectCard 
              key={project.id} 
              project={{
                title: project.name,
                description: project.description || "Bu proje için bir açıklama bulunmuyor.",
                imageUrl: `https://placehold.co/600x400/1e293b/ffffff?text=${project.name}`,
                projectUrl: project.homepage || project.html_url,
                githubUrl: project.html_url,
                stars: project.stargazers_count,
                topics: project.topics,
                createdAt: project.created_at,
                updatedAt: project.updated_at,
              }} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
