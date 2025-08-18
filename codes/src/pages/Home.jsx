import React from "react";
import Hero from "../components/Hero";
import FeaturedProjectCard from "../components/FeaturedProjectCard";

// Yetenekler ve logo URL"lerini bir dizi içinde yönetiyoruz.
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

// Ana sayfada gösterilecek özel projelerin listesi
const myFeaturedProjects = [
    {
        id: 1,
        title: "C# Unity ile 2D Pixel Oyun",
        description: "Unity oyun motoru ve C# programlama dili kullanılarak geliştirilen bir top-down pixel art macera oyunu. Oyuncular zindanları keşfeder, düşmanlarla savaşır ve bulmacaları çözer.",
        imageUrl: "https://placehold.co/600x400/1a2b3c/ffffff?text=Pixel+Oyun",
        startDate: "Ağustos 2024",
        status: "ongoing",
    },
    {
        id: 2,
        title: "React Sudoku PDF Oluşturucu",
        description: "React tabanlı bu web uygulaması, anlık olarak benzersiz sudoku bulmacaları üretir ve kullanıcıların bu bulmacaları PDF formatında indirip yazdırmasına olanak tanır.",
        imageUrl: "https://placehold.co/600x400/1a2b3c/ffffff?text=Sudoku+PDF",
        startDate: "Haziran 2024",
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
                        <h2 className="text-4xl font-bold text-white">Öne Çıkan Projelerim</h2>
                        <p className="text-gray-400 mt-2">İşte en çok gurur duyduğum bazı çalışmalarım.</p>
                    </div>

                    {/* Proje kartları için grid yerine flexbox kullanarak mükemmel ortalama sağlıyoruz */}
                    <div className="flex flex-wrap justify-center items-stretch gap-8">
                        {myFeaturedProjects.map(project => (
                            <FeaturedProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            <section id="skills" className="bg-slate-800 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-white">Yeteneklerim</h2>
                        <p className="text-gray-400 mt-2">Kullandığım Teknolojiler ve Araçlar</p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-4">
                        {/* skills dizisini map ile dönerek logolu etiketler oluşturuyoruz */}
                        {skills.map(skill => (
                            <a href={skill.clickUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                <div key={skill.name} className="bg-slate-700 text-white py-2 px-4 rounded-full text-lg flex items-center transition-transform hover:scale-105">
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
