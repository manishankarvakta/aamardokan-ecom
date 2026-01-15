"use client";

import React from 'react';
import Link from 'next/link';
import { Package, ChevronRight, Clock, CheckCircle2, Truck, Box, CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';

// Mock Data - In a real app, you'd fetch this from your database/Redux
const orders = [
  {
    id: "ORD-99281",
    date: "Oct 24, 2023",
    status: "Delivered",
    total: 1250.00,
    itemsCount: 3,
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "ORD-88273",
    date: "Oct 28, 2023",
    status: "Shipped",
    total: 450.50,
    itemsCount: 1,
    image: "https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?q=80&w=200&auto=format&fit=crop",
  },
  {
    id: "ORD-77210",
    date: "Nov 02, 2023",
    status: "Processing",
    total: 890.00,
    itemsCount: 2,
    image: "https://images.unsplash.com/photo-1610348725531-843dff563e2c?q=80&w=200&auto=format&fit=crop",
  }
];

const MyOrders = () => {
  const getStatusStyle = (status: string) => {
    switch (status) {
      case 'Delivered': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      case 'Shipped': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Processing': return 'bg-amber-50 text-amber-600 border-amber-100';
      default: return 'bg-zinc-50 text-zinc-600 border-zinc-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered': return <CheckCircle2 size={14} />;
      case 'Shipped': return <Truck size={14} />;
      case 'Processing': return <Clock size={14} />;
      default: return <Box size={14} />;
    }
  };

  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      
      
      <div className="max-w-4xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-black text-zinc-900 tracking-tight">My Orders</h1>
            <p className="text-zinc-500 text-sm mt-1">Check the status of your recent orders and manages returns.</p>
          </div>
          <div className="hidden sm:flex h-12 w-12 items-center justify-center rounded-2xl bg-white border border-zinc-200 shadow-sm text-zinc-400">
            <Package size={24} />
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map((order) => (
            <Link href={`/dashboard/my-orders/${order.id}`} key={order.id} className="group block">
              <div className="relative bg-white border border-zinc-200 rounded-3xl p-4 sm:p-6 transition-all hover:shadow-xl hover:shadow-zinc-200/50 active:scale-[0.99] cursor-pointer">
                <div className="flex flex-col sm:flex-row sm:items-center gap-6">

                  {/* Product Thumbnail Group */}
                  <div className="relative h-20 w-20 flex-shrink-0">
                    <Image
                    fill
                      src={order.image}
                      alt="Order thumb"
                      className="h-full w-full object-cover rounded-2xl border border-zinc-100"
                    />
                    {order.itemsCount > 1 && (
                      <div className="absolute -bottom-2 -right-2 bg-zinc-900 text-white text-[10px] font-bold px-2 py-1 rounded-lg border-2 border-white">
                        +{order.itemsCount - 1} More
                      </div>
                    )}
                  </div>

                  {/* Order Details */}
                  <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-4 items-center">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Order ID</p>
                      <p className="font-bold text-zinc-900 mt-0.5">{order.id}</p>
                    </div>

                    <div className="hidden sm:block">
                      <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Date Placed</p>
                      <p className="font-medium text-zinc-600 mt-0.5">{order.date}</p>
                    </div>

                    <div>
                      <p className="text-[10px] uppercase font-bold text-zinc-400 tracking-widest">Total Amount</p>
                      <p className="font-bold text-emerald-600 mt-0.5">৳{order.total.toFixed(2)}</p>
                    </div>

                    <div className="flex flex-col items-start sm:items-end">
                      <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold uppercase tracking-tight ${getStatusStyle(order.status)}`}>
                        {getStatusIcon(order.status)}
                        {order.status}
                      </div>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden md:block text-zinc-300 group-hover:text-zinc-900 transition-colors">
                    <ChevronRight size={20} />
                  </div>
                </div>
                </div>
            </Link>
          ))}
        </div>

        {/* Empty State Help */}
        <div className="mt-12 text-center p-8 border-2 border-dashed border-zinc-200 rounded-[2.5rem]">
          <p className="text-zinc-500 text-sm">Can't find an order? <button className="text-emerald-600 font-bold hover:underline">Contact Support</button></p>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;