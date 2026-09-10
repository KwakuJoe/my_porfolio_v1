import { useState } from "react";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import type { CaseStudy } from "@/data/caseStudies";
import GalleryLightbox from "@/components/custom/case_study/GalleryLightbox";

export default function CaseStudyGallery({ study }: { study: CaseStudy }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if (study.gallery.length === 0) return null;

  return (
    <div className="flex flex-col gap-y-6 md:px-10 px-5 md:py-10 py-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col gap-y-1"
      >
        <p className="text-gray-400 dark:text-zinc-500 text-sm">A Closer Look</p>
        <h3 className="text-2xl md:text-3xl font-bold">Screens</h3>
      </motion.div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {study.gallery.map((item, index) => (
          <motion.button
            type="button"
            key={item.label + index}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut", delay: (index % 3) * 0.08 }}
            onClick={() => setOpenIndex(index)}
            className="group relative flex aspect-video rounded-2xl overflow-hidden border border-gray-100 dark:border-zinc-900 cursor-pointer text-left"
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
              <Icon
                icon="mdi:magnify-expand"
                className="text-3xl text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </motion.button>
        ))}
      </div>

      {openIndex !== null && (
        <GalleryLightbox
          items={study.gallery}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </div>
  );
}
