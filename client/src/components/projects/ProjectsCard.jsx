import React from "react";
import { motion } from "motion/react";

const ProjectsCard = () => {
  const leftCard = {
    hidden: {
      opacity: 0,
      x: -200,
      y: 100,
      rotate: -10,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: 0.1,
      },
    },
  };

  const rightCard = {
    hidden: {
      opacity: 0,
      x: 200,
      y: 100,
      rotate: 10,
      scale: 0.9,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12,
        delay: 0.2,
      },
    },
  };
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.5 }}
      className="h-100 gap-5 w-full p-5  flex flex-col lg:flex-row"
    >
      {/* LEFT */}
      <motion.div
        variants={leftCard}
        className=" bg-amber-500 flex-1 rounded-2xl"
      ></motion.div>

      {/* RIGHT */}
      <motion.div
        variants={rightCard}
        className="flex-1 bg-amber-500 rounded-2xl"
      ></motion.div>
    </motion.div>
  );
};

export default ProjectsCard;
