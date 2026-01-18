"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { getCategories } from "@/lib/products";
import Link from "next/link";
import Image from "next/image";

export default function CategorySidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const active = searchParams.get("category") ?? undefined;
  const categories = getCategories();

  const setCategory = (slug?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) params.set("category", slug);
    else params.delete("category");
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="h-full overflow-y-auto p-4 bg-white shadow-sm border border-zinc-200">
      <h3 className="text-sm font-semibold text-zinc-700 mb-3">Categories</h3>
      <ul className="space-y-1">
        <li>
          <Link
            href="/products"
            className={`w-full text-left rounded-md px-3 py-2 text-sm ${!active ? "bg-white shadow-sm border border-zinc-200" : "hover:bg-zinc-100"}`}
          >
            All Products
          </Link>
        </li>
        {categories.map((c) => (
          <li key={c.slug} className="list-none">
  <button
    onClick={() => setCategory(c.slug)}
    className={`group w-full flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
      active === c.slug
        ? "bg-emerald-50 border border-emerald-100 shadow-sm"
        : "bg-transparent border border-transparent hover:bg-zinc-50"
    }`}
  >
    {/* Image Container */}
    <div className={`relative shrink-0 w-8 h-8 overflow-hidden rounded-full border transition-colors ${
      active === c.slug ? "border-emerald-200" : "border-zinc-200"
    }`}>
      <Image
        src={c.image}
        alt={c.name}
        fill
        className="object-cover"
      />
    </div>

    {/* Category Name */}
    <span className={`text-sm font-medium transition-colors ${
      active === c.slug 
        ? "text-emerald-700" 
        : "text-zinc-600 group-hover:text-zinc-900"
    }`}>
      {c.name}
    </span>

    {/* Subtle Indicator for Active State */}
    {active === c.slug && (
      <div className="ml-auto w-1.5 h-1.5 rounded-full bg-emerald-500" />
    )}
  </button>
</li>
        ))}
      </ul>
    </div>
  );
}