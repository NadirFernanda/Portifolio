import { ContactButton } from "@/components/ui/ContactButton";
import { contactLinks } from "@/data/contact";
import { person } from "@/data/person";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface-card py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start gap-1">
          <span className="text-sm font-black font-mono">
            <span className="text-primary">fernanda</span>
            <span className="text-muted">.dev</span>
          </span>
          <span className="text-xs text-muted">
            © {year} {person.name} · Built with Next.js
          </span>
        </div>

        <div className="flex items-center gap-1 flex-wrap justify-center">
          {contactLinks
            .filter((l) => ["github", "linkedin", "email"].includes(l.type))
            .map((link) => (
              <ContactButton key={link.id} link={link} variant="ghost" size="sm" showLabel={false} />
            ))}
        </div>
      </div>
    </footer>
  );
}
