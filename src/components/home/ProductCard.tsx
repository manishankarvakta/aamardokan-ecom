"use client";

import { ShoppingCart, Heart, Eye } from "lucide-react";
import type { Product } from "@/lib/products";

import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/store/features/cartSlice";
import { useState } from "react";
import ProductDetailModal from "@/components/home/ProductDetailModal";
import { toast } from "sonner";
import Image from "next/image";
import Link from "next/link";



export default function ProductCard({ product }: { product: Product }) {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  // Logic to send product to Redux Store
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
    toast.success(`${product.name} added to cart!`, {
      description: "You can view your items in the shopping cart.",
      duration: 3000,
      icon: <ShoppingCart className="h-4 w-4" />,
    });
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-xl border border-zinc-100 bg-white transition-all duration-300 hover:shadow-xl hover:shadow-zinc-200/50 ">

      {/* Image Container */}
      <div className="relative aspect-4/5 h-48 overflow-hidden bg-zinc-50">
        {/* Wishlist Button - Top Right */}
        <button
          aria-label="Add to wishlist"
          onClick={(e) => e.stopPropagation()}
          className="absolute right-3 top-3 z-20 rounded-full bg-white/90 p-2 text-zinc-600 shadow-sm transition-all hover:bg-white hover:text-rose-500 active:scale-90"
        >
          <Heart size={18} />
        </button>

        {/* Product Image with Zoom Effect */}
        <Image
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div>
          <button
            onClick={(e) => { e.stopPropagation(); setIsOpen(true); }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
      flex h-10 w-10 items-center justify-center rounded-full
      bg-slate-100 text-emerald-600 opacity-0 shadow-lg
      transition-all delay-150 duration-300
      hover:text-emerald-500 cursor-pointer
      group-hover:opacity-100"
            title="Quick View"
          >
            <Eye size={20} />
          </button>
        </div>


        {/* Add to Cart - Sliding up from bottom of Image */}
        <div className="absolute cursor-pointer inset-x-0 bottom-0 translate-y-full p-3 transition-transform duration-300 ease-out group-hover:translate-y-0 bg-linear-to-t from-black/40 to-transparent">
          <button onClick={(e) => { e.stopPropagation(); handleAddToCart(); }} className="flex w-40 mx-auto items-center cursor-pointer justify-center gap-2 rounded-lg bg-emerald-600 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-emerald-500 active:scale-95 transition-all">
            <ShoppingCart size={15} />
            Add to Cart
          </button>
        </div>

      </div>

      {/* Product Details (Static below the image) */}
      <Link href={`/products/${product.slug}`} className="flex flex-col p-4 cursor-pointer">
        <div className="mb-1">
          <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">Category</span>
          <h3 className="text-sm font-semibold text-zinc-800 line-clamp-1 group-hover:text-emerald-600 transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="mt-1">
          <span className="text-lg font-bold text-zinc-900">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </Link>
      <ProductDetailModal product={product} open={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
}