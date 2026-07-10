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
    value: "@yuvvi_k",
    link: "https://x.com/yuvvi_k",
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

const Contact = () => {
  return (
    <RoutePageTemplate title="CONTACT">
      <div className="mx-auto max-w-5xl px-6 py-14 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Let's Connect
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-(--text-muted)">
            Open to collaboration, freelance work, or full-time opportunities.
            Feel free to reach out.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {data.map((item) => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={cardVariants}
              whileHover={{
                y: -4,
                transition: { type: "spring", stiffness: 200, damping: 18 },
              }}
              className="rounded-2xl border border-white/10 bg-(--bg-light) p-5 flex flex-col gap-3"
            >
              <h3 className="text-sm font-semibold tracking-wide">
                {item.title}
              </h3>
              <p className="text-sm text-(--text-muted) break-all">
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
