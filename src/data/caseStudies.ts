export interface CaseStudyTechItem {
  icon: string;
  label: string;
}

export interface CaseStudyTechGroup {
  group: string;
  items: CaseStudyTechItem[];
}

export interface CaseStudyHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface CaseStudyFeature {
  icon: string;
  title: string;
  description: string;
}

export interface CaseStudyGalleryItem {
  src: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  tagline: string;
  company: string;
  category: string;
  year: string;
  duration: string;
  statusLabel: string;
  banner: string;
  cardDescription: string;
  tags: CaseStudyTechItem[];
  overview: {
    problem: string;
    solution: string;
  };
  highlights: CaseStudyHighlight[];
  features: CaseStudyFeature[];
  techStack: CaseStudyTechGroup[];
  gallery: CaseStudyGalleryItem[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "pos",
    name: "InnovaGHX POS",
    tagline: "A multi-business point of sale and operations platform, built in-house",
    company: "Built at InnovaGHX",
    category: "SaaS Platform",
    year: "2025",
    duration: "Ongoing",
    statusLabel: "In Development",
    banner: "/images/portfolio/pos/pos-hero.svg",
    cardDescription:
      "A single point-of-sale platform that reconfigures itself for retail, restaurants, pharmacies, salons, and laundromats — one core of sales, inventory, staff, and reporting, tailored per business type.",
    tags: [
      { icon: "mdi:react", label: "React 19" },
      { icon: "simple-icons:adonisjs", label: "AdonisJS" },
      { icon: "simple-icons:postgresql", label: "PostgreSQL" },
      { icon: "ri:tailwind-css-fill", label: "Tailwind CSS" },
    ],
    overview: {
      problem:
        "Small and mid-sized businesses outside pure retail — pharmacies, restaurants, salons, laundromats — are usually forced onto rigid, single-purpose POS software, or onto expensive enterprise ERPs that overshoot what a single-location business actually needs. Juggling disconnected tools for sales, stock, staff, and compliance creates data silos and slows down the counter.",
      solution:
        "InnovaGHX POS is one configurable platform where the business type selected at setup — retail, restaurant, pharmacy, salon, or laundry — determines which workflows switch on, all running on a shared core of sales, inventory, staff, and reporting infrastructure. One codebase, five verticals, no re-implementation per client.",
    },
    highlights: [
      { icon: "mdi:store-outline", title: "Retail", description: "Product variants, modifiers, categories & multi-location stock." },
      { icon: "mdi:silverware-fork-knife", title: "Restaurant", description: "Live floor plan, table-linked sales & kitchen order tickets." },
      { icon: "mdi:pill", title: "Pharmacy", description: "Prescription records & controlled-substance entry logging." },
      { icon: "mdi:content-cut", title: "Salon & Beauty", description: "Appointment booking with status-tracked service jobs." },
      { icon: "mdi:washing-machine", title: "Laundry", description: "Job intake through a tracked wash-to-pickup workflow." },
    ],
    features: [
      {
        icon: "mdi:store-cog-outline",
        title: "Multi-Business Configurability",
        description: "One codebase adapts its workflows and screens to the business type — retail, restaurant, pharmacy, salon, or laundry — without forking the product.",
      },
      {
        icon: "mdi:point-of-sale",
        title: "Point of Sale & Checkout",
        description: "Fast checkout flow with split payments, credit accounts, per-item taxes, and reusable discounts applied right at the register.",
      },
      {
        icon: "mdi:package-variant-closed",
        title: "Inventory & Stock Control",
        description: "Product variants and modifiers, batch-level stock with expiry tracking, supplier-linked receiving, and inter-location stock requests.",
      },
      {
        icon: "mdi:shield-lock-outline",
        title: "Granular Role-Based Access",
        description: "Permissions are scoped to individual actions — e.g. applying a discount vs. managing discounts — so staff only see what their role allows.",
      },
      {
        icon: "mdi:chart-box-outline",
        title: "Reporting & Live Dashboard",
        description: "Sales, stock movement, and business performance rolled into a real-time operational dashboard, filterable by location.",
      },
      {
        icon: "mdi:bell-ring-outline",
        title: "Notifications & Media",
        description: "SMS alerts via mNotify and Hubtel, plus Cloudinary-backed image uploads for products, staff, and business branding.",
      },
    ],
    techStack: [
      {
        group: "Frontend",
        items: [
          { icon: "mdi:react", label: "React 19" },
          { icon: "mdi:language-typescript", label: "TypeScript" },
          { icon: "simple-icons:vite", label: "Vite" },
          { icon: "ri:tailwind-css-fill", label: "Tailwind CSS v4" },
          { icon: "mdi:react", label: "React Router v7" },
          { icon: "mdi:chart-line", label: "Recharts" },
        ],
      },
      {
        group: "Backend",
        items: [
          { icon: "simple-icons:adonisjs", label: "AdonisJS 7" },
          { icon: "mdi:nodejs", label: "Node.js" },
          { icon: "simple-icons:postgresql", label: "PostgreSQL" },
          { icon: "mdi:api", label: "REST API" },
          { icon: "mdi:tray-full", label: "Background Job Queue" },
        ],
      },
      {
        group: "Infrastructure",
        items: [
          { icon: "mdi:cloud-upload-outline", label: "Cloudinary" },
          { icon: "mdi:message-text-outline", label: "mNotify / Hubtel SMS" },
        ],
      },
    ],
    gallery: [
      { src: "/images/portfolio/pos/pos-checkout.webp", label: "Point of Sale / Checkout" },
      { src: "/images/portfolio/pos/dashboard.webp", label: "Live Dashboard" },
      { src: "/images/portfolio/pos/inventory.webp", label: "Inventory & Stock" },
      { src: "/images/portfolio/pos/kitchen-display.webp", label: "Kitchen Display" },
      { src: "/images/portfolio/pos/role-access.webp", label: "Role & Permission Management" },
      { src: "/images/portfolio/pos/reports.webp", label: "Reports" },
    ],
  },
  {
    slug: "hostel",
    name: "InnovaGHX Hostel",
    tagline: "A QR-first booking and management platform for student hostels",
    company: "Built at InnovaGHX",
    category: "SaaS Platform",
    year: "2026",
    duration: "Ongoing",
    statusLabel: "In Development",
    banner: "/images/portfolio/hostel/dashboard.webp",
    cardDescription:
      "Students scan a QR code to request a bed themselves; staff approve from one queue. From there, occupancy, invoices, arrears, and semester billing all run off the same booking record.",
    tags: [
      { icon: "mdi:react", label: "React 19" },
      { icon: "simple-icons:adonisjs", label: "AdonisJS" },
      { icon: "simple-icons:postgresql", label: "PostgreSQL" },
      { icon: "ri:tailwind-css-fill", label: "Tailwind CSS" },
    ],
    overview: {
      problem:
        "Student hostels typically run bookings through WhatsApp threads, spreadsheets, and paper registers — no real-time view of which beds are free, who owes what, or who actually checked in. Every semester's move-in becomes a manual scramble for front-desk staff, and prospective tenants have no way to see or request a room themselves.",
      solution:
        "Innova Hostel puts room availability behind a QR code — a student scans a poster at the branch, picks an open bed from a live map, and submits their own booking request. Staff approve or reject from one queue, and from there, checked-in occupancy, invoices, arrears, and academic-year billing all run off that same booking record.",
    },
    highlights: [
      { icon: "mdi:qrcode", title: "QR Self-Service", description: "Students scan and request a bed themselves — no app, no account." },
      { icon: "mdi:bed-king-outline", title: "Room & Bed Inventory", description: "Room types, physical rooms, and individual beds, gender-locked automatically." },
      { icon: "mdi:account-group-outline", title: "Tenant & Booking Records", description: "Check-in, check-out, and cancellations tracked per academic year and semester." },
      { icon: "mdi:receipt-text-outline", title: "Billing & Arrears", description: "Invoices, part-payments, and outstanding balances tracked per tenant." },
      { icon: "mdi:shield-account-outline", title: "Role-Based Access", description: "Owner, Manager, Front Desk, and Accountant each see only their workflow." },
    ],
    features: [
      {
        icon: "mdi:qrcode-scan",
        title: "QR Booking Requests",
        description: "Print a QR code per branch. Students scan it, browse live bed availability by room type, and submit a booking request straight from their phone.",
      },
      {
        icon: "mdi:check-decagram-outline",
        title: "Approval Queue",
        description: "Every QR request lands in one queue for staff to approve or reject, keeping self-service requests separate from front-desk-entered bookings.",
      },
      {
        icon: "mdi:account-lock-outline",
        title: "Gender-Locked Allocation",
        description: "The first tenant booked into a room sets its gender lock automatically, so front desk can't accidentally mix a room.",
      },
      {
        icon: "mdi:calendar-range",
        title: "Academic Year & Semester Billing",
        description: "Bookings run against configurable academic years and semesters, with a per-property billing mode — yearly, semester, or monthly.",
      },
      {
        icon: "mdi:cash-multiple",
        title: "Invoicing & Arrears Tracking",
        description: "Invoices, partial payments, and outstanding balances are tracked per tenant, with automated due-date and arrears reminders.",
      },
      {
        icon: "mdi:door-open",
        title: "Front Desk Operations",
        description: "Visitor logs and maintenance requests run in the same system as billing and bookings, not a separate logbook.",
      },
    ],
    techStack: [
      {
        group: "Frontend",
        items: [
          { icon: "mdi:react", label: "React 19" },
          { icon: "mdi:language-typescript", label: "TypeScript" },
          { icon: "simple-icons:vite", label: "Vite" },
          { icon: "ri:tailwind-css-fill", label: "Tailwind CSS v4" },
          { icon: "mdi:react", label: "React Router v7" },
          { icon: "mdi:qrcode", label: "QR Code Generation" },
        ],
      },
      {
        group: "Backend",
        items: [
          { icon: "simple-icons:adonisjs", label: "AdonisJS 7" },
          { icon: "mdi:nodejs", label: "Node.js" },
          { icon: "simple-icons:postgresql", label: "PostgreSQL" },
          { icon: "mdi:api", label: "REST API" },
          { icon: "mdi:broadcast", label: "Real-Time Updates" },
          { icon: "mdi:clock-outline", label: "Scheduled Reminders" },
        ],
      },
      {
        group: "Infrastructure",
        items: [{ icon: "mdi:cloud-upload-outline", label: "Cloudinary" }],
      },
    ],
    gallery: [
      { src: "/images/portfolio/hostel/booking-flow.webp", label: "QR Self-Service Booking" },
      { src: "/images/portfolio/hostel/rooms.webp", label: "Room & Bed Inventory" },
      { src: "/images/portfolio/hostel/bookings.webp", label: "Bookings & Allocation" },
      { src: "/images/portfolio/hostel/qr-requests.webp", label: "QR Approval Queue" },
      { src: "/images/portfolio/hostel/invoices.webp", label: "Invoices & Billing" },
      { src: "/images/portfolio/hostel/roles.webp", label: "Roles & Permissions" },
    ],
  },
  {
    slug: "cure",
    name: "Innova Cure",
    tagline: "An end-to-end platform for modern healthcare delivery",
    company: "Built at InnovaGHX",
    category: "Web Application",
    year: "2023",
    duration: "Ongoing",
    statusLabel: "Live",
    banner: "/images/portfolio/cure/cure-banner.svg",
    cardDescription:
      "A turnkey, end-to-end platform built to streamline every aspect of modern healthcare delivery. From patient intake and triage to pharmacy dispensing, lab diagnostics, and billing, Innova Cure brings all clinical and operational workflows under one intuitive, role-based dashboard.",
    tags: [
      { icon: "mingcute:vue-line", label: "Vue JS" },
      { icon: "cib:laravel", label: "Laravel" },
      { icon: "material-symbols:php-sharp", label: "PHP" },
      { icon: "bx:bxl-aws", label: "AWS" },
    ],
    overview: {
      problem:
        "Clinics and hospitals typically run patient intake, pharmacy dispensing, lab diagnostics, and billing through separate systems — or paper — with no shared record of a patient's visit. That fragmentation slows every handoff between departments and makes billing error-prone.",
      solution:
        "Innova Cure unifies intake, triage, pharmacy, lab, and billing into a single role-based dashboard hosted on AWS, so every department works off the same patient record from check-in to checkout, with each staff role seeing only the workflows relevant to them.",
    },
    highlights: [
      { icon: "mdi:account-injury-outline", title: "Intake & Triage", description: "Patient registration and triage at first point of contact." },
      { icon: "mdi:pill", title: "Pharmacy Dispensing", description: "Prescription fulfilment tied directly to the patient record." },
      { icon: "mdi:test-tube", title: "Lab Diagnostics", description: "Diagnostic requests and results within the same workflow." },
      { icon: "mdi:receipt-text-outline", title: "Billing", description: "Charges roll up automatically across every department visited." },
    ],
    features: [
      {
        icon: "mdi:account-injury-outline",
        title: "Patient Intake & Triage",
        description: "Registration and triage capture the patient record once, at the front desk, and carry it through every downstream department.",
      },
      {
        icon: "mdi:pill",
        title: "Pharmacy Dispensing",
        description: "Prescriptions flow straight from the clinician to the pharmacy queue, tied to the same patient visit.",
      },
      {
        icon: "mdi:test-tube",
        title: "Lab Diagnostics",
        description: "Lab requests and results are logged against the visit, visible to clinicians without leaving the platform.",
      },
      {
        icon: "mdi:receipt-text-outline",
        title: "Unified Billing",
        description: "Charges from intake, pharmacy, and lab consolidate into one bill instead of separate departmental invoices.",
      },
      {
        icon: "mdi:shield-account-outline",
        title: "Role-Based Dashboard",
        description: "Front desk, clinicians, pharmacists, and lab staff each get a dashboard scoped to their own workflow.",
      },
      {
        icon: "bx:bxl-aws",
        title: "Cloud-Hosted on AWS",
        description: "Built to run reliably on AWS infrastructure so clinics can scale from a single site to a network.",
      },
    ],
    techStack: [
      {
        group: "Frontend",
        items: [{ icon: "mingcute:vue-line", label: "Vue JS" }],
      },
      {
        group: "Backend",
        items: [
          { icon: "cib:laravel", label: "Laravel" },
          { icon: "material-symbols:php-sharp", label: "PHP" },
          { icon: "mdi:api", label: "REST API" },
        ],
      },
      {
        group: "Infrastructure",
        items: [{ icon: "bx:bxl-aws", label: "AWS" }],
      },
    ],
    gallery: [
      { src: "/images/portfolio/cure/cure_1.svg", label: "Innova Cure" },
      { src: "/images/portfolio/cure/cure_2.svg", label: "Innova Cure" },
      { src: "/images/portfolio/cure/cure_3.svg", label: "Innova Cure" },
      { src: "/images/portfolio/cure/cure_4.svg", label: "Innova Cure" },
      { src: "/images/portfolio/cure/cure_5.svg", label: "Innova Cure" },
      { src: "/images/portfolio/cure/cure_6.svg", label: "Innova Cure" },
      { src: "/images/portfolio/cure/cure_7.svg", label: "Innova Cure" },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
