"use client";

import React from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Message sent! We'll get back to you soon.");
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <div
                className="py-20 px-4 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/image/banner.jpeg')",
                }}
            >
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
                        Get in <span className="text-emerald-500">Touch</span>
                    </h1>
                    <p className="mt-4 text-zinc-200 max-w-xl mx-auto text-lg">
                        Have a question about your order or our products? Our team is here to help you 24/7.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 -mt-10 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    

                    {/* RIGHT: Contact Form */}
                    <div className="lg:col-span-8">
                        <div className="bg-white border border-zinc-100 p-8 md:p-12 rounded-[2.5rem] shadow-xl shadow-zinc-200/50">
                            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-zinc-400 uppercase ml-1">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Arif Ahmed"
                                        className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black text-zinc-400 uppercase ml-1">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="arif@example.com"
                                        className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                                    />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-black text-zinc-400 uppercase ml-1">Subject</label>
                                    <select className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all">
                                        <option>Order Issue</option>
                                        <option>Delivery Inquiry</option>
                                        <option>Product Feedback</option>
                                        <option>Other</option>
                                    </select>
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-black text-zinc-400 uppercase ml-1">Message</label>
                                    <textarea
                                        required
                                        rows={6}
                                        placeholder="How can we help you today?"
                                        className="w-full bg-zinc-50 border border-zinc-100 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all resize-none"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <button
                                        type="submit"
                                        className="w-full md:w-auto flex items-center bg-emerald-600 justify-center gap-3 text-white px-10 py-5 rounded-2xl font-black hover:bg-emerald-700 transition-all active:scale-95 shadow-lg shadow-zinc-200"
                                    >
                                        Send Message
                                        <Send size={18} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* LEFT: Contact Info Cards */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="bg-white border border-zinc-100 p-8 rounded-[2.5rem] shadow-xl shadow-zinc-200/50">
                            <div className="space-y-8">
                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 flex-shrink-0">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">Call Us</p>
                                        <p className="text-lg font-bold text-zinc-900">+880 1712-345678</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">Email Us</p>
                                        <p className="text-lg font-bold text-zinc-900">support@grocery.com</p>
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <div className="h-12 w-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 flex-shrink-0">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">Visit Us</p>
                                        <p className="text-lg font-bold text-zinc-900">Banani, Dhaka-1213</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12 pt-8 border-t border-zinc-50">
                                <div className="flex items-center gap-3 text-emerald-600 bg-emerald-50 p-4 rounded-2xl">
                                    <Clock size={20} />
                                    <p className="text-sm font-bold uppercase tracking-tight">Response time: &lt; 2 Hours</p>
                                </div>
                            </div>
                        </div>

                        {/* Live Chat Teaser */}
                        <div className="bg-emerald-600 p-8 rounded-[2.5rem] text-white">
                            <MessageCircle size={32} className="mb-4" />
                            <h3 className="text-xl font-bold">Live Support</h3>
                            <p className="text-emerald-100 text-sm mt-2">Chat with our experts right now for instant help.</p>
                            <button className="mt-6 w-full py-3 bg-white text-emerald-600 rounded-xl font-black text-sm hover:bg-emerald-700 hover:text-white transition-all">
                                Start Chatting
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact; 