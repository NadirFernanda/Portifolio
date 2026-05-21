"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ContactForm } from "@/components/ui/ContactForm";
import { ContactButton } from "@/components/ui/ContactButton";
import { contactLinks } from "@/data/contact";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          label="Contact"
          title="Let's Work Together"
          description="Open to remote opportunities, freelance projects, and technical collaborations."
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
              <h3 className="text-lg font-semibold text-text mb-2">
                What I'm looking for
              </h3>
              <ul className="space-y-2">
                {[
                  "Full Stack or Backend Engineering roles",
                  "Remote-first companies globally",
                  "Freelance projects with real impact",
                  "Systems that need full delivery — dev to infra",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <span className="text-primary mt-1">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-text mb-4">
                Connect directly
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
            <h3 className="text-lg font-semibold text-text mb-6">Send a message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
