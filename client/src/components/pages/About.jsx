import React from "react";
import { motion, easeOut } from "motion/react";
import RoutePageTemplate from "./RoutePageTemplate";

const cards = [
  {
    title: "Who I Am",
    body: "Frontend Developer from Patna, India. I enjoy turning ideas into polished, production-ready web apps that feel good to use.",
  },
  {
    title: "What Drives Me",
    body: "I care about clean code, smooth interactions, and shipping things that actually work. Every project is a chance to learn something new.",
  },
  {
    title: "Background",
    body: "B.Sc. in Information Technology from Anugrah Narayan College, Patna. Self-driven beyond the classroom — most of what I know came from building real projects.",
  },
  {
    title: "Right Now",
    body: "Expanding into TypeScript and Next.js while deepening my Node.js and Express skills. Open to collaboration, freelance, or a full-time role.",
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
    y: 30,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: easeOut,
    },
  },
};

const About = () => {
  return (
    <RoutePageTemplate title="ABOUT">
      <div className="mx-auto max-w-6xl px-6 py-16 ">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mb-20 text-center "
        >
          <h2 className="text-4xl font-bold lg:text-5xl">Yuvraj Kumar</h2>

          <p className="mx-auto mt-5 max-w-xl text-sm text-(--text-muted)">
            Frontend Developer based in Patna, India
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1  gap-6 sm:grid-cols-2"
        >
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: {
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                },
              }}
              className="group flex flex-col gap-5 rounded-2xl border border-black/10 bg-(--bg-light) p-6 shadow-(--shadow-s) transition-all duration-100 hover:shadow-(--shadow-l)"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold tracking-tight transition-opacity duration-300 group-hover:opacity-80">
                  {card.title}
                </h3>

                <span className="rounded-full bg-(--bg) px-3 py-1 text-xs font-medium text-(--text-muted)">
                  0{index + 1}
                </span>
              </div>

              <p className="text-base leading-8 text-(--text-muted)">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </RoutePageTemplate>
  );
};

export default About;
