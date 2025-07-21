"use client";

import { motion } from "framer-motion";

export default function Navbar({ currentSection, sections }) {
  const scrollToSection = (index) => {
    const element = document.getElementById(sections[index].id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-orange-500/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Name */}
          <motion.div
            className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-serif"
            whileHover={{ scale: 1.05 }}
          >
            Hamza Durrani
          </motion.div>

          {/* Chapter Navigation */}
          <div className="flex space-x-4">
            <motion.div
              className="text-orange-300 font-sans text-sm hidden md:block"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              Chapter I: The Journey Begins
            </motion.div>

            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                onClick={() => scrollToSection(index)}
                className={`px-4 py-2 rounded-lg font-sans text-sm transition-all duration-300 ${
                  currentSection === index
                    ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/30"
                    : "bg-gradient-to-r from-orange-500/20 to-amber-500/20 text-orange-300 hover:from-orange-500/30 hover:to-amber-500/30"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {index === 0 ? "📖" : `✨ ${index}`}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
