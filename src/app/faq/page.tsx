"use client";

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, Truck, CreditCard, RefreshCw, ShoppingBasket } from 'lucide-react';

const faqData = [
  {
    category: "Delivery",
    icon: <Truck size={18} />,
    question: "How long does delivery take in Dhaka?",
    answer: "We offer instant delivery within 60-90 minutes in most parts of Dhaka city. For scheduled orders, you can pick a time slot that fits your convenience."
  },
  {
    category: "Payments",
    icon: <CreditCard size={18} />,
    question: "What payment methods do you accept?",
    answer: "We accept Cash on Delivery (COD), bKash, Nagad, and all major Credit/Debit cards. Your payment information is processed through a secure SSL gateway."
  },
  {
    category: "Orders",
    icon: <ShoppingBasket size={18} />,
    question: "Can I modify my order after placing it?",
    answer: "You can modify or cancel your order within 10 minutes of placing it. After that, our team starts packing your fresh items, and changes may not be possible."
  },
  {
    category: "Returns",
    icon: <RefreshCw size={18} />,
    question: "What is your return policy for fresh produce?",
    answer: "If you receive any item that is not fresh or is damaged, you can return it at the door to our delivery hero, and we will refund the amount instantly to your wallet."
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Header Section */}
      <div className="py-20 px-4 bg-cover bg-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/image/banner.jpeg')",
                }}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight flex items-center justify-center gap-4">
            Help Center <HelpCircle className="text-emerald-500" size={40} />
          </h1>
          <p className="mt-4 text-zinc-200 max-w-xl mx-auto text-lg font-medium">
            Everything you need to know about our service and products.
          </p>
        </div>
      </div>

      {/* Accordion Content */}
      <div className="max-w-3xl mx-auto px-4 -mt-10">
        <div className="bg-white border border-zinc-100 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-zinc-200/50">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`border-b border-zinc-50 last:border-none transition-all ${openIndex === index ? 'bg-zinc-50/50' : ''}`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-all ${openIndex === index ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200' : 'bg-zinc-100 text-zinc-400'}`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-zinc-400 tracking-widest block mb-1">
                      {item.category}
                    </span>
                    <h3 className={`font-bold text-lg transition-colors ${openIndex === index ? 'text-zinc-900' : 'text-zinc-600 hover:text-zinc-900'}`}>
                      {item.question}
                    </h3>
                  </div>
                </div>
                <div className={`flex-shrink-0 ml-4 h-8 w-8 rounded-full border-2 flex items-center justify-center transition-all ${openIndex === index ? 'border-emerald-500 text-emerald-500 rotate-180' : 'border-zinc-200 text-zinc-400'}`}>
                  {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                </div>
              </button>

              {/* Animated Answer Panel */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-8 pb-8 ml-14">
                  <p className="text-zinc-500 leading-relaxed text-base">
                    {item.answer}
                  </p>
                  <button className="mt-4 text-sm font-bold text-emerald-600 hover:underline">
                    Still need help? Chat with us
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
            <p className="text-zinc-400 text-sm font-medium">
              Didn't find the answer you're looking for? 
              <br />
              <button className="text-zinc-900 font-bold border-b-2 border-emerald-500 mt-2 hover:text-emerald-600 transition-colors">
                Contact our support team
              </button>
            </p>
        </div>
      </div>
    </div>
  );
};

export default Faq;