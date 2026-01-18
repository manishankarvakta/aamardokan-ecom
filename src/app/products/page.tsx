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
      const items = activeCategory ? await getProductsByCategory(activeCategory) : await getAllProducts();
      if (cancelled) return;
      setAllProducts(items);
      setVisibleCount(PAGE_SIZE);
      setLoading(false);
    })();
    return () => { cancelled = true; };
  }, [activeCategory]);

  const setCategory = (slug?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) params.set("category", slug);
    else params.delete("category");
    router.push(`/?${params.toString()}`);
  };

  const [allProducts, setAllProducts] = useState<ProductWithSlug[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const PAGE_SIZE = 20;

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [sortBy, setSortBy] = useState<'default' | 'price_asc' | 'price_desc'>('default');

  const sortedAllProducts = useMemo(() => {
    if (sortBy === 'default') return allProducts;
    const copy = [...allProducts];
    copy.sort((a, b) => (sortBy === 'price_asc' ? a.price - b.price : b.price - a.price));
    return copy;
  }, [allProducts, sortBy]);

  const products = useMemo(() => sortedAllProducts.slice(0, visibleCount), [sortedAllProducts, visibleCount]);



  const hasMore = visibleCount < sortedAllProducts.length;

  const loadMore = async () => {
    if (loadingMore || !hasMore) return;
    setLoadingMore(true);
    await new Promise((r) => setTimeout(r, 250));
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, sortedAllProducts.length));
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
          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm text-zinc-600">Sort By:</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'default' | 'price_asc' | 'price_desc')}
              className="rounded-md border border-zinc-300 bg-white px-2 py-1 text-sm"
            >
              <option value="default">Default</option>
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
            </select>
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