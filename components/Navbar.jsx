"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar({
  currentSection,
  sections,
  isChapter2 = false,
  isChapter3 = false,
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (index) => {
    if ((isChapter2 || isChapter3) && index === 0) {
      // Navigate back to Chapter 1 from Chapter 2 or 3
      window.dispatchEvent(new CustomEvent("navigateToChapter1"));
      setIsMenuOpen(false);
      return;
    }

    if (!isChapter2 && !isChapter3 && index === 1) {
      window.dispatchEvent(new CustomEvent("navigateToChapter2"));
      setIsMenuOpen(false);
      return;
    }

    if (!isChapter3 && index === 2) {
      // Navigate to Chapter 3
      window.dispatchEvent(new CustomEvent("navigateToChapter3"));
      setIsMenuOpen(false);
      return;
    }

    if (isChapter2 && index === 2) {
      // Navigate from Chapter 2 to Chapter 3
      window.dispatchEvent(new CustomEvent("navigateToChapter3"));
      setIsMenuOpen(false);
      return;
    }

    if (isChapter3 && index === 1) {
      // Navigate from Chapter 3 to Chapter 2
      window.dispatchEvent(new CustomEvent("navigateToChapter2"));
      setIsMenuOpen(false);
      return;
    }

    const element = document.getElementById(sections[index].id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const chapters = [
    { number: 1, title: "The Journey Begins", month: "July" },
    { number: 2, title: "Building Bridges", month: "August" },
    { number: 3, title: "Creative Expressions", month: "September" },
    { number: 4, title: "Knowledge Exchange", month: "October" },
    { number: 5, title: "Community Impact", month: "November" },
    { number: 6, title: "Legacy & Reflection", month: "December" },
  ];

  const displayCurrentSection = isChapter3
    ? 2
    : isChapter2
    ? 1
    : currentSection;

  return (
    <>
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

            {/* Center - Current Chapter */}
            <motion.div
              className="hidden md:flex items-center space-x-4"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <span className="text-orange-300 font-sans text-sm">
                Chapter {displayCurrentSection + 1}:{" "}
                {chapters[displayCurrentSection]?.title}
              </span>
            </motion.div>

            {/* Right - Chapter Number & Menu */}
            <div className="flex items-center space-x-4">
              {/* Current Chapter Number */}
              <motion.div
                className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-400/30 rounded-lg px-3 py-1"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-orange-400 font-bold font-sans text-sm">
                  Ch. {displayCurrentSection + 1}
                </span>
              </motion.div>

              {/* Menu Button */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-lg font-sans text-sm font-bold shadow-lg shadow-orange-500/30"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Menu
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
                mass: 0.5,
                bounce: 0.2,
              }}
              className="fixed top-0 right-0 h-full w-80 bg-black/90 backdrop-blur-md border-l border-orange-500/20 z-50 p-6"
            >
              {/* Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-serif">
                  Chapters
                </h3>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="text-orange-400 hover:text-orange-300 text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* Chapter List */}
              <div className="space-y-4">
                {chapters.slice(0, 3).map((chapter, index) => (
                  <motion.button
                    key={chapter.number}
                    onClick={() => scrollToSection(index)}
                    className={`w-full text-left p-4 rounded-lg border transition-all duration-300 ${
                      displayCurrentSection === index
                        ? "bg-gradient-to-r from-orange-500/20 to-amber-500/20 border-orange-400/50"
                        : "bg-gradient-to-r from-orange-500/10 to-amber-500/10 border-orange-400/20 hover:border-orange-400/40"
                    }`}
                    whileHover={{ scale: 1.02, x: 5 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-orange-400 font-bold font-serif">
                        Chapter {chapter.number}
                      </span>
                      <span className="text-orange-300 font-sans text-sm">
                        {chapter.month}
                      </span>
                    </div>
                    <p className="text-gray-300 font-sans text-sm">
                      {chapter.title}
                    </p>
                  </motion.button>
                ))}

                {/* Coming Soon Chapters */}
                <div className="pt-4 border-t border-orange-500/20">
                  <p className="text-orange-300 font-sans text-sm mb-4">
                    Coming Soon:
                  </p>
                  {chapters.slice(3).map((chapter, index) => (
                    <motion.div
                      key={chapter.number}
                      className="w-full text-left p-4 rounded-lg bg-gradient-to-r from-gray-600/10 to-gray-500/10 border border-gray-400/20 mb-2 opacity-60"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 0.6, x: 0 }}
                      transition={{
                        delay: (index + 3) * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 15,
                      }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-400 font-bold font-serif">
                          Chapter {chapter.number}
                        </span>
                        <span className="text-gray-500 font-sans text-sm">
                          {chapter.month}
                        </span>
                      </div>
                      <p className="text-gray-500 font-sans text-sm">
                        {chapter.title}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
