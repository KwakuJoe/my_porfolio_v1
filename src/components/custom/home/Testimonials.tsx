import { motion, type Variants, useInView, AnimatePresence } from "motion/react";
import { useRef, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
};

const testimonials: Testimonial[] = [
  {
    quote: "The corporate website gave us a strong digital presence from day one. It clearly tells our story and what we offer to early-stage businesses.",
    name: "Kevin Hasford",
    role: "CEO, InnovaGHX",
    initials: "EQ",
  },
  {
    quote: "Our website now does the selling for us. Clients immediately understand what Sinewave offers — cutting-edge solutions, clearly communicated.",
    name: "Michael Asare",
    role: "Founder, Sinewave Systems",
    initials: "MA",
  },
  {
    quote: "The SEO-optimised website transformed how clients discover us. Our events and PR services finally have the online presence they deserve.",
    name: "Sealam Mensah",
    role: "Founder, Sealam Consult",
    initials: "SM",
  },
  {
    quote: "The payment UI was intuitive and reliable across all the markets we targeted. Exactly what our merchants needed.",
    name: "Charles Obeng",
    role: "Frontend Lead, Brij Fintech Ghana",
    initials: "KA",
  },
];

const CARDS_PER_PAGE = 2;
const pages = Array.from(
  { length: Math.ceil(testimonials.length / CARDS_PER_PAGE) },
  (_, i) => testimonials.slice(i * CARDS_PER_PAGE, i * CARDS_PER_PAGE + CARDS_PER_PAGE)
);

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

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [page, setPage] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = (next: number) => {
    setDirection(next > page ? 1 : -1);
    setPage(next);
  };

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
              Testimonials
            </motion.h1>
          </div>

          {/* Right col — carousel */}
          <motion.div variants={headingVariants} className="flex flex-col flex-1 gap-y-6">
            <div className="relative overflow-hidden">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -40 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                >
                  {pages[page].map((t, i) => (
                    <div
                      key={i}
                      className="flex flex-col justify-between gap-y-6 p-5 rounded-2xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900"
                    >
                      <p className="text-sm text-gray-600 dark:text-zinc-400 leading-relaxed">
                        {t.quote}
                      </p>

                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-zinc-700 flex items-center justify-center text-xs font-semibold text-gray-600 dark:text-zinc-300 shrink-0">
                          {t.initials}
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900 dark:text-zinc-100 leading-tight">
                            {t.name}
                          </p>
                          <p className="text-xs text-gray-400 dark:text-zinc-500">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Pagination dots */}
            <div className="flex items-center gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === page
                      ? "w-6 bg-gray-800 dark:bg-zinc-200"
                      : "w-2 bg-gray-300 dark:bg-zinc-600"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
