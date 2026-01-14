"use client";

import { useEffect, useState } from "react";
import { getAllProducts, type ProductWithSlug } from "@/lib/products";
import ProductCard from "@/components/home/ProductCard";
import Banner from "@/components/home/Banner";

export default function ProductsPage() {
  const [products, setProducts] = useState<ProductWithSlug[]>([]);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const items = await getAllProducts();
      if (!cancelled) setProducts(items);
    })();
    return () => { cancelled = true; };
  }, []);

  return (
    <div className="min-h-screen max-w-7xl mx-auto pb-20">
      <Banner  />
      <div className="container mx-auto px-4 py-8">
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
          <div className="text-center py-20 text-zinc-600">Loading products...</div>
        )}
      </div>
    </div>
  );
}