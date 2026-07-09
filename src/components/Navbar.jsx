import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const getLinkClass = (path) => {
    const baseClass = "text-sm font-medium transition-colors";
    return location.pathname === path 
      ? `${baseClass} text-blue-400` 
      : `${baseClass} text-gray-300 hover:text-white`;
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-6 bg-slate-900/60 backdrop-blur-md border-b border-white/10">
      <Link to="/" className="text-2xl font-bold tracking-tighter text-white">
        Ali İhsan
      </Link>
      
      <div className="flex gap-6">
        <Link to="/" className={getLinkClass('/')}>
          Home
        </Link>
        <Link to="/about" className={getLinkClass('/about')}>
          About Me
        </Link>
        <Link to="/projects" className={getLinkClass('/projects')}>
          Projects
        </Link>
        <Link to="/contact" className={getLinkClass('/contact')}>
          Contact
        </Link>
      </div>
    </nav>
  );
}