import { Routes, Route, useLocation } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";

// Sabit Bileşenler
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import BackToTopButton from "./components/BackToTopButton";

// Sayfalar
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Sayfalar her değiştiğinde Google Analytics'e bilgi gönder
const GA_MEASUREMENT_ID = "G-EWGR3C0L08";
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // gtag fonksiyonunun tarayıcıda tanımlı olup olmadığını kontrol et
    if (typeof window.gtag === "function") {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]); // Sadece "location" değiştiğinde bu kod çalışacak

  return null; // Bu bileşen ekranda bir şey göstermez
};

function App() {
  const location = useLocation();

  return (
    <div className="bg-slate-100 dark:bg-gradient-to-b dark:from-slate-900 dark:to-gray-900 min-h-screen flex flex-col transition-colors duration-300">
      <Header />
      <ScrollToTop />
      <AnalyticsTracker />

      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="flex-grow container mx-auto px-4 py-8"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:projectName" element={<ProjectDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <Footer />
      <BackToTopButton />
    </div>
  )
}

export default App;