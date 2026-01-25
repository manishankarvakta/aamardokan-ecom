import { httpClient } from "../lib/httpClient";

export interface RegisterData {
    name: string;
    username: string;
    phone: string;
    password: string;
    type: string;
    membership: string;
    status: string;
}

export const authService = {
    register: async (data: RegisterData) => {
        const response = await httpClient.post("/ecom/customer/register", data);
        return response.data;
    },
};
