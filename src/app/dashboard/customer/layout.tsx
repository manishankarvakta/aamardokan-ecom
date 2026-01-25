"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    User,
    Package,
    Heart,
    Ticket,
    Bell,
    LogOut
} from "lucide-react";

const SIDEBAR_LINKS = [
    { name: "Dashboard", href: "/dashboard/customer", icon: LayoutDashboard },
    { name: "My Profile", href: "/dashboard/customer/profile", icon: User },
    { name: "My Orders", href: "/dashboard/customer/my-orders", icon: Package },
    { name: "Wishlist", href: "/dashboard/customer/wishlist", icon: Heart },
    { name: "Coupon", href: "/dashboard/customer/coupons", icon: Ticket },
    // { name: "Order Tracking", href: "/dashboard/customer/tracking", icon: Truck },
    { name: "Notification", href: "/dashboard/customer/notifications", icon: Bell },
];

export default function CustomerLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="container mx-auto px-4 md:px-6 py-8">
            <div className="flex flex-col md:flex-row gap-8">

                {/* Sidebar Navigation */}
                <aside className="w-full md:w-64 shrink-0 space-y-8">

                    {/* User Header */}
                    <div className="flex items-center gap-4 p-4 bg-white  rounded-xl border border-gray-100 shadow-sm">
                        <div className="h-12 w-12 rounded-full bg-gray-200  overflow-hidden flex items-center justify-center text-xl font-bold">
                            ZR
                        </div>
                        <div>
                            <p className="font-semibold">Zaheen Rakib</p>
                            <p className="text-xs">Member since 2023</p>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <nav className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                        <div className="py-2">
                            {SIDEBAR_LINKS.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`flex items-center gap-3 px-6 py-3 text-sm font-medium transition-colors relative ${isActive
                                                ? "text-emerald-600 bg-emerald-50"
                                                : "text-gray-600 hover:text-emerald-600 hover:bg-gray-50 dark:text-gray-400"
                                            }`}
                                    >
                                        {isActive && (
                                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-600 rounded-r-full" />
                                        )}
                                        <link.icon className="h-5 w-5" />
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </div>
                    </nav>

                    {/* Logout Button */}
                    <button className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-red-600 text-white font-medium hover:bg-red-700 transition-colors shadow-sm">
                        <LogOut className="h-5 w-5" />
                        Logout
                    </button>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1">
                    {children}
                </main>
            </div>
        </div>
    );
}
