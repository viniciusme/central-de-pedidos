import axios from 'axios';

export const api = axios.create({
  headers: {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Allow-Credentials': 'true',
  },
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});
