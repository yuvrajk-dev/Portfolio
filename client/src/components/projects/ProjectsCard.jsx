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
      className="w-full p-10 gap-20 flex flex-col justify-center items-center lg:flex-row md:flex-row "
    >
      {/* LEFT */}
      <motion.div
        variants={leftCard}
        className=" bg-amber-500 w-full rounded-2xl max-w-100 aspect-square"
      ></motion.div>

      {/* RIGHT */}
      <motion.div
        variants={rightCard}
        className="w-full bg-amber-500 rounded-2xl max-w-100 aspect-square"
      ></motion.div>
    </motion.div>
  );
};

export default ProjectsCard;
