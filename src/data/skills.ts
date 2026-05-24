import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "Monitor",
    skills: [
      { name: "Next.js", level: "expert" },
      { name: "React", level: "expert" },
      { name: "TypeScript", level: "advanced" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Blade", level: "advanced" },
      { name: "Alpine.js", level: "intermediate" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    skills: [
      { name: "Node.js", level: "advanced" },
      { name: "PHP", level: "advanced" },
      { name: "Laravel", level: "advanced" },
      { name: "Prisma ORM", level: "advanced" },
      { name: "REST APIs", level: "expert" },
      { name: "Redis", level: "advanced" },
      { name: "Zod", level: "advanced" },
    ],
  },
  {
    id: "database",
    title: "Database",
    icon: "Database",
    skills: [
      { name: "PostgreSQL", level: "advanced" },
      { name: "SQLite", level: "intermediate" },
      { name: "MySQL", level: "intermediate" },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure",
    icon: "Cloud",
    skills: [
      { name: "Linux", level: "advanced" },
      { name: "Nginx", level: "advanced" },
      { name: "PHP-FPM", level: "advanced" },
      { name: "PM2", level: "advanced" },
      { name: "SSL / HTTPS", level: "advanced" },
      { name: "VPS Deploy", level: "advanced" },
      { name: "Docker", level: "intermediate" },
      { name: "CI/CD", level: "intermediate" },
    ],
  },
];
