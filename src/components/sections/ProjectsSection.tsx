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

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-14 flex flex-col items-center gap-4 text-center"
        >
          <p className="text-lg font-semibold text-text">{t.projects.ctaTitle}</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primary-dark text-surface font-bold px-6 py-3 text-sm transition-all hover:scale-105 shadow-lg shadow-primary/20"
          >
            {t.projects.ctaButton}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
