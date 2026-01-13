"use client";

import { Heart, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";



type NavbarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Navbar({ isSidebarOpen, toggleSidebar }: NavbarProps) {
  const cartItems = useSelector((state: RootState) => state.cart.items);
const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");

  const onSearch = (e: FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (query.trim()) params.set("q", query.trim());
    else params.delete("q");
    router.push(`/?${params.toString()}`);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border border-zinc-200 shadow-sm">
      <div className="px-4 h-16 flex items-center gap-4">
        <button
          onClick={toggleSidebar}
          className="text-gray-700 focus:outline-none cursor-pointer"
        >
          {isSidebarOpen ? (
            <span className="text-2xl">☰</span>
          ) : (
            <span className="text-1xl">✖️</span>
          )}
        </button>
        <Link href="/" className="flex items-center gap-2 font-semibold text-zinc-900">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded bg-emerald-600 text-white">A</span>
          <span>Ammar Dokan</span>
        </Link>

        <form onSubmit={onSearch} className="flex-1 max-w-xl mx-auto">
          <div className="relative">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full rounded-md border border-zinc-300 bg-white px-3 py-2 pl-9 text-sm outline-none focus:border-emerald-600"
            />
            <span className="absolute left-2 top-1/2 -translate-y-1/2 text-zinc-400">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M21 21l-4.3-4.3M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </div>
        </form>

        <div className="flex items-center gap-3">
          
          {/* Wishlist Button */}
          <Link href="/wishlist" aria-label="Wishlist" className="rounded-md border border-zinc-300 bg-white p-2 hover:bg-zinc-50 transition-colors">
            <Heart size={20} className="text-emerald-600" fill="currentColor" />
          </Link>

          {/* Cart Button */}
          <Link href="/cart" aria-label="Cart" className="relative rounded-md border border-zinc-300 bg-white p-2 hover:bg-zinc-50 transition-colors">
            <ShoppingCart size={20} className="text-emerald-600" />
            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
              {totalItems}
            </span>
          </Link>

          {/* Login Button */}
          <Link href="/login" className="flex items-center gap-2 rounded-md border border-zinc-300 bg-white px-3 py-2 text-sm font-medium hover:bg-zinc-50 transition-colors">
            <User size={18} className="text-emerald-600" />
          </Link>
        </div>
      </div>
    </header>
  );
}