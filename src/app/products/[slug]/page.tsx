"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Minus, Plus, ShoppingCart, Truck, RotateCcw, ShieldCheck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getProductBySlug, getAllProducts, type Product } from "@/lib/products";
import ProductCard from "@/components/home/ProductCard";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/store/features/cartSlice";

type Params = { params: { slug: string } };

export default function ProductDetailsPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [qty, setQty] = useState(1);
  const [related, setRelated] = useState<Product[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    let cancelled = false;
    (async () => {
      const p = await getProductBySlug(slug);
      if (cancelled) return;
      setProduct(p ?? null);
      const all = await getAllProducts();
      if (cancelled) return;
      const rel = p ? all.filter(item => item.category === p.category && item.slug !== p.slug).slice(0, 12) : [];
      setRelated(rel);
    })();
    return () => { cancelled = true; };
  }, [slug]);

  if (!product) {
    return (
      <div className="pt-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-20 text-center text-zinc-600">Loading product...</div>
      </div>
    );
  }

  const increment = () => setQty((q) => q + 1);
  const decrement = () => setQty((q) => Math.max(1, q - 1));
  const add = () => {
    for (let i = 0; i < qty; i++) {
      dispatch(addToCart({ id: product.id, name: product.name, price: product.price, image: product.image }));
    }
  };

  return (
    <div className="pt-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-emerald-700">Products</Link>
          <span>/</span>
          <span className="text-zinc-900 font-medium">{product.name}</span>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-xl p-6 shadow-sm">
          <div className="relative aspect-[4/3] bg-zinc-100 rounded-lg overflow-hidden">
            <Image src={product.image} alt={product.name} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover hover:scale-105 transition-transform duration-300" priority />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold">Product</p>
            <h1 className="mt-1 text-2xl font-bold text-zinc-900">{product.name}</h1>
            <div className="mt-3 text-2xl font-black text-emerald-700">${product.price.toFixed(2)}</div>
            <p className="mt-4 text-sm text-zinc-700">{product.description}</p>

            <div className="mt-6 flex items-center gap-3">
              <button onClick={decrement} className="h-9 w-9 flex items-center justify-center rounded-md border border-zinc-300 bg-white"><Minus size={16} /></button>
              <span className="min-w-8 text-center font-semibold">{qty}</span>
              <button onClick={increment} className="h-9 w-9 flex items-center justify-center rounded-md border border-zinc-300 bg-white"><Plus size={16} /></button>
            </div>

            <div className="mt-6 flex gap-3">
              <button onClick={add} className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700">
                <ShoppingCart size={18} />
                Add to Cart
              </button>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 border-t border-zinc-100 pt-8">
              <div className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 text-emerald-600"><Truck size={20} /></div>
                <p className="mt-2 text-[10px] font-bold uppercase text-zinc-400">Fast Delivery</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 text-emerald-600"><ShieldCheck size={20} /></div>
                <p className="mt-2 text-[10px] font-bold uppercase text-zinc-400">Quality Assured</p>
              </div>
              <div className="text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 text-emerald-600"><RotateCcw size={20} /></div>
                <p className="mt-2 text-[10px] font-bold uppercase text-zinc-400">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-zinc-900">Related Products</h3>
          </div>
          <div className="grid bg-red-400 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {related.length > 0 && (
              <Swiper
                modules={[Autoplay, Navigation, Grid]}
                autoplay={{ delay: 3500, disableOnInteraction: false }}
                navigation
                slidesPerView={2}
                grid={{ rows: 2, fill: "row" }}
                breakpoints={{ 640: { slidesPerView: 2 }, 1024: { slidesPerView: 3 }, 1280: { slidesPerView: 4 } }}
                observer
                observeParents
                className="!pb-10"
                key={`rel-${slug}-${related.length}`}
              >

                {related.map((p) => (
                  <SwiperSlide key={p.slug}>
                    <ProductCard product={p} />
                  </SwiperSlide>
                ))}

              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}