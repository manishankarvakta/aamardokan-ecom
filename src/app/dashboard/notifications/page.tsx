"use client";

import React, { useState } from 'react';
import { Bell, Package, Tag, Info, Check, Trash2, Circle, Clock } from 'lucide-react';
import { toast } from 'sonner';

const initialNotifications = [
  {
    id: 1,
    type: 'order',
    title: 'Order Delivered!',
    message: 'Your order #ORD-99281 has been successfully delivered to your home address.',
    time: '2 mins ago',
    isRead: false,
    icon: <Package size={18} />,
    color: 'text-emerald-600 bg-emerald-50'
  },
  {
    id: 2,
    type: 'promo',
    title: 'Flash Sale: 50% OFF',
    message: 'Get 50% discount on all dairy products for the next 3 hours. Use code: DAIRY50.',
    time: '1 hour ago',
    isRead: false,
    icon: <Tag size={18} />,
    color: 'text-amber-600 bg-amber-50'
  },
  {
    id: 3, 
    type: 'system',
    title: 'Address Updated',
    message: 'Your office address has been successfully updated in your profile settings.',
    time: 'Yesterday',
    isRead: true,
    icon: <Info size={18} />,
    color: 'text-blue-600 bg-blue-50'
  }
];

const Notification = () => {
  const [notifications, setNotifications] = useState(initialNotifications);

  const markAsRead = (id: number) => {
    setNotifications(notifications.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const markAllRead = () => {
    setNotifications(notifications.map(n => ({ ...n, isRead: true })));
    toast.success("All notifications marked as read");
  };

  const deleteNotification = (id: number) => {
    setNotifications(notifications.filter(n => n.id !== id));
    toast.error("Notification deleted");
  };

  return (
    <div className="min-h-screen bg-zinc-50/50 pb-20">
      <div className="max-w-4xl mx-auto px-4 py-10">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-black text-zinc-900 tracking-tight flex items-center gap-3">
              Notifications <Bell className="text-emerald-500" />
            </h1>
            <p className="text-zinc-500 text-sm mt-1">Stay updated with your order status and latest offers.</p>
          </div>
          
          {notifications.some(n => !n.isRead) && (
            <button 
              onClick={markAllRead}
              className="text-xs font-bold text-emerald-600 bg-emerald-50 px-4 py-2 rounded-xl hover:bg-emerald-100 transition-colors flex items-center gap-2"
            >
              <Check size={14} /> Mark all as read
            </button>
          )}
        </div>

        {/* Notification List */}
        <div className="space-y-4">
          {notifications.length > 0 ? (
            notifications.map((n) => (
              <div 
                key={n.id} 
                className={`relative group bg-white border rounded-[2rem] p-6 transition-all hover:shadow-md ${!n.isRead ? 'border-emerald-100 bg-emerald-50/10' : 'border-zinc-100'}`}
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className={`h-12 w-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${n.color}`}>
                    {n.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pr-8">
                    <div className="flex items-center gap-2">
                      <h3 className={`font-bold text-zinc-900 ${!n.isRead ? 'text-lg' : 'text-base'}`}>
                        {n.title}
                      </h3>
                      {!n.isRead && <Circle size={8} fill="#10b981" className="text-emerald-500" />}
                    </div>
                    <p className="text-sm text-zinc-500 mt-1 leading-relaxed">
                      {n.message}
                    </p>
                    <div className="flex items-center gap-1 text-[10px] font-bold text-zinc-400 mt-3 uppercase tracking-widest">
                      <Clock size={12} /> {n.time}
                    </div>
                  </div>

                  {/* Actions (Visible on hover) */}
                  <div className="absolute top-6 right-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    {!n.isRead && (
                      <button 
                        onClick={() => markAsRead(n.id)}
                        className="h-8 w-8 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-600 hover:bg-emerald-600 hover:text-white transition-all"
                        title="Mark as read"
                      >
                        <Check size={14} />
                      </button>
                    )}
                    <button 
                      onClick={() => deleteNotification(n.id)}
                      className="h-8 w-8 flex items-center justify-center rounded-full bg-zinc-100 text-zinc-600 hover:bg-rose-500 hover:text-white transition-all"
                      title="Delete"
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            /* Empty State */
            <div className="bg-white border border-zinc-100 rounded-[2.5rem] p-20 text-center">
              <div className="h-20 w-20 bg-zinc-50 text-zinc-300 rounded-full flex items-center justify-center mx-auto mb-6">
                <Bell size={40} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900">All caught up!</h3>
              <p className="text-zinc-500 text-sm mt-2 max-w-xs mx-auto">
                No new notifications at the moment. We'll let you know when something important happens.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notification;