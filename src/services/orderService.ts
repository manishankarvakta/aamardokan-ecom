import { httpClient } from "../lib/httpClient";

export const orderService = {
    createOrder: async (orderData: any) => {
        const response = await httpClient.post("/ecom/orders", orderData);
        return response.data;
    },

    getMyOrders: async () => {
        const response = await httpClient.get("/ecom/orders");
        return response.data;
    },
};
