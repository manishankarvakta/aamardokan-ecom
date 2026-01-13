"use client";

import { X, ShoppingCart } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Product } from "@/lib/products";
import { useDispatch } from "react-redux";
import { addToCart } from "@/lib/store/features/cartSlice";

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
  const overlayRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(false);
  const [origin, setOrigin] = useState<{ x: number; y: number }>({ x: 50, y: 50 });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      })
    );
  };

  if (!open) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => {
        if (e.target === overlayRef.current) onClose();
      }}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
    >
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="relative w-full max-w-5xl rounded-xl bg-white shadow-2xl">
          <button
            aria-label="Close"
            onClick={onClose}
            className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-zinc-700 shadow hover:bg-white"
          >
            <X size={18} />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {/* Image with zoom */}
            <div
              className="relative overflow-hidden bg-zinc-50 md:rounded-l-xl"
              onMouseMove={(e) => {
                const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                setOrigin({ x, y });
              }}
              onMouseLeave={() => setZoom(false)}
              onClick={() => setZoom((z) => !z)}
            >
              <img
                src={product.image}
                alt={product.name}
                style={{ transformOrigin: `${origin.x}% ${origin.y}%` }}
                className={`h-full w-full object-cover transition-transform duration-300 ${zoom ? "scale-125 cursor-zoom-out" : "scale-100 cursor-zoom-in"}`}
              />
            </div>

            {/* Info */}
            <div className="p-6 md:rounded-r-xl">
              <p className="text-[11px] uppercase tracking-widest text-zinc-400 font-bold">Product</p>
              <h2 className="mt-1 text-xl font-bold text-zinc-900">{product.name}</h2>
              <div className="mt-3 text-2xl font-black text-emerald-700">${product.price.toFixed(2)}</div>

              <div className="mt-4 space-y-2 text-sm text-zinc-700">
                <p>ID: {product.id}</p>
                <p>Category: {product.category}</p>
                <p className="text-zinc-600">
                  High-quality item selected for freshness and taste. Zoom the image to inspect details.
                </p>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={handleAddToCart}
                  className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
                >
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                <button
                  onClick={onClose}
                  className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}