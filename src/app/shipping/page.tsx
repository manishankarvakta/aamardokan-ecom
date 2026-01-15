"use client";

import React from 'react';
import { Truck, Clock, ShieldCheck, Map, AlertCircle, CheckCircle2 } from 'lucide-react';

const shippingZones = [
  { area: "Dhaka North", time: "60 - 90 Mins", cost: "৳60", freeAbove: "৳1500" },
  { area: "Dhaka South", time: "90 - 120 Mins", cost: "৳70", freeAbove: "৳1500" },
  { area: "Gazipur / Savar", time: "Next Day", cost: "৳120", freeAbove: "৳3000" },
  { area: "Other Cities", time: "2 - 3 Days", cost: "৳150", freeAbove: "Not Available" },
];

const Shipping = () => {
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Dark Header */}
      <div 
      className="py-20 px-4 bg-cover bg-center text-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/image/banner.jpeg')",
                }}>
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-emerald-500/50 text-emerald-100 px-4 py-2 rounded-full mb-6">
            <Truck size={18} />
            <span className="text-xs font-black uppercase tracking-widest">Delivery Information</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
            Fast & <span className="text-emerald-500">Fresh</span> Delivery
          </h1>
          <p className="mt-4 text-zinc-200 max-w-xl mx-auto text-lg">
            We ensure your groceries reach your doorstep while maintaining the highest quality and freshness.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* 1. Feature Highlights */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Clock />, title: "Express Delivery", desc: "Get your groceries within 90 minutes in Dhaka city." },
              { icon: <ShieldCheck />, title: "Safe Packaging", desc: "Eco-friendly, temperature-controlled packaging for fresh items." },
              { icon: <Map />, title: "Live Tracking", desc: "Follow your delivery hero in real-time from our app." },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white border border-zinc-100 p-8 rounded-[2.5rem] shadow-xl shadow-zinc-200/50 flex flex-col items-center text-center">
                <div className="h-14 w-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-4">
                  {React.cloneElement(feature.icon as React.ReactElement)}
                </div>
                <h3 className="font-bold text-xl text-zinc-900">{feature.title}</h3>
                <p className="text-zinc-500 text-sm mt-2 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* 2. Shipping Rates Table */}
          <div className="lg:col-span-2 bg-white border border-zinc-100 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
            <h3 className="text-2xl font-black text-zinc-900 mb-8">Delivery Zones & Rates</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-zinc-100">
                    <th className="pb-4 text-xs font-black text-zinc-400 uppercase tracking-widest">Zone Area</th>
                    <th className="pb-4 text-xs font-black text-zinc-400 uppercase tracking-widest">Timeframe</th>
                    <th className="pb-4 text-xs font-black text-zinc-400 uppercase tracking-widest">Standard Fee</th>
                    <th className="pb-4 text-xs font-black text-zinc-400 uppercase tracking-widest text-right">Free Delivery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-50">
                  {shippingZones.map((zone, idx) => (
                    <tr key={idx} className="group">
                      <td className="py-5 font-bold text-zinc-900 group-hover:text-emerald-600 transition-colors">{zone.area}</td>
                      <td className="py-5 text-sm text-zinc-500">{zone.time}</td>
                      <td className="py-5 font-bold text-zinc-700">{zone.cost}</td>
                      <td className="py-5 text-right">
                        <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase ${zone.freeAbove === 'Not Available' ? 'bg-zinc-100 text-zinc-400' : 'bg-emerald-100 text-emerald-700'}`}>
                          {zone.freeAbove}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Important Notes Panel */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-amber-50 border border-amber-100 rounded-[2.5rem] p-8">
              <div className="flex items-center gap-3 text-amber-600 mb-4">
                <AlertCircle size={24} />
                <h4 className="font-black uppercase tracking-tight text-sm">Important Note</h4>
              </div>
              <p className="text-sm text-amber-800 leading-relaxed font-medium">
                During heavy rain or extreme traffic conditions, delivery times may be extended. We will notify you immediately if there is a delay.
              </p>
            </div>

            <div className="bg-emerald-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-4">Freshness First!</h4>
                <ul className="space-y-3">
                  {['Strict quality checks', 'Cold chain delivery', 'Contactless drop-off'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-zinc-200">
                      <CheckCircle2 size={16} className="text-emerald-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 h-32 w-32 bg-emerald-500/10 rounded-full blur-3xl group-hover:bg-emerald-500/20 transition-all" />
            </div>
          </div>

        </div>

        {/* Bottom Support CTA */}
        <div className="mt-16 text-center py-10 border-t border-zinc-100">
          <p className="text-zinc-500 font-medium">Still have questions about your area?</p>
          <button className="mt-4 bg-zinc-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-600 transition-all">
            Check Your Zip Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default Shipping;