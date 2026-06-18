import { motion, type Variants, useInView } from "motion/react";
import { Icon } from "@iconify/react";
import { useRef } from "react";
import CompanyLogo from '@/components/custom/assets/CompanyLogo'
import { NavLink } from "react-router";
const experiences = [
  {
    period: "2024 - PRESENT",
    role: "Frontend Developer",
    company: "Brij Fintech Ghana",
    companyLogo: "/images/brij.svg",
    companyURL: 'https://brij.money/',
    bullets: [
      "Owned delivery of a core payment feature used by 100+ merchants, improving payment collection efficiency.",
      "Led development of a multi-country payment platform supporting mobile money and card transactions across 3+ countries.",
      "Integrated RESTful API endpoints to enable secure communication between frontend and backend systems.",
      "Built and maintained a merchant dashboard handling 1,000+ monthly transactions.",
      "Improved UI performance and responsiveness, reducing page load time by ~30% through optimized component design.",
      "Reduced UI inconsistencies by 40% by introducing reusable component-based architecture in Vue.js.",
      "Identified and fixed 20+ bugs and performance issues, improving overall system stability.",
      "Produced technical documentation for APIs and features, improving onboarding efficiency by ~25%.",

    ],
    techStack: [
      { icon: "logos:vue", name: "Vue.js" },
      { icon: "material-icon-theme:nuxt", name: "Nuxt.js" },
      { icon: "devicon:tailwindcss", name: "Tailwind CSS" },
      { icon: "material-icon-theme:laravel", name: "Laravel API Integrations" },
      { icon: "material-icon-theme:figma", name: "Figma" },
    ],
  },
  {
    period: "Noc 2022 - Nov 2023",
    role: "IT Support (NSP)",
    company: "Margins group",
    companyLogo: "/images/margins.svg",
    companyURL: 'https://marginsgroup.com/',
    bullets: [
      "Resolved 95%+ of first-line support tickets within SLA timelines.",
      "Managed provisioning and configuration for 50+ user accounts and devices via Azure Cloud.",
      "Reduced system downtime by ~20% through proactive monitoring and maintenance.",
      "Supported OS installations, backups, and recovery processes across multiple departments.",
    ],
    techStack: [
      { icon: "", name: "Helpdesk" },
      { icon: "", name: "Troubleshooting" },
      { icon: "", name: "Onboarding" },
      { icon: "", name: "training" },
    ],
  },
  {
    period: "Sep 2020 - Jan 2022",
    role: "UI/UX Designer",
    company: "Chroma Digital Solutions",
    companyLogo: "/images/margins.svg",
    companyURL: 'https://marginsgroup.com/',
    bullets: [
      "Designed 15+ wireframes and interactive prototypes for client projects.",
      "Improved user engagement by ~25% through optimized UI/UX design practices.",
      "Delivered 100% responsive designs across mobile, tablet, and desktop platforms.",
      "Collaborated with developers to ensure pixel-perfect implementation of designs.",
    ],
    techStack: [
      { icon: "devicon:figma", name: "Figma" },
      { icon: "devicon:photoshop", name: "Photoshop" },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function MyExperience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
              Experience
            </motion.h1>
          </div>

          {/* Right col — timeline */}
          <div className="flex flex-col flex-1">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={cardVariants} className="flex w-full">
                {/* Timeline spine */}
                <div className="flex flex-col items-center mr-5">
                  {/* Dot */}
                  <div className="mt-1 w-3 h-3 rounded-full border-2 border-gray-400 dark:border-zinc-500 bg-white dark:bg-zinc-950 shrink-0" />
                  {/* Line — hidden after last item */}
                  {index < experiences.length - 1 && (
                    <div className="flex-1 w-px bg-gray-200 dark:bg-zinc-800 mt-1" />
                  )}
                </div>

                {/* Card content */}
                <div className="flex flex-col pb-12 flex-1 min-w-0">
                  {/* Date */}
                  <p className="text-xs font-medium text-gray-400 dark:text-zinc-500 tracking-widest uppercase mb-1">
                    {exp.period}
                  </p>

                  {/* Role + company badge */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-base font-bold text-gray-900 dark:text-zinc-100">
                      {exp.role} at
                    </span>

                    <NavLink to={exp.companyURL ?? '/'} target="_blank" rel="noopener noreferrer">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-gray-200 dark:border-zinc-700 text-sm font-normal text-gray-800 dark:text-zinc-200 bg-white dark:bg-zinc-900">
                        {/* <Icon icon={exp.companyLogo} className="text-base" /> */}
                        <CompanyLogo image_url={exp.companyLogo} style_class="w-8" />
                        {exp.company}
                      </span>

                    </NavLink>

                  </div>

                  {/* Bullets */}
                  <ul className="flex flex-col gap-y-4 mb-5 list-none">
                    {exp.bullets.map((point, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm text-gray-600 dark:text-zinc-400 leading-snug"
                      >
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-zinc-500 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack chips */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech) => (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium
                          bg-gray-100 dark:bg-zinc-800
                          text-gray-700 dark:text-zinc-300
                          border border-gray-200 dark:border-zinc-700"
                      >
                        <Icon icon={tech.icon} className="text-sm" />
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}