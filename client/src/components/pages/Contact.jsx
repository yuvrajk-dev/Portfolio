import React from "react";
import { motion, easeOut } from "motion/react";
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
    value: "@YuvvrajKumar",
    link: "https://x.com/YuvvrajKumar",
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

const Contact = () => {
  return (
    <RoutePageTemplate title="CONTACT">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold lg:text-5xl">Let's Connect</h2>

          <p className="mx-auto mt-5 max-w-xl text-sm text-(--text-muted)">
            Open to collaboration, freelance work, or full-time opportunities.
            Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {data.map((item) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{
                y: -6,
                transition: {
                  type: "spring",
                  stiffness: 220,
                  damping: 18,
                },
              }}
              className="group flex flex-col gap-5 rounded-4xl border border-black/10 bg-(--bg-light) p-6 shadow-(--shadow-s) transition-all duration-100 hover:shadow-(--shadow-l)"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold tracking-tight transition-opacity duration-300 group-hover:opacity-80">
                  {item.title}
                </h3>

                <span className="rounded-full bg-(--bg) px-3 py-1 text-xs font-medium text-(--text-muted)">
                  ↗
                </span>
              </div>

              <p className="break-all rounded-full border border-black/10 bg-(--bg) px-4 py-2 text-sm font-medium text-(--text-muted) transition-all duration-300 group-hover:bg-(--text) group-hover:text-(--bg-light)">
                {item.value}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </RoutePageTemplate>
  );
};

export default Contact;
