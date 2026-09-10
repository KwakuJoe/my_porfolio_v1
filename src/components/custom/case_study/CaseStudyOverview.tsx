import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import type { CaseStudy } from "@/data/caseStudies";

export default function CaseStudyOverview({ study }: { study: CaseStudy }) {
  return (
    <div className="flex flex-col gap-y-8 md:px-10 px-5 md:py-10 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="grid md:grid-cols-2 grid-cols-1 gap-6"
      >
        <div className="flex flex-col gap-y-2 border border-gray-100 dark:border-zinc-900 rounded-2xl p-6 md:p-8">
          <p className="text-sm font-semibold text-gray-900 dark:text-zinc-100">The Challenge</p>
          <p className="leading-7 text-gray-500 dark:text-zinc-400">{study.overview.problem}</p>
        </div>
        <div className="flex flex-col gap-y-2 border border-gray-100 dark:border-zinc-900 rounded-2xl p-6 md:p-8">
          <p className="text-sm font-semibold text-gray-900 dark:text-zinc-100">The Approach</p>
          <p className="leading-7 text-gray-500 dark:text-zinc-400">{study.overview.solution}</p>
        </div>
      </motion.div>

      {study.highlights.length > 0 && (
        <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
          {study.highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
              className="flex flex-col items-center text-center gap-y-2 border border-gray-100 dark:border-zinc-900 rounded-2xl p-5"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-zinc-800">
                <Icon icon={highlight.icon} className="w-5 h-5 text-gray-900 dark:text-zinc-100" />
              </div>
              <p className="font-medium text-sm">{highlight.title}</p>
              <p className="text-xs text-gray-500 dark:text-zinc-400 leading-5">{highlight.description}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
