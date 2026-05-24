"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/testimonials";
import { useTranslation } from "@/i18n/LanguageContext";

export function TestimonialsSection() {
  const { t, lang } = useTranslation();

  return (
    <section id="testimonials" className="py-24 px-4 bg-surface-light/30">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label={t.testimonials.label}
          title={t.testimonials.title}
          description={t.testimonials.description}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col rounded-2xl border border-border bg-surface-card p-6 hover:border-primary/30 transition-colors"
            >
              {/* Quote icon */}
              <Quote className="h-6 w-6 text-primary/40 mb-4 flex-shrink-0" />

              {/* Quote text */}
              <p className="text-sm text-muted leading-relaxed flex-1">
                "{testimonial.quotes[lang]}"
              </p>

              {/* Divider */}
              <div className="mt-6 pt-5 border-t border-border flex items-center gap-3">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">{testimonial.initials}</span>
                </div>

                {/* Name + role */}
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-text truncate">{testimonial.name}</p>
                  <p className="text-xs text-muted truncate">
                    {testimonial.role[lang]} · {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Project tag */}
              <p className="mt-3 text-xs font-mono text-primary/60 truncate">
                {testimonial.project}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
