export default function ProductCardSkeleton() {
  return (
    <div 
      role="status" 
      className="animate-pulse group relative flex flex-col overflow-hidden rounded-xl border border-zinc-100 bg-white"
    >
      {/* Image Container Placeholder - Using aspect-4/3 to match your product detail image */}
      <div className="relative aspect-4/3 w-full bg-zinc-100">
        {/* Subtle decorative circle to mimic a floating icon or badge */}
        <div className="absolute right-3 top-3 h-7 w-7 rounded-full bg-zinc-200/50" />
      </div>

      {/* Details Placeholder */}
      <div className="flex flex-col p-4 space-y-3">
        <div className="space-y-2">
          {/* Category Tag (Matching the 'Product' uppercase style) */}
          <div className="h-2 w-12 bg-zinc-100 rounded-full" />
          
          {/* Product Title */}
          <div className="h-4 w-full bg-zinc-200 rounded-full" />
          <div className="h-4 w-2/3 bg-zinc-200 rounded-full" />
        </div>

        {/* Price (Matching the bold emerald-700 style) */}
        <div className="h-6 w-24 bg-zinc-100 rounded-md" />
      </div>
      
      <span className="sr-only">Loading...</span>
    </div>
  );
}