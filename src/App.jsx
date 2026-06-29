import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';

// Components
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ContactSection from './components/ContactSection';
import FeaturedProjects from './components/FeaturedProjects';

// Pages
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';

const GA_MEASUREMENT_ID = "G-EWGR3C0L08";
const AnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window.gtag === "function") {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

const Home = () => (
  <div className="flex flex-col w-full">
    <Hero />
    <AboutSection />
    <FeaturedProjects />
    <ContactSection />
  </div>
);

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans selection:bg-cyan-500/30">
          <Header />
          <AnalyticsTracker />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;