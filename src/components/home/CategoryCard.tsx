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
      className={`group cursor-pointer flex flex-col items-center justify-center rounded-xl border p-4 transition ${
        active ? "bg-white border-zinc-500 shadow-sm" : "bg-zinc-50 border-zinc-200 hover:bg-white"
      }`}
    >
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl transition-transform ${
          active ? "scale-105" : "group-hover:scale-105"
        }`}      >
      </div>
      <span className="mt-2 text-sm font-medium text-zinc-900 text-center line-clamp-1">
        {category.name}
      </span>
    </button>
  );
}