import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import type { CaseStudy } from "@/data/caseStudies";

export default function CaseStudyFeatures({ study }: { study: CaseStudy }) {
  if (study.features.length === 0) return null;

  return (
    <div className="flex flex-col gap-y-6 md:px-10 px-5 md:py-10 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col gap-y-1"
      >
        <p className="text-gray-400 dark:text-zinc-500 text-sm">What It Does</p>
        <h3 className="text-2xl md:text-3xl font-bold">Key Features</h3>
      </motion.div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {study.features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: (index % 3) * 0.08 }}
            className="group flex flex-col gap-y-3 border border-gray-100 dark:border-zinc-900 rounded-2xl p-6 hover:border-gray-400 dark:hover:border-zinc-600 transition-colors duration-300"
          >
            <div className="flex items-center justify-center w-11 h-11 rounded-full bg-gray-900 dark:bg-zinc-100 text-white dark:text-zinc-900 transition-colors duration-300">
              <Icon icon={feature.icon} className="w-5 h-5" />
            </div>
            <p className="font-medium text-lg">{feature.title}</p>
            <p className="text-sm text-gray-500 dark:text-zinc-400 leading-6">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
