"use client";

import React, { useState } from 'react';
import { MapPin, Plus, Home, Briefcase, MoreVertical, Trash2, Edit2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const initialAddresses = [
  {
    id: 1,
    type: 'Home',
    name: 'Arif Ahmed',
    phone: '+880 1712-345678',
    address: 'House 12, Road 5, Block C, Banani',
    city: 'Dhaka',
    isDefault: true,
  },
  {
    id: 2,
    type: 'Office',
    name: 'Arif Ahmed',
    phone: '+880 1812-987654',
    address: 'Level 4, Zenith Tower, Karwan Bazar',
    city: 'Dhaka',
    isDefault: false,
  }
];

const Address = () => {
  const [addresses, setAddresses] = useState(initialAddresses);

  const handleDelete = (id: number) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
    toast.error("Address removed");
  };

  const handleSetDefault = (id: number) => {
    setAddresses(addresses.map(addr => ({
      ...addr,
      isDefault: addr.id === id
    })));
    toast.success("Default address updated");
  };

  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      <div className="max-w-6xl mx-auto px-4 py-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-black text-zinc-900 tracking-tight flex items-center gap-3">
              Delivery Addresses <MapPin className="text-emerald-500" />
            </h1>
            <p className="text-zinc-500 text-sm mt-1">Manage your shipping locations for faster checkout.</p>
          </div>
          <button className="flex items-center gap-2 bg-emerald-600 text-white px-6 py-3 rounded-2xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-100 active:scale-95">
            <Plus size={20} />
            Add New Address
          </button>
        </div>

        {/* Address Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {addresses.map((addr) => (
            <div 
              key={addr.id} 
              className={`relative group bg-white border-2 rounded-[2.5rem] p-8 transition-all ${addr.isDefault ? 'border-emerald-500 shadow-xl shadow-emerald-50/50' : 'border-zinc-100 hover:border-zinc-300'}`}
            >
              {/* Type Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${addr.type === 'Home' ? 'bg-blue-50 text-blue-600' : 'bg-amber-50 text-amber-600'}`}>
                  {addr.type === 'Home' ? <Home size={12} /> : <Briefcase size={12} />}
                  {addr.type}
                </div>
                
                {addr.isDefault && (
                  <div className="flex items-center gap-1 text-emerald-600">
                    <CheckCircle2 size={16} fill="currentColor" className="text-white" />
                    <span className="text-[10px] font-black uppercase tracking-tighter">Default</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-1">
                <h3 className="font-bold text-zinc-900 text-lg">{addr.name}</h3>
                <p className="text-sm text-zinc-500 font-medium">{addr.phone}</p>
                <p className="text-sm text-zinc-600 leading-relaxed pt-2">
                  {addr.address}, {addr.city}
                </p>
              </div>

              {/* Actions Footer */}
              <div className="mt-8 pt-6 border-t border-zinc-50 flex items-center justify-between">
                <div className="flex gap-4">
                  <button className="text-zinc-400 hover:text-zinc-900 transition-colors">
                    <Edit2 size={18} />
                  </button>
                  <button 
                    onClick={() => handleDelete(addr.id)}
                    className="text-zinc-400 hover:text-rose-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                
                {!addr.isDefault && (
                  <button 
                    onClick={() => handleSetDefault(addr.id)}
                    className="text-xs font-bold text-emerald-600 hover:underline"
                  >
                    Set as Default
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Add New Card Placeholder */}
          <button className="flex flex-col items-center justify-center border-2 border-dashed border-zinc-200 rounded-[2.5rem] p-8 text-zinc-400 hover:border-emerald-500 hover:text-emerald-600 transition-all bg-zinc-50/50 group">
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm group-hover:scale-110 transition-transform">
              <Plus size={24} />
            </div>
            <span className="font-bold text-sm">Add New Address</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Address;