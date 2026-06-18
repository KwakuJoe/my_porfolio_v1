import { motion, type Variants, useInView } from "motion/react";
import { Icon } from "@iconify/react";
import { useRef } from "react";
import { Link } from "react-router";
import { projects, typeIconMap } from "@/data/projects";

const FEATURED_COUNT = 4;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.13, delayChildren: 0.1 },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function MyProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <div className="flex p-2 w-full">
      <motion.div
        ref={ref}
        className="flex w-full h-full min-h-[40dvh] justify-center items-center gap-x-4 md:p-10 p-5 border-x border-gray-100 dark:border-zinc-900"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="flex md:flex-row flex-col w-full gap-y-10">
          {/* Left col — heading */}
          <div className="flex flex-col h-full md:w-1/3 w-full justify-start gap-y-5 md:pt-1">
            <motion.h1
              variants={headingVariants}
              className="md:text-5xl text-3xl font-bold"
            >
              Projects
            </motion.h1>
            <motion.div variants={headingVariants}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-100 transition-colors group"
              >
                View all projects
                <Icon icon="mdi:arrow-right" className="text-base transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right col — grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 flex-1 gap-6">
            {projects.slice(0, FEATURED_COUNT).map((project, index) => (
              <motion.a
                key={index}
                variants={cardVariants}
                href={project.url ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className="group flex flex-col gap-y-3 cursor-pointer"
              >
                {/* Screenshot card */}
                <div className="relative w-full aspect-4/3 rounded-2xl bg-gray-100 dark:bg-zinc-800 p-2 flex flex-col">
                  {/* Inset screenshot */}
                  <div className="relative flex-1 rounded-xl overflow-hidden shadow-sm">
                    {/* Slim header */}
                    <div className="flex items-center gap-1 px-2 py-1 bg-gray-200 dark:bg-zinc-700 border-b border-gray-300 dark:border-zinc-600">
                      <span className="w-2 h-2 rounded-full bg-red-400" />
                      <span className="w-2 h-2 rounded-full bg-yellow-400" />
                      <span className="w-2 h-2 rounded-full bg-green-400" />
                    </div>

                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover object-top w-full h-[calc(100%-1.25rem)] transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-[calc(100%-1.25rem)] flex items-center justify-center bg-gray-50 dark:bg-zinc-800">
                        <Icon icon={typeIconMap[project.type] ?? "mdi:monitor"} className="text-4xl text-gray-300 dark:text-zinc-600" />
                      </div>
                    )}
                  </div>

                  {/* Live badge */}
                  {project.status === "Live" && (
                    <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 text-xs font-semibold text-gray-800 dark:text-zinc-100 shadow-sm">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Live
                    </div>
                  )}
                </div>

                {/* Meta row */}
                <div className="flex items-center justify-between text-xs text-gray-400 dark:text-zinc-500 font-medium tracking-wide uppercase">
                  <span>{project.period}</span>
                  <span className="inline-flex items-center gap-1">
                    <Icon icon={typeIconMap[project.type] ?? "mdi:monitor"} className="text-sm" />
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-base font-bold text-gray-900 dark:text-zinc-100 leading-snug group-hover:underline underline-offset-2 transition-all">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}