"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, FreeMode } from "swiper/modules";
import CategoryCard from "@/components/home/CategoryCard"; // adjust path as needed
import type { Category } from "@/lib/products";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

interface CategorySliderProps {
  categories: Category[];
  activeCategory: string | undefined | null;
  setCategory: (slug: string) => void;
}

export default function CategorySlider({ 
  categories, 
  activeCategory, 
  setCategory 
}: CategorySliderProps) {
  return (
    <section className="px-4 lg:px-4 py-8 max-w-[1200px] mx-auto">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={2} // Mobile default
        loop={true}
        freeMode={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
          1280: { slidesPerView: 8, spaceBetween: 24 },
        }}
        className="pb-12! px-1!" // Added padding so active rings aren't clipped
      >
        {categories.map((cat) => (
          <SwiperSlide key={cat.slug} className="flex justify-center">
            <div className=""> 
              <CategoryCard
                category={cat}
                active={activeCategory === cat.slug}
                onClick={() => setCategory(cat.slug)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}