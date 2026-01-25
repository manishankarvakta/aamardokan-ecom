import { httpClient } from "../lib/httpClient";
import { Product, ProductWithSlug, Category, PaginatedResult } from "@/lib/products";

export const productService = {
    getAllProducts: async (category?: string, query?: string): Promise<ProductWithSlug[]> => {
        const params: any = {};
        if (category) params.category = category;
        if (query) params.q = query;

        const response = await httpClient.get("/ecom/all/1/10", { params });
        return response.data;
    },

    getAllProductsPaginated: async (page: number, size: number, query?: string, warehouse?: string): Promise<PaginatedResult<ProductWithSlug>> => {
        const params: any = {};
        if (query) params.q = query;
        if (warehouse) params.warehouse = warehouse;

        const response = await httpClient.get(`/ecom/all/${page}/${size}`, { params });
        return response.data;
    },

    getProductBySlug: async (slug: string): Promise<ProductWithSlug | null> => {
        const response = await httpClient.get(`/ecom/products/${slug}`);
        return response.data;
    },

    getCategories: async (): Promise<Category[]> => {
        const response = await httpClient.get("/ecom/categories");
        // Map _id to id if necessary, or just return as is if the component handles it
        // The current Category type requires id, name, slug, image. 
        // The API returns _id, name, code, etc. 
        // We might need to map it if the API doesn't return id/slug/image exactly.
        // For now, returning data directly.
        return response.data;
    },

    getCategoriesByGroup: async (group: string): Promise<Category[]> => {
        const response = await httpClient.get(`/ecom/category/group/${group}`);
        return response.data;
    },

    getCategoriesByMasterCategory: async (mcId: string): Promise<Category[]> => {
        const response = await httpClient.get(`/ecom/category/master/${mcId}`);
        return response.data;
    },
};
