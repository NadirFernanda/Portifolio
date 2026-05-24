export type ProjectStatus = "production" | "private" | "archived";

export interface Project {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  role: string;
  stack: string[];
  highlights: string[];
  images: {
    thumbnail: string;
    screenshots: string[];
  };
  links: {
    demo?: string;
    github?: string;
  };
  status: ProjectStatus;
  featured: boolean;
  year: number;
}

export type SkillLevel = "expert" | "advanced" | "intermediate";

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  type: "full-time" | "freelance" | "contract" | "education";
  startDate: string;
  endDate: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export interface ContactLink {
  id: string;
  label: string;
  href: string;
  type: "email" | "linkedin" | "github" | "whatsapp" | "cv";
}

export interface PersonData {
  name: string;
  title: string;
  subtitle: string;
  bio: string;
  photo: string;
  yearsOfExperience: number;
  location: string;
  availableForWork: boolean;
}
