import OnGoingCard from "./OnGoingCard";
import { Link } from "react-router-dom";

function FeaturedProjectCard({ project }) {
  const { title, description, imageUrl, projectUrl, startDate, onGoing } = project;

  return (
    <div className="bf-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 flex flex-col w-full sm:w-5/6 md:w-[475px]">

      <div className="relative w-full aspect-video overflow-hidden">
        <a href={imageUrl} target="_blank" rel="noopener noreferrer">
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={`${title} projesinin ekran görüntüsü`}
            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x400/1e2b3c/ffffff?text=Gorsel+Yok"; }}
          />
        </a>
        {onGoing && <OnGoingCard />}
      </div>

      <div className="p-6 flex flex-col flex-grow item-center justify-center text-center">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          {
            projectUrl ? (
              projectUrl.startsWith("/") ? // Link etiketini kullan
              <Link to={projectUrl} className="text-blue-500 dark:text-blue-600 underline">{title}</Link> :
              <a href={projectUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-600 underline">{title}</a>
            ) : (
              <span>{title}</span>
            )
          }
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{description}</p>
        <div className="mt-auto pt-4 border-t border-slate-700">
          <p className="text-xs text-gray-500">
            Start Date: {startDate}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectCard;