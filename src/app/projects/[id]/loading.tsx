export default function Loading() {
  return (
    <main className="min-h-screen bg-surface px-4 py-12">
      <div className="max-w-5xl mx-auto animate-pulse">

        {/* Back link skeleton */}
        <div className="h-4 w-32 bg-surface-card rounded mb-10" />

        {/* Image skeleton */}
        <div className="w-full rounded-2xl bg-surface-card border border-border mb-10" style={{ paddingBottom: "56.25%" }} />

        {/* Header skeleton */}
        <div className="mb-10 space-y-3">
          <div className="flex gap-2">
            <div className="h-6 w-12 bg-surface-card rounded-md" />
            <div className="h-6 w-16 bg-surface-card rounded-full" />
          </div>
          <div className="h-10 w-2/3 bg-surface-card rounded-xl" />
          <div className="h-4 w-1/2 bg-surface-card rounded" />
        </div>

        {/* Description skeleton */}
        <div className="space-y-2 mb-12">
          <div className="h-4 w-full bg-surface-card rounded" />
          <div className="h-4 w-5/6 bg-surface-card rounded" />
          <div className="h-4 w-4/6 bg-surface-card rounded" />
        </div>

        {/* Two-column skeleton */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-6">
            <div className="rounded-2xl border border-border bg-surface-card h-40" />
            <div className="rounded-2xl border border-border bg-surface-card h-56" />
          </div>
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border bg-surface-card h-32" />
            <div className="rounded-2xl border border-border bg-surface-card h-24" />
            <div className="rounded-2xl border border-border bg-surface-card h-28" />
          </div>
        </div>
      </div>
    </main>
  );
}
