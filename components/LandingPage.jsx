"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function LandingPage({ onViewWork }) {
  const [imageError, setImageError] = useState(false);

  const chapters = [
    {
      number: 1,
      title: "The Journey Begins",
      month: "July 2025",
      events: [
        "Orientation & Welcome Ceremony",
        "CCC Session Bootcamp, How to make a Business Plan",
        "Build Your Digital Identity, Resume & Media Presence as a Journalist",
        "Mastering E-Commerce",
        "Maker Camp, Art that Inspires",
        "Importance of Digital Marketing for Entrepreneurs, American Heroes",
      ],
    },
    {
      number: 2,
      title: "Building Bridges",
      month: "August 2025",
      events: ["comming soon"],
    },
    {
      number: 3,
      title: "Creative Expressions",
      month: "September 2025",
      events: ["comming soon"],
    },
    {
      number: 4,
      title: "Knowledge Exchange",
      month: "October 2025",
      events: ["comming soon"],
    },
    {
      number: 5,
      title: "Community Impact",
      month: "November 2025",
      events: ["comming soon"],
    },
    {
      number: 6,
      title: "Legacy & Reflection",
      month: "December 2025",
      events: ["comming soon"],
    },
  ];

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-amber-900/10" />

      {/* Floating particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-orange-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1, 0.5],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 3,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Video */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <motion.div
                className="relative w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-orange-500/30 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-500/20" />
                {!imageError ? (
                  <Image
                    src="/1.jpg"
                    alt="Hamza Durrani"
                    fill
                    className="object-cover object-top"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center">
                    <span className="text-6xl font-bold text-white font-serif">
                      HD
                    </span>
                  </div>
                )}
              </motion.div>
            </div>

            {/* Video placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="bg-gradient-to-br from-orange-600/20 to-amber-600/20 backdrop-blur-sm border border-orange-400/30 rounded-xl p-6 text-center w-full md:w-[30vw] ml-0 md:ml-20"
            >
              <div className="relative rounded-xl overflow-hidden bg-black">
                <iframe
                  className="w-[280px] h-[350px] md:h-[500px] sm:w-[320px] sm:h-[400px] lg:w-[380px] lg:h-[480px] rounded-xl"
                  src="https://www.youtube.com/embed/VIDRJUSHGYc"
                  title="YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Biography & Chapters */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Biography */}
            <div className="space-y-6">
              <motion.h1
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 via-amber-500 to-orange-600 bg-clip-text text-transparent font-serif"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Hamza Durrani
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6"
              >
                <h2 className="text-2xl font-bold text-orange-300 mb-4 font-serif">
                  Lincoln Corner PACC Intern
                </h2>
                <p className="text-gray-300 font-sans leading-relaxed">
                  A passionate web developer and cultural enthusiast on a
                  transformative 6-month journey at the Lincoln Corner PACC.
                  Dedicated to working with cultures through technology,
                  community engagement, and meaningful storytelling.
                </p>
              </motion.div>
            </div>

            {/* Chapters */}
            <div className="space-y-4">
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent font-serif"
              >
                The Six Chapters
              </motion.h3>

              <div className="grid gap-4 max-h-96 overflow-y-auto scrollbar-hide">
                {chapters.map((chapter, index) => (
                  <motion.div
                    key={chapter.number}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
                    className="bg-gradient-to-r from-orange-600/10 to-amber-600/10 backdrop-blur-sm border border-orange-400/20 rounded-lg p-4 hover:border-orange-400/40 transition-all duration-300"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-orange-400 font-serif">
                        Chapter {chapter.number}: {chapter.title}
                      </h4>
                      <span className="text-sm text-orange-300 font-sans">
                        {chapter.month}
                      </span>
                    </div>
                    <ul className="space-y-1">
                      {chapter.events.map((event, eventIndex) => (
                        <li
                          key={eventIndex}
                          className="text-gray-300 font-sans text-sm flex items-center"
                        >
                          <span className="text-orange-400 mr-2">•</span>
                          {event}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* View Work Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="flex justify-center pt-8"
            >
              <motion.button
                onClick={onViewWork}
                className="relative px-12 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-xl rounded-full shadow-2xl shadow-orange-500/30 font-serif overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(249, 115, 22, 0.3)",
                    "0 0 40px rgba(249, 115, 22, 0.5)",
                    "0 0 20px rgba(249, 115, 22, 0.3)",
                  ],
                }}
                transition={{
                  boxShadow: { duration: 2, repeat: Number.POSITIVE_INFINITY },
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                <span className="relative z-10 flex items-center">
                  ✨ View My Journey ✨
                </span>

                {/* Magical sparkles */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    x: [-20, 20, -20],
                    y: [-10, 10, -10],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 0.5,
                  }}
                />
                <motion.div
                  className="absolute top-1/4 right-1/4 w-1 h-1 bg-white rounded-full"
                  animate={{
                    scale: [0, 1, 0],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: 1,
                  }}
                />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
