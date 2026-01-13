"use client";

import React, { useMemo } from "react";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/lib/store/store";
import { addToCart, removeFromCart } from "@/lib/store/features/cartSlice";
import Link from "next/link";
import { toast } from "sonner";

const CartPage: React.FC = () => {
  const dispatch = useDispatch();
  
  // 1. Get items from Redux Store
  const cartItems = useSelector((state: RootState) => state.cart.items);

  // 2. Calculate Totals (using unitPrice vs originalPrice if available)
  const totals = useMemo(() => {
    const finalTotal = cartItems.reduce((sum, i) => sum + i.price * i.quantity, 0);
    // Assuming a 15% discount for the "Original Price" UI demo if not in data
    const originalTotal = finalTotal / 0.85; 
    const discountTotal = originalTotal - finalTotal;
    return { originalTotal, discountTotal, finalTotal };
  }, [cartItems]);

  const formatCurrency = (n: number) => 
    `৳ ${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  // 3. Handlers using Redux Actions
  const handleIncrease = (item: any) => {
    dispatch(addToCart(item));
  };

  const handleDecrease = (id: string) => {
    // Logic for decrease usually lives in slice, 
    // for now we'll just demonstrate removing or dispatching a 'decrement' action
    // If you haven't made a decrement action yet, this is a placeholder
    console.log("Decrement ID:", id);
  };

  const handleRemove = (id: string) => {
    dispatch(removeFromCart(id));
    toast.success(`${id} removed from cart!`, {
      description: "You can view your items in the shopping cart.",
      duration: 3000,
      icon: <Trash2 className="h-4 w-4" />,
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
        <ShoppingBag size={64} className="text-zinc-300" />
        <h2 className="text-xl font-semibold">Your cart is empty</h2>
        <Link href="/" className="bg-emerald-600 text-white px-6 py-2 rounded-lg">
          Go Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-8">Shopping Cart ({cartItems.length})</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Items List */}
          <div className="lg:col-span-8 space-y-4">
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden">
              <div className="px-6 py-3 border-b border-zinc-100 bg-zinc-50/50 text-sm text-zinc-500">
                Package from <span className="font-medium text-zinc-900">Grocery Store</span>
              </div>

              <div className="p-6 divide-y divide-zinc-100">
                {cartItems.map((item) => (
                  <div key={item.id} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-6">
                    {/* Image */}
                    <img src={item.image} alt={item.name} className="w-24 h-24 rounded-xl object-cover border border-zinc-100" />
                    
                    {/* Details */}
                    <div className="flex-1 space-y-1">
                      <h3 className="font-semibold text-zinc-900 leading-tight">{item.name}</h3>
                      <p className="text-xs text-zinc-500 uppercase tracking-wide">ID: {item.id.slice(0,8)}</p>
                      
                      <div className="flex items-center gap-4 mt-4">
                        <div className="flex items-center border border-zinc-200 rounded-lg overflow-hidden bg-zinc-50">
                          <button 
                            onClick={() => handleDecrease(item.id)}
                            className="px-3 py-1 hover:bg-zinc-200 text-zinc-600 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="px-4 py-1 text-sm font-bold min-w-[40px] text-center">{item.quantity}</span>
                          <button 
                            onClick={() => handleIncrease(item)}
                            className="px-3 py-1 hover:bg-zinc-200 text-zinc-600 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => handleRemove(item.id)}
                          className="flex items-center gap-1 text-red-500 hover:text-red-700 text-sm cursor-pointer font-medium transition-colors"
                        >
                          <Trash2 size={16} />
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="text-right flex flex-col justify-between">
                      <div>
                        <div className="text-lg font-bold text-zinc-900">{formatCurrency(item.price * item.quantity)}</div>
                        <div className="text-sm text-zinc-400 line-through">{formatCurrency((item.price * 1.2) * item.quantity)}</div>
                      </div>
                      <div className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded self-end">
                        Saved {formatCurrency((item.price * 0.2) * item.quantity)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-xl shadow-sm border border-zinc-200 p-6 sticky top-24">
              <h3 className="text-lg font-bold text-zinc-900 mb-6">Order Summary</h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex justify-between text-zinc-600">
                  <span>Sub-Total ({cartItems.length} items)</span>
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

              <button className="mt-8 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-emerald-200 transition-all active:scale-[0.98]">
                Proceed to Checkout
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

export default CartPage;