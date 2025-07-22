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
                eventName="Community Outreach Program"
                eventDate="July 15, 2025"
                responsibilities={{
                  pre: [
                    "Prepared promotional materials",
                    "Coordinated with team members",
                    "Set up registration system",
                  ],
                  during: [
                    "Captured event photographs",
                    "Assisted participants",
                    "Managed registration desk",
                  ],
                  post: [
                    "Compiled event report",
                    "Organized photos",
                    "Created feedback summary",
                  ],
                }}
                description="A community outreach program aimed at connecting local residents with cultural activities and educational resources. The event brought together diverse community members to celebrate Pakistani-American heritage."
                learnings={[
                  "Event management skills",
                  "Cross-cultural communication",
                  "Photography techniques",
                  "Team coordination",
                ]}
                images={[
                  "/placeholder.svg?height=300&width=400",
                  "/placeholder.svg?height=300&width=400",
                  "/placeholder.svg?height=300&width=400",
                  "/placeholder.svg?height=300&width=400",
                ]}
                sectionColor="blue"
              />
            </section>

            <section id="event2" className="min-h-screen w-full">
              <EventSection
                eventName="Cultural Heritage Workshop"
                eventDate="July 28, 2025"
                responsibilities={{
                  pre: [
                    "Researched cultural topics",
                    "Prepared presentation materials",
                    "Arranged venue setup",
                  ],
                  during: [
                    "Facilitated workshop sessions",
                    "Documented activities",
                    "Engaged with participants",
                  ],
                  post: [
                    "Created workshop summary",
                    "Processed feedback forms",
                    "Planned follow-up activities",
                  ],
                }}
                description="An interactive workshop focused on Pakistani cultural heritage, featuring traditional arts, crafts, and storytelling sessions. Participants learned about historical traditions and contemporary cultural practices."
                learnings={[
                  "Workshop facilitation",
                  "Cultural research methods",
                  "Public speaking",
                  "Documentation skills",
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
          </div>
        </>
      )}
    </div>
  );
}
