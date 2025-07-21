"use client";

import { useEffect } from "react";

export default function WelcomeSound({ shouldPlay }) {
  useEffect(() => {
    if (shouldPlay) {
      // Create audio context for better browser compatibility
      const playWelcomeSound = () => {
        try {
          // Create a simple magical sound using Web Audio API
          const audioContext = new (window.AudioContext ||
            window.webkitAudioContext)();

          // Create a magical chime sound
          const createMagicalChime = () => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            // Magical frequency progression
            oscillator.frequency.setValueAtTime(
              523.25,
              audioContext.currentTime
            ); // C5
            oscillator.frequency.setValueAtTime(
              659.25,
              audioContext.currentTime + 0.2
            ); // E5
            oscillator.frequency.setValueAtTime(
              783.99,
              audioContext.currentTime + 0.4
            ); // G5
            oscillator.frequency.setValueAtTime(
              1046.5,
              audioContext.currentTime + 0.6
            ); // C6

            oscillator.type = "sine";

            // Envelope
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(
              0.3,
              audioContext.currentTime + 0.1
            );
            gainNode.gain.exponentialRampToValueAtTime(
              0.01,
              audioContext.currentTime + 1.5
            );

            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 1.5);
          };

          // Play the magical chime
          createMagicalChime();

          // Add a second layer for richness
          setTimeout(() => {
            const oscillator2 = audioContext.createOscillator();
            const gainNode2 = audioContext.createGain();

            oscillator2.connect(gainNode2);
            gainNode2.connect(audioContext.destination);

            oscillator2.frequency.setValueAtTime(
              261.63,
              audioContext.currentTime
            ); // C4
            oscillator2.type = "triangle";

            gainNode2.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode2.gain.linearRampToValueAtTime(
              0.2,
              audioContext.currentTime + 0.1
            );
            gainNode2.gain.exponentialRampToValueAtTime(
              0.01,
              audioContext.currentTime + 1
            );

            oscillator2.start(audioContext.currentTime);
            oscillator2.stop(audioContext.currentTime + 1);
          }, 200);
        } catch (error) {
          console.log("Audio not supported or blocked by browser");
        }
      };

      // Small delay to ensure the main site is visible
      const timer = setTimeout(playWelcomeSound, 500);

      return () => clearTimeout(timer);
    }
  }, [shouldPlay]);

  return null;
}
