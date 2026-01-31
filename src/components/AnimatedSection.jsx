import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedSection({ children }) {
  const ref = useRef(null);
  
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 75 }, 
    visible: { opacity: 1, y: 0 },
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
