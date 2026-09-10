import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { Link } from "react-router";
import type { CaseStudy } from "@/data/caseStudies";

export default function CaseStudyHero({ study }: { study: CaseStudy }) {
  return (
    <div className="relative w-full min-h-[24rem] md:min-h-[28rem] flex items-end text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={study.banner} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black via-black/70 to-black/20" />

      <div className="relative z-20 flex flex-col gap-y-4 px-5 md:px-10 py-8 md:py-12 w-full">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <Link
            to="/projects"
            className="inline-flex items-center gap-x-1 text-sm text-white/70 hover:text-white transition-colors duration-200"
          >
            <Icon icon="ic:sharp-arrow-back" className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-y-3 md:w-[70%] w-full"
        >
          <div className="flex items-center flex-wrap gap-x-2 gap-y-2">
            <p className="text-sm text-white/70">
              {study.category} | {study.year}
              {study.duration && ` | Duration - ${study.duration}`}
            </p>
            <span className="text-xs font-medium rounded-full border border-white/40 px-3 py-1">{study.statusLabel}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold">{study.name}</h1>
          <p className="text-base md:text-lg text-white/80 leading-7">{study.tagline}</p>
          <p className="text-sm text-white/60">
            {study.company} &middot; Private client project, no public link available
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-3 mt-2">
            {study.tags.map((tag) => (
              <div key={tag.label} className="flex rounded-full items-center border border-white/40 py-1 px-3 gap-x-2">
                <Icon icon={tag.icon} />
                <p className="text-sm">{tag.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
