"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { person } from "@/data/person";
import { useTranslation } from "@/i18n/LanguageContext";

export function AboutSection() {
  const { t } = useTranslation();

  const stats = [
    { label: t.about.statsYearsExp, value: `${person.yearsOfExperience}+`, color: "text-primary" },
    { label: t.about.statsProjects, value: "5+", color: "text-secondary" },
    { label: t.about.statsServers, value: "10+", color: "text-primary-light" },
  ];

  return (
    <section id="about" className="py-28 px-4 relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          label={t.about.label}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Visual card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {/* Identity card */}
            <div className="relative rounded-2xl border border-border bg-surface-card p-8 overflow-hidden">
              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/15 to-transparent rounded-bl-full" />

              {/* Photo */}
              <div className="relative w-40 h-40 rounded-full overflow-hidden mb-6 ring-2 ring-primary/50 ring-offset-2 ring-offset-surface-card shadow-xl shadow-primary/15 flex-shrink-0">
                <Image
                  src={person.photo}
                  alt={person.name}
                  fill
                  className="object-cover object-top"
                  sizes="160px"
                  priority
                />
              </div>

              <h3 className="text-xl font-bold text-text">{person.name}</h3>
              <p className="text-primary font-semibold text-sm mt-1">{t.person.title}</p>
              <p className="text-muted text-sm mt-0.5">{t.person.subtitle}</p>

              <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-2">
                {t.about.languages.map((lang) => (
                  <span
                    key={lang}
                    className="text-xs px-3 py-1 rounded-full border border-primary/40 text-primary bg-primary/10 font-medium"
                  >
                    {lang}
                  </span>
                ))}
                <span className="text-xs px-3 py-1 rounded-full border border-border text-muted bg-surface-light font-medium">
                  {person.location}
                </span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border bg-surface-card p-4 text-center hover:border-primary/30 transition-colors"
                >
                  <div className={`text-3xl font-black ${stat.color}`}>{stat.value}</div>
                  <div className="text-xs text-muted mt-1 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio + highlights */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="space-y-4">
              {t.person.bio.split("\n\n").map((paragraph, i) => (
                <p key={i} className="text-muted leading-relaxed text-base">
                  {paragraph.trim()}
                </p>
              ))}
            </div>

            {/* What I deliver */}
            <div className="rounded-2xl border border-border bg-surface-card p-6">
              <h4 className="text-sm font-semibold text-text uppercase tracking-widest mb-4">
                {t.about.whatIDeliver}
              </h4>
              <ul className="space-y-3">
                {t.about.highlights.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Availability */}
            <div className="rounded-2xl border border-primary/30 bg-surface-card p-6 space-y-5">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-text uppercase tracking-widest">
                  {t.about.availability}
                </h4>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                  {t.about.openToWork}
                </span>
              </div>

              {/* Meta row */}
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <span className="text-primary">◎</span>
                  {t.about.timezone}
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="text-primary">◎</span>
                  USD · EUR · BRL · AOA
                </span>
              </div>

              {/* Contract types */}
              <div className="flex flex-wrap gap-2">
                {t.about.contractTypes.map((type) => (
                  <span
                    key={type}
                    className="text-xs px-2.5 py-1 rounded-full border border-primary/30 text-primary bg-primary/10 font-medium"
                  >
                    {type}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                {/* Open to */}
                <div>
                  <p className="text-xs font-semibold text-text mb-2 uppercase tracking-wider">
                    {t.about.openTo}
                  </p>
                  <ul className="space-y-1.5">
                    {t.about.openList.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-muted">
                        <span className="text-primary text-base leading-none">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not looking for */}
                <div>
                  <p className="text-xs font-semibold text-muted mb-2 uppercase tracking-wider">
                    {t.about.notLookingFor}
                  </p>
                  <ul className="space-y-1.5">
                    {t.about.notLookingList.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs text-muted/60">
                        <span className="text-muted/40 text-base leading-none">✕</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
