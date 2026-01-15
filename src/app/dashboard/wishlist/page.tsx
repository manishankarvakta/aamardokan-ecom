"use client";

import React from 'react';
import { Heart, Trash2, ArrowLeft, ShoppingBag, X, Star } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/lib/store/features/cartSlice';
import Link from 'next/link';
import { toast } from 'sonner';
import Image from 'next/image';
import ProductCard from '@/components/home/ProductCard';

const WishList = () => {
  const dispatch = useDispatch();
  
  // Mocking data - replace with your useSelector
  const items = [
    { id: "p-detergent", name: "Laundry Detergent",  slug: "laundry-detergent",  price: 9.49, image: "https://images.unsplash.com/photo-1624372635282-b324bcdd4907", category: "household", description: "Powerful laundry detergent for clean and fresh clothes." },
  { id: "p-dishwash",  name: "Dishwashing Liquid", slug: "dishwashing-liquid", price: 3.79, image: "https://plus.unsplash.com/premium_photo-1664372899205-7cccbe1ad0b0", category: "household", description: "Effective dishwashing liquid for sparkling clean dishes." },
  { id: "p-tissue",    name: "Paper Towels",       slug: "paper-towels",       price: 2.99, image: "https://images.unsplash.com/photo-1583947215259-38e31be8751f", category: "household", description: "Soft and absorbent paper towels for everyday use." },
  ];

  const handleMoveToCart = (item: any) => {
    dispatch(addToCart(item));
    toast.success(`${item.name} added to cart!`);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
        <div className="h-24 w-24 bg-zinc-50 rounded-full flex items-center justify-center mb-6">
          <Heart size={40} className="text-zinc-200" />
        </div>
        <h2 className="text-2xl font-black text-zinc-900">Your wishlist is empty</h2>
        <p className="text-zinc-500 mt-2 text-center max-w-xs font-medium">
          Start adding your favorite fresh groceries to save them for later.
        </p>
        <Link href="/" className="mt-8 flex items-center gap-2 bg-zinc-900 text-white px-10 py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-zinc-200">
          <ArrowLeft size={18} />
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-12 py-8 ">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-zinc-100 pb-8 gap-6">
          <div>
            <h1 className="text-4xl font-black text-zinc-900 tracking-tight">Saved for Later</h1>
            <p className="text-zinc-400 font-bold mt-1 uppercase text-[10px] tracking-widest flex items-center gap-2">
              <span className="h-1.5 w-1.5 bg-emerald-500 rounded-full animate-pulse" />
              {items.length} Items in Wishlist
            </p>
          </div>
          <button className="flex items-center gap-2 text-xs font-black text-rose-500 bg-rose-50 px-5 py-2.5 rounded-xl hover:bg-rose-100 transition-all uppercase tracking-tight">
            <Trash2 size={14} />
            Clear Wishlist
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {items.map((item) => (
              <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishList;