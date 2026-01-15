export default function ProductCardSkeleton() {
  return (
    <div role="status" className="animate-pulse group relative flex flex-col overflow-hidden rounded-xl border border-zinc-100 bg-white">
      {/* Image Container Placeholder */}
      <div className="relative aspect-4/5 h-48 w-full bg-zinc-200">
        <div className="absolute right-3 top-3 h-8 w-8 rounded-full bg-zinc-300/50" />
      </div>

      {/* Details Placeholder */}
      <div className="flex flex-col p-4 space-y-3">
        <div className="space-y-2">
          <div className="h-2.5 w-16 bg-zinc-200 rounded-full" /> {/* Category */}
          <div className="h-4 w-full bg-zinc-200 rounded-full" /> {/* Title */}
        </div>
        <div className="h-6 w-20 bg-zinc-200 rounded-md" /> {/* Price */}
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}