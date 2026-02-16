"use client";

import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "Smart Expense Tracker MVP",
      description: "track analyze and manage personal and business expenses",
      live: "https://saas-smart-expenses-tracker.vercel.app/",
      github: "https://github.com/Junior-Kamtchoua/Saas-Smart-Expenses-Tracker",
    },
    {
      title: "Subscription Billing Platform Saas",
      description:
        "simplifies managing plans payments and recurring invoices for businesses of any size",
      live: "https://saas-subscription-billing-platform.vercel.app/",
      github:
        "https://github.com/Junior-Kamtchoua/saas-subscription-billing-platform",
    },
    {
      title: "Workflow File Management B2B",
      description:
        "organize access and share your documents effortlessly in a single workflow",
      live: "https://webflow-frontend.vercel.app/",
      github: "https://github.com/Junior-Kamtchoua/Webflow-File-Management",
    },
    {
      title: "Health Appointment Booking System",
      description:
        "allow patients to easily schedule manage and receive reminders for medical visits with their preferred doctor",
      live: "https://mvp-health-appointment-system.vercel.app/",
      github:
        "https://github.com/Junior-Kamtchoua/MVP-health-appointment-system",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-slate-50">
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center text-slate-900"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-4 text-indigo-600">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-6">{project.description}</p>

            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 hover:scale-105 transition-transform duration-300"
              >
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                className="bg-gray-200 px-4 py-2 rounded-lg shadow hover:bg-gray-300 hover:scale-105 transition-transform duration-300"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
