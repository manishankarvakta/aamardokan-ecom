"use client";

import React from 'react';
import { Package, Truck, CheckCircle2, Clock, MapPin, Phone, ChevronLeft } from 'lucide-react';
import Link from 'next/link';

const trackingSteps = [
  { id: 1, title: 'Order Placed', time: '09:30 AM, 14 Jan', status: 'completed', icon: <Package size={18} /> },
  { id: 2, title: 'Processing', time: '10:15 AM, 14 Jan', status: 'completed', icon: <Clock size={18} /> },
  { id: 3, title: 'Out for Delivery', time: '01:45 PM, 14 Jan', status: 'current', icon: <Truck size={18} /> },
  { id: 4, title: 'Delivered', time: 'Expected by 02:30 PM', status: 'upcoming', icon: <CheckCircle2 size={18} /> },
];

const Tracking = () => {
  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      <div className="max-w-4xl mx-auto px-4 py-10">
        
        {/* Top Navigation */}
        <Link href="/orders" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 transition-colors mb-8 group">
          <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Orders</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT: Tracking Timeline */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-8 shadow-sm">
              <div className="flex items-center justify-between mb-10">
                <h1 className="text-2xl font-black text-zinc-900">Track Order</h1>
                <span className="text-xs font-bold bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full uppercase tracking-tighter">
                  ID: #ORD-99281
                </span>
              </div>

              {/* Timeline Stepper */}
              <div className="relative space-y-12">
                {/* Vertical Line */}
                <div className="absolute left-[17px] top-2 bottom-2 w-0.5 bg-zinc-100" />

                {trackingSteps.map((step) => (
                  <div key={step.id} className="relative flex gap-6 items-start">
                    {/* Icon Circle */}
                    <div className={`relative z-10 flex h-9 w-9 items-center justify-center rounded-full border-4 border-white shadow-sm transition-colors ${
                      step.status === 'completed' ? 'bg-emerald-600 text-white' : 
                      step.status === 'current' ? 'bg-zinc-900 text-white animate-pulse' : 'bg-zinc-100 text-zinc-400'
                    }`}>
                      {step.icon}
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className={`font-bold text-sm ${step.status === 'upcoming' ? 'text-zinc-400' : 'text-zinc-900'}`}>
                        {step.title}
                      </h4>
                      <p className="text-xs text-zinc-500 mt-0.5 font-medium">{step.time}</p>
                    </div>

                    {step.status === 'current' && (
                       <div className="ml-auto bg-zinc-900 text-[10px] text-white font-black px-2 py-1 rounded-md uppercase tracking-widest">
                         Live
                       </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Delivery Partner Card */}
            <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-6 flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 bg-zinc-100 rounded-full flex items-center justify-center">
                   <Truck className="text-zinc-600" />
                </div>
                <div>
                  <p className="text-[10px] font-black text-zinc-400 uppercase">Delivery Hero</p>
                  <h4 className="font-bold text-zinc-900">Rana Ahmed</h4>
                </div>
              </div>
              <button className="flex h-10 w-10 items-center justify-center bg-emerald-50 text-emerald-600 rounded-full hover:bg-emerald-600 hover:text-white transition-all">
                <Phone size={18} />
              </button>
            </div>
          </div>

          {/* RIGHT: Delivery Address & Summary */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-zinc-900 text-white rounded-[2.5rem] p-8 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="text-emerald-400" size={20} />
                <h3 className="font-bold text-lg">Delivery Address</h3>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                House 12, Road 5, Block C,<br />
                Banani, Dhaka 1213<br />
                <span className="inline-block mt-4 text-emerald-400 font-bold">+880 1712-345678</span>
              </p>
            </div>

            <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-8 shadow-sm">
              <h3 className="font-bold text-zinc-900 mb-6 flex items-center justify-between">
                Order Items
                <span className="text-xs text-zinc-400">3 Items</span>
              </h3>
              <div className="space-y-4">
                {[1, 2].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-12 w-12 bg-zinc-50 rounded-xl overflow-hidden flex-shrink-0">
                      <img src="https://images.unsplash.com/photo-1571771894821-ad9902d83f4e?q=80&w=100" alt="prod" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-bold text-zinc-900 truncate">Organic Bananas</p>
                      <p className="text-[10px] text-zinc-500 font-bold uppercase">1kg x ৳120</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Tracking;