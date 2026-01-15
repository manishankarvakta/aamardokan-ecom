"use client";

import React, { useState } from 'react';
import { RefreshCcw, PackageCheck, Truck, Banknote, AlertCircle, ChevronRight, Search, FileText } from 'lucide-react';
import { toast } from 'sonner';

const Return = () => {
  const [orderId, setOrderId] = useState('');

  const handleCheckStatus = (e: React.FormEvent) => {
    e.preventDefault();
    toast.info("Checking order eligibility...");
  };

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header Section */}
      <div 
      className="py-20 px-4 bg-cover bg-center text-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/image/banner.jpeg')",
                }}

      >
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-500/75 text-white px-4 py-2 rounded-full mb-6">
            <RefreshCcw size={18} className="animate-spin-slow" />
            <span className="text-xs font-black uppercase tracking-widest">Hassle-Free Returns</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Easy <span className="text-emerald-500">Refunds</span> & Returns
          </h1>
          <p className="mt-4 text-zinc-200 max-w-xl mx-auto text-lg font-medium">
            Not happy with your items? No problem. We'll make it right within minutes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* 1. Quick Action: Start a Return */}
          <div className="lg:col-span-8">
            <div className="bg-white border border-zinc-100 p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-zinc-200/50">
              <h2 className="text-2xl font-black text-zinc-900 mb-2">Initiate a Return</h2>
              <p className="text-zinc-500 mb-8 font-medium">Enter your Order ID to see which items are eligible for a refund.</p>
              
              <form onSubmit={handleCheckStatus} className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                  <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-400" size={20} />
                  <input 
                    type="text"
                    value={orderId}
                    onChange={(e) => setOrderId(e.target.value)}
                    placeholder="Order ID (e.g., #ORD-12345)"
                    className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl pl-14 pr-5 py-5 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  />
                </div>
                <button className="bg-emerald-600 text-white px-10 py-5 rounded-2xl font-black hover:bg-emerald-700 transition-all active:scale-95 shadow-lg shadow-zinc-100">
                  Find Order
                </button>
              </form>

              {/* Policy Quick Links */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-emerald-200 transition-colors group cursor-pointer">
                  <PackageCheck className="text-emerald-600" />
                  <div>
                    <h4 className="font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">Return Policy</h4>
                    <p className="text-xs text-zinc-500 mt-1">Read about which items can be returned.</p>
                  </div>
                  <ChevronRight size={16} className="ml-auto text-zinc-300" />
                </div>
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-emerald-200 transition-colors group cursor-pointer">
                  <Banknote className="text-emerald-600" />
                  <div>
                    <h4 className="font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">Refund Status</h4>
                    <p className="text-xs text-zinc-500 mt-1">Check the progress of your money back.</p>
                  </div>
                  <ChevronRight size={16} className="ml-auto text-zinc-300" />
                </div>
              </div>
            </div>
          </div>

          {/* 2. Side Panel: Guidelines */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-emerald-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <AlertCircle className="text-white" />
                Quick Rules
              </h3>
              <div className="space-y-6 relative z-10">
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center font-black text-white text-xs">1</div>
                  <p className="text-sm text-white font-medium">Fresh produce must be reported within <span className="text-white">6 hours</span> of delivery.</p>
                </div>
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center font-black text-white text-xs">2</div>
                  <p className="text-sm text-white font-medium">Packaged goods must have the <span className="text-white">original seal</span> intact.</p>
                </div>
                <div className="flex gap-4">
                  <div className="h-8 w-8 rounded-full bg-emerald-500 flex items-center justify-center font-black text-white text-xs">3</div>    
                  <p className="text-sm text-white font-medium">Refunds are processed within <span className="text-white">3-5 business days</span>.</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50 border border-emerald-100 rounded-[2.5rem] p-8">
               <h4 className="text-emerald-900 font-black mb-2 uppercase text-xs tracking-widest">Need Help?</h4>
               <p className="text-emerald-800 text-sm font-medium leading-relaxed">
                 Our support team is available 24/7 to assist you with complicated returns.
               </p>
               <button className="mt-6 font-black text-sm text-emerald-600 border-b-2 border-emerald-200 hover:border-emerald-600 transition-all">
                 Contact Live Support
               </button>
            </div>
          </div>
        </div>

        {/* 3. The Process Steps */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-zinc-900 tracking-tight">How it Works</h2>
            <div className="h-1.5 w-12 bg-emerald-500 mx-auto mt-4 rounded-full" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: <Search />, title: "Request", desc: "Select items from your order history." },
              { icon: <FileText />, title: "Approval", desc: "Our team reviews your request instantly." },
              { icon: <Truck />, title: "Pickup", desc: "Our hero collects the item from your door." },
              { icon: <Banknote />, title: "Refund", desc: "Money is credited back to your account." },
            ].map((step, i) => (
              <div key={i} className="text-center group">
                <div className="h-20 w-20 text-zinc-100 rounded-[2rem] flex items-center justify-center mx-auto mb-6 bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  {React.cloneElement(step.icon as React.ReactElement)}
                </div>
                <h4 className="font-black text-zinc-900 mb-2 uppercase text-xs tracking-widest">{step.title}</h4>
                <p className="text-zinc-500 text-sm font-medium px-4 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .animate-spin-slow {
          animation: spin 6s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Return;