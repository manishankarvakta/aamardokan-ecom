import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Promo: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                {/* Left Card: Shopping CTA */}
                <div className="relative flex flex-col md:flex-row items-center bg-[#f7f7f7] rounded-lg overflow-hidden border border-gray-100 shadow-sm h-[250px] md:h-[300px]">

                    {/* Left Content Side */}
                    <div className="w-full md:w-3/5 p-6 md:p-10 z-20">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                            Shop your daily <br className="hidden md:block" /> necessities
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base mb-6 max-w-[280px]">
                            Shop from our popular category. Explore special offers and receive grocery on your doorsteps within 1 hour.
                        </p>
                        <Link
                            href="/shop"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2.5 px-8 rounded-md transition-colors inline-block shadow-md"
                        >
                            Start Shopping
                        </Link>
                    </div>

                    {/* Right Image Side with Gradient Fade */}
                    <div className="hidden md:block absolute right-0 top-0 w-1/2 h-full z-10">
                        <div className="relative w-full h-full">
                            <Image
                                fill
                                src="/assets/image/banner4.png"
                                alt="Fresh groceries"
                                className="object-cover object-right"
                                priority
                            />
                            {/* This div creates the smooth fade from the image to the background color */}
                            <div className="absolute inset-0 bg-linear-to-r from-[#f7f7f7] via-[#f7f7f7]/40 to-transparent" />
                        </div>
                    </div>
                </div>

                {/* Right Card: Video Tutorial */}
                <div className="relative rounded-lg overflow-hidden shadow-sm h-[250px] md:h-[300px]">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/UnBzJsUunrA"
                        title="Small Investment Ecommerce Business in 2026: Amazon, Flipkart, or Meesho – Which is Best?"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                    />
                </div>

            </div>
        </div>
    )
}

export default Promo