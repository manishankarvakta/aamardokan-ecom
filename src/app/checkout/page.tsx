"use client";

import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store/store";
import Link from "next/link";
import { toast } from "sonner";
import { orderService } from "@/services/orderService";
import { useRouter } from "next/navigation";

const CheckoutPage: React.FC = () => {
    const cartItems = useSelector((state: RootState) => state.cart.items);

    const totals = useMemo(() => {
        const finalTotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
        const originalTotal = finalTotal / 0.85;
        const discountTotal = originalTotal - finalTotal;
        return { originalTotal, discountTotal, finalTotal };
    }, [cartItems]);

    const formatCurrency = (n: number) =>
        `৳ ${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    const [address, setAddress] = useState({
        name: "",
        email: "",
        phone: "",
        line1: "",
        city: "",
        zip: "",
    });
    const [payment, setPayment] = useState<"cod" | "card">("cod");

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const placeOrder = async () => {
        if (!address.name || !address.phone || !address.line1 || !address.city || !address.zip) {
            toast.error("Please fill in shipping address");
            return;
        }
        if (cartItems.length === 0) {
            toast.error("Your cart is empty");
            return;
        }

        setLoading(true);
        try {
            const orderData = {
                items: cartItems,
                total: totals.finalTotal,
                customer: address,
                paymentMethod: payment,
            };
            const result = await orderService.createOrder(orderData);
            if (result.success) {
                toast.success("Order placed successfully!");
                // Clear cart (in a real app you'd dispatch a clearCart action)
                router.push("/dashboard/my-orders");
            } else {
                toast.error(result.message || "Failed to place order");
            }
        } catch (error) {
            console.error("Checkout error:", error);
            toast.error("Something went wrong during checkout");
        } finally {
            setLoading(false);
        }
    };

    if (cartItems.length === 0) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
                <h2 className="text-xl font-semibold">No items to checkout</h2>
                <Link href="/products" className="bg-emerald-600 text-white px-6 py-2 rounded-lg">Browse Products</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-bold mb-8">Checkout</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 space-y-6">
                        <div className="bg-white rounded-2xl shadow-sm p-8">
                            <div className="mb-6">
                                <h2 className="text-xl font-bold text-zinc-800">Shipping Details</h2>
                                <p className="text-sm text-zinc-500">Where should we send your order?</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {/* Full Name */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-zinc-600 ml-1 uppercase tracking-wider">Full Name</label>
                                    <input
                                        className="bg-zinc-100 border-none rounded-xl px-4 py-3 outline-none focus:bg-emerald-50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                                        placeholder="e.g. John Doe"
                                        value={address.name}
                                        onChange={(e) => setAddress({ ...address, name: e.target.value })}
                                    />
                                </div>

                                {/* Phone */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-zinc-600 ml-1 uppercase tracking-wider">Phone Number</label>
                                    <input
                                        className="bg-zinc-100 border-none rounded-xl px-4 py-3 outline-none focus:bg-emerald-50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                                        placeholder="+88 (01) 000-0000"
                                        value={address.phone}
                                        onChange={(e) => setAddress({ ...address, phone: e.target.value })}
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-1.5 sm:col-span-2">
                                    <label className="text-xs font-semibold text-zinc-600 ml-1 uppercase tracking-wider">Email (Optional)</label>
                                    <input
                                        className="bg-zinc-100 border-none rounded-xl px-4 py-3 outline-none focus:bg-emerald-50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                                        placeholder="john@example.com"
                                        value={address.email}
                                        onChange={(e) => setAddress({ ...address, email: e.target.value })}
                                    />
                                </div>

                                {/* Address Line */}
                                <div className="flex flex-col gap-1.5 sm:col-span-2">
                                    <label className="text-xs font-semibold text-zinc-600 ml-1 uppercase tracking-wider">Street Address</label>
                                    <input
                                        className="bg-zinc-100 border-none rounded-xl px-4 py-3 outline-none focus:bg-emerald-50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                                        placeholder="House number and street name"
                                        value={address.line1}
                                        onChange={(e) => setAddress({ ...address, line1: e.target.value })}
                                    />
                                </div>

                                {/* City */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-zinc-600 ml-1 uppercase tracking-wider">City</label>
                                    <input
                                        className="bg-zinc-100 border-none rounded-xl px-4 py-3 outline-none focus:bg-emerald-50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                                        placeholder="Dhaka"
                                        value={address.city}
                                        onChange={(e) => setAddress({ ...address, city: e.target.value })}
                                    />
                                </div>

                                {/* ZIP */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-zinc-600 ml-1 uppercase tracking-wider">ZIP / Postal Code</label>
                                    <input
                                        className="bg-zinc-100 border-none rounded-xl px-4 py-3 outline-none focus:bg-emerald-50 focus:ring-2 focus:ring-emerald-500/20 transition-all duration-200"
                                        placeholder="10001"
                                        value={address.zip}
                                        onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6">
                            <h2 className="text-lg font-bold mb-4">Payment Method</h2>
                            <div className="flex gap-4">
                                <button onClick={() => setPayment("cod")} className={`px-4 py-2 rounded-lg border ${payment === "cod" ? "border-emerald-600 text-emerald-700 bg-emerald-50" : "border-zinc-200 text-zinc-700"}`}>Cash on Delivery</button>
                                <button onClick={() => setPayment("card")} className={`px-4 py-2 rounded-lg border ${payment === "card" ? "border-emerald-600 text-emerald-700 bg-emerald-50" : "border-zinc-200 text-zinc-700"}`}>Credit/Debit Card</button>
                            </div>
                            {payment === "card" && (
                                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <input className="border border-zinc-200 rounded-lg px-3 py-2 sm:col-span-2" placeholder="Card Number" />
                                    <input className="border border-zinc-200 rounded-lg px-3 py-2" placeholder="Expiry MM/YY" />
                                    <input className="border border-zinc-200 rounded-lg px-3 py-2" placeholder="CVC" />
                                    <input className="border border-zinc-200 rounded-lg px-3 py-2 sm:col-span-2" placeholder="Name on Card" />
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="lg:col-span-4">
                        <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6 sticky top-24">
                            <h3 className="text-lg font-bold text-zinc-900 mb-6">Order Summary</h3>
                            <div className="space-y-4">
                                {cartItems.map((i) => (
                                    <div key={i.id} className="flex items-start justify-between">
                                        <div>
                                            <p className="text-sm font-medium text-zinc-900">{i.name}</p>
                                            <p className="text-xs text-zinc-500">Qty {i.quantity}</p>
                                        </div>
                                        <div className="text-sm font-semibold text-zinc-900">{formatCurrency(i.price * i.quantity)}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 space-y-2 text-sm">
                                <div className="flex justify-between text-zinc-600">
                                    <span>Sub-Total</span>
                                    <span className="font-medium text-zinc-900">{formatCurrency(totals.originalTotal)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-zinc-600">Discount</span>
                                    <span className="text-red-600 font-medium">-{formatCurrency(totals.discountTotal)}</span>
                                </div>
                                <div className="flex justify-between text-zinc-600 border-b border-dashed pb-4">
                                    <span>Shipping</span>
                                    <span className="text-emerald-600 font-medium">FREE</span>
                                </div>
                                <div className="pt-2 flex justify-between text-xl font-black text-zinc-900">
                                    <span>Total</span>
                                    <span>{formatCurrency(totals.finalTotal)}</span>
                                </div>
                            </div>

                            <button onClick={placeOrder} className="mt-8 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all active:scale-[0.98]">
                                Place Order
                            </button>

                            <p className="text-center text-xs text-zinc-400 mt-4">
                                Secure SSL Encrypted Payment
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;