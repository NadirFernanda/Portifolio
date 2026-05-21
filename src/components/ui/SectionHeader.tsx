interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <span className="inline-block text-xs font-mono font-semibold tracking-[0.2em] text-primary uppercase mb-3 px-3 py-1 rounded-full border border-primary/30 bg-primary/10">
        {label}
      </span>
      <h2 className="mt-2 text-3xl font-black text-text sm:text-4xl tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl mx-auto text-muted text-base leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-6 mx-auto w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
    </div>
  );
}
