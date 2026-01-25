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
  // Add the access token from environment variables
  // Check for NEXT_APP_JWT_TOKEN first, then fallback to others
  let token = process.env.NEXT_PUBLIC_NEXT_APP_JWT_TOKEN || process.env.NEXT_APP_JWT_TOKEN || process.env.NEXT_PUBLIC_AAMAR_ID || process.env.AAMAR_ID;

  // If we are on the client side, try to get the user's personal access token
  if (typeof window !== "undefined") {
    const userToken = localStorage.getItem("accessToken");
    if (userToken) {
      token = userToken;
    }
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
