"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { getCategories } from "@/lib/products";
import Link from "next/link";

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
          <li key={c.slug}>
            <button
              onClick={() => setCategory(c.slug)}
              className={`w-full text-left rounded-md px-3 py-2 text-sm ${
                active === c.slug ? "bg-white shadow-sm border border-zinc-200" : "hover:bg-zinc-100"
              }`}
            >
              {c.icon}
              <span className="ml-2 text-zinc-900">{c.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}