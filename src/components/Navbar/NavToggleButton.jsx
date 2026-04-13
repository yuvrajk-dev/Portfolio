import React from "react";
import { motion } from "motion/react";

const NavToggleButton = ({ isOpen, setIsOpen }) => {
  return (
    <motion.button
      onClick={() => setIsOpen((prev) => !prev)}
      initial="close"
      whileHover={!isOpen ? "hover" : undefined}
      animate={isOpen ? "open" : "close"}
      variants={{
        close: { scale: 1 },
        hover: { scale: 1.1 },
        open: { scale: 1.2 },
      }}
      className="py-1 border cursor-pointer  rounded px-2 "
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
      }}
    >
      <motion.div className="flex gap-1  justify-center  items-center  ">
        {/* text start */}
        <motion.div className="relative  px-2   overflow-hidden">
          <motion.p
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            variants={{ open: { y: -30 }, close: { y: 0 } }}
            className="m-0  leading-none translate-y-px "
          >
            menu
          </motion.p>
          <motion.p
            transition={{ type: "spring", stiffness: 150, damping: 15 }}
            variants={{ open: { y: 0 }, close: { y: 30 } }}
            className="m-0   leading-none absolute inset-0 translate-y-px "
          >
            Close
          </motion.p>
        </motion.div>

        {/* end */}
        <motion.div
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          variants={{
            close: { rotate: 0 },
            hover: { rotate: 90 },
            open: { rotate: 180 },
          }}
          className={` rounded-full gap-0.5 flex bg-(--text) justify-center items-center w-4 h-4 `}
        >
          <div className={`  h-1 w-1 rounded-full bg-(--bg)`}></div>
          <div className={`  h-1 w-1 rounded-full bg-(--bg)`}></div>
        </motion.div>
      </motion.div>
    </motion.button>
  );
};

export default NavToggleButton;
