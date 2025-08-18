import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Sayfanın kaydırma konumunu dinleyen fonksiyon
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Sayfayı yumuşak bir şekilde en üste kaydıran fonksiyon
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Yumuşak kaydırma efekti için
    });
  };

  useEffect(() => {
    // Bileşen yüklendiğinde "scroll" event listener"ı ekle
    window.addEventListener("scroll", toggleVisibility);

    // Bileşen DOM"dan kaldırıldığında event listener"ı temizle (performans için önemli!)
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50 transition-colors duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          aria-label="Back to top"
        >
          {/* Yukarı Ok İkonu (SVG) */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default BackToTopButton;
