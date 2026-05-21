import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "freelance",
    title: "Software Engineer",
    company: "Freelance",
    type: "freelance",
    startDate: "Jan 2022",
    endDate: "Present",
    location: "Remote · Angola",
    responsibilities: [
      "Architected and delivered full-stack web platforms from scratch to production",
      "Configured and managed Linux VPS servers with Nginx, PM2, and SSL",
      "Designed PostgreSQL schemas and built REST APIs with Node.js and Laravel",
      "Implemented authentication systems, payment integrations, and admin dashboards",
      "Optimized application performance and server configurations",
      "Worked directly with clients to gather requirements and deliver on time",
    ],
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "PHP",
      "Laravel",
      "PostgreSQL",
      "Prisma",
      "Nginx",
      "Linux",
      "Docker",
      "PM2",
      "Cloudflare",
    ],
  },
];
