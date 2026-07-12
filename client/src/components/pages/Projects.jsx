import React from "react";
import { motion, easeOut } from "motion/react";
import RoutePageTemplate from "./RoutePageTemplate";
import taskstackImg from "../../assets/taskstack.webp";
import cineaiImg from "../../assets/cineai.webp";
import ProjectsCard from "../projects/ProjectsCard";

const Projects = () => {
  return (
    <RoutePageTemplate title="PROJECTS">
      <ProjectsCard isActive={true} delay={1.4} delay2={1.1} />
    </RoutePageTemplate>
  );
};

export default Projects;
