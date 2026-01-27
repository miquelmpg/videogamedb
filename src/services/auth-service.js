import axios from 'axios';

const http = axios.create({
    baseURL: import.meta.env.VITE_AUTH_BASE_API_URL
});

http.interceptors.response.use(
    (response) => response.data,
    (error) => Promise.reject(error)
);

export const register = (user) => http.post('/users', user);

export const login = (user) => http.post('/auth', user);