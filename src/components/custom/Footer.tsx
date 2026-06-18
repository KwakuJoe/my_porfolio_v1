import { Icon } from "@iconify/react";

const socials = [
  { label: "LinkedIn", icon: "mdi:linkedin", href: "https://www.linkedin.com/in/josephampah/" },
  { label: "Github", icon: "mdi:github", href: "https://github.com/KwakuJoe" },
  { label: "Instagram", icon: "mdi:instagram", href: "https://www.instagram.com/kweku_ampah/" },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="w-full  overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-10 pb-0">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-8">
          <p className="text-sm text-gray-400 dark:text-zinc-500 max-w-50 leading-relaxed">
            Focused on building clean, performant web experiences.
          </p>
          <a
            href="mailto:josephampah18@gmail.com"
            className="text-xl md:text-2xl font-semibold text-gray-700 dark:text-zinc-300 hover:text-gray-900 dark:hover:text-zinc-100 transition-colors"
          >
            josephampah18@gmail.com
          </a>
        </div>

        {/* Social row */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-zinc-500 hover:text-gray-800 dark:hover:text-zinc-200 transition-colors"
              >
                <Icon icon={s.icon} className="text-base" />
                {s.label}
              </a>
            ))}
          </div>

          {/* Scroll to top */}
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full border border-gray-200 dark:border-zinc-700 flex items-center justify-center text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-100 hover:border-gray-400 dark:hover:border-zinc-500 transition-colors"
            aria-label="Scroll to top"
          >
            <Icon icon="mdi:arrow-up" className="text-sm" />
          </button>
        </div>

        {/* Copyright */}
        <p className="text-center text-xs text-gray-400 dark:text-zinc-600 mb-2">
          copyright @{new Date().getFullYear()}. All rights reserved
        </p>

        {/* Watermark */}
        <p className="text-center text-[clamp(3rem,12vw,8rem)] font-bold leading-none text-gray-100 dark:text-zinc-900 select-none translate-y-4 tracking-tight">
          joseph ampah
        </p>
      </div>
    </footer>
  );
}
