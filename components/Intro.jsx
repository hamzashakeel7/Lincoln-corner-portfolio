"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function IntroSequence({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { text: "Welcome", delay: 0, duration: 800 },
    { text: "to", delay: 1000, duration: 600 },
    { text: "Hamza Durrani's", delay: 1800, duration: 800, special: "orange" },
    { text: "Lincoln Corner", delay: 2800, duration: 800, special: "gradient" },
    { text: "PACC", delay: 3800, duration: 600, special: "gradient" },
    { text: "E-Portfolio", delay: 4600, duration: 800, special: "orange" },
    { text: "Chapter 1", delay: 5600, duration: 800, special: "chapter" },
  ];

  useEffect(() => {
    const timers = steps.map((step, index) => {
      return setTimeout(() => {
        setCurrentStep(index);
      }, step.delay);
    });

    const finalTimer = setTimeout(() => {
      onComplete();
    }, 6800);

    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(finalTimer);
    };
  }, [onComplete]);

  const currentStepData = steps[currentStep];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="text-center w-full">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {currentStepData?.special === "orange" && (
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500 bg-clip-text text-transparent font-serif">
              {currentStepData.text}
            </h1>
          )}
          {currentStepData?.special === "gradient" && (
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold bg-gradient-to-r from-blue-600 via-blue-400 to-white bg-clip-text text-transparent font-serif">
              {currentStepData.text}
            </h1>
          )}
          {currentStepData?.special === "chapter" && (
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 bg-clip-text text-transparent font-serif">
              {currentStepData.text}
            </h1>
          )}
          {!currentStepData?.special && (
            <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-bold text-white font-serif">
              {currentStepData?.text}
            </h1>
          )}
        </motion.div>

        {/* Magical sparkles around text */}
        {currentStep >= 0 && (
          <>
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-orange-400 rounded-full"
                style={{
                  left: `${20 + Math.random() * 60}%`,
                  top: `${20 + Math.random() * 60}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: Math.random() * 1.5,
                }}
              />
            ))}
          </>
        )}
      </div>
    </motion.div>
  );
}
