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

const About = () => {
  return (
    <RoutePageTemplate title="ABOUT">
      <div className="mx-auto max-w-5xl px-6 py-14 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Yuvraj Kumar
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-(--text-muted)">
            Frontend Developer based in Patna, India
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2"
        >
          {cards.map((card) => (
            <motion.div
              key={card.title}
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 200, damping: 18 },
              }}
              className="rounded-2xl border border-white/10 bg-(--bg-light) p-5 flex flex-col gap-3"
            >
              <h3 className="text-sm font-semibold tracking-wide">
                {card.title}
              </h3>
              <p className="text-sm text-(--text-muted) leading-relaxed">
                {card.body}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </RoutePageTemplate>
  );
};

export default About;
