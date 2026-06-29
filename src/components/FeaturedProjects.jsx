import { Link } from 'react-router-dom';
import spiritfallImg from '../assets/spiritfall_preview.webp';
import teknofestImg from '../assets/teknofest_preview.webp';
import portfolioImg from '../assets/personal-portfolio.webp';

const featuredProjects = [
  {
    id: 1,
    title: "Spiritfall - 2D Pixel Game",
    description: "Face a corrupted wilderness in this top-down action roguelite. A vile spirit has twisted animals into monsters, and you must survive their hordes. Your goal: purify, don't kill. Level up by cleansing spirits and combine powerful abilities to create devastating builds against the ever-growing threat.",
    image: spiritfallImg,
    link: "/projects/spiritfall-2d-pixel-game",
    status: "On Going",
    startDate: "June 2025"
  },
  {
    id: 2,
    title: "TEKNOFEST 2025 - UAV Competition Finalist",
    description: "Led a team to the finals in the TEKNOFEST 2025 UAV competition, developing an autonomous drone system using Python and ROS for complex flight missions.",
    image: teknofestImg,
    link: "/projects/teknofest-2025-uav-competition",
    status: "",
    startDate: "March 2025"
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description: "My personal portfolio website built with React and Tailwind CSS, showcasing my projects, skills, and experience in a sleek, modern design.",
    image: portfolioImg,
    link: "/projects/personal-portfolio",
    status: "On Going",
    startDate: "July 2025"
  }
];

const FeaturedProjects = () => {
  return (
    <section id="featured-projects" className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white">My Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">Here are some of the works I'm most proud of.</p>
        </div>
        
        <div className="flex flex-wrap justify-center items-stretch gap-5">
          {featuredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-cyan-500/50 transition-shadow duration-300 flex flex-col w-full sm:w-5/6 md:w-[475px]"
            >
              
              <div className="relative w-full aspect-video overflow-hidden group bg-slate-50 dark:bg-slate-900/50 border-b border-slate-100 dark:border-slate-700">
                <Link to={project.link} className="block w-full h-full p-2">
                  <img 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105" 
                    alt={`${project.title} preview`} 
                    src={project.image} 
                  />
                </Link>
                
                {project.status && (
                  <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none">
                    <div className="absolute transform rotate-45 bg-red-600 text-center text-white font-semibold py-1 right-[-40px] top-[32px] w-[170px] shadow-md">
                      <span className="block">{project.status}</span>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6 flex flex-col flex-grow items-center justify-center text-center">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  <Link 
                    className="text-blue-500 dark:text-cyan-400 hover:underline transition-colors" 
                    to={project.link}
                  >
                    {project.title}
                  </Link>
                </h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="mt-auto pt-4 border-t border-slate-200 dark:border-slate-700 w-full">
                  <p className="text-xs text-slate-500 dark:text-slate-400">Start Date: {project.startDate}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link 
            to="/projects" 
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-slate-900 dark:bg-cyan-600 rounded-xl hover:bg-slate-800 dark:hover:bg-cyan-500 transition-colors shadow-lg hover:shadow-cyan-500/25 duration-300"
          >
            More Projects
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedProjects;