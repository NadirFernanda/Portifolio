"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/ui/ContactForm";
import { ContactButton } from "@/components/ui/ContactButton";
import { contactLinks } from "@/data/contact";
import { useTranslation } from "@/i18n/LanguageContext";

export function ContactSection() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label={t.contact.label}
          title={t.contact.title}
          description={t.contact.description}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left — info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-muted leading-relaxed">
                {t.contact.availability}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text mb-4">
                {t.contact.connectDirectly}
              </h3>
              <div className="flex flex-col gap-3">
                {contactLinks.map((link) => (
                  <ContactButton
                    key={link.id}
                    link={link}
                    variant="outline"
                    size="md"
                    showLabel
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-border bg-surface-card p-8"
          >
            <h3 className="text-lg font-semibold text-text mb-6">{t.contact.sendMessage}</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
