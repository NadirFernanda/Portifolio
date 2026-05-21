"use client";

import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[], offset = 100) {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop - offset <= scrollY) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
}
