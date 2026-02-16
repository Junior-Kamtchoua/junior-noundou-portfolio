"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const titles = ["Full-Stack Engineer", "SaaS Architect", "Frontend Developer"];

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayedText, setDisplayedText] = useState("");

  // Typewriter effect
  useEffect(() => {
    let i = 0;
    let timeout: NodeJS.Timeout;

    const type = () => {
      const fullText = titles[currentTitle];
      setDisplayedText(fullText.slice(0, i + 1));
      i++;
      if (i < fullText.length) {
        timeout = setTimeout(type, 100);
      } else {
        // Pause then next title
        setTimeout(() => {
          setDisplayedText("");
          setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 2000);
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [currentTitle]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 text-white px-6 md:px-20"
    >
      <div className="flex flex-col md:flex-row items-center gap-12 w-full">
        {/* LEFT */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name gradient */}
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gradient bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500">
            Junior Noundou
          </h1>

          {/* Dynamic typewriter */}
          <h2 className="text-xl md:text-2xl text-blue-300 font-medium">
            <span className="border-r-2 border-blue-300 pr-1">
              {displayedText}
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-300 max-w-xl text-lg">
            Building scalable web products with{" "}
            <span className="font-semibold text-white">
              NextJs & PostgreSQL, React & Node.js, AWS & DynamoDB
            </span>
            . Specialized in authentication, RBAC, SaaS architecture and cloud
            deployment.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="bg-blue-600 px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="bg-gray-200 text-black px-6 py-3 rounded-lg shadow hover:bg-gray-300 hover:scale-105 transition-transform duration-300"
            >
              Download Resume
            </a>

            <a
              href="#contact"
              className="bg-red-500 px-6 py-3 rounded-lg shadow hover:bg-red-600 hover:scale-105 transition-transform duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT - VIDEO */}
        <motion.div
          className="flex-1 hidden md:block rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <video
            src="/videos/hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
