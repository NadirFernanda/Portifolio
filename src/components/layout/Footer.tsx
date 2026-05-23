import { ArrowUp } from "lucide-react";
import { ContactButton } from "@/components/ui/ContactButton";
import { contactLinks } from "@/data/contact";
import { person } from "@/data/person";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-card">
      {/* CTA strip */}
      <div className="border-b border-border py-10 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          {person.availableForWork && (
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
              Available for new opportunities
            </span>
          )}
          <h2 className="text-2xl sm:text-3xl font-black text-text mb-2">
            Let&apos;s build something together
          </h2>
          <p className="text-sm text-muted mb-6">
            Open to full-time remote roles, freelance contracts, and technical collaborations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary hover:bg-primary-dark text-surface font-bold px-6 py-2.5 text-sm transition-all"
            >
              Get in Touch
            </a>
            <ContactButton
              link={contactLinks.find((l) => l.type === "cv")!}
              variant="outline"
              size="md"
              showLabel
            />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="py-6 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="text-sm font-black font-mono">
              <span className="text-primary">fernanda</span>
              <span className="text-muted">.dev</span>
            </span>
            <span className="text-xs text-muted">
              © {year} {person.name} · Built with Next.js
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {contactLinks
                .filter((l) => ["github", "linkedin", "email"].includes(l.type))
                .map((link) => (
                  <ContactButton key={link.id} link={link} variant="ghost" size="sm" showLabel={false} />
                ))}
            </div>

            <a
              href="#home"
              className="inline-flex items-center gap-1.5 text-xs text-muted hover:text-primary transition-colors border border-border hover:border-primary/40 px-2.5 py-1.5 rounded-lg"
              aria-label="Back to top"
            >
              <ArrowUp className="h-3 w-3" />
              Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
