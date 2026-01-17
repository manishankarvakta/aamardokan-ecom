"use client";
import { useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Banner from "@/components/home/Banner";
import CategoryCard from "@/components/home/CategoryCard";
import ProductCard from "@/components/home/ProductCard";
import { getCategories, getProductsByCategory, type Product } from "@/lib/products";
import Deals from "@/components/home/Deals";
import Promo from "@/components/home/Promo";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, FreeMode, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

export default function Home() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activeCategory = searchParams.get("category") ?? undefined;

  const categories = useMemo(() => getCategories(), []);
  const [products, setProducts] = useState<Product[]>([]);

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

  return (
    <div className="min-h-screen">
      <Banner />

      <section className="px-4 lg:px-8 mt-8">
      <Swiper
        modules={[FreeMode, Navigation, Autoplay]}
        spaceBetween={12}
        slidesPerView={2.5} // Shows partial card to hint at scrollability on mobile
        freeMode={true}
        breakpoints={{
          640: { slidesPerView: 3.5 },
          768: { slidesPerView: 4.5 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop
        className="category-swiper"
      >
        {categories.map((c) => (
          <SwiperSlide key={c.slug} className="!w-auto"> 
            <CategoryCard
              category={c}
              active={activeCategory === c.slug}
              onClick={() => setCategory(c.slug)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>

      <section className="px-4 lg:px-8 py-8">
        <h2 className="text-xl font-semibold mb-4">Products</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {products.slice(0,10).map((p) => (
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
