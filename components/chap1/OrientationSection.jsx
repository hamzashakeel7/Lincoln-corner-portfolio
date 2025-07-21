"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";

export default function EnhancedOrientationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [selectedImage, setSelectedImage] = useState(null);

  const orientationImages = [
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
    "/placeholder.svg?height=300&width=400",
  ];

  const stats = [
    { number: "6", label: "Months Journey", icon: "📅" },
    { number: "25+", label: "Events Planned", icon: "🎯" },
    { number: "500+", label: "People Impacted", icon: "👥" },
    { number: "100%", label: "Dedication", icon: "💫" },
  ];

  return (
    <div
      ref={ref}
      className="min-h-screen w-full bg-black flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-transparent to-amber-900/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 text-center relative z-10">
        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-12"
        >
          <motion.h1
            className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent mb-6 font-serif"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            style={{ backgroundSize: "200% 200%" }}
          >
            The Book Begins
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-gradient-to-r from-orange-500/20 via-amber-500/20 to-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 mb-8 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-300 to-amber-300 bg-clip-text text-transparent mb-6 font-serif">
              ✨ Orientation - Where Magic Starts ✨
            </h2>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed font-sans max-w-4xl mx-auto">
              You stepped into the halls of PACC (Pakistan American Cultural
              Center), where your magical journey of learning, growth, and
              cultural exchange began. Like a young wizard entering Hogwarts for
              the first time, you were filled with wonder and anticipation for
              the adventures ahead. This is where dreams transform into reality.
            </p>
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
              className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 backdrop-blur-sm border border-orange-400/30 rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-serif">
                {stat.number}
              </div>
              <div className="text-gray-300 font-sans text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Institution Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="space-y-8"
          >
            <motion.div
              className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 backdrop-blur-sm border border-orange-400/30 rounded-2xl p-8"
              whileHover={{ scale: 1.02, borderColor: "#f97316" }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-6 font-serif flex items-center">
                🏛️ The Magical Institution
              </h3>
              <p className="text-gray-300 font-sans text-lg leading-relaxed">
                Lincoln Corner Pakistan American Cultural Center - A bridge
                between cultures, fostering understanding and collaboration
                between Pakistani and American communities. Here, magic happens
                through cultural exchange.
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-amber-600/20 to-orange-600/20 backdrop-blur-sm border border-amber-400/30 rounded-2xl p-8"
              whileHover={{ scale: 1.02, borderColor: "#f59e0b" }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-6 font-serif flex items-center">
                📅 The Enchanted Timeline
              </h3>
              <div className="text-gray-300 font-sans text-lg space-y-2">
                <p className="font-semibold">June - November 2025</p>
                <p>6 Months of Magical Learning</p>
                <p className="text-orange-400 font-bold">
                  Chapter I: July - The Journey Begins
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-6 font-serif text-center">
              📸 Captured Beginnings
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {orientationImages.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.8 }
                  }
                  transition={{ delay: 1.6 + index * 0.1 }}
                  className="relative aspect-square rounded-xl overflow-hidden border-2 border-orange-400/30 cursor-pointer group"
                  whileHover={{ scale: 1.05, borderColor: "#f97316" }}
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Orientation memory ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <motion.div className="absolute inset-0 bg-gradient-to-t from-orange-600/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <span className="text-white font-bold font-sans">
                      View Memory
                    </span>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 2 }}
              className="bg-gradient-to-r from-orange-600/20 to-amber-600/20 backdrop-blur-sm border border-orange-400/30 rounded-xl p-6 text-center"
            >
              <p className="text-gray-300 font-sans italic">
                "Every great wizard's journey begins with a single step into the
                unknown. This is where your story starts to unfold..."
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
            className="text-orange-400 text-2xl font-sans"
          >
            ↓ Scroll to continue your magical journey ↓
          </motion.div>
        </motion.div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            className="relative max-w-4xl max-h-[80vh] w-full h-full"
          >
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Enlarged memory"
              fill
              className="object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-bold font-sans transition-colors"
            >
              ✕ Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
