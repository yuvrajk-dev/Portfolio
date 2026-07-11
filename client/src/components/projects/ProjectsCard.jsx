import React from "react";
import { motion, easeOut } from "motion/react";
import RoutePageTemplate from "../pages/RoutePageTemplate";
import taskstackImg from "../../assets/taskstack.webp";
import cineaiImg from "../../assets/cineai.webp";

const ProjectsCard = ({ isActive }) => {
  const data = [
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
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl font-bold lg:text-5xl">Featured Projects</h2>

          <p className="mx-auto mt-4 max-w-xl text-sm text-(--text-muted)">
            Selected projects that showcase my frontend development skills.
          </p>
        </motion.div>
      )}

      <div className="space-y-32">
        {data.map((project, index) => (
          <motion.section
            key={project.title}
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className={`grid items-center gap-12 lg:grid-cols-2 ${
              index % 2 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.25em] text-(--text-muted)">
                {project.subtitle}
              </p>

              <h3 className="text-4xl font-bold">{project.title}</h3>

              <p className="mt-6 leading-8 text-(--text-muted)">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-4 py-2 text-sm text-(--text-muted)"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 px-6 py-3 transition hover:bg-white/5"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white px-6 py-3 text-black transition hover:opacity-90"
                >
                  Live Demo ↗
                </a>
              </div>
            </div>

            <motion.a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="overflow-hidden rounded-3xl border border-white/10 bg-(--bg-light)">
                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />

                  <div className="ml-4 rounded-md bg-white/5 px-3 py-1 text-sm text-(--text-muted)">
                    {new URL(project.live).hostname}
                  </div>
                </div>

                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </motion.a>
          </motion.section>
        ))}
      </div>
    </div>
  );
};

export default ProjectsCard;
