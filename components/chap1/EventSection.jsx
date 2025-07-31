"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

// Define color values as CSS variables
const colorStyles = {
  blue: {
    "--primary": "#3b82f6", // blue-500
    "--secondary": "#60a5fa", // blue-400
    "--light": "#93c5fd", // blue-300
    "--bg": "rgba(59, 130, 246, 0.2)", // blue-500/20
    "--gradient-from": "rgba(37, 99, 235, 0.2)", // blue-600/20
    "--gradient-to": "rgba(6, 182, 212, 0.2)", // cyan-600/20
    "--950": "rgba(23, 37, 84, 0.2)", // blue-950/20
  },
  emerald: {
    "--primary": "#10b981", // emerald-500
    "--secondary": "#34d399", // emerald-400
    "--light": "#6ee7b7", // emerald-300
    "--bg": "rgba(16, 185, 129, 0.2)",
    "--gradient-from": "rgba(5, 150, 105, 0.2)",
    "--gradient-to": "rgba(20, 184, 166, 0.2)",
    "--950": "rgba(2, 44, 34, 0.2)",
  },
  purple: {
    "--primary": "#8b5cf6", // purple-500
    "--secondary": "#a78bfa", // purple-400
    "--light": "#c4b5fd", // purple-300
    "--bg": "rgba(139, 92, 246, 0.2)",
    "--gradient-from": "rgba(124, 58, 237, 0.2)",
    "--gradient-to": "rgba(236, 72, 153, 0.2)",
    "--950": "rgba(46, 16, 101, 0.2)",
  },
  amber: {
    "--primary": "#f59e0b", // amber-500
    "--secondary": "#fbbf24", // amber-400
    "--light": "#fcd34d", // amber-300
    "--bg": "rgba(245, 158, 11, 0.2)",
    "--gradient-from": "rgba(217, 119, 6, 0.2)",
    "--gradient-to": "rgba(251, 146, 60, 0.2)",
    "--950": "rgba(69, 26, 3, 0.2)",
  },
  yellow: {
    "--primary": "#eab308", // yellow-500
    "--secondary": "#facc15", // yellow-400
    "--light": "#fde047", // yellow-300
    "--bg": "rgba(234, 179, 8, 0.2)",
    "--gradient-from": "rgba(202, 138, 4, 0.2)",
    "--gradient-to": "rgba(245, 158, 11, 0.2)",
    "--950": "rgba(66, 32, 6, 0.2)",
  },

  rose: {
    "--primary": "#f43f5e", // rose-500
    "--secondary": "#fb7185", // rose-400
    "--light": "#fda4af", // rose-300
    "--bg": "rgba(244, 63, 94, 0.2)",
    "--gradient-from": "rgba(225, 29, 72, 0.2)",
    "--gradient-to": "rgba(244, 114, 182, 0.2)",
    "--950": "rgba(76, 5, 25, 0.2)",
  },
  cyan: {
    "--primary": "#06b6d4", // cyan-500
    "--secondary": "#22d3ee", // cyan-400
    "--light": "#67e8f9", // cyan-300
    "--bg": "rgba(6, 182, 212, 0.2)",
    "--gradient-from": "rgba(8, 145, 178, 0.2)",
    "--gradient-to": "rgba(34, 211, 238, 0.2)",
    "--950": "rgba(21, 94, 117, 0.2)",
  },
  fuchsia: {
    "--primary": "#d946ef", // fuchsia-500
    "--secondary": "#e879f9", // fuchsia-400
    "--light": "#f0abfc", // fuchsia-300
    "--bg": "rgba(217, 70, 239, 0.2)",
    "--gradient-from": "rgba(192, 38, 211, 0.2)",
    "--gradient-to": "rgba(232, 121, 249, 0.2)",
    "--950": "rgba(74, 4, 78, 0.2)",
  },
  teal: {
    "--primary": "#14b8a6", // teal-500
    "--secondary": "#2dd4bf", // teal-400
    "--light": "#5eead4", // teal-300
    "--bg": "rgba(20, 184, 166, 0.2)",
    "--gradient-from": "rgba(13, 148, 136, 0.2)",
    "--gradient-to": "rgba(45, 212, 191, 0.2)",
    "--950": "rgba(19, 78, 74, 0.2)",
  },
  pink: {
    "--primary": "#ec4899", // pink-500
    "--secondary": "#f472b6", // pink-400
    "--light": "#f9a8d4", // pink-300
    "--bg": "rgba(236, 72, 153, 0.2)",
    "--gradient-from": "rgba(219, 39, 119, 0.2)",
    "--gradient-to": "rgba(244, 114, 182, 0.2)",
    "--950": "rgba(80, 7, 36, 0.2)",
  },
  indigo: {
    "--primary": "#6366f1", // indigo-500
    "--secondary": "#818cf8", // indigo-400
    "--light": "#a5b4fc", // indigo-300
    "--bg": "rgba(99, 102, 241, 0.2)",
    "--gradient-from": "rgba(79, 70, 229, 0.2)",
    "--gradient-to": "rgba(129, 140, 248, 0.2)",
    "--950": "rgba(30, 27, 75, 0.2)",
  },
  lime: {
    "--primary": "#84cc16", // lime-500
    "--secondary": "#a3e635", // lime-400
    "--light": "#bef264", // lime-300
    "--bg": "rgba(132, 204, 22, 0.2)",
    "--gradient-from": "rgba(101, 163, 13, 0.2)",
    "--gradient-to": "rgba(163, 230, 53, 0.2)",
    "--950": "rgba(26, 46, 5, 0.2)",
  },
};

