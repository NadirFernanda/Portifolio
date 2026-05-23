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
    tagline: "ISP online shop + management system — two apps, one monorepo",
    description:
      "Monorepo with two independent Laravel apps: an online shop (Loja) for end-customers to buy plans and vouchers, and a backoffice management system (SGA) for internal operations. They communicate via internal HTTP API — if the shop goes down, the SGA keeps running. Payments via EMIS GPO (Multicaixa Express + Angolan bank card).",
    problem:
      "The company needed both a public-facing shop and an internal management system. Coupling them would mean one failure taking down both. They also needed a PCI-DSS-compliant payment flow in a market where only EMIS GPO is a viable gateway.",
    role: "Full development of both apps: architecture decisions, backend, frontend, EMIS GPO payment integration, server configuration, and production deploy.",
    stack: [
      "Laravel 12",
      "PHP 8.4",
      "PostgreSQL",
      "SQLite",
      "Blade",
      "Vite",
      "Nginx",
      "PHP-FPM",
      "Spatie Permission",
      "Spatie Activity Log",
      "DomPDF",
      "Maatwebsite Excel",
    ],
    highlights: [
      "Monorepo, two isolated Laravel apps (Loja + SGA) communicating via internal API — failure isolation by design",
      "EMIS GPO integration: iframe flow ensures card data never touches the app server — PCI-DSS compliant",
      "SGA on PostgreSQL (complex relations, RBAC, audit logs); Loja on SQLite (simple tables, zero infra overhead)",
      "Zero CSS framework — namespaced handcrafted CSS per page (.co-*, .ck-*, .cc-*), minimal bundle, no build step for styles",
      "Signed URLs (Laravel URL::signedRoute) for IDOR protection on all customer-facing links",
      "Spatie Activity Log for full audit trail in the SGA; Spatie Permission for Admin / Gestor / Revendedor / Staff roles",
      "Nginx serves static assets directly; PHP-FPM via Unix socket — lower latency than TCP localhost",
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
      "Comprehensive internal management system for an Angolan ISP — covering clients, service plans, billing, technical support, and MikroTik router integration. Payments via EMIS (Multicaixa Express / GPO), automatic plan suspension via scheduled tasks, and WhatsApp notifications for alerts and billing.",
    problem:
      "AngolWifi was managing clients, contracts, and support through disconnected tools. There was no automation for plan expiration, no audit trail, and no direct integration with MikroTik routers or the local EMIS payment gateway.",
    role: "Full development: system architecture, backend services, frontend, MikroTik RouterOS API and EMIS integrations, scheduled automation, and internal deployment.",
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
      "MikroTik RouterOS API over raw TCP/8728 — no third-party library, direct binary protocol implementation with full control over router state",
      "EMIS payment gateway integration (Multicaixa Express / GPO) — built specifically for the Angolan market, no generic payment abstraction",
      "WhatsApp notification layer fully abstracted behind a service interface — swap Twilio, UltraMsg, or Z-API without touching any business logic",
      "Spatie Activity Log for immutable audit trail — every change records who, what, and when",
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
