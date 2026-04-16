import { motion } from "motion/react";
import ProjectsCard from "../projects/ProjectsCard";

const Cards = () => {
  return (
    <div className="bg-(--bg) overflow-hidden h-screen pt-20 w-full p-5 flex flex-col">
      {/* TITLE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 80, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 14,
          delay: 0.1,
        }}
        viewport={{ amount: 0.5 }}
        className="flex justify-center  items-center font-bold leading-none text-[10vw]"
      >
        PROJECTS
      </motion.div>

      {/* CARDS */}
      <ProjectsCard />
    </div>
  );
};

export default Cards;
