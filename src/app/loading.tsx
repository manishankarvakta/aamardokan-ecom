"use client"; // Required for many animation/styling syncs in Next.js 15+

import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        {/* Outer Ring */}
        <div className="h-20 w-20 rounded-full border-4 border-zinc-100"></div>
        
        {/* Animated Spinning Ring */}
        <div className="absolute h-20 w-20 animate-spin rounded-full border-4 border-emerald-600 border-t-transparent"></div>
        
        {/* Center Pulsing Icon (Optional) */}
        <div className="absolute h-8 w-8 animate-pulse rounded-full bg-emerald-100"></div>
      </div>
      
      <div className="mt-6 flex flex-col items-center gap-2">
       <h2 className="text-lg font-bold text-zinc-800">Curating Your Experience</h2>
<p className="text-sm text-zinc-500 animate-pulse">Fetching the best deals for you</p>

      </div>
    </div>
  );
}