import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { getAllProducts, type Product } from '@/lib/products';
import ProductCard from './ProductCard';

const Deals = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    (async () => {
      const all = await getAllProducts();
      // Simulating "Deals" by picking random or first few products
      setProducts(all.slice(0, 10)); 
    })();
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="px-4 lg:px-4 py-8 max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-zinc-900">Hot Deals</h2>
        <a href="/products" className="text-sm font-semibold text-emerald-600 hover:text-emerald-700">View All</a>
      </div>
      
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true, dynamicBullets: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 4, spaceBetween: 24 },
          1280: { slidesPerView: 5, spaceBetween: 24 },
        }}
        className="pb-12! px-1!"
      >
        {products.map((product) => (
          <SwiperSlide key={product.id} className="pt-1 pb-1 pl-1">
             <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Deals;