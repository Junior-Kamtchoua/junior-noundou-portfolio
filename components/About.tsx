"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="about-section">
      {/* Title */}
      <motion.h2
        className="about-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <div className="about-container">
        {/* LEFT SIDE - TEXT */}

        {/* RIGHT SIDE - 3D ROTATING IMAGE */}
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="image-3d-container">
            <img src="/profile.jpg" alt="3D profile" className="image-3d" />
          </div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <p>
            Full-Stack developer with{" "}
            <span className="highlight">3+ years of experience</span> building
            SaaS applications. Strong expertise in authentication systems,
            role-based access control, scalable backend architecture, and AWS
            cloud deployment.
          </p>

          <p>
            I design{" "}
            <span className="highlight-secondary">
              production-ready applications
            </span>{" "}
            with performance, security, and maintainability in mind. Passionate
            about clean architecture, system design, and solving real-world
            business problems.
          </p>

          <p>
            I constantly explore{" "}
            <span className="highlight-blue">new technologies</span> and best
            practices to deliver high-quality, scalable, and efficient SaaS
            solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
