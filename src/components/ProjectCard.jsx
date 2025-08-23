import { Link } from "react-router-dom";
import OnGoingCard from "./OnGoingCard";
import DateUtils from "../utils/DateUtils";

// Star Icon SVG"si
const StarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-1 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

function ProjectCard({ project }) {
  // Yeni verileri props"tan alıyoruz
  const { id, name, tags, description, imageUrl, projectUrl, githubUrl, stars, updatedAt, createdAt, npmLink, onGoing, source } = project;

  return (
    <div className="bg-slate-200 dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 flex flex-col h-full">
      <div className="relative w-full aspect-video overflow-hidden">
        <a href={imageUrl} target="_blank" rel="noopener noreferrer">
          <img
            className="w-full h-68 object-cover"
            src={imageUrl}
            alt={`${name} projesinin ekran görüntüsü`}
            onError={(e) => {
              e.target.onerror = null;
            }}
          />
        </a>
        {onGoing && <OnGoingCard />}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-slate-1200 dark:text-white pr-2"><Link to={`/projects/${id}`} className="text-blue-500 dark:text-blue-600 underline">{name}</Link></h3>
          {source === 'github' ? (
            <div className="flex items-center text-slate-900 dark:text-white flex-shrink-0">
              <StarIcon />
              <span>{stars}</span>
            </div>
          ) : (
            <div className="flex items-center text-slate-900 dark:text-white flex-shrink-0">
              <span className="bg-green-500 text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                Local Project
              </span>
            </div>
          )}
        </div>

        {/* Topics (Konular) */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map(topic => (
              <span key={topic} className="bg-gray-300 dark:bg-gray-800 dark:text-white text-xs font-semibold px-2.5 py-0.5 rounded-full">
                {topic}
              </span>
            ))}
          </div>
        )}

        <p className="text-slate-900 dark:text-white text-gray-400 mb-4 flex-grow">{description}</p>

        {/* Dates (Tarihler) */}
        <div className="text-xs text-gray-500 mb-4">
          <p>Last Updated: {DateUtils.formatDate(updatedAt)}</p>
          <p>Created: {DateUtils.formatDate(createdAt)}</p>
        </div>

        {/* Links (Bağlantılar) */}
        <div className="mt-auto pt-4 border-t border-slate-700 flex space-x-4">
          {
            (npmLink && (
              <a
                href={npmLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-slate-900 text-white py-2 px-4 rounded-md hover:bg-red-500 transition-colors duration-300 w-full text-center"
              >
                See Npm Package
              </a>
            ))
          }
          {
            (projectUrl && (
              <a
                href={projectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-cyan-600 text-slate-900 text-white py-2 px-4 rounded-md hover:bg-cyan-700 transition-colors duration-300 w-full text-center"
              >
                See Project
              </a>
            ))
          }
          {
            (githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-violet-500 dark:bg-gray-700 text-slate-900 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-300 w-full text-center"
              >
                GitHub
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
