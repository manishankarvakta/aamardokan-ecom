import { httpClient } from "../lib/httpClient";
import { Product, ProductWithSlug, Category } from "@/lib/products";

export const productService = {
    getAllProducts: async (category?: string, query?: string): Promise<ProductWithSlug[]> => {
        const params: any = {};
        if (category) params.category = category;
        if (query) params.q = query;

        const response = await httpClient.get("/ecom/products", { params });
        return response.data;
    },

    getProductBySlug: async (slug: string): Promise<ProductWithSlug | null> => {
        const response = await httpClient.get(`/ecom/products/${slug}`);
        return response.data;
    },

    getCategories: async (): Promise<Category[]> => {
        const response = await httpClient.get("/ecom/categories");
        return response.data;
    },
};
