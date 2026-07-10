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
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: easeOut },
  },
};

const Skills = () => {
  return (
    <RoutePageTemplate title="SKILLS">
      <div className="mx-auto max-w-5xl px-6 py-14 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Tech Stack
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-(--text-muted)">
            Technologies and tools I use to build modern web apps.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {data.map((section) => (
            <motion.div
              key={section.title}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 200, damping: 18 },
              }}
              className="rounded-2xl border border-white/10 bg-(--bg-light) p-5 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-semibold tracking-wide">
                  {section.title}
                </h3>
                <span className="text-sm text-(--text-muted)">
                  {section.items.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {section.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 px-3 py-1 text-sm text-(--text-muted)"
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
