import axios from "axios";
import { Fahkwang } from "next/font/google";
export const api= axios.create({
    baseURL:"http://localhost:8080",
    withCredentials: false,
});

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization ='Bearer ${token}';
    return config;
});