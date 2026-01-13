"use client";

import { X, ShoppingCart, ShieldCheck, Truck, RefreshCw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Product } from "@/lib/products";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/store/features/cartSlice";
import { toast } from "sonner";
import Image from "next/image";

export default function ProductDetailModal({
  product,
  open,
  onClose,
}: {
  product: Product;
  open: boolean;
  onClose: () => void;
}) {
  const dispatch = useDispatch();
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });

  // Handle Escape Key to close
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setOrigin({ x, y });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      
      {/* 1. BACKDROP (Clicking this closes the modal) */}
      <div 
        className="fixed inset-0 z-50 bg-zinc-900/70 backdrop-blur-sm animate-in fade-in duration-200" 
        onClick={onClose} 
      />

      {/* 2. CLOSE BUTTON (Positioned outside the white box) */}
      <button
        onClick={onClose}
        className="absolute cursor-pointer right-4 top-4 z-70 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-white/20 hover:rotate-90 md:right-10 md:top-10"
        aria-label="Close modal"
      >
        <X size={32} strokeWidth={1.5} />
      </button>

      {/* 3. MODAL CONTENT */}
      <div className="relative z-60 w-full max-w-5xl min-h-[60vh] overflow-hidden rounded-2xl bg-white shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* LEFT SIDE: Info */}
          <div className="order-2 flex flex-col p-8 md:order-1  overflow-y-auto">
            <div className="flex-1">
              <span className="inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-600">
                Fresh Stock
              </span>
              <h2 className="mt-6 text-2xl font-black text-zinc-900 lg:text-3xl">
                {product.name}
              </h2>
              
              <div className="mt-6 flex items-center gap-4">
                <span className="text-2xl font-black text-emerald-600">${product.price.toFixed(2)}</span>
                <div className="flex flex-col">
                    <span className="text-sm text-zinc-400 line-through">${(product.price * 1.3).toFixed(2)}</span>
                    <span className="text-xs font-bold text-rose-500 text-nowrap">Save 30% Today</span>
                </div>
              </div>

              <p className="mt-8 text-sm leading-relaxed text-zinc-500">
                {product?.description || "Indulge in the finest selection of hand-picked items. Guaranteed freshness from farm to your table."}
              </p>

              <div className="mt-10 grid grid-cols-3 gap-6 border-t border-zinc-100 pt-8">
                <div className="text-center">
                   <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 text-emerald-600">
                      <Truck size={20} />
                   </div>
                   <p className="mt-2 text-[10px] font-bold uppercase text-zinc-400">Instant Delivery</p>
                </div>
                <div className="text-center">
                   <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 text-emerald-600">
                      <ShieldCheck size={20} />
                   </div>
                   <p className="mt-2 text-[10px] font-bold uppercase text-zinc-400">Quality Assured</p>
                </div>
                <div className="text-center">
                   <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-50 text-emerald-600">
                      <RefreshCw size={20} />
                   </div>
                   <p className="mt-2 text-[10px] font-bold uppercase text-zinc-400">Free Returns</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                dispatch(addToCart(product));
                toast.success("Added to cart!");
              }}
              className="mt-8 flex h-12 w-1/2 mx-auto bg-emerald-600 items-center justify-center gap-3 rounded-2xl text-lg font-bold text-white transition-all hover:bg-emerald-800 active:scale-95 shadow-xl"
            >
              <ShoppingCart size={22} />
              Add to Cart
            </button>
          </div>

          {/* RIGHT SIDE: Image Zoom */}
          <div 
            className="group relative order-1 h-[380px] md:h-[520px] overflow-hidden bg-zinc-100 md:order-2"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setZoom(true)}
            onMouseLeave={() => setZoom(false)}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{
                transformOrigin: `${origin.x}% ${origin.y}%`,
                transform: zoom ? "scale(2)" : "scale(1)"
              }}
              className="h-full w-full object-cover transition-transform duration-500 ease-out cursor-crosshair"
            />
            {/* Glossy Overlay */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 to-transparent opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}