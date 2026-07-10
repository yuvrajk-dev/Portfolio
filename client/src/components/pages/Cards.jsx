import { motion } from "motion/react";
import ProjectsCard from "../projects/ProjectsCard";

const Cards = () => {
  return (
    <div className="bg-(--bg)   overflow-hidden min-h-screen items-center   w-full p-5 flex flex-col">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 80, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 14,
          delay: 0.1,
        }}
        viewport={{ amount: 0.5, margin: "80px 0px 0px 0px" }}
        className="flex  justify-center  mt-5  mb- items-center font-bold leading-none text-[15vw] md:text-[10vw] lg:text-[10vw]"
      >
        PROJECTS
      </motion.div>
      <ProjectsCard isActive={false} />
    </div>
  );
};

export default Cards;
