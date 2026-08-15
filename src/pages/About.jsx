import { Download, Eye } from 'lucide-react';
import MagicRings from '../components/MagicRings';
import me from '../assets/me.webp';

const skills = [
  { name: 'JavaScript', level: 'Master', image: 'https://github.com/tandpfun/skill-icons/raw/main/icons/JavaScript.svg' },
  { name: 'Node.js', level: 'Intermediate', image: 'https://github.com/tandpfun/skill-icons/raw/main/icons/NodeJS-Dark.svg' },
  { name: 'Python', level: 'Intermediate', image: 'https://github.com/tandpfun/skill-icons/raw/main/icons/Python-Dark.svg' },
  { name: 'Java', level: 'Intermediate', image: 'https://github.com/tandpfun/skill-icons/raw/main/icons/Java-Dark.svg' },
  { name: 'C#', level: 'Intermediate', image: 'https://github.com/tandpfun/skill-icons/raw/main/icons/CS.svg' },
  { name: 'React', level: 'Beginner', image: 'https://github.com/tandpfun/skill-icons/raw/main/icons/React-Dark.svg' },
  { name: 'C++', level: 'Beginner', image: 'https://github.com/tandpfun/skill-icons/raw/main/icons/CPP.svg' },
  { name: 'HTML/CSS', level: 'Beginner', image: 'https://github.com/tandpfun/skill-icons/raw/main/icons/HTML.svg' },
  { name: 'SQL', level: 'Beginner', image: 'https://github.com/tandpfun/skill-icons/raw/main/icons/SQLite.svg' },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-200 font-sans">
      <div className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-[#0a0f1d] border-b border-white/5">
        <div className="absolute inset-0 w-full h-full z-0">
          <MagicRings
            color="#a855f7"
            colorTwo="#6366f1"
            ringCount={8}
            speed={1}
            attenuation={8}
            lineThickness={2}
            baseRadius={0.28}
            radiusStep={0.11}
            scaleRate={0.1}
            opacity={1}
            blur={0}
            noiseAmount={0.1}
            rotation={0}
            ringGap={1.4}
            fadeIn={0.6}
            fadeOut={0.8}
            followMouse={false}
            mouseInfluence={0}
            hoverScale={1}
            parallax={0}
            clickBurst={true}
          />
        </div>

        <div className="relative z-10 w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border border-white/10 shadow-2xl bg-slate-900 shrink-0">
  <img
    src={me}
    alt="Ali İhsan"
    className="w-full h-full object-cover"
  />
</div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            About Me
          </h1>
          
          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              Hello, I'm Ali İhsan Çelik. I'm a third-year computer engineering student at Turkish Aeronautical Association University. My GPA is 3.10/4.
            </p>
            <p>
              My interest in software development started five years ago when I was building a bot on Discord. I was trying to create things by copy-pasting from YouTube videos (back then, artificial intelligence didn't exist). I would get stuck when I encountered errors and couldn't progress, but later, as I wrote more, I started to understand and learn what I was doing. This lasted for about a year, and this year-long learning process was so effective that I learned everything from how to learn software development on my own to debugging, reading documentation, and research.
            </p>
            <p>
              Later, I further developed this software and created a very comprehensive Discord bot for myself, <a href="https://github.com/pordarman/alisa" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-500/30 hover:decoration-blue-400 transition-colors">Alisa</a>. This was my biggest and longest-running project; I constantly updated it, added new features, and worked to keep it constantly optimized. Similarly, I've enriched my bots by adding <a href="https://github.com/pordarman/ultimate-ticket-bot" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-500/30 hover:decoration-blue-400 transition-colors">Ticket</a> and <a href="https://github.com/pordarman/ultimate-stat-bot" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-500/30 hover:decoration-blue-400 transition-colors">Stat</a> bots.
            </p>
            <p>
              I didn't just stop at Discord bots; I also started developing websites: <a href="https://erdoganhafriyat.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-500/30 hover:decoration-blue-400 transition-colors">erdoganhafriyat.com</a>, <a href="https://alicelik.dev" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-500/30 hover:decoration-blue-400 transition-colors">alicelik.dev</a>, and <a href="https://pordarman.github.io/sudoku-pdf-generator/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-500/30 hover:decoration-blue-400 transition-colors">sudoku-pdf-generator</a>, and I continue to develop them. Along with these, I've also improved my skills in React and Next.js.
            </p>
            <p>
              On top of all this, I'm also interested in game development with Unity; in short, I'm testing myself by trying out different areas to see which one suits me best.
            </p>
            <p>
              I love learning new things every day, staying up-to-date, and constantly improving myself. In real life, I improve my quality of life by going to the gym, going for walks, playing guitar, reading books, and socializing with my friends, making my life more livable.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-10">
            <a
              href="/docs/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg flex items-center gap-2 transition-colors"
            >
              <Eye className="w-5 h-5" />
              View CV
            </a>
            <a
              href="/docs/cv.pdf"
              download="Ali_Ihsan_CV.pdf"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center gap-2 transition-colors"
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-8 tracking-tight">
            Technical Expertise
          </h2>

          <div className="flex flex-wrap items-center gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 shadow-lg shadow-black/10 backdrop-blur-sm hover:bg-white/10 transition-colors"
              >
                <img
                  src={skill.image}
                  alt={skill.name}
                  className="w-7 h-7 rounded-full"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-gray-200 font-medium">{skill.name}</span>
                  <span className="text-xs text-gray-400">{skill.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}