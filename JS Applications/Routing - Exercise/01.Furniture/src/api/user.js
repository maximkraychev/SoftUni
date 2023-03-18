import * as api from './api.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout'
}

export async function login(ctx, data) {
    const userData = await api.post(endpoints.login, data);
    ctx.setUserData(userData);
}

export async function register(ctx, data) {
    const userData = await api.post(endpoints.register, data);
    ctx.setUserData(userData);
}

export async function logout() {
    api.get(endpoints.logout);
}
