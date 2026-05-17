import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [shrink, setShrink] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShrink(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className={`hero-section ${shrink ? "hero-shrink" : ""}`}>

        <motion.h1
          initial={{
            scale: 1.8,
            opacity: 0,
            y: 30
          }}
          animate={{
            scale: shrink ? 0.98 : 1.05,
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            ease: "easeInOut"
          }}
          className={`hero-title ${
            shrink ? "hero-title-small" : ""
          }`}
        >
          {shrink ? (
            "Kabeer Services"
          ) : (
            <>
              Welcome To
              <br />
              Kabeer Services
            </>
          )}
        </motion.h1>

      </section>

     
    </>
  );
};

export default HeroSection;