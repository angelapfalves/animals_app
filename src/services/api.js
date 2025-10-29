import axios from 'axios';
import { UNSPLASH_ACCESS_KEY, UNSPLASH_BASE_URL } from '@env';

const ACCESS_KEY = UNSPLASH_ACCESS_KEY;
const BASE_URL = UNSPLASH_BASE_URL;


const api = axios.create({
  baseURL: BASE_URL, // base URL da API
  timeout: 5000,                        // tempo máximo de espera
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`, // header obrigatório da Unsplash API
  },
});

export default api;
