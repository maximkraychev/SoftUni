import { setUserData } from '../util.js';
import * as api from './api.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

export async function login(data) {
    const response = await api.post(endpoints.login, data);
    setUserData(response);
}

export async function register(data) {
    const response = await api.post(endpoints.register, data);
    setUserData(response);
}

export async function logout() {
    return api.get(endpoints.logout);
}