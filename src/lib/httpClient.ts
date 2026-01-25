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
  // We check mostly for NEXT_PUBLIC_AAMAR_ID for client-side usage, 
  // but also check AAMAR_ID in case it's used server-side or configured otherwise.
  const token = process.env.NEXT_PUBLIC_AAMAR_ID || process.env.AAMAR_ID;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
