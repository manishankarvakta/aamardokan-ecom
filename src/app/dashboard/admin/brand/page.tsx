"use client";

import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Tag, Image as ImageIcon } from 'lucide-react';

interface Brand {
    id: number;
    name: string;
    logo: string;
    productsCount: number;
    status: 'Active' | 'Inactive';
}

const INITIAL_BRANDS: Brand[] = [
    { id: 1, name: 'Samsung', logo: '', productsCount: 45, status: 'Active' },
    { id: 2, name: 'Apple', logo: '', productsCount: 32, status: 'Active' },
    { id: 3, name: 'Nike', logo: '', productsCount: 128, status: 'Active' },
    { id: 4, name: 'Adidas', logo: '', productsCount: 96, status: 'Inactive' },
    { id: 5, name: 'Sony', logo: '', productsCount: 24, status: 'Active' },
];

export default function BrandPage() {
    const [brands, setBrands] = useState<Brand[]>(INITIAL_BRANDS);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBrands = brands.filter(brand =>
        brand.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Brands</h1>
                    <p className="text-sm text-gray-500">Manage your product brands and partners.</p>
                </div>
                <button className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium">
                    <Plus className="h-4 w-4" />
                    Add New Brand
                </button>
            </div>

            {/* Filters & Search */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search brands..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                    />
                </div>
            </div>

            {/* Grid Layout for Brands */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredBrands.length > 0 ? (
                    filteredBrands.map((brand) => (
                        <div key={brand.id} className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all p-5 flex flex-col items-center text-center relative">

                            <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-md">
                                    <Edit2 className="h-3.5 w-3.5" />
                                </button>
                                <button className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-md">
                                    <Trash2 className="h-3.5 w-3.5" />
                                </button>
                            </div>

                            <div className="h-20 w-20 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 mb-4 border border-gray-100">
                                {brand.logo ? (
                                    <img src={brand.logo} alt={brand.name} className="h-full w-full object-cover rounded-full" />
                                ) : (
                                    <ImageIcon className="h-8 w-8" />
                                )}
                            </div>

                            <h3 className="font-bold text-gray-900 text-lg mb-1">{brand.name}</h3>

                            <div className="flex items-center gap-2 mb-4">
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${brand.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
                                    }`}>
                                    {brand.status}
                                </span>
                                <span className="text-xs text-gray-500">• {brand.productsCount} Products</span>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full py-12 text-center text-gray-500">
                        No brands found matching "{searchQuery}"
                    </div>
                )}
            </div>
        </div>
    );
}
