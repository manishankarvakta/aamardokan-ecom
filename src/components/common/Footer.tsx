"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone, ShoppingCart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-zinc-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        
        {/* Newsletter Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-2">Subscribe to our newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get the latest updates on new products and upcoming sales.
            </p>
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none"
            />
            <button className="bg-emerald-600 text-white px-6 py-2 rounded-md text-sm font-semibold hover:bg-emerald-700 transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            {/* Left: Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-emerald-600 text-white p-2 rounded-xl transition-transform group-hover:scale-110">
              <ShoppingCart className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-emerald-700">
              Aamar <span className="text-emerald-600">Dokan</span>
            </span>
          </Link>
          
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Your one-stop destination for premium products. Quality meets affordability in every purchase.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-500 hover:text-emerald-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-emerald-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-emerald-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-zinc-500 hover:text-emerald-600 transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="font-semibold mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-gray-400">
              <li><Link href="/products?category=new" className="hover:text-emerald-700">New Arrivals</Link></li>
              <li><Link href="/products?category=bestsellers" className="hover:text-emerald-700">Best Sellers</Link></li>
              <li><Link href="/products?category=electronics" className="hover:text-emerald-700">Electronics</Link></li>
              <li><Link href="/products?category=fashion" className="hover:text-emerald-700">Fashion</Link></li>
              <li><Link href="/deals" className="hover:text-emerald-700">Deals</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-zinc-600 dark:text-gray-400">
              <li><Link href="/contact" className="hover:text-emerald-700">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-emerald-700">FAQs</Link></li>
              <li><Link href="/shipping" className="hover:text-emerald-700">Shipping Info</Link></li>
              <li><Link href="/returns" className="hover:text-emerald-700">Returns & Exchanges</Link></li>
              <li><Link href="/tracking" className="hover:text-emerald-700">Order Tracking</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-zinc-600 dark:text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>123 Commerce St, Market City, ST 12345</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>support@storename.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-zinc-500 text-center md:text-left">
            © {new Date().getFullYear()} TechSoul Grocery. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-zinc-500">
            <Link href="/privacy" className="hover:text-emerald-700">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-emerald-700">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-emerald-700">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;