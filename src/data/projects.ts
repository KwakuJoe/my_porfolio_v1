export type Project = {
  title: string;
  description: string;
  period: string;
  type: "WEBSITE" | "APP" | "SAAS" | "OPEN SOURCE" | "BACKEND" | "API";
  status: "Live" | "Completed" | "Archived" | "In Progress" | null;
  image?: string;
  url?: string;
  /** Slug into src/data/caseStudies.ts — when set, the card links to an in-depth case study instead of an external url. */
  caseStudySlug?: string;
};

export const projects: Project[] = [
  // — Flagship case studies —
  {
    title: "InnovaGHX POS",
    description: "Multi-business point of sale and operations platform — one core of sales, inventory, staff, and reporting that reconfigures itself for retail, restaurants, pharmacies, salons, and laundromats. Built at InnovaGHX. React 19, AdonisJS, PostgreSQL.",
    period: "2025",
    type: "SAAS",
    status: "Completed",
    image: "/images/portfolio/pos/pos-hero.svg",
    caseStudySlug: "pos",
  },
  {
    title: "InnovaGHX Hostel",
    description: "QR-first booking and management platform for student hostels — students request a bed themselves, staff approve from one queue, billing runs off the same record. Built at InnovaGHX. React 19, AdonisJS, PostgreSQL.",
    period: "2026",
    type: "SAAS",
    status: "Completed",
    image: "/images/portfolio/hostel/dashboard.webp",
    caseStudySlug: "hostel",
  },
  {
    title: "Innova Cure",
    description: "End-to-end healthcare delivery platform unifying intake, triage, pharmacy, lab, and billing into one role-based dashboard. Built at InnovaGHX. Vue JS, Laravel, AWS.",
    period: "2023",
    type: "APP",
    status: "Completed",
    image: "/images/portfolio/cure/cure-banner.svg",
    caseStudySlug: "cure",
  },

  // — Current projects —
    {
    title: "TLHA Connect",
    description: "Church community platform for The Latter House Assembly featuring a professional members directory, event management, announcements, and a fund campaign module where members can pledge and track contributions. Includes a full admin dashboard.",
    period: "2024",
    type: "APP",
    status: "Live",
    image: "/images/pentecost.svg",
    url: "https://pay.brij.money/paymentlinks/bd327VAnDm?business_name=Techy+Innovation",
  },
  {
    title: "Brij Paylink",
    description: "Frontend for a multi-country African payment platform supporting MoMo and card payments. Built at Brij Fintech. Vue 3, TailwindCSS, API Integrations.",
    period: "2024",
    type: "APP",
    status: "Live",
    image: "/images/brij_pay.svg",
    url: "https://pay.brij.money/paymentlinks/bd327VAnDm?business_name=Techy+Innovation",
  },
  {
    title: "Sealam Consult Website",
    description: "Marketing website for an event and digital marketing agency offering PR, events, and brand services. SEO-optimised. Nuxt, Vue 3, TailwindCSS.",
    period: "2025",
    type: "WEBSITE",
    status: "Live",
    image: "/images/sealam.svg",
    url: "https://www.sealamconsult.com/",
  },
  {
    title: "IGHX Website",
    description: "Corporate website for a startup software company delivering digital solutions to early-stage businesses. Nuxt, Vue 3, TailwindCSS.",
    period: "2026",
    type: "WEBSITE",
    status: "Live",
    image: "/images/ighx.svg",
    url: "https://www.innovaghx.com/",
  },
  {
    title: "Sinewave Systems Solution Website",
    description: "Marketing website for a technology company providing cutting-edge digital solutions to businesses and professionals. Nuxt, Vue 3, TailwindCSS.",
    period: "2026",
    type: "WEBSITE",
    status: "Live",
    image: "/images/sinewave.svg",
    url: "https://www.sinewavesystems.com/",
  },

  // — Archive projects —
  {
    title: "Wiki Dictionary",
    description: "Dictionary web app powered by a third-party API with instant word lookups. Vue JS, TailwindCSS, Rapid API.",
    period: "2023",
    type: "WEBSITE",
    status: "Live",
    image: "/images/dictionary.svg",
    url: "https://wiki-dictionary.netlify.app",
  },
  {
    title: "XI Architecture Bureau",
    description: "Portfolio website for an architecture firm showcasing projects and services. Vue JS, TailwindCSS, Nuxt JS.",
    period: "2023",
    type: "WEBSITE",
    status: "Live",
    image: "/images/xi.svg",
    url: "https://xi-architecture-bureau.netlify.app",
  },

  {
    title: "Language Translator",
    description: "Multi-language translation web app using a real-time translation API. Vue JS, Nuxt JS, TailwindCSS, Rapid API.",
    period: "2023",
    type: "WEBSITE",
    status: "Live",
    image: "/images/translator.svg",
    url: "https://rapid-language-translator.netlify.app",
  },
  {
    title: "Veriphone",
    description: "Phone number validation and lookup tool using the Veriphone API. Vue JS, Nuxt JS, TailwindCSS.",
    period: "2023",
    type: "WEBSITE",
    status: "Live",
    image: "/images/veriphone.svg",
    url: "https://veriphone.vercel.app",
  },
];

export const typeIconMap: Record<string, string> = {
  WEBSITE: "mdi:monitor",
  APP: "mdi:cellphone",
  SAAS: "mdi:view-dashboard-outline",
  "OPEN SOURCE": "mdi:github",
  BACKEND: "mdi:server",
  API: "mdi:api",
};
