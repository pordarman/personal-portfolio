import profileImg from '../assets/me.webp';

const AboutSection = () => {
  const skills = [
    "JavaScript", "Node.js", "React", "Python", "Java", 
    "C#", "C++", "HTML", "CSS", "MySQL", "SQLite", "BAT"
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-500 shadow-xl">
            <img 
              src={profileImg} 
              alt="Ali" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        
        <div className="w-full md:w-2/3 flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Hi, I am Ali. I am a 23-year-old second-year Computer Engineering student at University of Turkish Aeronautical Association. My journey in software development began about 5 years ago, and since then, I have cultivated a deep passion for building robust and dynamic applications.
          </p>
          
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I thrive on learning new things every day and constantly challenging myself. Beyond the screen, I enjoy working out, spending quality time with friends, and playing video games. I believe in maintaining a healthy balance between an active social life and my technical pursuits.
          </p>
          
          <div className="mt-2">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
              Skills & Technologies
            </h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg text-sm font-medium shadow-sm border border-slate-200 dark:border-slate-700 transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;