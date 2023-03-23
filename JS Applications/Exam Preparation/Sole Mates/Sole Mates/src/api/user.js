import * as api from './api.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
}

export async function login(data) {
    return api.post(endpoints.login, data);
}

export async function register(data) {
    return api.post(endpoints.register, data);
}

export async function logout() {
    api.get(endpoints.logout);
}