"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { experience } from "@/data/experience";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 bg-surface-light/30">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          label="Experience"
          title="Professional Background"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-10">
            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-surface-card border-2 border-primary flex items-center justify-center">
                  <Briefcase className="h-3.5 w-3.5 text-primary" />
                </div>

                <div className="rounded-2xl border border-border bg-surface-card p-6 hover:border-primary/30 transition-colors">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-bold text-text text-lg">{item.title}</h3>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <span className="text-primary font-medium text-sm">{item.company}</span>
                        <span className="text-xs px-2 py-0.5 rounded-full border border-secondary/30 text-secondary bg-secondary/10 font-medium">
                          {item.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-1 text-xs text-muted">
                      <span className="font-mono">{item.startDate} — {item.endDate}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2 mb-4">
                    {item.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-muted">
                        <span className="text-primary mt-1.5 text-xs">▸</span>
                        {r}
                      </li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-0.5 rounded font-mono bg-surface-light text-muted border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
