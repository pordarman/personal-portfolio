import { useNavigate } from 'react-router-dom';
import { LazyMotion, m, domAnimation } from "framer-motion"
import { Mail, Mouse, ChevronDown, User } from 'lucide-react';
import ColorBends from '../components/ColorBends';

import spiritfall from '../assets/spiritfall_preview.webp';
import statBot from '../assets/ultimate-stat-bot.webp';
import alisa from '../assets/alisa_preview.webp';
import sudoku from '../assets/sudoku-web_avatar.webp';
import portfolio from '../assets/personal-portfolio.webp';
import ticketBot from '../assets/ultimate-ticket-bot.webp';
import teknofest from '../assets/teknofest_preview.webp';
import dcjs from '../assets/dcjs-util.webp';

import ArcGallery from '../components/ArcGallery';

const Github = () => (
  <svg height="32" viewBox="0 0 16 16" width="32" fill="currentColor">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
  </svg>
);
const Linkedin = () => (
  <svg xmlns="http://w3.org" width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const galleryItems = [
  { image: spiritfall, text: 'Spiritfall Game', link: null },
  { image: statBot, text: 'Ultimate Stat Bot', link: "https://github.com/pordarman/ultimate-stat-bot" },
  { image: alisa, text: 'Alisa', link: "https://github.com/pordarman/alisa" },
  { image: sudoku, text: 'Sudoku PDF Generator', link: "https://github.com/pordarman/sudoku-pdf-generator" },
  { image: portfolio, text: 'Personal Portfolio', link: "https://github.com/pordarman/personal-portfolio" },
  { image: ticketBot, text: 'Ultimate Ticket Bot', link: "https://github.com/pordarman/ultimate-ticket-bot" },
  { image: teknofest, text: 'Teknofest 2023', link: null },
  { image: dcjs, text: 'DCJS Utility', link: "https://github.com/pordarman/dcjs-util" }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth">
      <LazyMotion features={domAnimation}>
        <section className="relative w-full h-screen overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <ColorBends
              colors={["#A855F7"]}
              rotation={103}
              speed={0.31}
              scale={2.4}
              frequency={2.7}
              warpStrength={0.93}
              mouseInfluence={0.05}
              noise={0.14}
              parallax={0}
              iterations={1}
              intensity={2}
              bandWidth={9.5}
              transparent
              autoRotate={0}
              color="#A855F7"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4 text-center">
            <m.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-slate-900/40 backdrop-blur-md border border-white/10 p-6 md:p-16 mx-4 md:mx-0 rounded-3xl shadow-2xl flex flex-col items-center w-full max-w-4xl"
            >
              <m.h1 variants={itemVariants} className="text-4xl md:text-7xl font-extrabold tracking-tight mb-2 md:mb-4 drop-shadow-2xl">
                Hi, I'm Ali İhsan Çelik
              </m.h1>

              <m.h2 variants={itemVariants} className="text-lg md:text-3xl text-blue-200 font-medium mb-4 md:mb-6 max-w-2xl">
                3rd Year Computer Engineering Student
              </m.h2>

              <m.p variants={itemVariants} className="text-gray-300 text-base md:text-xl max-w-3xl leading-relaxed mb-8 md:mb-10">
                Passionate about building scalable web applications, mastering JavaScript, and creating immersive digital experiences. Always exploring new technologies and pushing boundaries.
              </m.p>

              <m.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-6 md:mb-8 w-full sm:w-auto">
                <button
                  onClick={() => navigate('/projects')}
                  className="w-full sm:w-auto px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  View My Work
                </button>
                <button
                  onClick={() => navigate('/about')}
                  className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/30 text-white font-semibold rounded-full hover:bg-white/10 transition-transform hover:scale-105 active:scale-95 cursor-pointer"
                >
                  About Me
                </button>
              </m.div>

              <m.div variants={itemVariants} className="flex gap-6 items-center border-t border-white/10 pt-6">
                <a href="https://github.com/pordarman/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/ali-ihsan-celik-thk/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:ali.taha.celik@gmail.com" className="text-gray-400 hover:text-white transition-colors hover:scale-110">
                  <Mail className="w-6 h-6" />
                </a>
              </m.div>
            </m.div>
          </div>

          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 animate-bounce"
          >
            <Mouse className="w-5 h-5" />
            <ChevronDown className="w-4 h-4" />
          </m.div>
        </section>

        <section className="w-full bg-[#0a0f1d] py-24 md:py-32 flex justify-center items-center px-6 relative border-t border-white/5">
          <div className="max-w-3xl flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/30">
              <User className="w-8 h-8 text-blue-400" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              A Glimpse Into My World
            </h2>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10">
              Hello, I'm Ali İhsan Çelik. I'm a third-year Computer Engineering student at Turkish Aeronautical Association University. My software development journey started five years ago with Discord bots and has since expanded into full-stack web development and Unity game design. I am deeply passionate about self-taught learning, optimizing systems, and balancing my technical life with fitness, music, and great friendships.
            </p>

            <button
              onClick={() => navigate('/about')}
              className="group flex items-center gap-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full transition-all shadow-lg hover:shadow-blue-600/30"
            >
              Learn More About Me
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
        </section>

        <section className="relative w-full bg-[#0f172a] flex flex-col items-center justify-center overflow-hidden border-t border-white/5">
          <div className="text-center pointer-events-none mb-12 z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h3>
            <p className="text-gray-400 text-lg">Drag to explore • Click to view details</p>
          </div>

          <div className="w-full relative z-20">
            <ArcGallery items={galleryItems} />
          </div>
        </section>

        <section className="w-full py-32 bg-[#0a0f1d] border-t border-white/5 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/10 blur-[100px] rounded-full w-[500px] h-[500px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="max-w-4xl px-6 flex flex-col items-center text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Ready to collaborate?
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl leading-relaxed">
              I am always open to discussing new projects, creative ideas or opportunities to be part of your visions. Let's build something amazing together.
            </p>
            <button
              onClick={() => navigate('/contact')}
              className="flex items-center gap-3 px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </button>
          </div>
        </section>
      </LazyMotion>
    </div>
  );
}