"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { featuredProjects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 bg-surface-light/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Work"
          title="Featured Projects"
          description="Real systems built and deployed in production — not demos or tutorials."
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
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
