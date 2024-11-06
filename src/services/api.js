// src/services/api.js
import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

const api = axios.create({
    baseURL: API_URL,
});

// Interceptador para adicionar o token em todas as requisições
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Interceptador para lidar com erros de resposta, especialmente 401
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error("Token expirado ou inválido. Faça login novamente.");
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// Função para login
export const loginUser = async (credentials) => {
    console.log("loginUser api", credentials);
    try {
        console.log("entrou no try do service/api");
        const response = await api.post('/login', credentials);
        console.log("response api", response);
        const token = response.data.token;
        localStorage.setItem('token', token);
        return response.data;
    } catch (error) {
        console.error("Login failed", error);
        if (error.response) {
            // console.log("Response Data:", error.response.data); // Detalhes do erro da API
            // console.log("Response Status:", error.response.status);
        }
        throw error;
    }
};

// Função para registro
export const registerUser = async (userData) => {
    try {
        const response = await api.post('/register', userData);
        return response.data;
    } catch (error) {
        console.error("Registration failed", error);
        throw error;
    }
};

// Função para obter notícias
export const getNews = async () => {
    try {
        const response = await api.get('/news');
        return response.data;
    } catch (error) {
        console.error("Failed to fetch news", error);
        throw error;
    }
};

// Função para obter uma notícia específica pelo ID
export const getNewsById = async (id) => {
    try {
        const response = await api.get(`/news/${id}`);
        return response.data; // Retornar os dados da notícia
    } catch (error) {
        console.error("Failed to fetch news by ID", error);
        throw error;
    }
};

// Função para criar uma nova notícia
export const createNews = async (newsData) => {
    try {
        const response = await api.post('/news', newsData);
        return response.data;
    } catch (error) {
        console.error("Failed to create news", error);
        throw error;
    }
};

// Função para editar uma notícia
export const editNews = async (id, newsData) => {
    try {
        const response = await api.put(`/news/${id}`, newsData);
        return response.data; // Retornar os dados atualizados da notícia
    } catch (error) {
        console.error("Failed to edit news", error);
        throw error;
    }
};

// Função para deletar uma notícia
export const deleteNews = async (id) => {
    try {
        const response = await api.delete(`/news/${id}`);
        return response.data; // Retornar confirmação ou dados da resposta
    } catch (error) {
        console.error("Failed to delete news", error);
        throw error;
    }
};
