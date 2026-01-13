"use client";

import React from "react";
import Link from "next/link";
import { 
  Package, 
  Truck, 
  CheckCircle, 
  Star, 
  Heart, 
  Ticket, 
  MapPin, 
  ChevronRight 
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-8 p-4 md:p-8 font-sans bg-gray-100">
      
      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold">
          Good Afternoon, <span className="text-emerald-600">Zaheen Rakib!</span>
        </h1>
        <p className="mt-1 text-gray-400">
          Here's what's happening with your account today.
        </p>
      </div>

      {/* Quick Stats (Order Status) */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-semibold text-lg">My Orders</h2>
          {/* <Link href="/dashboard/orders" className="text-sm text-emerald-600 hover:underline flex items-center gap-1">
            See More <ChevronRight className="h-4 w-4" />
          </Link> */}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { label: "Processing", icon: Package, count: 0 },
            { label: "Ready To Ship", icon: CheckCircle, count: 0 },
            { label: "Shipped", icon: Truck, count: 0 },
            { label: "Review", icon: Star, count: 0 },
          ].map((stat) => (
             <div key={stat.label} className="flex flex-col items-center gap-3 group cursor-pointer">
               <div className="h-12 w-12 rounded-full  flex items-center justify-center bg-emerald-600 text-white transition-colors">
                 <stat.icon className="h-6 w-6" />
               </div>
               <span className="text-sm font-medium">{stat.label}</span>
             </div>
          ))}
        </div>
      </div>

      {/* Top Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* My Orders Card */}
        <Link href="/dashboard/orders" className="group relative overflow-hidden rounded-2xl bg-purple-50 dark:bg-purple-900/20 p-6 border border-purple-100 dark:border-purple-800/50 hover:shadow-md transition-shadow">
          <div className="relative z-10 text-center space-y-4">
             <div className="mx-auto h-16 w-16 bg-purple-100 dark:bg-purple-800 rounded-full flex items-center justify-center text-purple-600 dark:text-purple-200">
               <Package className="h-8 w-8" />
             </div>
             <div>
               <h3 className="font-bold text-gray-900 dark:text-white text-lg">My Orders</h3>
               <p className="text-sm text-gray-500 dark:text-gray-400">All of your orders in here</p>
             </div>
          </div>
        </Link>

        {/* Wishlist Card */}
        <Link href="/wishlist" className="group relative overflow-hidden rounded-2xl bg-orange-50 dark:bg-orange-900/20 p-6 border border-orange-100 dark:border-orange-800/50 hover:shadow-md transition-shadow">
          <div className="relative z-10 text-center space-y-4">
             <div className="mx-auto h-16 w-16 bg-orange-100 dark:bg-orange-800 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-200">
               <Heart className="h-8 w-8" />
             </div>
             <div>
               <h3 className="font-bold text-gray-900 dark:text-white text-lg">Wishlist</h3>
               <p className="text-sm text-gray-500 dark:text-gray-400">All of your wishlist items in here</p>
             </div>
          </div>
        </Link>

        {/* Coupon Card */}
        <Link href="/dashboard/coupons" className="group relative overflow-hidden rounded-2xl bg-pink-50 dark:bg-pink-900/20 p-6 border border-pink-100 dark:border-pink-800/50 hover:shadow-md transition-shadow">
          <div className="relative z-10 text-center space-y-4">
             <div className="mx-auto h-16 w-16 bg-pink-100 dark:bg-pink-800 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-200">
               <Ticket className="h-8 w-8" />
             </div>
             <div>
               <h3 className="font-bold text-gray-900 dark:text-white text-lg">Coupon</h3>
               <p className="text-sm text-gray-500 dark:text-gray-400">All of your coupons in here</p>
             </div>
          </div>
        </Link>
      </div>

      {/* Utility Cards */}
      <div className="grid md:grid-cols-2 gap-6">
         <Link href="/dashboard/tracking" className="flex items-center gap-4 p-6 bg-white  rounded-xl border border-gray-100 shadow-sm transition-colors">
            <div className="h-12 w-12 rounded-full bg-green-50  text-green-600 flex items-center justify-center">
              <Truck className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Order Tracking</h3>
              <p className="text-sm text-gray-500">Check your order status</p>
            </div>
         </Link>

         <Link href="/dashboard/address" className="flex items-center gap-4 p-6 bg-white  rounded-xl border border-gray-100 shadow-sm transition-colors">
            <div className="h-12 w-12 rounded-full bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">Address Book</h3>
              <p className="text-sm text-gray-500">Manage shipping addresses</p>
            </div>
         </Link>
      </div>

      {/* Recent Orders - Empty State */}
      <div className="space-y-4">
        <h2 className="font-semibold text-lg text-gray-900">Recent Orders</h2>
        <div className="bg-white  rounded-xl border border-gray-100 shadow-sm p-12 text-center">
          <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Package className="h-8 w-8" />
          </div>
          <p className=" font-medium">Look Like You Didn't Place Any Order Yet</p>
          <button className="p-2">
            <Link href="/" className="inline-block mt-4  text-sm font-medium text-white bg-emerald-600 p-4 rounded-2xl">
            Start Shopping
          </Link>
          </button>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;