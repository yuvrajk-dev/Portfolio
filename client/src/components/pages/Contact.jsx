import React from "react";
import { easeOut, motion } from "motion/react";
import RoutePageTemplate from "./RoutePageTemplate";

const data = [
  {
    title: "Email",
    value: "yuvrajk.dev@gmail.com",
    link: "mailto:yuvrajk.dev@gmail.com",
  },
  {
    title: "GitHub",
    value: "yuvrajk-dev",
    link: "https://github.com/yuvrajk-dev",
  },
  {
    title: "LinkedIn",
    value: "yuvrajkumar01",
    link: "https://www.linkedin.com/in/yuvrajkumar01/",
  },
  {
    title: "Twitter",
    value: "@yuvvi_k",
    link: "https://x.com/yuvvi_k",
  },
];

const parentVariants = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 1.2,
      staggerChildren: 0.3,
    },
  },
};

const borderVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.6,
      ease: easeOut,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut, delay: 0.8 },
  },
};

const subtitleVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, ease: easeOut, delay: 1.1 },
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

const Contact = () => {
  return (
    <RoutePageTemplate title={"CONTACT"}>
      <motion.div className="px-10 lg:px-20" initial="hidden" animate="show">
        <div className="overflow-hidden text-center max-w-2xl mx-auto mt-10">
          <motion.h2
            variants={titleVariants}
            className="text-2xl font-semibold mb-3"
          >
            Let's build something meaningful
          </motion.h2>

          <div className="overflow-hidden">
            <motion.p
              variants={subtitleVariant}
              className="text-(--text-muted)"
            >
              Open to collaboration, freelance work, or full-time opportunities.
              Feel free to reach out.
            </motion.p>
          </div>
        </div>

        <motion.div
          className="flex flex-wrap justify-center items-stretch gap-6 py-12"
          variants={parentVariants}
        >
          {data.map((item, i) => (
            <motion.div
              variants={borderVariants}
              key={i}
              className="p-5 w-64 flex overflow-hidden rounded-2xl"
            >
              <motion.a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                className="w-full h-full flex flex-col justify-between bg-(--bg-light) p-5 rounded-2xl shadow-(--shadow-s) hover:scale-105 hover:-translate-y-1 transition duration-300"
              >
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>

                <p className="text-(--text-muted) wrap-break-word">
                  {item.value}
                </p>
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </RoutePageTemplate>
  );
};

export default Contact;
