"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Banner from "@/components/home/Banner";
import ProductCard from "@/components/home/ProductCard";
import { getCategories, getProductsByCategory, searchProducts, type Product } from "@/lib/products";
import Deals from "@/components/home/Deals";
import Promo from "@/components/home/Promo";
import CategorySlider from "@/components/common/CategorySlider";


export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get("category") ?? undefined;

  const categories = useMemo(() => getCategories(), []);
  const [products, setProducts] = useState<Product[]>([]);
  const query = (searchParams.get("q") ?? "").trim();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const items = query
        ? await searchProducts(query, activeCategory ?? undefined)
        : await getProductsByCategory(activeCategory ?? undefined);
      if (!cancelled) setProducts(items);
    })();
    return () => {
      cancelled = true;
    };
  }, [activeCategory, query]);

  const setCategory = (slug?: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (slug) params.set("category", slug);
    else params.delete("category");
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="min-h-screen">
      {!query && <Banner />}

      <div className="w-auto">
        <CategorySlider categories={categories} activeCategory={activeCategory} setCategory={setCategory} />
      </div>

      <section className="px-4 lg:px-8 py-4">
        <h2 className="text-xl font-semibold mb-4">{query ? `Search Results for "${query}"` : "Products"}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.slice(0, 10).map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      <div>
        <Deals />
      </div>
      <div>
        <Promo />
      </div>
    </div>
  );
}
