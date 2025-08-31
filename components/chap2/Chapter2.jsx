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
          "Event setup, meltimedia",
          "Arranged souvenirs for participants",
          "Charged camera batteries",
        ],
        during: [
          "",
          "Managed breakout sessions",
          "Documented participant feedback",
          "Assisted with translation needs",
        ],
        post: [
          "Compiled workshop outcomes",
          "Created follow-up resources",
          "Analyzed participant feedback",
          "Planned next session improvements",
        ],
      },
      description:
        "An intensive workshop designed to break down communication barriers between Pakistani and American communities. Participants engaged in role-playing exercises, cultural scenario discussions, and learned practical communication strategies for cross-cultural interactions.",
      learnings: [
        "Intercultural competency",
        "Workshop facilitation",
        "Conflict resolution",
        "Active listening techniques",
        "Cultural sensitivity",
        "Group dynamics",
      ],
      images: [
        "/placeholder.svg?height=300&width=400&text=Workshop+Session",
        "/placeholder.svg?height=300&width=400&text=Group+Discussion",
        "/placeholder.svg?height=300&width=400&text=Cultural+Exchange",
        "/placeholder.svg?height=300&width=400&text=Team+Building",
      ],
    },
    {
      name: "Educational Resource Development",
      date: "August 18, 2025",
      color: "purple",
      responsibilities: {
        pre: [
          "Conducted needs assessment",
          "Researched educational gaps",
          "Designed resource framework",
          "Gathered content materials",
        ],
        during: [
          "Created digital resources",
          "Developed learning modules",
          "Tested resource effectiveness",
          "Collaborated with educators",
        ],
        post: [
          "Finalized resource packages",
          "Created distribution plan",
          "Gathered user feedback",
          "Updated resource content",
        ],
      },
      description:
        "A comprehensive project to develop educational resources that bridge Pakistani and American educational systems. Created bilingual learning materials, cultural context guides, and interactive digital content for community use.",
      learnings: [
        "Educational design",
        "Content development",
        "Digital literacy",
        "User experience design",
        "Bilingual communication",
        "Quality assurance",
      ],
      images: [
        "/placeholder.svg?height=300&width=400&text=Resource+Design",
        "/placeholder.svg?height=300&width=400&text=Digital+Content",
        "/placeholder.svg?height=300&width=400&text=Testing+Phase",
        "/placeholder.svg?height=300&width=400&text=Final+Resources",
      ],
    },
  ];

  const thirdPartyEvents = [
    {
      name: "International Youth Summit",
      date: "August 12, 2025",
      color: "amber",
      responsibilities: {
        pre: [
          "Registered as PACC representative",
          "Prepared presentation materials",
          "Researched summit agenda",
          "Coordinated travel arrangements",
        ],
        during: [
          "Presented PACC initiatives",
          "Networked with global youth leaders",
          "Attended leadership workshops",
          "Participated in panel discussions",
        ],
        post: [
          "Shared insights with PACC team",
          "Created summit report",
          "Established ongoing partnerships",
          "Planned follow-up collaborations",
        ],
      },
      description:
        "Represented PACC at an international youth summit focused on cultural diplomacy and global citizenship. Connected with young leaders from 25+ countries, sharing Pakistani-American cultural bridge-building experiences and learning from diverse perspectives.",
      learnings: [
        "Global leadership",
        "Public speaking",
        "International networking",
        "Cultural diplomacy",
        "Strategic partnerships",
        "Cross-border collaboration",
      ],
      images: [
        "/placeholder.svg?height=300&width=400&text=Summit+Opening",
        "/placeholder.svg?height=300&width=400&text=Presentation",
        "/placeholder.svg?height=300&width=400&text=Networking",
        "/placeholder.svg?height=300&width=400&text=Group+Photo",
      ],
    },
    {
      name: "Community Partnership Forum",
      date: "August 25, 2025",
      color: "yellow",
      responsibilities: {
        pre: [
          "Identified potential partners",
          "Prepared partnership proposals",
          "Researched community needs",
          "Created presentation deck",
        ],
        during: [
          "Pitched PACC collaboration ideas",
          "Facilitated partnership discussions",
          "Documented partnership agreements",
          "Exchanged contact information",
        ],
        post: [
          "Followed up with interested partners",
          "Created partnership roadmap",
          "Scheduled collaboration meetings",
          "Reported back to PACC leadership",
        ],
      },
      description:
        "Participated in a city-wide community partnership forum to establish collaborations between PACC and local organizations. Successfully initiated partnerships with 5 community groups for future cultural exchange programs.",
      learnings: [
        "Partnership development",
        "Stakeholder engagement",
        "Negotiation skills",
        "Community mapping",
        "Relationship building",
        "Strategic planning",
      ],
      images: [
        "/placeholder.svg?height=300&width=400&text=Forum+Setup",
        "/placeholder.svg?height=300&width=400&text=Partnership+Pitch",
        "/placeholder.svg?height=300&width=400&text=Agreement+Signing",
        "/placeholder.svg?height=300&width=400&text=Team+Meeting",
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
