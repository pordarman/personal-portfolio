import React from "react";
import Hero from "../components/Hero";
import FeaturedProjectCard from "../components/FeaturedProjectCard";

import sudokuWebIcon from "../assets/sudoku-web.webp";
import spiritfallIcon from "../assets/spiritfall_preview.webp"

const skills = [
    { name: "JavaScript", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", clickUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { name: "React", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", clickUrl: "https://reactjs.org/" },
    { name: "Node.js", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", clickUrl: "https://nodejs.org/" },
    { name: "C#", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", clickUrl: "https://docs.microsoft.com/en-us/dotnet/csharp/" },
    { name: "HTML5", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", clickUrl: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { name: "CSS3", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", clickUrl: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { name: "Tailwind CSS", imageUrl: "https://raw.githubusercontent.com/devicons/devicon/54cfe13ac10eaa1ef817a343ab0a9437eb3c2e08/icons/tailwindcss/tailwindcss-original.svg", clickUrl: "https://tailwindcss.com/" },
    { name: "Git", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", clickUrl: "https://git-scm.com/" },
    { name: "Python", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", clickUrl: "https://www.python.org/" },
    { name: "Java", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", clickUrl: "https://www.java.com/" },
    { name: "MySQL", imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", clickUrl: "https://www.mysql.com/" },
];

const myFeaturedProjects = [
    {
        id: 1,
        title: "Spiritfall - 2D Pixel Game with C# & Unity",
        description: "Face a corrupted wilderness in this top-down action roguelite. A vile spirit has twisted animals into monsters, and you must survive their hordes. Your goal: purify, don't kill. Level up by cleansing spirits and combine powerful abilities to create devastating builds against the ever-growing threat.",
        imageUrl: spiritfallIcon,
        projectUrl: null,
        startDate: "June 2025",
        status: "ongoing",
    },
    {
        id: 2,
        title: "React Sudoku PDF Generator",
        description: "This React-based web application instantly generates unique Sudoku puzzles and allows users to download and print them in PDF format.",
        imageUrl: sudokuWebIcon,
        projectUrl: "https://pordarman.github.io/sudoku-pdf-generator/",
        startDate: "August 2025",
        status: "completed",
    },
];

function Home() {
    return (
        <div>
            <Hero />
            <section id="featured-projects" className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">My Featured Projects</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Here are some of the works I'm most proud of.</p>
                    </div>
                    <div className="flex flex-wrap justify-center items-stretch gap-8">
                        {myFeaturedProjects.map(project => (
                            <FeaturedProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>
            <section id="skills" className="bg-white dark:bg-slate-800 py-20 transition-colors duration-300">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white">My Skills</h2>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">Technologies and Tools I Use</p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {skills.map(skill => (
                            <a href={skill.clickUrl} target="_blank" rel="noopener noreferrer">
                                <div key={skill.name} className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white py-2 px-4 rounded-full text-lg flex items-center transition-transform hover:scale-105">
                                    <img
                                        src={skill.imageUrl}
                                        alt={`${skill.name} logo`}
                                        className="w-6 h-6 mr-2 object-contain"
                                    />
                                    <span>{skill.name}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;