// Animation variants for better performance
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
    },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 100,
    },
  },
};

export default function EventSection({
  eventName,
  eventDate,
  responsibilities,
  description,
  learnings,
  images,
  sectionColor = "blue",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.3,
    margin: "100px 0px 100px 0px", // Add margin to trigger animation earlier
  });
  const [selectedImage, setSelectedImage] = useState(null);

  // Get the color styles for the current sectionColor
  const currentColors = colorStyles[sectionColor] || colorStyles.blue;

  return (
    <section
      ref={ref}
      style={currentColors}
      className="min-h-screen w-full bg-gradient-to-br from-black via-[color:var(--950)] to-black flex items-center justify-center snap-start relative overflow-hidden py-20"
    >
      {/* Background magical effects */}
      <div className="absolute inset-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--primary)]/10 via-transparent to-[color:var(--secondary)]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[color:var(--primary)]/5 to-transparent" />

        {/* Enhanced floating particles - optimized */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              background: `linear-gradient(45deg, var(--primary), var(--secondary))`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
              rotate: [0, 360],
              y: [0, -150, 0],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10, // Longer duration for smoother motion
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 10,
              ease: "linear", // Linear easing for smoother continuous motion
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Event Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-12 mt-20"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[color:var(--primary)] via-[color:var(--secondary)] to-[color:var(--light)] bg-clip-text text-transparent mb-4 font-serif"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% 200%" }}
          >
            ✨ {eventName} ✨
          </motion.h1>
          <motion.p
            className="text-[color:var(--light)] text-xl font-sans"
            variants={itemVariants}
          >
            {eventDate}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Responsibilities */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-[color:var(--gradient-from)] to-[color:var(--gradient-to)] backdrop-blur-sm border border-[color:var(--primary)]/30 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-[color:var(--primary)] mb-6 font-serif flex items-center">
                🎯 Responsibilities
              </h3>

              <motion.div className="space-y-4" variants={containerVariants}>
                {["pre", "during", "post"].map((phase, index) => (
                  <motion.div
                    key={phase}
                    variants={itemVariants}
                    transition={{ delay: 0.4 + index * 0.2 }}
                    className="bg-black/30 border border-[color:var(--secondary)]/20 rounded-lg p-4"
                  >
                    <h4 className="text-[color:var(--secondary)] font-bold mb-2 font-serif capitalize">
                      {phase === "pre"
                        ? "🔮 Pre-Event"
                        : phase === "during"
                        ? "⚡ During Event"
                        : "📜 Post-Event"}
                    </h4>
                    <motion.ul
                      className="text-[color:var(--light)] space-y-1"
                      variants={containerVariants}
                    >
                      {responsibilities[phase].map((item, i) => (
                        <motion.li
                          key={i}
                          variants={itemVariants}
                          transition={{ delay: 0.6 + index * 0.2 + i * 0.1 }}
                          className="flex items-center font-sans"
                        >
                          <span className="text-[color:var(--secondary)] mr-2">
                            •
                          </span>
                          {item}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={slideInLeft}
              transition={{ delay: 0.6 }}
              className="bg-gradient-to-r from-[color:var(--gradient-from)] to-[color:var(--gradient-to)] backdrop-blur-sm border border-[color:var(--primary)]/30 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-[color:var(--primary)] mb-4 font-serif flex items-center">
                📖 The Story
              </h3>
              <motion.p
                className="text-[color:var(--light)] leading-relaxed font-sans text-lg"
                variants={itemVariants}
                transition={{ delay: 0.8 }}
              >
                {description}
              </motion.p>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Learnings */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={slideInRight}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-l from-[color:var(--gradient-from)] to-[color:var(--gradient-to)] backdrop-blur-sm border border-[color:var(--primary)]/30 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-[color:var(--primary)] mb-6 font-serif flex items-center">
                🧙‍♂️ Learnings
              </h3>
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {learnings.map((learning, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-black/40 border border-[color:var(--secondary)]/20 rounded-lg p-3 text-center"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "var(--secondary)",
                      transition: { duration: 0.2 },
                    }}
                  >
                    <span className="text-[color:var(--light)] font-sans text-sm">
                      {learning}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Images */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={slideInRight}
              transition={{ delay: 0.8 }}
              className="bg-gradient-to-l from-[color:var(--gradient-from)] to-[color:var(--gradient-to)] backdrop-blur-sm border border-[color:var(--primary)]/30 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-bold text-[color:var(--primary)] mb-6 font-serif flex items-center">
                📸 Captured Memories
              </h3>
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={containerVariants}
              >
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="relative aspect-square rounded-lg overflow-hidden border-2 border-[color:var(--secondary)]/30 cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      borderColor: "var(--secondary)",
                      transition: { duration: 0.2 },
                    }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`Event memory ${index + 1}`}
                      fill
                      className="object-cover"
                      priority={index < 2} // Prioritize loading first 2 images
                    />
                    <motion.div
                      className="absolute inset-0 bg-[color:var(--primary)]/20 opacity-0 hover:opacity-100 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-white font-bold">View</span>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 100 }}
            className="relative max-w-4xl max-h-[80vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged memory"
              fill
              className="object-contain rounded-lg"
              priority
            />
            <motion.button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-[color:var(--primary)] text-black px-4 py-2 rounded-lg font-bold"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              ✕
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
