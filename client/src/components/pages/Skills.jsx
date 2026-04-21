import React from "react";
import { easeOut, motion } from "motion/react";
import RoutePageTemplate from "./RoutePageTemplate";

const borderVariants = {
  hidden: { opacity: 0 },
  show: {
    // x: 0,
    opacity: 1,
    transition: {
      delay: 1,
      duration: 1,
      ease: easeOut,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: "-100%" },
  show: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.6,
      duration: 1,
      ease: easeOut,
    },
  },
};

const Skills = () => {
  return (
    <RoutePageTemplate title={"SKILLS"}>
      <motion.div className="px-10 lg:px-20" variants={borderVariants}>
        <motion.div
          className="flex flex-wrap justify-center items-stretch gap-6 py-10"
          initial="hidden"
          animate="show"
        >
          {/* CARD TEMPLATE */}
          {[
            {
              title: "Frontend",
              items: [
                "JavaScript (ES6+)",
                "React",
                "HTML5",
                "CSS3",
                "Responsive Design",
              ],
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
          ].map((card, i) => (
            <div
              key={i}
              className="w-64 flex rounded-2xl  shadow-(--shadow-s) overflow-hidden"
            >
              <motion.div
                variants={cardVariants}
                className="w-full h-full  flex flex-col  bg-(--bg-light) p-5 rounded-2xl  shadow-(--shadow-s) hover:scale-105 transition duration-300"
              >
                <h3 className="text-lg  font-semibold mb-3">{card.title}</h3>
                <ul className="space-y-1  text-(--text-muted)">
                  {card.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </RoutePageTemplate>
  );
};

export default Skills;
