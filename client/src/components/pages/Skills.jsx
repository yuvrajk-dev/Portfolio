import React from "react";
import { easeOut, motion } from "motion/react";
import RoutePageTemplate from "./RoutePageTemplate";

const data = [
  {
    title: "Frontend",
    items: ["JavaScript (ES6+)", "React", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "UI & Styling",
    items: ["Material UI (MUI)", "Basic UI/UX", "Layouts & Spacing"],
  },
  {
    title: "Backend & Data",
    items: ["Node.js (Basics)", "Supabase", "REST APIs"],
  },
  {
    title: "Tools",
    items: ["Git & GitHub", "VS Code", "Canva"],
  },
];

const parentVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 1,
      staggerChildren: 0.5,
    },
  },
};

const borderVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 1,
      ease: easeOut,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    filter: "blur(6px)",
  },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const Skills = () => {
  return (
    <RoutePageTemplate title={"SKILLS"}>
      <motion.div className="px-10 lg:px-20">
        <motion.div
          className="flex flex-wrap justify-center items-stretch gap-6 py-10"
          variants={parentVariants}
          initial="hidden"
          animate="show"
        >
          {data.map((card, i) => (
            <motion.div
              variants={borderVariants}
              key={i}
              className="p-5 w-64 flex rounded-2xl overflow-hidden "
            >
              <motion.div
                variants={cardVariants}
                className=" w-full h-60 shadow-(--shadow-s) flex flex-col bg-(--bg-light) p-5 rounded-2xl hover:scale-105 transition duration-300"
              >
                <h3 className=" text-lg font-semibold mb-3">{card.title}</h3>
                <ul className=" space-y-1 text-(--text-muted)">
                  {card.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </RoutePageTemplate>
  );
};

export default Skills;
