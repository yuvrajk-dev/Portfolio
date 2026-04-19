import React from "react";
import AuthorName from "./AuthorName";
import AuthorBio from "./AuthorBio";
import { useOutletContext } from "react-router-dom";
import { useTransform, motion } from "motion/react";

const Author = () => {
  const scrollYProgress = useOutletContext();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 3]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <motion.div
      initial={{ scale: 1, rotate: 0, opacity: 1, filter: "none" }}
      style={{
        filter,
        scale,
        rotate,
      }}
      transition={{ type: "spring", stiffness: 80, damping: 14 }}
      className="sticky  top-20 -z-1  bg-(--bg)   flex flex-col   pb-20  justify-center items-center"
    >
      <AuthorName />
      <AuthorBio />
    </motion.div>
  );
};

export default Author;
