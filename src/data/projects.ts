import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "medfreela",
    name: "MedFreela",
    tagline: "Healthcare professional hiring platform",
    description:
      "End-to-end platform connecting healthcare institutions with freelance health professionals. Built with a complete authentication flow, integrated payments, balance management, and an administrative control panel.",
    problem:
      "Healthcare institutions lacked a reliable, secure, and scalable way to hire qualified freelance professionals on demand — existing solutions were either too generic or too manual.",
    role: "Full architecture ownership: database design, REST API, frontend, Linux server configuration, and production deploy.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Nginx", "PM2"],
    highlights: [
      "JWT authentication with role-based access control",
      "Integrated payment system with balance management",
      "Professional withdrawal and earnings dashboard",
      "Full administrative control panel",
      "Linux VPS deploy with PM2 process manager",
      "Nginx reverse proxy with SSL configuration",
      "Performance-optimized database queries",
    ],
    images: {
      thumbnail: "/images/projects/medfreela/thumbnail.png",
      screenshots: [
        "/images/projects/medfreela/thumbnail.png",
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
      thumbnail: "/images/projects/angolawifi/thumbnail.png",
      screenshots: [
        "/images/projects/angolawifi/thumbnail.png",
      ],
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
      "Professional institutional website for an internet service provider operating in Angola, presenting the company's service portfolio and establishing digital credibility.",
    problem:
      "The provider needed a professional digital presence to compete in the regional market and be findable online by potential business clients.",
    role: "Full development and information architecture.",
    stack: ["Next.js", "Tailwind CSS", "Nginx"],
    highlights: [
      "Professional institutional design",
      "Service portfolio presentation",
      "Fully responsive layout",
      "Production deployment on Linux server",
    ],
    images: {
      thumbnail: "/images/projects/ispbie/thumbnail.png",
      screenshots: [
        "/images/projects/ispbie/thumbnail.png",
      ],
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
      thumbnail: "/images/projects/portfolio/thumbnail.png",
      screenshots: [],
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
      thumbnail: "/images/projects/ispbie-billing/thumbnail.png",
      screenshots: [],
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
      "Comprehensive internal management system for AngolWifi, covering client portfolio, service contracts, technical support tickets, and operational oversight for the ISP's daily operations.",
    problem:
      "AngolWifi lacked a centralised system to manage clients, contracts, and support — teams were using disconnected tools and losing operational data.",
    role: "Full development: system architecture, backend, frontend and internal deployment.",
    stack: ["Laravel", "Tailwind CSS", "PostgreSQL"],
    highlights: [
      "Centralised client and contract management",
      "Technical support ticket system",
      "Service activation and suspension controls",
      "Operational dashboard with key metrics",
      "Multi-user access with role permissions",
    ],
    images: {
      thumbnail: "/images/projects/angolawifi-management/thumbnail.png",
      screenshots: [],
    },
    links: {},
    status: "production",
    featured: true,
    year: 2024,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
