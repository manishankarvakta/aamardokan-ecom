"use client";

import React, { useState } from 'react';
import { Ticket, Copy, Check, Clock, Info, Percent } from 'lucide-react';
import { toast } from 'sonner';

const initialCoupons = [
  {
    id: 1,
    code: "FRESH20",
    discount: "20% OFF",
    title: "First Order Special",
    description: "Valid on all grocery items above ৳1000",
    expiry: "Jan 30, 2026",
    type: "percentage",
    isUsed: false,
  },
  {
    id: 2,
    code: "FREE-SHIP",
    discount: "FREE DELIVERY",
    title: "Weekend Flash Sale",
    description: "Applicable for orders within Dhaka city only",
    expiry: "Jan 18, 2026",
    type: "shipping",
    isUsed: false,
  },
  {
    id: 3,
    code: "SAVE500",
    discount: "৳500 OFF",
    title: "Monthly Mega Saver",
    description: "Minimum purchase of ৳5000 required",
    expiry: "Feb 10, 2026",
    type: "fixed",
    isUsed: true,
  }
];

const Coupons = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    toast.success(`Code ${code} copied!`);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen pb-20">
      <div className="max-w-5xl mx-auto px-4 py-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-zinc-900 tracking-tight flex items-center gap-3">
              My Coupons <Ticket className="text-emerald-500" />
            </h1>
            <p className="text-zinc-500 text-sm mt-1">Apply these codes at checkout to save big on your groceries.</p>
          </div>
          <div className="bg-emerald-100 px-4 py-2 rounded-2xl flex items-center gap-2">
             <Percent size={18} className="text-emerald-700" />
             <span className="text-sm font-bold text-emerald-800">3 Available Coupons</span>
          </div>
        </div>

        {/* Coupons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {initialCoupons.map((coupon) => (
            <div 
              key={coupon.id} 
              className={`relative flex items-center bg-white  rounded-2xl overflow-hidden transition-all ${coupon.isUsed ? 'opacity-60 grayscale' : 'border-emerald-500 shadow-sm'}`}
            >
              {/* Left Side: Discount Value */}
              <div className={`flex flex-col items-center justify-center w-32 h-full p-4 text-center border-r-2 border-dashed ${coupon.isUsed ? 'bg-zinc-300 border-zinc-200' : 'bg-emerald-50 border-emerald-100'}`}>
                <span className={`text-xl font-black ${coupon.isUsed ? 'text-zinc-500' : 'text-emerald-600'}`}>
                  {coupon.discount.split(' ')[0]}
                </span>
                <span className={`text-[10px] font-bold uppercase ${coupon.isUsed ? 'text-zinc-400' : 'text-emerald-500'}`}>
                  {coupon.discount.split(' ').slice(1).join(' ')}
                </span>
              </div>

              {/* Right Side: Details */}
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-zinc-900">{coupon.title}</h3>
                    <p className="text-xs text-zinc-500 mt-1">{coupon.description}</p>
                  </div>
                  {coupon.isUsed && <span className="bg-zinc-200 text-zinc-600 text-[9px] font-black px-2 py-1 rounded-md uppercase">Used</span>}
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest flex items-center gap-1">
                      <Clock size={10} /> Expires: {coupon.expiry}
                    </span>
                    <div className="mt-1 flex items-center gap-1 text-[10px] text-blue-500 font-bold hover:underline cursor-pointer">
                      <Info size={10} /> View Terms
                    </div>
                  </div>

                  <button 
                    disabled={coupon.isUsed}
                    onClick={() => copyToClipboard(coupon.code)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all active:scale-95 ${
                      copiedCode === coupon.code 
                      ? 'bg-emerald-900 text-white' 
                      : 'bg-emerald-600 text-white hover:bg-emerald-600'
                    }`}
                  >
                    {copiedCode === coupon.code ? <Check size={14} /> : <Copy size={14} />}
                    {copiedCode === coupon.code ? 'COPIED' : coupon.code}
                  </button>
                </div>
              </div>

              {/* Ticket Circles Decoration */}
              <div className="absolute top-1/2 -left-3 h-6 w-6 -translate-y-1/2 rounded-full bg-zinc-50 border-r-2 border-zinc-200 hidden sm:block"></div>
              <div className="absolute top-1/2 -right-3 h-6 w-6 -translate-y-1/2 rounded-full bg-zinc-50 border-l-2 border-zinc-200 hidden sm:block"></div>
            </div>
          ))}
        </div>

        {/* Empty State / Help */}
        <div className="mt-12 flex flex-col items-center justify-center p-10 bg-white border border-zinc-200 rounded-[2.5rem] text-center">
            <div className="h-14 w-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mb-4">
              <Ticket size={28} />
            </div>
            <h4 className="font-bold text-zinc-900">Have a physical coupon?</h4>
            <p className="text-zinc-500 text-sm mt-1 max-w-xs mx-auto">Enter your promo code below to add it to your digital wallet.</p>
            <div className="mt-6 flex w-full max-w-sm gap-2">
              <input 
                type="text" 
                placeholder="Enter Code (e.g. SAVER100)" 
                className="flex-1 bg-zinc-50 border border-zinc-200 rounded-xl px-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="bg-emerald-600 text-white px-6 py-2 rounded-xl font-bold text-sm hover:bg-emerald-700 transition-colors">Apply</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Coupons;