"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Package,
  Truck,
  Heart,
  Ticket,
  MapPin,
  BoxIcon
} from "lucide-react";

import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const userName = session?.user?.name || "User";

  useEffect(() => {
    if (status === "loading") return;

    if (status === "unauthenticated") {
      router.push("/login");
      return;
    }

    // Check user type for redirection
    // We cast session.user to any because we added 'type' in route.ts but Typescript might not know it yet in the client without type augmentation
    const user = session?.user as any;
    if (user?.type === "regular") {
      router.push("/dashboard/customer");
    } else if (user?.type === "admin") {
      router.push("/dashboard/admin"); // Or wherever admin goes
    }
    // If no type or other type, assume customer or stay here? 
    // If we stay here, we render this page, which looks like a customer dashboard summary.
    // For now, let's redirect regular to customer dashboard as requested.
  }, [session, status, router]);

  if (status === "loading") {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="space-y-8 p-4 md:p-8 font-sans bg-gray-100">

      {/* Greeting */}
      <div>
        <h1 className="text-2xl font-bold">
          Good Afternoon, <span className="text-emerald-600">{userName}!</span>
        </h1>
        <p className="mt-1 text-gray-400">
          Here's what's happening with your account today.
        </p>
      </div>



      {/* Top Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6">

        {/* My Orders Card */}
        <Link
          href="/dashboard/my-orders"
          className="group relative h-52 overflow-hidden rounded-2xl border border-purple-100 dark:border-purple-800/50 hover:shadow-md transition-shadow"
        >
          {/* Background image with darkness */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/assets/icon/cart.png')",
            }}
          />

          {/* Text content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-4">
            <div className="mx-auto h-16 w-16 bg-orange-100 dark:bg-orange-800 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-200">
              <BoxIcon className="h-8 w-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-wide">
                My Orders
              </h3>
              <p className="mt-1 text-sm text-zinc-200">
                All of your orders in one place
              </p>
            </div>
          </div>
        </Link>



        {/* Wishlist Card */}
        <Link href="/dashboard/wishlist"
          className="group relative h-52 overflow-hidden rounded-2xl border border-purple-100 dark:border-purple-800/50 hover:shadow-md transition-shadow">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/assets/icon/wishlist.jpeg')",
            }}
          />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <div className="mx-auto h-16 w-16 bg-orange-100 dark:bg-orange-800 rounded-full flex items-center justify-center text-orange-600 dark:text-orange-200">
              <Heart className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Wishlist</h3>
              <p className="text-sm text-zinc-200">All of your wishlist items in here</p>
            </div>
          </div>
        </Link>

        {/* Coupon Card */}
        <Link
          href="/dashboard/coupons"
          className="group relative h-52 overflow-hidden rounded-2xl border border-purple-100 dark:border-purple-800/50 hover:shadow-md transition-shadow">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url('/assets/icon/cupon.png')",
            }}
          />
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <div className="mx-auto h-16 w-16 bg-pink-100 dark:bg-pink-800 rounded-full flex items-center justify-center text-pink-600 dark:text-pink-200">
              <Ticket className="h-8 w-8" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 dark:text-white text-lg">Coupon</h3>
              <p className="text-sm text-zinc-200">All of your coupons in here</p>
            </div>
          </div>
        </Link>


      </div>

      {/* Utility Cards */}
      {/* <div className="grid md:grid-cols-2 gap-6">
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
      </div> */}

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