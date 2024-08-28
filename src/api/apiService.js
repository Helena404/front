// src/api/apiService.js
import axios from 'axios';
import { loginUser as mockLoginUser } from './mockData'; 

// Создаем экземпляр Axios с базовыми настройками
const api = axios.create({
    baseURL: '/api', // Базовый URL для всех запросов
    headers: {
        'Content-Type': 'application/json',
    },
});

// Интерцептор для добавления токена авторизации к каждому запросу
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Интерцептор для обработки ошибок ответа
api.interceptors.response.use(
    (response) => response.data,
    (error) => {
        if (error.response) {
            // Обработка ошибки на уровне сервера
            return Promise.reject(error.response.data);
        } else {
            // Обработка сетевой ошибки
            return Promise.reject({ message: 'Network Error' });
        }
    }
);

// Регистрация нового пользователя
export const registerUser = async (firstName, lastName, email, phoneNumber, password) => {
    try {
        const response = await api.post('/auth/register', {
            firstName,
            lastName,
            email,
            phoneNumber,
            password,
        });
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
};

// Аутентификация пользователя
export const loginUser = async (email, password) => {
    try {
        const response = await api.post('/auth/login', { email, password });
        return {
            user: response.user, // данные пользователя
            permissions: response.permissions, // права доступа
        };
    } catch (error) {
        throw new Error(error.message);
    }
};

// Получение информации о текущем пользователе
export const fetchCurrentUser = async () => {
    try {
        const response = await api.get('/auth/me');
        return response;
    } catch (error) {
        throw new Error(error.message);
    }
};
