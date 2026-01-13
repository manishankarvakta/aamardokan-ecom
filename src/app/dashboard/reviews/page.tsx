"use client";

import React, { useState } from 'react';
import { Star, ThumbsUp, MessageSquare, Camera, Filter, ChevronDown } from 'lucide-react';

const mockReviews = [
  {
    id: 1,
    user: "Arif Ahmed",
    rating: 5,
    date: "2 days ago",
    comment: "The organic bananas were incredibly fresh! Best quality I've seen in any online grocery app in Dhaka. Highly recommended.",
    likes: 12,
    images: ["https://images.unsplash.com/photo-1571771894821-ad9902d83f4e?q=80&w=200&auto=format&fit=crop"],
    verified: true,
  },
  {
    id: 2,
    user: "Sarah Khan",
    rating: 4,
    date: "1 week ago",
    comment: "Everything was great, but the delivery took 30 minutes longer than expected. The packaging for the eggs was very secure though.",
    likes: 5,
    images: [],
    verified: true,
  }
];

const Review = () => {
  const [activeTab, setActiveTab] = useState('newest');

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: Ratings Summary */}
        <div className="lg:col-span-4">
          <h2 className="text-3xl font-black text-zinc-900 tracking-tight">Customer Reviews</h2>
          
          <div className="mt-6 p-8 bg-zinc-50 rounded-[2.5rem] border border-zinc-100 text-center">
            <div className="text-6xl font-black text-zinc-900">4.8</div>
            <div className="flex justify-center gap-1 mt-3">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={20} className={s <= 4 ? "fill-amber-400 text-amber-400" : "text-zinc-300"} />
              ))}
            </div>
            <p className="mt-3 text-sm font-medium text-zinc-500">Based on 1,240 reviews</p>
            
            <div className="mt-8 space-y-3">
              {[5, 4, 3, 2, 1].map((rating) => (
                <div key={rating} className="flex items-center gap-3 text-sm">
                  <span className="w-3 font-bold text-zinc-600">{rating}</span>
                  <div className="flex-1 h-2 bg-zinc-200 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-400 rounded-full" 
                      style={{ width: `${rating === 5 ? 85 : rating === 4 ? 10 : 5}%` }}
                    />
                  </div>
                  <span className="w-10 text-xs text-zinc-400 font-medium">
                    {rating === 5 ? '85%' : rating === 4 ? '10%' : '5%'}
                  </span>
                </div>
              ))}
            </div>

            <button className="w-full mt-8 bg-zinc-900 text-white py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-all active:scale-95 shadow-lg shadow-zinc-200">
              Write a Review
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN: Review Feed */}
        <div className="lg:col-span-8">
          {/* Filters */}
          <div className="flex items-center justify-between border-b border-zinc-100 pb-6 mb-8">
            <div className="flex items-center gap-6">
              <button className="text-sm font-bold text-zinc-900 border-b-2 border-emerald-500 pb-1">All Reviews</button>
              <button className="text-sm font-bold text-zinc-400 hover:text-zinc-900 transition-colors pb-1 flex items-center gap-1">
                With Photos <Camera size={14} />
              </button>
            </div>
            <button className="flex items-center gap-2 text-sm font-bold text-zinc-600 bg-zinc-100 px-4 py-2 rounded-xl">
              <Filter size={14} /> Newest <ChevronDown size={14} />
            </button>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-10">
            {mockReviews.map((review) => (
              <div key={review.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-start justify-between">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-zinc-500 text-lg">
                      {review.user.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 flex items-center gap-2">
                        {review.user}
                        {review.verified && (
                          <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full uppercase tracking-tighter">Verified</span>
                        )}
                      </h4>
                      <div className="flex gap-0.5 mt-1">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <Star key={s} size={12} className={s <= review.rating ? "fill-amber-400 text-amber-400" : "text-zinc-200"} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-zinc-400 font-medium">{review.date}</span>
                </div>

                <div className="mt-4">
                  <p className="text-zinc-600 leading-relaxed text-sm md:text-base">
                    {review.comment}
                  </p>
                  
                  {review.images.length > 0 && (
                    <div className="mt-4 flex gap-2">
                      {review.images.map((img, idx) => (
                        <img 
                          key={idx} 
                          src={img} 
                          alt="Review" 
                          className="h-24 w-24 rounded-2xl object-cover border border-zinc-100 hover:scale-105 transition-transform cursor-pointer" 
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-6 flex items-center gap-6">
                  <button className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-emerald-600 transition-colors">
                    <ThumbsUp size={14} /> Helpful ({review.likes})
                  </button>
                  <button className="flex items-center gap-1.5 text-xs font-bold text-zinc-400 hover:text-zinc-900 transition-colors">
                    <MessageSquare size={14} /> Reply
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="w-full mt-12 py-4 border-2 border-dashed border-zinc-200 rounded-2xl text-zinc-400 font-bold hover:border-zinc-900 hover:text-zinc-900 transition-all">
            Load More Reviews
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;