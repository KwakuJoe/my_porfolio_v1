import { useRef } from "react";
import { motion, type Variants, useInView } from "motion/react";
import { Icon } from "@iconify/react";
import { projects, typeIconMap } from "@/data/projects";
import Divider from "@/components/custom/Divider";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const statusStyles: Record<string, string> = {
  Live: "bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800",
  Archived: "bg-gray-100 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 border-gray-200 dark:border-zinc-700",
  "In Progress": "bg-yellow-50 dark:bg-yellow-950 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800",
};

const statusDot: Record<string, string> = {
  Live: "bg-green-500 animate-pulse",
  Archived: "bg-gray-400",
  "In Progress": "bg-yellow-500 animate-pulse",
};

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="md:h-20 h-28" />
      <Divider />

      <motion.div
        ref={ref}
        className="flex flex-col w-full border-x border-gray-100 dark:border-zinc-900"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Heading block */}
        <div className="flex flex-col gap-y-2 md:px-10 px-5 md:pt-10 pt-6 pb-8">
          <motion.h1 variants={itemVariants} className="md:text-5xl text-3xl font-bold">
            Projects
          </motion.h1>
          <motion.p variants={itemVariants} className="text-sm text-gray-500 dark:text-zinc-400">
            A full list of things I've designed and built — websites, apps, and more.
          </motion.p>
        </div>

        <Divider />

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:px-10 px-5 py-8">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              variants={itemVariants}
              href={project.url ?? "#"}
              target={project.url ? "_blank" : "_self"}
              rel="noopener noreferrer"
              whileHover={{ y: -4, transition: { type: "spring", stiffness: 300, damping: 20 } }}
              className="group flex flex-col gap-y-3 cursor-pointer"
            >
              {/* Screenshot card */}
              <div className="relative w-full aspect-4/3 rounded-2xl bg-gray-100 dark:bg-zinc-800 p-2 flex flex-col">
                <div className="relative flex-1 rounded-xl overflow-hidden shadow-sm">
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

                {project.status && (
                  <div className={`absolute top-4 right-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-semibold shadow-sm bg-white dark:bg-zinc-900 border-gray-200 dark:border-zinc-700 text-gray-800 dark:text-zinc-100 ${statusStyles[project.status] ?? ""}`}>
                    <span className={`w-2 h-2 rounded-full ${statusDot[project.status] ?? "bg-gray-400"}`} />
                    {project.status}
                  </div>
                )}
              </div>

              {/* Meta */}
              <div className="flex items-center justify-between text-xs text-gray-400 dark:text-zinc-500 font-medium tracking-wide uppercase">
                <span>{project.period}</span>
                <span className="inline-flex items-center gap-1">
                  <Icon icon={typeIconMap[project.type] ?? "mdi:monitor"} className="text-sm" />
                  {project.type}
                </span>
              </div>

              <h2 className="text-base font-bold text-gray-900 dark:text-zinc-100 leading-snug group-hover:underline underline-offset-2 transition-all">
                {project.title}
              </h2>

              <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed line-clamp-2">
                {project.description}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <Divider />
    </div>
  );
}
