import React from "react";
import { motion } from "motion/react";
import RoutePageTemplate from "./RoutePageTemplate";

const About = () => {
  return (
    <RoutePageTemplate title={"ABOUT"}>
      <motion.div className="lg:flex-3  flex flex-col flex-7  p-20 ">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut", delay: 1 },
            },
          }}
          className="text-(--text-muted)"
        >
          <p className=" leading-relaxed text-justify">
            I'm a JavaScript developer focused on building interactive,
            real-time web applications using React and modern frontend tools. I
            work across both creative and functional frontend
            development—crafting smooth, animation-driven interfaces as well as
            building data-driven applications that integrate APIs and real-time
            behavior. I've developed projects such as real-time cursor sharing
            across multiple users, with a focus on performance, responsiveness,
            and clean UI architecture. Outside of development, I study music
            composition and melody structures, which shape how I approach
            patterns, timing, and creativity in code. Currently, I'm deepening
            my understanding of JavaScript fundamentals and system design as I
            begin my professional journey in software development.
          </p>
        </motion.div>
      </motion.div>
    </RoutePageTemplate>
  );
};

export default About;
