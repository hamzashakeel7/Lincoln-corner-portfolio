"use client";

import { useEffect, useRef } from "react";

export function useSimpleScroll(setCurrentSection) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const containerHeight = container.clientHeight;

      // Simple calculation to determine current section
      const sectionIndex = Math.round(scrollTop / containerHeight);
      setCurrentSection(Math.max(0, Math.min(sectionIndex, 2))); // Clamp between 0 and 2
    };

    // Use passive listener for better performance
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [setCurrentSection]);

  return { containerRef };
}
