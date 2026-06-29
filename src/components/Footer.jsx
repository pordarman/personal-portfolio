import { Mail } from 'lucide-react';

const Github = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.834 2.807 1.304 3.492 .997 .108-.775 .418-.997 .762-1.225-2.665-.3-5.467-1.332-5.467-5.93 0-1.31 .468-2.38 1.236-3.22-.124-.303-.536-1.523 .117-3.176 0 0 1.008-.322 3.301 1.23 .957-.266 1.983-.399 3.003-.404 1.02 .005 2.047 .138 3.006 .404 2.291-1.552 3.297-1.23 3.297-1.23 .655 1.653 .243 2.873 .12 3.176 .77 .84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.625-5.479 5.921 .43 .372 .823 1.102 .823 2.222v3.293c0 .319 .218 .694 .825 .576C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const Linkedin = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.609c0-3.368-4-3.113-4 0v5.609h-3v-11h3v1.765c1.396-2.586 7-2.778 7 2.476v6.88z" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-slate-600 dark:text-slate-400 text-sm text-center md:text-left font-medium">
          <p>&copy; {currentYear} Ali İhsan Çelik. All rights reserved.</p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/pordarman" 
            target="_blank" 
            rel="noreferrer"
            className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors hover:scale-110 transform"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a 
            href="https://linkedin.com/in/ali-ihsan-celik-thk/"
            target="_blank" 
            rel="noreferrer"
            className="text-slate-500 hover:text-cyan-600 dark:text-slate-400 dark:hover:text-cyan-400 transition-colors hover:scale-110 transform"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a 
            href="mailto:ali.taha.celik@gmail.com"
            className="text-slate-500 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-400 transition-colors hover:scale-110 transform"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;