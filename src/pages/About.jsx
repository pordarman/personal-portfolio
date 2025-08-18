import me from "../assets/me.webp";

function About() {
  return (
    <section id="about" className="text-slate-800 dark:text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="text-center mb-20">
          <img
            className="w-40 h-40 rounded-full mx-auto mb-4 object-cover shadow-lg shadow-cyan-500/30"
            src={me}
            alt="Profile"
          />
          <h2 className="text-4xl sm:text-5xl font-bold mb-2 text-slate-900 dark:text-white">Ali İhsan Çelik</h2>
          <p className="text-lg text-cyan-600 dark:text-cyan-400">Computer Engineering Student & Software Developer</p>
        </div>
        <div className="max-w-3xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-center mb-8 border-b-2 border-cyan-500 pb-2 text-slate-900 dark:text-white">My Journey</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              About Me
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              Hello! I'm <span className="font-semibold text-cyan-600 dark:text-cyan-400">Ali İhsan Çelik</span>, a fully-funded Computer Engineering student at the University of Turkish Aeronautical Association. My life is a balance between the digital and the physical worlds. I'm passionate about building elegant code, but I also find clarity and discipline through sports, hiking, and socializing with friends. I believe that self-improvement is a continuous journey, and I dedicate myself to learning new technologies and growing as a person every single day.
            </p>

            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              My Journey Into Code
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              My programming adventure ignited in February 2021. It all started with a single project: developing a Discord bot using <span className="font-semibold text-slate-800 dark:text-white">Node.js</span>. That initial spark quickly grew into a flame. The process was challenging; as a self-taught developer, my only guides were online documentation and communities. But overcoming those early obstacles taught me resilience and solidified my passion for software development.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Driven by curiosity, I began exploring other languages. After researching titans like Java, C++, and Python, I initially ventured into <span className="font-semibold text-slate-800 dark:text-white">Python</span> for its versatility. However, my true calling was in creating interactive experiences. This led me to game development with <span className="font-semibold text-cyan-600 dark:text-cyan-400">C# and Unity</span>, where I could merge my creativity with my coding skills. Currently, I'm actively developing a <span className="font-semibold text-slate-800 dark:text-white">2D top-down pixel art game</span>, a project that I'm incredibly passionate about.
            </p>

            </p>
        </div>
      </div>
    </section>
  );
}

export default About;