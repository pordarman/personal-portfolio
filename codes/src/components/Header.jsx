import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

function Header() {
  return (
    <header className="bg-slate-800 shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          Logo/İsim
        </Link>
        <ul className="flex space-x-6">
          <li>
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? "text-cyan-400" : "text-white hover:text-cyan-300"}
            >
              Ana Sayfa
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? "text-cyan-400" : "text-white hover:text-cyan-300"}
            >
              Hakkımda
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/projects" 
              className={({ isActive }) => isActive ? "text-cyan-400" : "text-white hover:text-cyan-300"}
            >
              Projelerim
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => isActive ? "text-cyan-400" : "text-white hover:text-cyan-300"}
            >
              İletişim
            </NavLink>
          </li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}

export default Header;
