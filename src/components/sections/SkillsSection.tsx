"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Database, Cloud } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { skillCategories } from "@/data/skills";
import { useTranslation } from "@/i18n/LanguageContext";

const categoryIcons: Record<string, React.ElementType> = {
  Monitor,
  Server,
  Database,
  Cloud,
};

export function SkillsSection() {
  const { t } = useTranslation();

  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label={t.skills.label}
          title={t.skills.title}
          description={t.skills.description}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, i) => {
            const Icon = categoryIcons[category.icon] ?? Monitor;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-surface-card p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  <h3 className="font-semibold text-text">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-muted">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary inline-block" />
            {t.skills.expert}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-secondary inline-block" />
            {t.skills.advanced}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-border inline-block" />
            {t.skills.intermediate}
          </span>
        </div>
      </div>
    </section>
  );
}
