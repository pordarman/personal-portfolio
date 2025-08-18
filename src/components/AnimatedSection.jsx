import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Bu bileşen, içine aldığı çocukları (children) ekrana girdiklerinde
// alttan yukarı doğru yumuşak bir animasyonla gösterir.
function AnimatedSection({ children }) {
  // Animasyonu tetikleyecek olan DOM elementine bir referans oluşturuyoruz.
  const ref = useRef(null);
  
  // Bu referansın ekranda görünüp görünmediğini takip ediyoruz.
  // { once: true } sayesinde animasyon sadece bir kere çalışır.
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Animasyon varyantları
  const sectionVariants = {
    hidden: { opacity: 0, y: 75 }, // Başlangıç durumu: görünmez ve 75px aşağıda
    visible: { opacity: 1, y: 0 },   // Bitiş durumu: görünür ve orijinal pozisyonunda
  };

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{ duration: 0.5, delay: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimatedSection;
