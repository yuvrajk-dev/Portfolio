import React from "react";
import { motion, easeOut } from "motion/react";
import taskstackImg from "../../assets/taskstack.webp";
import cineaiImg from "../../assets/cineai.webp";

const ProjectsCard = ({ isActive, delay = 0, delay2 = 0 }) => {
  const data = [
    {
      title: "CineAI",
      subtitle: "AI Movie Discovery Platform",
      description:
        "Discover movies using natural language with OpenRouter AI and browse TMDB content.",
      image: cineaiImg,
      tags: [
        "React",
        "Redux Toolkit",
        "Supabase",
        "TMDB API",
        "OpenRouter API",
      ],
      github: "https://github.com/yuvrajk-dev/CineAI",
      live: "https://cineai-web.vercel.app",
    },
    {
      title: "TaskStack",
      subtitle: "Kanban Task Management",
      description:
        "A task management application with authentication, CRUD operations, and a clean responsive interface built with React and Supabase.",
      image: taskstackImg,
      tags: ["React", "Tailwind CSS", "Supabase", "React Router"],
      github: "https://github.com/yuvrajk-dev/TaskStack",
      live: "https://taskstack-app.vercel.app",
    },
  ];

  const cardVariants = (index) => ({
    hidden: {
      opacity: 0,
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: easeOut,
        delay: index === 0 ? delay : 0,
      },
    },
  });

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="mx-auto max-w-6xl px-6 py-16"
    >
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: delay2 }}
          className="mb-24 text-center"
        >
          <h2 className="text-4xl font-bold lg:text-5xl">Featured Projects</h2>

          <p className="mx-auto mt-5 max-w-xl text-sm text-(--text-muted)">
            Selected projects that showcase my frontend development skills.
          </p>
        </motion.div>
      )}

      <div className="space-y-40">
        {data.map((project, index) => (
          <motion.section
            key={project.title}
            variants={cardVariants(index)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div
              whileHover={{ y: -8 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 35,
                mass: 3,
              }}
              className={`grid items-center gap-12 rounded-4xl border border-black/10 bg-(--bg-light) p-8 shadow-(--shadow-s) transition-shadow duration-500 hover:shadow-(--shadow-l) lg:grid-cols-2 lg:p-12 ${
                index % 2 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="">
                <p className="mb-3 text-sm font-semibold tracking-[0.3em] text-(--text-muted)">
                  0{index + 1}
                </p>

                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-(--text-muted)">
                  {project.subtitle}
                </p>

                <h3 className="text-4xl font-extrabold tracking-tight transition-opacity duration-300 group-hover:opacity-80">
                  {project.title}
                </h3>

                <p className="mt-6 max-w-xl leading-8 text-(--text-muted)">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 bg-(--bg) px-4 py-2 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:-rotate-3 hover:scale-105 hover:bg-(--text) hover:text-(--bg-light) hover:shadow-(--shadow-m)"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-black/10 bg-(--bg-light) px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-(--bg) hover:shadow-(--shadow-m)"
                  >
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl bg-(--text) px-6 py-3 font-medium text-(--bg-light) transition-all duration-300 hover:-translate-y-1 hover:opacity-90 hover:shadow-(--shadow-l)"
                  >
                    Live Demo
                  </a>
                </div>
              </div>

              <motion.a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="overflow-hidden rounded-2xl border border-black/10 bg-(--bg-light) transition-all duration-500 hover:shadow-(--shadow-l)">
                  <div className="flex items-center gap-2 border-b border-black/10 bg-(--bg) px-5 py-3">
                    <div className="h-3 w-3 rounded-full bg-red-400" />
                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                    <div className="h-3 w-3 rounded-full bg-green-400" />

                    <div className="ml-4 rounded-md bg-(--bg-dark) px-3 py-1 text-sm text-(--text-muted)">
                      {new URL(project.live).hostname}
                    </div>
                  </div>

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.a>
            </motion.div>
          </motion.section>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsCard;
