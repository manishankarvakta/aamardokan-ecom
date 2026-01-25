import { httpClient } from "../lib/httpClient";

export const wishlistService = {
    getWishlist: async () => {
        const response = await httpClient.get("/ecom/wishlist");
        return response.data;
    },

    addToWishlist: async (item: any) => {
        const response = await httpClient.post("/ecom/wishlist", item);
        return response.data;
    },

    removeFromWishlist: async (id: string) => {
        const response = await httpClient.delete(`/ecom/wishlist?id=${id}`);
        return response.data;
    },
};
