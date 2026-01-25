import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL_POS || "http://localhost:3000/api";

export const httpClient = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add a request interceptor to include the access token in every request
httpClient.interceptors.request.use(async (config) => {
  // In a real app, you might get the token from next-auth session
  // But since this is used in both client and server, we need to handle it carefully.
  // For now, let's just define the structure.
  return config;
});
