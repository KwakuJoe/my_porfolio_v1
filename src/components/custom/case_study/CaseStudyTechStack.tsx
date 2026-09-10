import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import type { CaseStudy } from "@/data/caseStudies";

export default function CaseStudyTechStack({ study }: { study: CaseStudy }) {
  if (study.techStack.length === 0) return null;

  return (
    <div className="flex flex-col gap-y-6 md:px-10 px-5 md:py-10 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col gap-y-1"
      >
        <p className="text-gray-400 dark:text-zinc-500 text-sm">Under The Hood</p>
        <h3 className="text-2xl md:text-3xl font-bold">Tech Stack</h3>
      </motion.div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {study.techStack.map((group, index) => (
          <motion.div
            key={group.group}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 }}
            className="flex flex-col gap-y-3 border border-gray-100 dark:border-zinc-900 rounded-2xl p-6"
          >
            <p className="text-sm font-semibold text-gray-900 dark:text-zinc-100">{group.group}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <div
                  key={item.label}
                  className="flex rounded-full items-center border border-gray-300 dark:border-zinc-700 py-1 px-3 gap-x-2"
                >
                  <Icon icon={item.icon} />
                  <p className="text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
