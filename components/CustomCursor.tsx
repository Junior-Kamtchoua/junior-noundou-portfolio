"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorColor, setCursorColor] = useState("#6366f1"); // default indigo

  // Track mouse
  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  // Hover detection
  useEffect(() => {
    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;

      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a")
      ) {
        setIsHovering(true);
      }

      // Detect section background color
      const section = target.closest("section");
      if (section) {
        const bg = window.getComputedStyle(section).backgroundColor;

        if (bg.includes("15, 23, 42")) {
          // slate-900
          setCursorColor("#60a5fa"); // blue
        } else if (bg.includes("255")) {
          setCursorColor("#6366f1"); // indigo
        } else {
          setCursorColor("#a855f7"); // purple fallback
        }
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <>
      {/* Outer */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 14,
        }}
        style={{
          width: 40,
          height: 40,
          border: `2px solid ${cursorColor}`,
        }}
      />

      {/* Inner */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isHovering ? 0.5 : 1,
        }}
        transition={{
          type: "tween",
          ease: "easeOut",
          duration: 0.12,
        }}
        style={{
          width: 8,
          height: 8,
          backgroundColor: cursorColor,
        }}
      />
    </>
  );
}
