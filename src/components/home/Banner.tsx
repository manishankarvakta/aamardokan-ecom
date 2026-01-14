"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "/assets/image/banner.jpeg",
    title: "Fresh Groceries, Delivered Fast",
    subtitle: "Shop quality produce, dairy, snacks, and more.",
    color: "text-emerald-400",
  },
  {
    id: 2,
    image: "/assets/image/banner1.jpeg", // Make sure this exists
    title: "Organic Vegetables, 100% Natural",
    subtitle: "Straight from the farm to your doorstep.",
    color: "text-amber-400",
  },
  {
    id: 3,
    image: "/assets/image/banner3.png",
    title: "Monthly ,Mega Sale!",
    subtitle: "Get up to 50% off on monthly essentials.",
    color: "text-rose-400",
  },
  {
  id: 4,
  image: "/assets/image/banner4.png",
  title: "Super Weekend ,Deals!",
  subtitle: "Save up to 25% on all your favorites!",
  color: "text-green-500",
}

];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);

  return (
    <section className="relative w-full h-64 sm:h-80 lg:h-[450px] overflow-hidden bg-zinc-100">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <Image
            src={slides[current].image}
            alt={slides[current].title}
            fill
            priority
            className="object-cover"
          />

          {/* Premium Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center px-6 sm:px-12 lg:px-24">
            <div className="max-w-2xl text-left">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
              >
                {slides[current].title.split(',')[0]} 
                <span className={`block ${slides[current].color}`}>
                  {slides[current].title.split(',')[1] || ""}
                </span>
              </motion.h1 >
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-4 text-base sm:text-lg text-zinc-200 opacity-90 max-w-md"
              >
                {slides[current].subtitle}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="/products"
                  className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-8 py-4 text-sm font-bold text-white shadow-xl shadow-emerald-900/20 hover:bg-emerald-500 transition-all active:scale-95"
                >
                  Shop Now
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-8 flex gap-3 z-20">
        <button
          onClick={prevSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black transition-all"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-white border border-white/20 hover:bg-white hover:text-black transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-8 flex gap-2 z-20">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              index === current ? "w-8 bg-emerald-500" : "w-2 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}