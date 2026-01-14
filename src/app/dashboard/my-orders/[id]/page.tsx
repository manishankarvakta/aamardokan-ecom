"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Package, Truck, CheckCircle2, Clock, MapPin, CreditCard, ChevronRight } from "lucide-react";

type OrderItem = {
  id: string;
  name: string;
  qty: number;
  price: number;
  image: string;
};

type Order = {
  id: string;
  date: string;
  status: "Processing" | "Shipped" | "Delivered";
  total: number;
  items: OrderItem[];
  shippingAddress: {
    name: string;
    phone: string;
    address: string;
    city: string;
    zip: string;
  };
  payment: {
    method: "Card";
    last4: string;
  };
};

const ORDERS: Order[] = [
  {
    id: "ORD-99281",
    date: "Oct 24, 2023",
    status: "Delivered",
    total: 1250.0,
    items: [
      {
        id: "item-1",
        name: "Premium Leather Backpack",
        qty: 1,
        price: 890.0,
        image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=400&auto=format&fit=crop",
      },
      {
        id: "item-2",
        name: "Smart Fitness Watch",
        qty: 1,
        price: 360.0,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop",
      },
    ],
    shippingAddress: {
      name: "John Doe",
      phone: "01712345678",
      address: "123 Market Street",
      city: "Dhaka",
      zip: "1207",
    },
    payment: {
      method: "Card",
      last4: "4242",
    },
  },
];

export default function OrderDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const order = ORDERS.find((o) => o.id === id) ?? ORDERS[0];

  const steps = [
    { key: "Processing", label: "Processing", icon: Clock },
    { key: "Shipped", label: "Shipped", icon: Truck },
    { key: "Delivered", label: "Delivered", icon: CheckCircle2 },
  ] as const;

  const stepIndex = steps.findIndex((s) => s.key === order.status);

  return (
    <div className="">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-8">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/dashboard/my-orders" className="hover:text-emerald-700">My Orders</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-zinc-900 font-medium">{order.id}</span>
        </div>

        <div className="mt-6 bg-white rounded-2xl p-6 border border-zinc-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-zinc-900">Order {order.id}</h1>
              <p className="text-sm text-zinc-500">Placed on {order.date}</p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm font-bold uppercase tracking-wide bg-emerald-50 text-emerald-600 border-emerald-100">
              <Package className="h-4 w-4" />
              {order.status}
            </div>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-3 gap-4">
              {steps.map((s, i) => {
                const ActiveIcon = s.icon;
                const done = i <= stepIndex;
                return (
                  <div key={s.key} className="text-center">
                    <div className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full ${done ? "bg-emerald-600 text-white" : "bg-zinc-100 text-zinc-400"}`}>
                      <ActiveIcon className="h-6 w-6" />
                    </div>
                    <p className={`mt-2 text-xs font-bold uppercase ${done ? "text-emerald-600" : "text-zinc-400"}`}>{s.label}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-4 h-2 w-full rounded-full bg-zinc-100">
              <div className="h-2 rounded-full bg-emerald-600" style={{ width: `${((stepIndex + 1) / steps.length) * 100}%` }} />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-xl border border-zinc-200 p-4">
              <h2 className="text-lg font-semibold text-zinc-900">Items</h2>
              <div className="mt-4 space-y-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="relative h-20 w-20">
                      <Image src={item.image} alt={item.name} fill sizes="80px" className="object-cover rounded-xl border border-zinc-100" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-zinc-900">{item.name}</p>
                      <p className="text-xs text-zinc-500">Qty: {item.qty}</p>
                    </div>
                    <div className="text-sm font-bold text-zinc-900">৳{(item.price * item.qty).toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl border border-zinc-200 p-4">
              <h2 className="text-lg font-semibold text-zinc-900">Summary</h2>
              <div className="mt-4 space-y-2 text-sm text-zinc-700">
                <div className="flex justify-between"><span>Subtotal</span><span>৳{order.total.toFixed(2)}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>৳0.00</span></div>
                <div className="flex justify-between font-bold text-zinc-900"><span>Total</span><span>৳{order.total.toFixed(2)}</span></div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <div className="text-sm text-zinc-700">
                    <p className="font-medium text-zinc-900">{order.shippingAddress.name} · {order.shippingAddress.phone}</p>
                    <p>{order.shippingAddress.address}, {order.shippingAddress.city} {order.shippingAddress.zip}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-emerald-600" />
                  <p className="text-sm text-zinc-700">Paid by Card •••• {order.payment.last4}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white rounded-xl border border-zinc-200 p-4">
            <h2 className="text-lg font-semibold text-zinc-900">Delivery Updates</h2>
            <div className="mt-4 space-y-3 text-sm text-zinc-700">
              <div className="flex items-center gap-3"><Clock className="h-4 w-4 text-emerald-600" /><span>Order placed</span></div>
              <div className="flex items-center gap-3"><Package className="h-4 w-4 text-emerald-600" /><span>Order processed</span></div>
              <div className="flex items-center gap-3"><Truck className="h-4 w-4 text-emerald-600" /><span>Shipped</span></div>
              <div className="flex items-center gap-3"><CheckCircle2 className="h-4 w-4 text-emerald-600" /><span>Delivered</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}