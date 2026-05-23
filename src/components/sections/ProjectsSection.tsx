"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { featuredProjects } from "@/data/projects";
import { useTranslation } from "@/i18n/LanguageContext";

export function ProjectsSection() {
  const { t } = useTranslation();

  return (
    <section id="projects" className="py-24 px-4 bg-surface-light/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label={t.projects.label}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="h-full"
            >
              <ProjectCard project={project} priority={i === 0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
