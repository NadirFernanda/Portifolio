import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "medfreela",
    name: "MedFreela",
    tagline: "Healthcare professional hiring platform",
    description:
      "Full-stack platform connecting healthcare institutions with freelance health professionals in Angola. Features a complete hire-to-payment flow: shift scheduling, escrow-based payments via Multicaixa Express, earnings dashboard, and a full administrative panel — all server-rendered and deployed on a Linux VPS.",
    problem:
      "Healthcare institutions in Angola had no reliable, digital way to hire qualified freelance professionals on demand. Existing solutions were generic and didn't account for local payment infrastructure (no Stripe/PayPal), Angolan ID validation, or local terminology.",
    role: "Full architecture ownership: database schema, server actions, frontend, custom payment logic, Angolan BI validation, Linux server configuration, and production deploy.",
    stack: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Prisma 7",
      "Tailwind CSS 4",
      "Redis",
      "Zod",
      "PM2",
      "Nginx",
      "sharp",
    ],
    highlights: [
      "Custom escrow payment system — no Stripe, built for Multicaixa Express and TPA",
      "Angolan BI number validation (9 digits + 2 letters + 1 digit) implemented from scratch",
      "Server-side rate limiting with Redis to block brute-force on auth routes",
      "Role-based access: healthcare institutions, freelance professionals, and admins",
      "Image upload pipeline with sharp — resizes and converts to WebP server-side",
      "Zod schema validation on all server actions before any database write",
      "PM2 process manager with separate cron worker — survives crashes in production",
    ],
    images: {
      thumbnail: "/images/projects/medfreela/medfreela.ao_.png",
      screenshots: [
        "/images/projects/medfreela/medfreela.ao_.png",
        "/images/projects/medfreela/medfreela.ao_login.png",
        "/images/projects/medfreela/medfreela.ao_candidatura.png",
      ],
    },
    links: {
      demo: "https://medfreela.ao",
    },
    status: "production",
    featured: true,
    year: 2024,
  },
  {
    id: "angolawifi",
    name: "AngolWifi",
    tagline: "ISP website built for conversion",
    description:
      "Institutional website for an internet service provider in Angola. Designed to communicate service plans clearly and convert visitors into leads, with a mobile-first layout and full server deployment.",
    problem:
      "The company had no professional online presence, losing potential customers who searched for internet providers in their region.",
    role: "Full development: information architecture, responsive design, server configuration, and production deploy.",
    stack: ["Next.js", "Tailwind CSS", "Nginx", "VPS"],
    highlights: [
      "Conversion-focused layout and copywriting",
      "Mobile-first responsive design",
      "Server configuration and Linux deployment",
      "Optimized for fast loading on low-bandwidth connections",
    ],
    images: {
      thumbnail: "/images/projects/angolawifi/angolawifi.ao_pagar-plano-gpo_7.png",
      screenshots: ["/images/projects/angolawifi/angolawifi.ao_pagar-plano-gpo_7.png"],
    },
    links: {
      demo: "https://angolawifi.ao",
    },
    status: "production",
    featured: true,
    year: 2024,
  },
  {
    id: "isp-bie",
    name: "ISP BIE",
    tagline: "Internet provider institutional platform",
    description:
      "Institutional website for an internet service provider in Angola, built with a full Laravel backend, admin panel, and server-side rendering via Blade. Covers service presentation, lead capture, and content management — deployed on a Linux VPS with Nginx and PHP-FPM.",
    problem:
      "The provider had no professional online presence, losing potential clients searching online. They also needed an admin panel to manage content without developer intervention.",
    role: "Full development: information architecture, backend, admin panel, responsive frontend, server configuration, and production deploy.",
    stack: [
      "Laravel 11",
      "PHP 8.4",
      "PostgreSQL",
      "Blade",
      "Tailwind CSS",
      "Alpine.js",
      "Vite",
      "Nginx",
      "PHP-FPM",
    ],
    highlights: [
      "Laravel built-ins for auth, CSRF, rate limiting, and migrations — minimal custom security code",
      "Blade component architecture — navbar, footer, and sections reused across pages",
      "Alpine.js for menus and modals (~15 KB) — no React or Vue overhead",
      "Vite build pipeline — fast ES module compilation for CSS and JS",
      "Nginx + PHP-FPM 8.4 — standard high-performance Laravel production stack",
      "Fully responsive layout with Tailwind, no manual media queries",
    ],
    images: {
      thumbnail: "/images/projects/ispbie/screenshot.png",
      screenshots: ["/images/projects/ispbie/screenshot.png"],
    },
    links: {
      demo: "https://isp-bie.ao",
    },
    status: "production",
    featured: true,
    year: 2023,
  },
  {
    id: "portfolio",
    name: "This Portfolio",
    tagline: "Personal portfolio — designed, built and deployed by me",
    description:
      "Full-stack portfolio built from scratch to showcase my work and attract remote opportunities. Designed with a custom dark theme, animated sections, contact form with email delivery, and full SEO configuration.",
    problem:
      "I needed a professional online presence that communicated not just my skills, but my ability to deliver complete systems — from design to production deploy.",
    role: "Everything: design decisions, architecture, frontend, API, SEO and deploy.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Resend"],
    highlights: [
      "Custom dark amber theme built with Tailwind CSS v4",
      "Animated sections with Framer Motion",
      "Contact form with email delivery via Resend API",
      "Full SEO — metadata, Open Graph, Schema.org, sitemap",
      "Deployed on Vercel with CI/CD via GitHub",
    ],
    images: {
      thumbnail: "/images/projects/portfolio/screenshot.png",
      screenshots: ["/images/projects/portfolio/screenshot.png"],
    },
    links: {
      demo: "https://portifolio-neon-kappa.vercel.app",
      github: "https://github.com/NadirFernanda/Portifolio",
    },
    status: "production",
    featured: true,
    year: 2025,
  },
  {
    id: "ispbie-billing",
    name: "ISP BIE — Billing System",
    tagline: "Invoice & billing management for an internet provider",
    description:
      "Internal invoice management system built for ISP BIE, handling client billing, invoice generation, payment tracking, and financial reporting for the company's internet service operations.",
    problem:
      "The company was managing invoices manually via spreadsheets, leading to errors, delays, and no real-time visibility into payment status or outstanding balances.",
    role: "Full development: database design, backend logic, UI and internal deploy.",
    stack: ["Laravel", "Tailwind CSS", "PostgreSQL"],
    highlights: [
      "Automated invoice generation per client",
      "Payment tracking and status management",
      "Financial reporting and balance overview",
      "Client management dashboard",
      "Role-based access for staff",
    ],
    images: {
      thumbnail: "/images/projects/ispbie-billing/screenshot.png",
      screenshots: ["/images/projects/ispbie-billing/screenshot.png"],
    },
    links: {},
    status: "production",
    featured: true,
    year: 2024,
  },
  {
    id: "angolawifi-management",
    name: "AngolWifi — Management System",
    tagline: "Internal company management platform",
    description:
      "Comprehensive internal management system for an Angolan ISP — covering clients, service plans, billing, technical support, and MikroTik router integration. Payments via Pay4All (Multicaixa Express), automatic plan suspension via scheduled tasks, and WhatsApp notifications for alerts and billing.",
    problem:
      "AngolWifi was managing clients, contracts, and support through disconnected tools. There was no automation for plan expiration, no audit trail, and no direct integration with MikroTik routers or local payment gateways.",
    role: "Full development: system architecture, backend services, frontend, MikroTik and Pay4All integrations, scheduled automation, and internal deployment.",
    stack: [
      "Laravel 12",
      "PHP 8.2",
      "PostgreSQL",
      "Blade",
      "Tailwind CSS 4",
      "Vite 7",
      "Spatie Permission",
      "Spatie Activity Log",
      "DomPDF",
      "Maatwebsite Excel",
    ],
    highlights: [
      "Direct MikroTik integration via RouterOS API (TCP/8728) — no third-party library, full control",
      "Pay4All (OAuth2 + REST) for Multicaixa Express payments — built for the Angolan market",
      "WhatsApp notifications via abstracted service layer — provider-swappable without touching core logic",
      "Spatie Activity Log for immutable audit trail — who changed what and when",
      "Granular role-based access with Spatie Permission (Administrador, Técnico, etc.)",
      "Scheduled automation: plan sync every 5 min, suspension at 01:00, expiry alerts at 13:00 and 18:00",
      "PDF report generation (DomPDF) and Excel export (Maatwebsite) for clients and billing",
    ],
    images: {
      thumbnail: "/images/projects/angolawifi-management/screenshot.png",
      screenshots: ["/images/projects/angolawifi-management/screenshot.png"],
    },
    links: {},
    status: "production",
    featured: true,
    year: 2024,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
