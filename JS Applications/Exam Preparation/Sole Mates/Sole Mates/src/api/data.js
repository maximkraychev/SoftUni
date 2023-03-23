import * as api from './api.js';

const endpoints = {
    getShoes: '/data/shoes?sortBy=_createdOn%20desc',
    addShoe: '/data/shoes',
    getShoe: (id) => `/data/shoes/${id}`,
    searchShoe: (query) => `/data/shoes?where=brand%20LIKE%20%22${query}%22`,
}

export async function getShoes() {
    return api.get(endpoints.getShoes);
}

export async function addShoe(data) {
    return api.post(endpoints.addShoe, data);
}

export async function getShoe(id) {
    return api.get(endpoints.getShoe(id));
}

export async function editShoe(id, data) {
    return api.put(endpoints.getShoe(id), data);
}

export async function deleteShoe(id) {
    return api.delete(endpoints.getShoe(id));
}

export async function searchShoe(query) {
    return api.get(endpoints.searchShoe(query));
}