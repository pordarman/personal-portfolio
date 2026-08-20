import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { MotionConfig } from 'framer-motion';

function App() {
  return (
    <MotionConfig reducedMotion='user'>
      <Router>
        <div className="min-h-screen bg-[#0f172a] text-white selection:bg-blue-500/30">
          <Navbar />
          <main className="w-full h-screen">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </Router>
    </MotionConfig>
  );
}

export default App;