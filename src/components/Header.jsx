import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { AnimatePresence, motion } from "framer-motion";

// Hamburger ve Kapatma ikonları için SVG bileşenleri
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

function Header() {
  // 1. Mobil menünün açık/kapalı durumunu tutmak için state ekledik
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Menü linkine tıklandığında menüyü kapatan fonksiyon
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Animasyon varyantları
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 120, damping: 20 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.2 } }
  };

  return (
    <>
      <header className="bg-white dark:bg-slate-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-slate-900 dark:text-white text-2xl font-bold">
            Ali İhsan Çelik
          </Link>
          <div className="flex items-center space-x-4 md:space-x-6">
            <ul className="hidden sm:flex space-x-4 md:space-x-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => isActive ? "text-cyan-600 dark:text-cyan-400 font-semibold" : "text-slate-600 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => isActive ? "text-cyan-600 dark:text-cyan-400 font-semibold" : "text-slate-600 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) => isActive ? "text-cyan-600 dark:text-cyan-400 font-semibold" : "text-slate-600 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) => isActive ? "text-cyan-600 dark:text-cyan-400 font-semibold" : "text-slate-600 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-300 transition-colors"}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <ThemeToggle />

            <div className="sm:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 dark:text-white z-50">
                {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-slate-100 dark:bg-slate-900 z-40 flex flex-col items-center justify-center"
          >
            <ul className="flex flex-col items-center space-y-8">
              <li><NavLink to="/" onClick={handleLinkClick} className="text-3xl font-semibold text-slate-800 dark:text-white">Home</NavLink></li>
              <li><NavLink to="/about" onClick={handleLinkClick} className="text-3xl font-semibold text-slate-800 dark:text-white">About</NavLink></li>
              <li><NavLink to="/projects" onClick={handleLinkClick} className="text-3xl font-semibold text-slate-800 dark:text-white">Projects</NavLink></li>
              <li><NavLink to="/contact" onClick={handleLinkClick} className="text-3xl font-semibold text-slate-800 dark:text-white">Contact</NavLink></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;