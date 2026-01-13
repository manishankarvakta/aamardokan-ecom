"use client";

import React from 'react';
import { Heart, ShoppingCart, Trash2, ArrowLeft, ShoppingBag } from 'lucide-react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store/store';
import { addToCart } from '@/lib/store/features/cartSlice';
// import { removeFromWishlist } from '@/lib/store/features/wishlistSlice'; 
import Link from 'next/link';
import { toast } from 'sonner';
import Image from 'next/image';

const WishList = () => {
  const dispatch = useDispatch();
  
  // 1. Get items from Redux (Mocking with selector structure)
  // Replace this with your actual selector: const items = useSelector((state: RootState) => state.wishlist.items);
  const items = [
    { id: '1', name: 'Fresh Organic Bananas', price: 4.99, image: 'https://images.unsplash.com/photo-1571771894821-ad9902d83f4e?q=80&w=400&auto=format&fit=crop' },
    { id: '2', name: 'Red Bell Peppers', price: 2.50, image: 'https://images.unsplash.com/photo-1563513307168-a056234296c0?q=80&w=400&auto=format&fit=crop' }
  ];

  const handleMoveToCart = (item: any) => {
    dispatch(addToCart(item));
    toast.success("Moved to cart!");
    // dispatch(removeFromWishlist(item.id));
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
        <div className="bg-rose-50 p-6 rounded-full mb-6">
          <Heart size={48} className="text-rose-400 fill-rose-100" />
        </div>
        <h2 className="text-2xl font-black text-zinc-900">Your wishlist is empty</h2>
        <p className="text-zinc-500 mt-2 text-center max-w-xs">
          Save items you love here to find them easily and add them to your cart.
        </p>
        <Link href="/" className="mt-8 flex items-center gap-2 bg-zinc-900 text-white px-8 py-3 rounded-2xl font-bold hover:bg-emerald-600 transition-all">
          <ArrowLeft size={18} />
          Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white pb-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Heart className="text-rose-500 fill-rose-500" size={24} />
              <h1 className="text-4xl font-black text-zinc-900 tracking-tight">My Wishlist</h1>
            </div>
            <p className="text-zinc-500 font-medium">You have {items.length} items saved for later.</p>
          </div>
          <button className="flex items-center gap-2 text-sm font-bold text-zinc-400 hover:text-rose-500 transition-colors">
            <Trash2 size={16} />
            Clear All Items
          </button>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.id} className="group relative flex flex-col">
              {/* Image Box */}
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-zinc-100 border border-zinc-100">
                <Image
                  src={item.image} 
                  alt={item.name} 
                  fill
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Remove Button */}
                <button 
                  className="absolute top-4 right-4 h-10 w-10 flex items-center justify-center bg-white/90 backdrop-blur-md rounded-full text-zinc-400 hover:text-rose-500 shadow-sm transition-all active:scale-90"
                  title="Remove from wishlist"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Content */}
              <div className="mt-4 px-2">
                <h3 className="font-bold text-zinc-900 text-lg truncate">{item.name}</h3>
                <p className="text-xl font-black text-emerald-600 mt-1">${item.price.toFixed(2)}</p>
                
                <div className="mt-4 flex gap-2">
                  <button 
                    onClick={() => handleMoveToCart(item)}
                    className="flex-1 flex items-center justify-center gap-2 bg-zinc-900 text-white py-3 rounded-xl text-sm font-bold hover:bg-emerald-600 transition-all active:scale-95"
                  >
                    <ShoppingBag size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Small local X icon since it was used but not imported in previous snippet
const X = ({ size, ...props }: any) => (
  <svg 
    width={size} height={size} viewBox="0 0 24 24" fill="none" 
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" {...props}
  >
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);

export default WishList;