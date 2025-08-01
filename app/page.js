"use client";

import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "@/components/LoadingScreen";
import IntroSequence from "@/components/Intro";
import Navbar from "@/components/Navbar";
import EnhancedOrientationSection from "@/components/chap1/OrientationSection";
import EventSection from "@/components/chap1/EventSection";
import { useSimpleScroll } from "@/hooks/use-hook-scroll";
import MovingStars from "@/components/MovingStars";
import WelcomeSound from "@/components/WelcomeSound";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [showIntro, setShowIntro] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [playWelcomeSound, setPlayWelcomeSound] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const { containerRef } = useSimpleScroll(setCurrentSection);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShowLanding(true);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const handleViewWork = () => {
    setShowLanding(false);
    setShowIntro(true);
  };

  const handleIntroComplete = () => {
    setShowIntro(false);
    setShowMain(true);
    setPlayWelcomeSound(true);
  };

  const sections = [
    {
      id: "orientation",
      title: "The Journey Begins",
      subtitle: "Orientation - Where Magic Starts",
      color: "orange",
    },
    {
      id: "event1",
      title: "Building Bridges",
      subtitle: "Community Outreach Event",
      color: "blue",
    },
    {
      id: "event2",
      title: "Creative Expressions",
      subtitle: "Cultural Workshop",
      color: "emerald",
    },
  ];

  return (
    <div className="relative bg-black min-h-screen">
      <MovingStars />
      <WelcomeSound shouldPlay={playWelcomeSound} />

      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
        {showLanding && (
          <LandingPage key="landing" onViewWork={handleViewWork} />
        )}
        {showIntro && (
          <IntroSequence key="intro" onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>

      {showMain && (
        <>
          <Navbar currentSection={currentSection} sections={sections} />
          <div
            ref={containerRef}
            className="h-screen overflow-y-auto scrollbar-hide"
            style={{ scrollBehavior: "smooth" }}
          >
            <section id="orientation" className="min-h-screen w-full">
              <EnhancedOrientationSection />
            </section>

            <section id="event1" className="min-h-screen w-full">
              <EventSection
                eventName="CCC Session - EducationUSA"
                eventDate="July 1-3, 2025"
                responsibilities={{
                  pre: [
                    "Printed event attendance sheets",
                    "Connected multi media, arranged seating",
                  ],
                  during: [
                    "Captured event photographs",
                    "Captured event videos",
                  ],
                  post: ["Compiled event report", "Organized photos"],
                }}
                description="A bootcamp session organized by EducationUSA, focusing on college and career counseling. The event included workshops, guest speakers, and interactive sessions to guide students in their educational journeys."
                learnings={[
                  "Event management skills",
                  "Cross-cultural communication",
                  "Photography techniques",
                ]}
                images={[
                  "/chap1/event2/1.jpg",
                  "/chap1/event2/2.jpg",
                  "/chap1/event2/3.jpg",
                  "/chap1/event2/4.jpg",
                ]}
                sectionColor="blue"
              />
            </section>

            {/* event sections start */}
            <section id="event2" className="min-h-screen w-full">
              <EventSection
                eventName="How to make a Business Plan"
                eventDate="July 9, 2025"
                responsibilities={{
                  pre: [
                    "Whatsaap Group for event",
                    "Attendance management",
                    "Multimedia setup for the workshop",
                  ],
                  during: [
                    "Captured event photographs",
                    "Captured event videos",
                  ],
                  post: [
                    "Created workshop summary",
                    "Sovigners to the participants and speaker",
                  ],
                }}
                description="A workshop focused on teaching participants how to create effective business plans. The session included expert speakers, interactive discussions, and practical exercises to help attendees develop their own business strategies."
                learnings={[
                  "Workshop facilitation",
                  "Business planning skills",
                  "Public speaking",
                ]}
                images={[
                  "/placeholder.svg?height=300&width=400",
                  "/placeholder.svg?height=300&width=400",
                  "/placeholder.svg?height=300&width=400",
                  "/placeholder.svg?height=300&width=400",
                ]}
                sectionColor="emerald"
              />
            </section>

            <section id="event3" className="min-h-screen w-full">
              <EventSection
                eventName="– Build Your Digital Identity as a journalist "
                eventDate="July 11, 2025"
                responsibilities={{
                  pre: [
                    "Attendance management",
                    "Multimedia setup for the workshop",
                  ],
                  during: [
                    "Captured event photographs",
                    "Captured event videos",
                  ],
                  post: ["Sovigners to the participants and speaker"],
                }}
                description="An interactive workshop designed to help journalists build and enhance their digital presence. The session covered topics such as social media strategies, personal branding, and online storytelling techniques."
                learnings={[
                  "Workshop facilitation",
                  "Digital identity skills",
                  "Networking with professionals",
                ]}
                images={[
                  "/chap1/event3/1.jpg",
                  "/chap1/event3/2.jpg",
                  "/chap1/event3/3.jpg",
                  "/chap1/event3/4.jpg",
                ]}
                sectionColor="purple"
              />
            </section>

            <section id="event4" className="min-h-screen w-full">
              <EventSection
                eventName="Mastering E-Commerce"
                eventDate="July 18, 2025"
                responsibilities={{
                  pre: [
                    "Attendance management",
                    "Multimedia setup for the workshop",
                  ],
                  during: [
                    "Captured event photographs",
                    "Captured event videos",
                  ],
                  post: ["Sovigners to the participants and speaker"],
                }}
                description="A workshop focused on mastering e-commerce strategies and platforms. Participants learned about online business models, digital marketing, and effective e-commerce management techniques."
                learnings={[
                  "Workshop facilitation",
                  "Learned e-commerce strategies",
                  "Ecommerce platform management",
                  "Networking with professionals",
                ]}
                images={[
                  "/chap1/event4/1.jpg",
                  "/chap1/event4/2.jpg",
                  "/chap1/event4/3.jpg",
                  "/chap1/event4/4.jpg",
                ]}
                sectionColor="rose"
              />
            </section>

            <section id="event5" className="min-h-screen w-full">
              <EventSection
                eventName="Summer Maker Camp"
                eventDate="July 21-25, 2025"
                responsibilities={{
                  pre: [
                    "Attendance management",
                    "Multimedia setup for the workshop",
                    "Created WhatsApp group for participants",
                    "Cold Calling participants to confirm attendance",
                    "Made souvenirs for participants and speakers",
                    "Seating arrangements",
                  ],
                  during: [
                    "Captured event photographs",
                    "Captured event videos",
                    "Guided participants through activities",
                    "Made sure all participants were engaged",
                  ],
                  post: [
                    "Souvenirs to the participants and speaker",
                    "Organized photos",
                    "reel edit ideas",
                  ],
                }}
                description="A week-long maker camp designed to inspire creativity and innovation among participants. The camp included hands-on LinkedIn workshops, collaborative projects, and guest speakers from various fields on improving social media presence."
                learnings={[
                  "LinkedIn profile optimization",
                  "Social media presence",
                  "Difference between Cv and Resume",
                  "Networking",
                  "Team collaboration",
                  "Event management",
                ]}
                images={[
                  "/chap1/event5/1.jpg",
                  "/chap1/event5/2.jpg",
                  "/chap1/event5/3.jpg",
                  "/chap1/event5/4.jpg",
                ]}
                sectionColor="indigo"
              />
            </section>

            <section id="event6" className="min-h-screen w-full">
              <EventSection
                eventName="Youth Council Meeting"
                eventDate="July 23, 2025"
                responsibilities={{
                  pre: ["Attendance management", "Multimedia setup"],
                  during: [
                    "Captured meeting photographs",
                    "Captured meeting videos",
                  ],
                  post: [
                    "Networking with meeting attendees",
                    "Organized photos",
                  ],
                }}
                description="An American Consulate meeting aimed at discussing youth-related issues and initiatives. The meeting included presentations, group discussions, and networking opportunities."
                learnings={["Learned communication with diplomats"]}
                images={[
                  "/chap1/event6/1.jpg",
                  "/chap1/event6/2.jpg",
                  "/chap1/event6/3.jpg",
                  "/chap1/event6/4.jpg",
                ]}
                sectionColor="lime"
              />
            </section>

            <section id="event7" className="min-h-screen w-full">
              <EventSection
                eventName="Digital Marketing Workshop"
                eventDate="July 30, 2025"
                responsibilities={{
                  pre: ["Sadly absent 😔"],
                  during: [
                    "Focs Captured meeting photographs",
                    "Focs Captured meeting videos",
                    "Focs Distributed souvenirs to participants",
                  ],
                  post: ["sadly absent 😔"],
                }}
                description="A workshop focused on digital marketing strategies and techniques. Participants learned about social media marketing, content creation, and online advertising."
                learnings={["Learned to make useful souvenirs"]}
                images={[
                  "/chap1/event7/1.jpg",
                  "/chap1/event7/2.jpg",
                  "/chap1/event7/3.jpg",
                  "/chap1/event7/4.jpg",
                ]}
                sectionColor="neonPink"
              />
            </section>

            <section id="event8" className="min-h-screen w-full">
              <EventSection
                eventName="Art That Inspires"
                eventDate="July 29, 2025"
                responsibilities={{
                  pre: [
                    "Attendance management",
                    "Multimedia setup",
                    "Created WhatsApp group for participants",
                  ],
                  during: ["Captured photographs", "Captured videos"],
                  post: ["Organized photos", "cleaned painting mess"],
                }}
                description="An art exhibition showcasing local students and their inspiring works. The event included live painting sessions, artist talks, and interactive art installations."
                learnings={["Learned to manage art events", "learned painting"]}
                images={[
                  "/chap1/event8/1.jpg",
                  "/chap1/event8/2.jpg",
                  "/chap1/event8/3.jpg",
                  "/chap1/event8/4.jpg",
                ]}
                sectionColor="hotPurple"
              />
            </section>

            <section id="event9" className="min-h-screen w-full">
              <EventSection
                eventName="Art That Inspires"
                eventDate="July 29, 2025"
                responsibilities={{
                  pre: [
                    "Attendance management",
                    "Multimedia setup",
                    "Created WhatsApp group for participants",
                  ],
                  during: ["Captured photographs", "Captured videos"],
                  post: ["Organized photos", "cleaned painting mess"],
                }}
                description="An art exhibition showcasing local students and their inspiring works. The event included live painting sessions, artist talks, and interactive art installations."
                learnings={["Learned to manage art events", "learned painting"]}
                images={[
                  "/chap1/event8/1.jpg",
                  "/chap1/event8/2.jpg",
                  "/chap1/event8/3.jpg",
                  "/chap1/event8/4.jpg",
                ]}
                sectionColor="hotPurple"
              />
            </section>

            <section id="event10" className="min-h-screen w-full">
              <EventSection
                eventName="Benjamin Franklin"
                eventDate="July 31, 2025"
                responsibilities={{
                  pre: [
                    "Attendance management",
                    "Multimedia setup",
                    "mobiles setup for kahoot",
                  ],
                  during: [
                    "Captured photographs",
                    "Captured videos",
                    "assisted participants in kahoot",
                  ],
                  post: ["Organized photos", "phones setup"],
                }}
                description="A special event celebrating the legacy of Benjamin Franklin, featuring interactive sessions, discussions, and activities related to his contributions to science and society."
                learnings={["Learned about benjamin franklin"]}
                images={[
                  "/chap1/event9/1.jpg",
                  "/chap1/event9/2.jpg",
                  "/chap1/event9/3.jpg",
                  "/chap1/event9/4.jpg",
                ]}
                sectionColor="aquaVelvet"
              />
            </section>
          </div>
        </>
      )}
    </div>
  );
}
