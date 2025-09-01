"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

export default function Chapter2Page() {
  const [activeTab, setActiveTab] = useState("lincoln");
  const [selectedImage, setSelectedImage] = useState(null);

  const lincolnEvents = [
    {
      name: "Documentary Filmmaking Course",
      date: "August 4, 2025",
      color: "emerald",
      responsibilities: {
        pre: [
          "Event setup, multimedia",
          "Arranged souvenirs for participants",
          "Charged camera batteries",
        ],
        during: [
          "Attended The session",
          "Captured event images",
          "Captured event videos",
        ],
        post: [
          "Wrapped up the session",
          "Organized media files",
          "Reorganized sitting arrangements",
          "Disconnected multimedia equipment",
        ],
      },
      description:
        "A workshop focused on the fundamentals of documentary filmmaking. Participants learned about idea development, storytelling, filming techniques, and editing essentials to create impactful real-life narratives.",
      learnings: [
        "Documentary storytelling",
        "Filming techniques",
        "Editing essentials",
      ],
      images: [
        "/chap2/event1/1.jpg",
        "/chap2/event1/2.jpg",
        "/chap2/event1/3.jpg",
        "/chap2/event1/4.jpg",
      ],
    },
    {
      name: "Graphics Design (Featuring CANVA, Portfolio Building & Freelancing)",
      date: "August 13, 2025",
      color: "purple",
      responsibilities: {
        pre: [
          "Event setup, multimedia",
          "Arranged souvenirs for participants",
          "Charged camera batteries",
        ],
        during: [
          "Attended The session",
          "Distributed souvenirs to the participants and speaker",
          "Captured event images",
          "Captured event videos",
        ],
        post: [
          "Wrapped up the session",
          "Organized media files",
          "Reorganized sitting arrangements",
          "Disconnected multimedia equipment",
        ],
      },
      description:
        "A workshop focused on the fundamentals of graphic design, featuring hands-on training in Canva, portfolio building, and freelancing strategies.",
      learnings: ["Canva", "Portfolio building", "Freelancing strategies"],
      images: [
        "/chap2/event4/1.jpg",
        "/chap2/event4/2.jpg",
        "/chap2/event4/3.jpg",
        "/chap2/event4/4.jpg",
      ],
    },
    {
      name: "American Sports: Cricket vs Baseball",
      date: "August 27, 2025",
      color: "cyan",
      responsibilities: {
        pre: [
          "Event setup, multimedia",
          " Made souvenirs for participants",
          "Charged camera batteries",
        ],
        during: [
          "Attended The session",
          "Distributed souvenirs to the participants and speaker",
          "Captured event images",
          "Captured event videos",
        ],
        post: [
          "Wrapped up the session",
          "Organized media files",
          "Reorganized sitting arrangements",
          "Disconnected multimedia equipment",
        ],
      },
      description:
        "An interactive session exploring the similarities and differences between cricket and baseball. Participants learned about the history, rules, and cultural impact of both sports while engaging in comparative discussions.",
      learnings: [
        "knowledge about baseball",
        "knowledge about cricket",
        "baseball fundamentals",
      ],
      images: [
        "/chap2/event5/1.jpg",
        "/chap2/event5/2.jpg",
        "/chap2/event5/3.jpg",
        "/chap2/event5/4.jpg",
      ],
    },
    {
      name: "A Day in the Life of a Diplomat",
      date: "August 28, 2025",
      color: "indigo",
      responsibilities: {
        pre: [
          "Set up event space",
          "Charged event batteries",
          "Welcomed other corner focs",
        ],
        during: ["Captured images", "Asked questions from phil damion"],
        post: ["Organized images", "rearranged seating"],
      },
      description:
        "An insightful session providing a glimpse into the daily responsibilities and challenges faced by diplomats.",
      learnings: [
        "Diplomatic life",
        "Asking questions",
        "How to be a diplomat",
      ],
      images: [
        "/chap2/event6/1.jpg",
        "/chap2/event6/2.jpg",
        "/chap2/event6/3.jpg",
        "/chap2/event6/4.jpg",
      ],
    },
    {
      name: "English Through Cinema - ARGO",
      date: "August 29, 2025",
      color: "pink",
      responsibilities: {
        pre: [
          "Set up event space",
          "Charged event batteries",
          "Downloaded ARGO movie",
        ],
        during: ["Captured images"],
        post: ["Organized images", "rearranged seating"],
      },
      description:
        "A film screening and discussion event centered around the movie ARGO, exploring themes of diplomacy, culture, and international relations.",
      learnings: ["Film analysis", "Cultural context"],
      images: [
        "/chap2/event8/1.jpg",
        "/chap2/event8/2.jpg",
        "/chap2/event8/3.jpg",
        "/chap2/event8/4.jpg",
      ],
    },
  ];

  const thirdPartyEvents = [
    {
      name: "MUN Training Session",
      date: "August 6, 2025",
      color: "amber",
      responsibilities: {
        pre: ["Organized seating arrangements", "Charged camera batteries"],
        during: ["Captured event images"],
        post: [
          "Helped with event wrap-up",
          "Disconnected multimedia equipment",
        ],
      },
      description:
        "A workshop focused on preparing participants for Model United Nations. Attendees learned about rules of procedure, research methods, public speaking, and effective debate strategies for successful MUN participation.",
      learnings: ["Global leadership", "Public speaking"],
      images: [
        "/chap2/event2/1.jpg",
        "/chap2/event2/2.jpg",
        "/chap2/event2/3.jpg",
        "/chap2/event2/4.jpg",
      ],
    },
    {
      name: "Women Innovators | US Consulate",
      date: "August 11, 2025",
      color: "yellow",
      responsibilities: {
        pre: [
          "Set up event space",
          "Arranged refreshments",
          "Charged event batteries",
          "Welcomed attendees",
        ],
        during: [
          "Captured event images",
          "Helped in distributing refreshments",
          "Networked with attendees",
        ],
        post: ["Organized images", "rearranged seating"],
      },
      description:
        "A collaborative event aimed at empowering women entrepreneurs by providing them with resources, networking opportunities, and mentorship.",
      learnings: [
        "AI Skills",
        "How AI can help us in current times",
        "Welcoming attendees",
        "Working on tight deadlines",
      ],
      images: [
        "/chap2/event3/1.jpg",
        "/chap2/event3/2.jpg",
        "/chap2/event3/3.jpg",
        "/chap2/event3/4.jpg",
      ],
    },
    {
      name: "MUN Training Session",
      date: "August 28, 2025",
      color: "teal",
      responsibilities: {
        pre: ["Organized seating arrangements", "Charged camera batteries"],
        during: ["Captured event images"],
        post: [
          "Helped with event wrap-up",
          "Disconnected multimedia equipment",
        ],
      },
      description:
        "A workshop focused on preparing participants for Model United Nations. Attendees learned about rules of procedure, research methods, public speaking, and effective debate strategies for successful MUN participation.",
      learnings: ["Global leadership", "Public speaking"],
      images: [
        "/chap2/event7/1.jpg",
        "/chap2/event7/2.jpg",
        "/chap2/event7/3.jpg",
        "/chap2/event7/4.jpg",
      ],
    },
  ];

  const colorClasses = {
    blue: {
      primary: "blue-500",
      secondary: "blue-400",
      light: "blue-300",
      bg: "blue-500/20",
      gradient: "from-blue-600/20 to-cyan-600/20",
      particles: "#3b82f6",
      primaryHex: "#3b82f6",
      secondaryHex: "#60a5fa",
      lightHex: "#93c5fd",
    },
    emerald: {
      primary: "emerald-500",
      secondary: "emerald-400",
      light: "emerald-300",
      bg: "emerald-500/20",
      gradient: "from-emerald-600/20 to-teal-600/20",
      particles: "#10b981",
      primaryHex: "#10b981",
      secondaryHex: "#34d399",
      lightHex: "#6ee7b7",
    },
    purple: {
      primary: "purple-500",
      secondary: "purple-400",
      light: "purple-300",
      bg: "purple-500/20",
      gradient: "from-purple-600/20 to-pink-600/20",
      particles: "#8b5cf6",
      primaryHex: "#8b5cf6",
      secondaryHex: "#a78bfa",
      lightHex: "#c4b5fd",
    },
    amber: {
      primary: "amber-500",
      secondary: "amber-400",
      light: "amber-300",
      bg: "amber-500/20",
      gradient: "from-amber-600/20 to-orange-600/20",
      particles: "#f59e0b",
      primaryHex: "#f59e0b",
      secondaryHex: "#fbbf24",
      lightHex: "#fcd34d",
    },
    yellow: {
      primary: "yellow-500",
      secondary: "yellow-400",
      light: "yellow-300",
      bg: "yellow-500/20",
      gradient: "from-yellow-600/20 to-amber-500/20",
      particles: "#eab308",
      primaryHex: "#eab308",
      secondaryHex: "#facc15",
      lightHex: "#fde047",
    },
    cyan: {
      primary: "cyan-500",
      secondary: "cyan-400",
      light: "cyan-300",
      bg: "cyan-500/20",
      gradient: "from-cyan-600/20 to-blue-600/20",
      particles: "#06b6d4",
      primaryHex: "#06b6d4",
      secondaryHex: "#22d3ee",
      lightHex: "#67e8f9",
    },
    fuchsia: {
      primary: "fuchsia-500",
      secondary: "fuchsia-400",
      light: "fuchsia-300",
      bg: "fuchsia-500/20",
      gradient: "from-fuchsia-600/20 to-pink-600/20",
      particles: "#d946ef",
      primaryHex: "#d946ef",
      secondaryHex: "#e879f9",
      lightHex: "#f0abfc",
    },
    teal: {
      primary: "teal-500",
      secondary: "teal-400",
      light: "teal-300",
      bg: "teal-500/20",
      gradient: "from-teal-600/20 to-emerald-600/20",
      particles: "#14b8a6",
      primaryHex: "#14b8a6",
      secondaryHex: "#2dd4bf",
      lightHex: "#5eead4",
    },
    pink: {
      primary: "pink-500",
      secondary: "pink-400",
      light: "pink-300",
      bg: "pink-500/20",
      gradient: "from-pink-600/20 to-rose-600/20",
      particles: "#ec4899",
      primaryHex: "#ec4899",
      secondaryHex: "#f472b6",
      lightHex: "#f9a8d4",
    },
    indigo: {
      primary: "indigo-500",
      secondary: "indigo-400",
      light: "indigo-300",
      bg: "indigo-500/20",
      gradient: "from-indigo-600/20 to-purple-600/20",
      particles: "#6366f1",
      primaryHex: "#6366f1",
      secondaryHex: "#818cf8",
      lightHex: "#a5b4fc",
    },
  };

  const currentEvents =
    activeTab === "lincoln" ? lincolnEvents : thirdPartyEvents;

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-blue-950/20 to-black relative overflow-hidden pt-20 pb-10">
      {/* Background magical effects */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-cyan-500/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

        {/* Enhanced floating particles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 360],
              y: [0, -150, 0],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 6,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 bg-clip-text text-transparent mb-4 font-serif"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            style={{ backgroundSize: "200% 200%" }}
          >
            ✨ Chapter 2: Building Bridges ✨
          </motion.h1>
          <motion.p
            className="text-blue-300 text-xl font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            August 2025 - Connecting Communities
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-2 flex">
            <button
              onClick={() => setActiveTab("lincoln")}
              className={`px-8 py-4 rounded-xl font-sans font-bold transition-all duration-300 ${
                activeTab === "lincoln"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                  : "text-blue-300 hover:text-blue-200"
              }`}
            >
              🏛️ Lincoln Corner Events
            </button>
            <button
              onClick={() => setActiveTab("thirdparty")}
              className={`px-8 py-4 rounded-xl font-sans font-bold transition-all duration-300 ${
                activeTab === "thirdparty"
                  ? "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30"
                  : "text-blue-300 hover:text-blue-200"
              }`}
            >
              🌍 Third Party Events
            </button>
          </div>
        </motion.div>

        {/* Events Content */}
        <div className="space-y-16">
          {currentEvents.map((event, eventIndex) => {
            const colors = colorClasses[event.color];

            return (
              <motion.div
                key={`${activeTab}-${eventIndex}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 + eventIndex * 0.2 }}
                className={`bg-gradient-to-r ${colors.gradient} backdrop-blur-sm border border-${colors.primary}/30 rounded-3xl p-8 relative overflow-hidden`}
              >
                {/* Event-specific floating particles */}
                <div className="absolute inset-0">
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        width: Math.random() * 4 + 2,
                        height: Math.random() * 4 + 2,
                        background: colors.particles,
                      }}
                      animate={{
                        opacity: [0, 0.6, 0],
                        scale: [0, 1, 0],
                        rotate: [0, 360],
                        y: [0, -100, 0],
                        x: [0, Math.random() * 50 - 25, 0],
                      }}
                      transition={{
                        duration: 6 + Math.random() * 3,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 4,
                      }}
                    />
                  ))}
                </div>

                {/* Event Header */}
                <div className="text-center mb-8 relative z-10">
                  <h2
                    className="text-3xl md:text-4xl font-bold mb-2 font-serif"
                    style={{
                      color: colors.secondaryHex,
                      fontWeight: "700",
                      textShadow: "0 0 10px rgba(0,0,0,0.3)",
                    }}
                  >
                    {event.name}
                  </h2>
                  <p
                    className="text-lg font-sans font-semibold"
                    style={{ color: colors.lightHex }}
                  >
                    {event.date}
                  </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 relative z-10">
                  {/* Left Column */}
                  <div className="space-y-8">
                    {/* Responsibilities */}
                    <div
                      className={`bg-gradient-to-r ${colors.gradient} backdrop-blur-sm border border-${colors.primary}/30 rounded-2xl p-6`}
                    >
                      <h3
                        className="text-2xl font-bold mb-6 font-serif flex items-center"
                        style={{ color: colors.primaryHex }}
                      >
                        🎯 Your Magical Responsibilities
                      </h3>

                      <div className="space-y-4">
                        {["pre", "during", "post"].map((phase, index) => (
                          <div
                            key={phase}
                            className={`bg-black/30 border border-${colors.secondary}/20 rounded-lg p-4`}
                          >
                            <h4
                              className="font-bold mb-2 font-serif capitalize"
                              style={{
                                color: colors.secondaryHex,
                                fontWeight: "600",
                              }}
                            >
                              {phase === "pre"
                                ? "🔮 Pre-Event"
                                : phase === "during"
                                ? "⚡ During Event"
                                : "📜 Post-Event"}
                            </h4>
                            <ul className="space-y-1">
                              {event.responsibilities[phase].map((item, i) => (
                                <li
                                  key={i}
                                  className="flex items-center font-sans font-medium"
                                  style={{ color: colors.lightHex }}
                                >
                                  <span
                                    className="mr-2"
                                    style={{ color: colors.secondaryHex }}
                                  >
                                    •
                                  </span>
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Description */}
                    <div
                      className={`bg-gradient-to-r ${colors.gradient} backdrop-blur-sm border border-${colors.primary}/30 rounded-2xl p-6`}
                    >
                      <h3
                        className="text-2xl font-bold mb-4 font-serif flex items-center"
                        style={{ color: colors.primaryHex }}
                      >
                        📖 The Story Unfolds
                      </h3>
                      <p
                        className="leading-relaxed font-sans text-lg font-medium"
                        style={{ color: colors.lightHex }}
                      >
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    {/* Learnings */}
                    <div
                      className={`bg-gradient-to-l ${colors.gradient} backdrop-blur-sm border border-${colors.primary}/30 rounded-2xl p-6`}
                    >
                      <h3
                        className="text-2xl font-bold mb-6 font-serif flex items-center"
                        style={{ color: colors.primaryHex }}
                      >
                        🧙‍♂️ Magical Learnings
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {event.learnings.map((learning, index) => (
                          <div
                            key={index}
                            className={`bg-black/40 border border-${colors.secondary}/20 rounded-lg p-3 text-center hover:scale-105 transition-transform duration-300 hover:border-${colors.primary}`}
                          >
                            <span
                              className="font-sans text-sm font-medium"
                              style={{ color: colors.lightHex }}
                            >
                              {learning}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Images */}
                    <div
                      className={`bg-gradient-to-l ${colors.gradient} backdrop-blur-sm border border-${colors.primary}/30 rounded-2xl p-6`}
                    >
                      <h3
                        className="text-2xl font-bold mb-6 font-serif flex items-center"
                        style={{ color: colors.primaryHex }}
                      >
                        📸 Captured Memories
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        {event.images.map((image, index) => (
                          <div
                            key={index}
                            className={`relative aspect-square rounded-lg overflow-hidden border-2 border-${colors.secondary}/30 cursor-pointer hover:scale-105 transition-transform duration-300 hover:border-${colors.primary}`}
                            onClick={() => setSelectedImage(image)}
                          >
                            <Image
                              src={image || "/placeholder.svg"}
                              alt={`Event memory ${index + 1}`}
                              fill
                              className="object-cover"
                            />
                            <div
                              className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                              style={{
                                backgroundColor: `${colors.primaryHex}20`,
                              }}
                            >
                              <span className="text-white font-bold">View</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
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
              className="absolute top-4 right-4 text-white px-4 py-2 rounded-lg font-bold"
              style={{
                backgroundColor: currentEvents[0]?.color
                  ? colorClasses[currentEvents[0].color].primaryHex
                  : "#3b82f6",
              }}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
