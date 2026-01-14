"use client";

import React from 'react';
import Link from 'next/link';
import { Home, Search, ArrowLeft, ShoppingBag } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      {/* Visual Illustration Section */}
      <div className="relative">
        {/* Large stylized 404 Background */}
        <h1 className="text-[12rem] md:text-[20rem] font-black text-zinc-50 leading-none select-none">
          404
        </h1>
        
        {/* Floating Grocery Bag Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative animate-bounce duration-[3000ms]">
            <div className="bg-emerald-50 p-8 rounded-[2.5rem] border-2 border-emerald-100 shadow-xl shadow-emerald-100/50">
              <ShoppingBag size={80} className="text-emerald-600 stroke-[1.5]" />
            </div>
            {/* Decorative "Spilled" items (Circles) */}
            <div className="absolute -top-4 -right-2 h-6 w-6 bg-amber-400 rounded-full animate-pulse" />
            <div className="absolute -bottom-2 -left-4 h-4 w-4 bg-rose-400 rounded-full" />
          </div>
        </div>
      </div>

      {/* Text Content */}
      <div className="text-center -mt-10 md:-mt-20 z-10">
        <h2 className="text-3xl md:text-3xl font-black text-zinc-900 tracking-tight">
          Whoops! Your bag is empty.
        </h2>
        <p className="mt-4 text-zinc-500 max-w-md mx-auto text-lg">
          The page you are looking for seems to have rolled away. Don't worry, our fresh products are just a click away!
        </p>

        {/* Action Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="w-full sm:w-auto flex items-center justify-center gap-2 text-white px-8 py-4 rounded-2xl font-bold bg-emerald-600 transition-all active:scale-95 shadow-xl shadow-zinc-200"
          >
            <Home size={20} />
            Back to Home
          </Link>
          
        </div>

        {/* Quick Links / Help */}
        <div className="mt-16 pt-8 border-t border-zinc-100">
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-4">Popular Categories</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Fruits', 'Vegetables', 'Dairy', 'Frozen'].map((cat) => (
              <Link     
                key={cat} 
                href={`/category/${cat.toLowerCase()}`}
                className="text-sm font-bold text-zinc-600 hover:text-emerald-600 transition-colors"
              >
                #{cat}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;