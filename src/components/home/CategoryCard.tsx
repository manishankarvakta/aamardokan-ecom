import Image from "next/image";
import type { Category } from "@/lib/products";

export default function CategoryCard({
  category,
  active,
  onClick,
}: {
  category: Category;
  active?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      // Fixed width for the entire card ensures the swiper calculates gaps correctly
      className="group cursor-pointer flex flex-col items-center gap-3 bg-transparent border-none transition-all outline-none w-[120px]"
    >
      {/* Fixed Circular Image Container */}
      <div
        className={`relative h-[100px] w-[100px] shrink-0 overflow-hidden rounded-full border-2 transition-all duration-300 ${
          active 
            ? "border-emerald-600 ring-2 ring-emerald-600 ring-offset-2" 
            : "border-transparent group-hover:border-zinc-200"
        }`}
      >
        {category.image ? (
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="100px"
            className={`object-cover transition-transform duration-500 ${
              active ? "scale-110" : "group-hover:scale-110"
            }`}
          />
        ) : (
          <div className="w-full h-full bg-zinc-100 flex items-center justify-center text-zinc-400">
            <span className="text-[10px]">No Image</span>
          </div>
        )}
      </div>

      {/* Category Name - Fixed height prevents text wrapping from breaking the row */}
      <div className="h-10 flex items-start justify-center">
        <span 
          className={`text-xs sm:text-sm font-bold text-center line-clamp-2 transition-colors duration-200 ${
            active ? "text-emerald-700" : "text-zinc-800 group-hover:text-emerald-600"
          }`}
        >
          {category.name}
        </span>
      </div>
    </button>
  );
} 