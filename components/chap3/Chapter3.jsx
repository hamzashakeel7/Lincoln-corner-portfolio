"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Chapter3Page() {
  const [activeTab, setActiveTab] = useState("lincoln");
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const lincolnEvents = [
    {
      name: "Web Development | One-Day Workshop",
      date: "September 15, 2025",
      color: "orange",
      responsibilities: {
        pre: [
          "Designed workshop poster",
          "Prepared coding materials and presentation",
          "Synced contacts and made a whatsaap group",
          "Connected multi-media equipments",
        ],
        during: [
          "Delivered the session",
          "Hands on coding practice",
          "Gave students a proper roadmap to learn web development",
          "Facilitated Q&A",
        ],
        post: ["Collected feedback", "Answered follow-up questions"],
      },
      description:
        "A comprehensive one-day workshop introducing high school students to web development fundamentals. Covered HTML, CSS, and JavaScript basics through interactive coding exercises and real-world examples, empowering students to create their own web pages.",
      learnings: [
        "First workshop experience",
        "Public speaking",
        "Technical instruction",
        "Answering questions",
        "Engaging the audience",
      ],
      images: [
        "/chap3/event1/1.jpg",
        "/chap3/event1/2.jpg",
        "/chap3/event1/3.jpg",
        "/chap3/event1/4.jpg",
      ],
    },
    {
      name: "Documentary Filmmaking Closing Ceremony",
      date: "September 17, 2025",
      color: "emerald",
      responsibilities: {
        pre: [
          "Coordinated event logistics",
          "Managed seating arrangements",
          "Setup multimedia equipment",
        ],
        during: ["Event logistics", "Took event photographs"],
        post: [
          "Wrapped up the event",
          "Everything kept in place",
          "Shared event photos",
        ],
      },
      description:
        "Assisted in organizing the closing ceremony of a month-long documentary filmmaking workshop. Helped manage event logistics, coordinated with participants, and ensured a smooth flow of activities during the ceremony.",
      learnings: ["Networking", "Photography skills", "Event coordination"],
      images: [
        "/chap3/event2/1.jpg",
        "/chap3/event2/2.jpg",
        "/chap3/event2/4.jpg",
        "/chap3/event2/3.jpg",
      ],
    },
    {
      name: "How Diplomats Solve Global Problems",
      date: "September 18, 2025",
      color: "emerald",
      responsibilities: {
        pre: [
          "Connected multi-media equipments",
          "Managed seating arrangements",
          "Charged camera batteries",
        ],
        during: ["Event photographs", "Asked questions to the speaker"],
        post: ["Wrapped up the event", "Everything kept in place"],
      },
      description:
        "Assisted in organizing the 'How Diplomats Solve Global Problems' workshop. Helped setup multimedia, seating arrangements and camera equipment, asked questions to the speaker, and ensured a smooth flow of workshop",
      learnings: ["Networking", "Photography skills", "Diplomacy insights"],
      images: [
        "/chap3/event3/1.jpg",
        "/chap3/event3/2.jpg",
        "/chap3/event3/4.jpg",
        "/chap3/event3/3.jpg",
      ],
    },
    {
      name: "Write It Right: Workshop on Composition and Writing Skills",
      date: "September 19, 2025",
      color: "emerald",
      responsibilities: {
        pre: ["Sadly absent 😌"],
        during: ["Sadly absent 😌"],
        post: ["Sadly absent 😌"],
      },
      description:
        "This dynamic session provided practical strategies to strengthen your professional communication. We focused on mastering clear, concise composition, structuring effective emails and reports, and refining overall writing clarity. Participants left with actionable tips to make every word count.",
      learnings: ["Sadly absent 😌"],
      images: [
        "/chap3/event4/1.jpg",
        "/chap3/event4/2.jpg",
        "/chap3/event4/4.jpg",
        "/chap3/event4/3.jpg",
      ],
    },
    {
      name: "Office Power – PowerPoint & Word Edition (Digital Skills Training for Youth & Early-Career Professionals)",
      date: "September 22, 2025",
      color: "emerald",
      responsibilities: {
        pre: [
          "Charged Batteries",
          "Connected multi-media equipments",
          "Managed seating arrangements",
        ],
        during: ["Event photographs", "Took attendance"],
        post: ["Wrapped up the event", "Everything kept in place"],
      },
      description:
        "This hands-on workshop equipped participants with essential skills in Microsoft PowerPoint and Word. We covered creating impactful presentations, designing professional documents, and utilizing advanced features to enhance productivity. Attendees gained practical knowledge to excel in academic and professional settings.",
      learnings: [
        "Presentation skills",
        "Document design",
        "Productivity tools",
        "Collaboration techniques",
        "use of AI in workplace",
      ],
      images: [
        "/chap3/event5/1.jpg",
        "/chap3/event5/2.jpg",
        "/chap3/event5/4.jpg",
        "/chap3/event5/3.jpg",
      ],
    },
    {
      name: "Creative Rhythms: Building Confidence and Collaboration through Music",
      date: "September 24, 2025",
      color: "emerald",
      responsibilities: {
        pre: [
          "Charged Batteries",
          "Connected multi-media equipments",
          "Stiker cutting",
        ],
        during: ["wasn't able to attend at that time 😌"],
        post: ["wasn't able to attend at that time 😌"],
      },
      description:
        "This interactive workshop used music as a tool to foster confidence and teamwork. Participants engaged in rhythm exercises, collaborative songwriting, and group performances, enhancing their communication",
      learnings: [
        "Sticker cutting and designing",
        "Different types of musical instruments",
      ],
      images: [
        "/chap3/event8/1.jpg",
        "/chap3/event8/2.jpg",
        "/chap3/event8/4.jpg",
        "/chap3/event8/3.jpg",
      ],
    },
    {
      name: "Introduction to Project Management",
      date: "September 26, 2025",
      color: "emerald",
      responsibilities: {
        pre: [
          "Charged Batteries",
          "Connected multi-media equipments",
          "Made souvenirs",
        ],
        during: ["Captured event photographs", "Took attendance"],
        post: ["wasn't avaliabel at that time 😌"],
      },
      description:
        "This workshop introduced fundamental project management concepts and techniques. Participants learned about project planning, task delegation, timeline management, and risk assessment through interactive activities and real-world scenarios.",
      learnings: [
        "Souvenir making",
        "Project planning",
        "Task delegation",
        "Timeline management",
      ],
      images: [
        "/chap3/event9/1.jpg",
        "/chap3/event9/2.jpg",
        "/chap3/event9/4.jpg",
        "/chap3/event9/3.jpg",
      ],
    },
  ];

  const thirdPartyEvents = [
    {
      name: "EducationUSA - Advisory Hours",
      date: "September 4, 2025",
      color: "amber",
      responsibilities: {
        pre: ["Seating arrangements", "Charged camera batteries"],
        during: ["Event photographs"],
        post: ["Wrapped up the event"],
      },
      description:
        "A bootcamp session organized by EducationUSA, focusing on college and career counseling. The event included workshops, guest speakers, and interactive sessions to guide students in their educational journeys.",
      learnings: ["College application strategies"],
      images: [
        "/chap3/event6/1.jpg",
        "/chap3/event6/2.jpg",
        "/chap3/event6/3.jpg",
        "/chap3/event6/4.jpg",
      ],
    },
    {
      name: "Awareness Session - Urban Flooding",
      date: "September 23, 2025",
      color: "amber",
      responsibilities: {
        pre: ["Wasn't able to attend 😌"],
        during: ["Wasn't able to attend 😌"],
        post: ["Wasn't able to attend 😌"],
      },
      description:
        "An awareness session on urban flooding, discussing its causes, impacts, and mitigation strategies. The event featured expert speakers and interactive discussions to educate attendees on the importance of sustainable urban planning.",
      learnings: ["Wasn't able to attend 😌"],
      images: [
        "/chap3/event7/1.jpg",
        "/chap3/event7/2.jpg",
        "/chap3/event7/3.jpg",
        "/chap3/event7/4.jpg",
      ],
    },
  ];

  const colorClasses = {
    purple: {
      primary: "purple-500",
      secondary: "purple-400",
      light: "purple-300",
      bg: "purple-500/20",
      gradient: "from-purple-600/20 to-pink-600/20",
      particles: "#8b5cf6",
    },
    emerald: {
      primary: "emerald-500",
      secondary: "emerald-400",
      light: "emerald-300",
      bg: "emerald-500/20",
      gradient: "from-emerald-600/20 to-teal-600/20",
      particles: "#10b981",
    },
    amber: {
      primary: "amber-500",
      secondary: "amber-400",
      light: "amber-300",
      bg: "amber-500/20",
      gradient: "from-amber-600/20 to-orange-600/20",
      particles: "#f59e0b",
    },
    yellow: {
      primary: "yellow-500",
      secondary: "yellow-400",
      light: "yellow-300",
      bg: "yellow-500/20",
      gradient: "from-yellow-600/20 to-amber-500/20",
      particles: "#eab308",
    },
  };

  const currentEvents =
    activeTab === "lincoln" ? lincolnEvents : thirdPartyEvents;
  const totalPages = currentEvents.length;

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentEvent = currentEvents[currentPage];
  const colors = colorClasses[currentEvent?.color];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-purple-950/20 to-black relative overflow-hidden pt-20 pb-10">
      {/* Background magical effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-pink-500/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent" />

        {/* Floating magical particles */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-purple-400"
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
              y: [0, -200, 0],
              x: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 8,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-8"
        >
          <motion.h1
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-400 bg-clip-text text-transparent mb-4 font-serif"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            style={{ backgroundSize: "200% 200%" }}
          >
            ✨ Chapter 3: Creative Expressions ✨
          </motion.h1>
          <motion.p
            className="text-purple-300 text-xl font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            September 2025 - Unleashing Creativity
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex justify-center mb-8"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-2 flex">
            <button
              onClick={() => {
                setActiveTab("lincoln");
                setCurrentPage(0);
              }}
              className={`px-8 py-4 rounded-xl font-sans font-bold transition-all duration-300 ${
                activeTab === "lincoln"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                  : "text-purple-300 hover:text-purple-200"
              }`}
            >
              🏛️ Lincoln Corner Events
            </button>
            <button
              onClick={() => {
                setActiveTab("thirdparty");
                setCurrentPage(0);
              }}
              className={`px-8 py-4 rounded-xl font-sans font-bold transition-all duration-300 ${
                activeTab === "thirdparty"
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                  : "text-purple-300 hover:text-purple-200"
              }`}
            >
              🌍 Third Party Events
            </button>
          </div>
        </motion.div>

        {/* Book Container */}
        <div className="flex items-center justify-center min-h-[600px]">
          <div className="relative w-full max-w-6xl">
            {/* Navigation Buttons */}
            <motion.button
              onClick={prevPage}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r from-${colors?.primary} to-${colors?.secondary} text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={totalPages <= 1}
            >
              <ChevronLeft size={24} />
            </motion.button>

            <motion.button
              onClick={nextPage}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-gradient-to-r from-${colors?.primary} to-${colors?.secondary} text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              disabled={totalPages <= 1}
            >
              <ChevronRight size={24} />
            </motion.button>

            {/* Book Pages */}
            <div className="relative perspective-1000">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeTab}-${currentPage}`}
                  initial={{ rotateY: -90, opacity: 0 }}
                  animate={{ rotateY: 0, opacity: 1 }}
                  exit={{ rotateY: 90, opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="transform-gpu"
                >
                  {/* Book Page */}
                  <div
                    className={`bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl shadow-2xl border-4 border-amber-200 relative overflow-hidden min-h-[600px] mx-8`}
                    style={{
                      background: `linear-gradient(135deg, #f5f5dc 0%, #e6ddd4 100%)`,
                      boxShadow: `
                        0 20px 40px rgba(0,0,0,0.4),
                        inset 0 0 30px rgba(139,69,19,0.15),
                        0 0 0 1px rgba(139,69,19,0.3)
                      `,
                    }}
                  >
                    {/* Page texture overlay */}
                    <div
                      className="absolute inset-0 opacity-20"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                      }}
                    />

                    {/* Page binding */}
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-amber-800/40 to-transparent" />
                    <div className="absolute left-2 top-0 bottom-0 w-px bg-amber-700/60" />
                    <div className="absolute left-4 top-0 bottom-0 w-px bg-amber-700/40" />

                    {/* Event Content */}
                    <div className="p-8 relative z-10">
                      {/* Event Header */}
                      <div className="text-center mb-8">
                        <motion.h2
                          className={`text-3xl md:text-4xl font-bold text-amber-900 mb-2 font-serif drop-shadow-lg`}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {currentEvent?.name}
                        </motion.h2>
                        <motion.p
                          className="text-amber-700 text-lg font-sans font-semibold"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                          {currentEvent?.date}
                        </motion.p>
                      </div>

                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Column */}
                        <motion.div
                          className="space-y-6"
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.5 }}
                        >
                          {/* Responsibilities */}
                          <div className="bg-amber-50/80 backdrop-blur-sm border-2 border-amber-300/50 rounded-xl p-6 shadow-lg">
                            <h3
                              className={`text-2xl font-bold text-${colors?.primary} mb-4 font-serif flex items-center`}
                            >
                              🎯 Responsibilities
                            </h3>
                            <div className="space-y-3">
                              {["pre", "during", "post"].map((phase) => (
                                <div
                                  key={phase}
                                  className="bg-amber-200/70 border border-amber-300/30 rounded-lg p-3"
                                >
                                  <h4
                                    className={`text-${colors?.secondary} font-bold mb-2 font-serif capitalize`}
                                  >
                                    {phase === "pre"
                                      ? "🔮 Pre-Event"
                                      : phase === "during"
                                      ? "⚡ During Event"
                                      : "📜 Post-Event"}
                                  </h4>
                                  <ul className="text-amber-800 space-y-1">
                                    {currentEvent?.responsibilities[phase].map(
                                      (item, i) => (
                                        <li
                                          key={i}
                                          className="flex items-start font-sans text-sm"
                                        >
                                          <span
                                            className={`text-${colors?.secondary} mr-2 mt-1`}
                                          >
                                            •
                                          </span>
                                          {item}
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Description */}
                          <div className="bg-amber-50/80 backdrop-blur-sm border-2 border-amber-300/50 rounded-xl p-6 shadow-lg">
                            <h3
                              className={`text-2xl font-bold text-${colors?.primary} mb-4 font-serif`}
                            >
                              📖 The Story Unfolds
                            </h3>
                            <p className="text-amber-800 leading-relaxed font-sans">
                              {currentEvent?.description}
                            </p>
                          </div>
                        </motion.div>

                        {/* Right Column */}
                        <motion.div
                          className="space-y-6"
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          {/* Learnings */}
                          <div className="bg-amber-50/80 backdrop-blur-sm border-2 border-amber-300/50 rounded-xl p-6 shadow-lg">
                            <h3
                              className={`text-2xl font-bold text-${colors?.primary} mb-4 font-serif`}
                            >
                              🧙‍♂️ Learnings
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                              {currentEvent?.learnings.map(
                                (learning, index) => (
                                  <div
                                    key={index}
                                    className={`bg-amber-200/70 border border-${colors?.secondary}/30 rounded-lg p-3 text-center hover:scale-105 transition-transform duration-300`}
                                  >
                                    <span className="text-amber-800 font-sans text-sm font-medium">
                                      {learning}
                                    </span>
                                  </div>
                                )
                              )}
                            </div>
                          </div>

                          {/* Images */}
                          <div className="bg-amber-50/80 backdrop-blur-sm border-2 border-amber-300/50 rounded-xl p-6 shadow-lg">
                            <h3
                              className={`text-2xl font-bold text-${colors?.primary} mb-4 font-serif`}
                            >
                              📸 Captured Memories
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                              {currentEvent?.images.map((image, index) => (
                                <div
                                  key={index}
                                  className="relative aspect-square rounded-lg overflow-hidden border-2 border-amber-300/50 cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md"
                                  onClick={() => setSelectedImage(image)}
                                >
                                  <Image
                                    src={image || "/placeholder.svg"}
                                    alt={`Event memory ${index + 1}`}
                                    fill
                                    className="object-cover"
                                  />
                                  <div className="absolute inset-0 bg-amber-600/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">
                                      View
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>

                      {/* Page Number */}
                      <div className="absolute bottom-4 right-8">
                        <span className="text-amber-600 font-serif text-sm">
                          Page {currentPage + 1} of {totalPages}
                        </span>
                      </div>
                    </div>

                    {/* Event-specific particles */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(10)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute rounded-full"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: Math.random() * 4 + 2,
                            height: Math.random() * 4 + 2,
                            background: colors?.particles,
                          }}
                          animate={{
                            opacity: [0, 0.3, 0],
                            scale: [0, 1, 0],
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 4 + Math.random() * 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 3,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Page Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentPage
                      ? `bg-${colors?.primary} shadow-lg`
                      : "bg-gray-400 hover:bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
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
              className={`absolute top-4 right-4 bg-${colors?.primary} text-white px-4 py-2 rounded-lg font-bold`}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
