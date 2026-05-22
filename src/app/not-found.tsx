import Link from "next/link";

export const metadata = {
  title: "404 — Page Not Found",
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-surface">
      <span className="text-8xl font-black text-primary/20 font-mono select-none">404</span>
      <h1 className="mt-4 text-2xl font-bold text-text">Page not found</h1>
      <p className="mt-2 text-muted text-sm max-w-xs">
        This page doesn't exist or was moved. Let's get you back on track.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center gap-2 rounded-xl border border-primary/50 text-primary hover:bg-primary hover:text-surface hover:border-primary px-6 py-2.5 text-sm font-bold transition-all"
      >
        ← Back to portfolio
      </Link>
    </div>
  );
}
