import * as api from './api.js';

const endpoints = {
    getAll: '/data/products?sortBy=_createdOn%20desc',
    create: '/data/products',
    getSingle: '/data/products/',
    edit: '/data/products/',
    delete: '/data/products/',
    addBuys: '/data/bought',
    getCount: (productId) => `/data/bought?where=productId%3D%22${productId}%22&distinct=_ownerId&count`,
    getBoughtForUser: (productId, userId) => `/data/bought?where=productId%3D%22${productId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function getAll() {
    return api.get(endpoints.getAll);
}

export async function create(data) {
    return api.post(endpoints.create, data);
}

export async function getSingle(id) {
    return api.get(endpoints.getSingle + id);
}

export async function edit(id, data) {
    return api.put(endpoints.edit + id, data);
}

export async function deleteRequest(id) {
    return api.delete(endpoints.delete + id);
}

export async function addBuys(data) {
    return api.post(endpoints.addBuys, { productId: data });
}

export async function getCount(productId) {
    return api.get(endpoints.getCount(productId));
}

window.test = getCount

export async function specificUserBought(productId, userId) {
    return api.get(endpoints.getBoughtForUser(productId, userId));
}