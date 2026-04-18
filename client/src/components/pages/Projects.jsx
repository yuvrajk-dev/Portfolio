import React from "react";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="show"
        className=" min-h-screen bg-(--bg) overflow-hidden flex flex-col lg:flex-row md:flex-row w-full   "
      >
        <motion.div
          variants={{
            hidden: { y: "-100%" },
            show: {
              y: 0,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
            },
          }}
          className="p-5 flex-1 flex md:justify-start lg:justify-start justify-center md:items-start lg:items-start items-center flex-col gap-1 bg-(--bg-light)  "
        >
          <h1 className="text-[8vw] ">Projects</h1>
        </motion.div>
        <motion.div className="flex-3   p-20 ">
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { duration: 1, ease: "easeOut", delay: 1 },
              },
            }}
          ></motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
