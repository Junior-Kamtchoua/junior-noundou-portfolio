"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Smart Expense Tracker MVP",
      description: "track analyze and manage personal and business expenses",
      live: "https://saas-smart-expenses-tracker.vercel.app/",
      github: "https://github.com/Junior-Kamtchoua/Saas-Smart-Expenses-Tracker",
      video: "/videos/expense.mp4",
    },
    {
      title: "Subscription Billing Platform Saas",
      description:
        "simplifies managing plans payments and recurring invoices for businesses of any size",
      live: "https://saas-subscription-billing-platform.vercel.app/",
      github:
        "https://github.com/Junior-Kamtchoua/saas-subscription-billing-platform",
      video: "/videos/subscription.mp4",
    },
    {
      title: "Workflow File Management B2B",
      description:
        "organize access and share your documents effortlessly in a single workflow",
      live: "https://webflow-frontend.vercel.app/",
      github: "https://github.com/Junior-Kamtchoua/Webflow-File-Management",
      video: "/videos/workflow.mp4",
    },
    {
      title: "Health Appointment Booking System",
      description:
        "allow patients to easily schedule manage and receive reminders for medical visits with their preferred doctor",
      live: "https://mvp-health-appointment-system.vercel.app/",
      github:
        "https://github.com/Junior-Kamtchoua/MVP-health-appointment-system",
      video: "/videos/health.mp4",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <motion.h2
        className="projects-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            {/* Background Video */}
            <video
              className="project-video"
              src={project.video}
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Dark Overlay */}
            <div className="project-overlay"></div>

            {/* Content */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-buttons">
                <a href={project.live} target="_blank">
                  Live Demo
                </a>

                <a href={project.github} target="_blank" className="github-btn">
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
