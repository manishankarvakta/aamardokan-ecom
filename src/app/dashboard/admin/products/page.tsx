"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Plus,
    Search,
    Filter,
    Edit2,
    Trash2,
    Eye,
    Package,
} from 'lucide-react';
import { productService } from '@/services/productService';
import { ProductWithSlug } from '@/lib/products';
import { toast } from 'sonner';

export default function ProductsPage() {
    const [products, setProducts] = useState<ProductWithSlug[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');

    // Pagination state
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(20);
    const [totalPages, setTotalPages] = useState(0);
    const [totalElements, setTotalElements] = useState(0);

    const fetchData = async () => {
        setLoading(true);
        try {
            // Using q for search as per requirement
            const result = await productService.getAllProductsPaginated(page, size, searchQuery);
            setProducts(result.content);
            setTotalPages(result.totalPages);
            setTotalElements(result.totalElements);
        } catch (error) {
            console.error("Failed to fetch products:", error);
            toast.error("Failed to load products");
            setProducts([]);
        } finally {
            setLoading(false);
        }
    };

    // Debounce search or fetch on page change
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            fetchData();
        }, 500); // Debounce search by 500ms
        return () => clearTimeout(timeoutId);
    }, [page, size, searchQuery]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
        setPage(0); // Reset to first page on new search
    };

    return (
        <div className="space-y-6">
            {/* Page Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">Products</h1>
                    <p className="text-sm text-gray-500">Manage your product inventory and prices.</p>
                </div>
                <Link
                    href="/dashboard/admin/products/create"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-medium"
                >
                    <Plus className="h-4 w-4" />
                    Add New Product
                </Link>
            </div>

            {/* Filters & Search */}
            <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col sm:flex-row gap-4">
                <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={handleSearch}
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                    />
                </div>

                <div className="flex gap-2">
                    {/* Placeholder for status filter if API supports it later */}
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2 text-gray-600">
                        <Filter className="h-4 w-4" />
                        <span className="hidden sm:inline">Filters</span>
                    </button>
                </div>
            </div>

            {/* Table */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="px-6 py-4 font-semibold text-gray-700">Product Name</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Category</th>
                                <th className="px-6 py-4 font-semibold text-gray-700">Price</th>
                                <th className="px-6 py-4 font-semibold text-gray-700 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {loading ? (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">Loading products...</td>
                                </tr>
                            ) : products.length > 0 ? (
                                products.map((product) => (
                                    <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400 overflow-hidden">
                                                    {product.image ? (
                                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                                    ) : (
                                                        <Package className="h-5 w-5" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-medium text-gray-900">{product.name}</p>
                                                    <p className="text-xs text-gray-500">{product.slug}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 text-gray-600">
                                            <p>{product.category}</p>
                                        </td>
                                        <td className="px-6 py-4 font-medium text-gray-900">
                                            ৳{product.price}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <div className="flex items-center justify-end gap-2">
                                                <button className="p-2 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors" title="View">
                                                    <Eye className="h-4 w-4" />
                                                </button>
                                                <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                                                    <Edit2 className="h-4 w-4" />
                                                </button>
                                                <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                                                    <Trash2 className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                                        <div className="flex flex-col items-center justify-center">
                                            <Package className="h-12 w-12 text-gray-300 mb-3" />
                                            <p>No products found matching "{searchQuery}"</p>
                                        </div>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                    <p>Showing {products.length} of {totalElements} results</p>
                    <div className="flex gap-2">
                        <button
                            onClick={() => setPage(p => Math.max(0, p - 1))}
                            disabled={page === 0 || loading}
                            className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50"
                        >
                            Previous
                        </button>
                        <div className="flex gap-1 items-center">
                            <span className="px-3 py-1 bg-emerald-600 text-white rounded">
                                {page + 1}
                            </span>
                            <span className="text-gray-400">/ {totalPages}</span>
                        </div>
                        <button
                            onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                            disabled={page >= totalPages - 1 || loading}
                            className="px-3 py-1 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50"
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
