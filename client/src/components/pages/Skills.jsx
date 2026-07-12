import React from "react";
import { motion, easeOut } from "motion/react";
import RoutePageTemplate from "./RoutePageTemplate";

const data = [
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "Frontend",
    items: [
      "React",
      "Redux Toolkit",
      "React Router",
      "Tailwind CSS",
      "Motion.dev",
    ],
  },
  {
    title: "Backend & Database",
    items: ["Node.js", "Express.js", "Supabase"],
  },
  {
    title: "APIs & AI",
    items: ["REST APIs", "TMDB API", "OpenRouter API"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vite", "VS Code", "Postman", "Vercel"],
  },
  {
    title: "Core Concepts",
    items: [
      "Authentication",
      "State Management",
      "CRUD Operations",
      "API Integration",
      "Responsive Design",
      "Component Architecture",
    ],
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 1.4,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: easeOut,
    },
  },
};

const Skills = () => {
  return (
    <RoutePageTemplate title="SKILLS">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold lg:text-5xl">Tech Stack</h2>

          <p className="mx-auto mt-5 max-w-xl text-sm text-(--text-muted)">
            Technologies and tools I use to build modern web applications.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.map((section) => (
            <motion.div
              key={section.title}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: {
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                },
              }}
              className="group flex flex-col gap-5 rounded-4xl border border-black/10 bg-(--bg-light) p-6 shadow-(--shadow-l) transition-shadow duration-100 hover:shadow-(--shadow-l)"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold tracking-tight transition-opacity duration-300 group-hover:opacity-80">
                  {section.title}
                </h3>

                <span className="rounded-full bg-(--bg) px-3 py-1 text-xs font-medium text-(--text-muted)">
                  {section.items.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-(--bg) px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:-rotate-3 hover:scale-105 hover:bg-(--text) hover:text-(--bg-light) hover:shadow-(--shadow-m)"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </RoutePageTemplate>
  );
};

export default Skills;
