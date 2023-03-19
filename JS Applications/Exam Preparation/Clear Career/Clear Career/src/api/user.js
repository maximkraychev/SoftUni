import { clearUserData } from '../util.js';
import * as api from './api.js';


const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

export async function login(data) {
    const user = await api.post(endpoints.login, data);
    localStorage.setItem('userData', JSON.stringify(user));
    return user;
}

export async function reister(data) {
    const user = await api.post(endpoints.register, data);
    localStorage.setItem('userData', JSON.stringify(user));
    return user;
}

export async function logout(data) {
    api.get(endpoints.logout, data);
    clearUserData();
}