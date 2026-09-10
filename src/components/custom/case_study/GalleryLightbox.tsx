import { useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Icon } from "@iconify/react";
import type { CaseStudyGalleryItem } from "@/data/caseStudies";

type GalleryLightboxProps = {
  items: CaseStudyGalleryItem[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
};

export default function GalleryLightbox({ items, index, onClose, onNavigate }: GalleryLightboxProps) {
  const goPrev = useCallback(() => onNavigate((index - 1 + items.length) % items.length), [index, items.length, onNavigate]);
  const goNext = useCallback(() => onNavigate((index + 1) % items.length), [index, items.length, onNavigate]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, goPrev, goNext]);

  const item = items[index];

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={item.label}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm px-4 py-8"
        onClick={onClose}
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 rounded-full flex items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors"
        >
          <Icon icon="mdi:close" className="text-xl" />
        </button>

        {items.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Icon icon="mdi:chevron-left" className="text-2xl" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-white/80 hover:text-white bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Icon icon="mdi:chevron-right" className="text-2xl" />
            </button>
          </>
        )}

        <motion.img
          key={item.src}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          src={item.src}
          alt={item.label}
          onClick={(e) => e.stopPropagation()}
          className="max-w-full max-h-[80vh] rounded-xl object-contain shadow-2xl"
        />

        <div className="mt-4 flex flex-col items-center gap-y-1" onClick={(e) => e.stopPropagation()}>
          <p className="text-sm text-white/90 font-medium">{item.label}</p>
          {items.length > 1 && (
            <p className="text-xs text-white/50">
              {index + 1} / {items.length}
            </p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
