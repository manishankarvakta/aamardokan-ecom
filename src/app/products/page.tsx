"use client";

import { useEffect, useMemo, useState } from "react";
import { getCategories, getProductsByCategory, getAllProducts, type ProductWithSlug } from "@/lib/products";
import ProductCard from "@/components/home/ProductCard";
import CategorySlider from "@/components/common/CategorySlider";
import { useRouter, useSearchParams } from "next/navigation";

export default function ProductsPage() {
const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get("category") ?? undefined;
  const categories = useMemo(() => getCategories(), []);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const items = await getProductsByCategory(activeCategory);
      if (!cancelled) setProducts(items);
    })();
    return () => {
      cancelled = true;
    };
  }, [activeCategory]);

  const setCategory = (slug?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) params.set("category", slug);
    else params.delete("category");
    router.push(`/?${params.toString()}`);
  };

  const [allProducts, setAllProducts] = useState<ProductWithSlug[]>([]);
  const [products, setProducts] = useState<ProductWithSlug[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const PAGE_SIZE = 20;

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const items = await getAllProducts();
      if (cancelled) return;
      setAllProducts(items);
      setProducts(items.slice(0, PAGE_SIZE));
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, []);

  const hasMore = products.length < allProducts.length;

  const loadMore = async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    await new Promise((r) => setTimeout(r, 250));
    const next = allProducts.slice(products.length, products.length + PAGE_SIZE);
    setProducts((prev) => [...prev, ...next]);
    setLoadingMore(false);
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto pb-20">
      <CategorySlider categories={categories} activeCategory={activeCategory} setCategory={setCategory} />
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-zinc-900">All Products</h2>
            <p className="text-sm text-zinc-500">{products.length} items found</p>
          </div>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {products.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-zinc-600">{loading ? "Loading products..." : "No products found"}</div>
        )}

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className="px-6 py-3 rounded-lg bg-emerald-600 text-white font-semibold hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loadingMore ? "Loading..." : "Load More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}