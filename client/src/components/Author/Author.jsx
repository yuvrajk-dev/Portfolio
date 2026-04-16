import React from "react";
import AuthorName from "./AuthorName";
import AuthorBio from "./AuthorBio";
import { useOutletContext } from "react-router-dom";
import { useTransform, motion } from "motion/react";

const Author = () => {
  const scrollYProgress = useOutletContext();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -2]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 3]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  return (
    <motion.div
      style={{
        filter,
        scale,
        rotate,
      }}
      className="sticky top-20 bg-(--bg)   flex flex-col flex-1   justify-center items-center"
    >
      <AuthorName />
      <AuthorBio />
    </motion.div>
  );
};

export default Author;
