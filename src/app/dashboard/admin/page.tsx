"use client";

import React from 'react';
import {
    TrendingUp,
    Users,
    ShoppingBag,
    DollarSign,
    ArrowUpRight,
    ArrowDownRight,
    Package
} from 'lucide-react';

export default function AdminDashboardPage() {
    const stats = [
        {
            title: "Total Revenue",
            value: "৳ 1,24,500",
            change: "+12.5%",
            trend: "up",
            icon: DollarSign,
            color: "bg-emerald-500",
            textColor: "text-emerald-500"
        },
        {
            title: "Total Orders",
            value: "450",
            change: "+8.2%",
            trend: "up",
            icon: ShoppingBag,
            color: "bg-blue-500",
            textColor: "text-blue-500"
        },
        {
            title: "Total Products",
            value: "86",
            change: "-2.4%",
            trend: "down",
            icon: Package,
            color: "bg-purple-500",
            textColor: "text-purple-500"
        },
        {
            title: "Total Customers",
            value: "1,205",
            change: "+5.1%",
            trend: "up",
            icon: Users,
            color: "bg-orange-500",
            textColor: "text-orange-500"
        }
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                    <p className="text-sm text-gray-500">Welcome back, Admin! Here's what's happening today.</p>
                </div>
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 shadow-sm">
                    Download Report
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg bg-opacity-10 ${stat.textColor} bg-current`}>
                                <stat.icon className={`h-6 w-6 ${stat.textColor}`} />
                            </div>
                            <span className={`flex items-center text-xs font-medium px-2 py-1 rounded-full ${stat.trend === 'up' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                                }`}>
                                {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3 mr-1" /> : <ArrowDownRight className="h-3 w-3 mr-1" />}
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between">
                        <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
                        <button className="text-sm text-emerald-600 font-medium hover:underline">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 font-semibold text-gray-700">Order ID</th>
                                    <th className="px-6 py-3 font-semibold text-gray-700">Customer</th>
                                    <th className="px-6 py-3 font-semibold text-gray-700">Amount</th>
                                    <th className="px-6 py-3 font-semibold text-gray-700">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <tr key={i} className="hover:bg-gray-50 text-gray-700">
                                        <td className="px-6 py-3 font-medium">#ORD-00{i}</td>
                                        <td className="px-6 py-3">Customer Name</td>
                                        <td className="px-6 py-3">৳ 1,500</td>
                                        <td className="px-6 py-3">
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                                                Pending
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Top Products */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
                    <div className="p-6 border-b border-gray-100">
                        <h2 className="text-lg font-bold text-gray-900">Top Products</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="h-12 w-12 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                                    <Package className="h-6 w-6" />
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-sm font-medium text-gray-900">Premium Product {i}</h4>
                                    <p className="text-xs text-gray-500">120 sales</p>
                                </div>
                                <span className="text-sm font-bold text-gray-900">৳ 450</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}