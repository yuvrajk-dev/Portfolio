import React from "react";
import { motion } from "motion/react";

const RoutePageTemplate = ({ title, children }) => {
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
              transition: { duration: 0.8, ease: "easeInOut", delay: 0.3 },
            },
          }}
          className="p-5   flex md:justify-start lg:justify-start justify-center md:items-start lg:items-start items-center flex-col gap-1 bg-(--bg-light)  "
        >
          <h1 className="text-[10vw]  ">{title}</h1>
        </motion.div>
        {children}
      </motion.div>
    </div>
  );
};

export default RoutePageTemplate;
