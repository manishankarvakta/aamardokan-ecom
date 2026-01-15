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
      className={`group rounded-md border px-3 py-2 text-sm transition ${
        active ? "bg-white border-zinc-200 shadow-sm" : "bg-zinc-50 border-zinc-200 hover:bg-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="font-medium text-zinc-900">{category.name}</span>
        <span className={`h-12 w-10 rounded bg-${category.color} text-white flex items-center justify-center ${active ? "opacity-100" : "opacity-80 group-hover:opacity-100"}`}>
          {category.icon} 
        </span>
      </div>
    </button>
  );
}