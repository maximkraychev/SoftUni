import * as api from './api.js';

// TODO Change the path !!!
const endpoints = {
    getAll: '/data/fruits?sortBy=_createdOn%20desc',
    create: '/data/fruits',
    getSingle: '/data/fruits/',
    edit: '/data/fruits/',
    delete: '/data/fruits/',
    search: (query) => `/data/fruits?where=name%20LIKE%20%22${query}%22`
}

export async function getAll() {
    return api.get(endpoints.getAll);
}

export async function getSingle(id) {
    return api.get(endpoints.getSingle + id);
}

export async function create(data) {
    return api.post(endpoints.create, data);
}

export async function edit(id, data) {
    return api.put(endpoints.edit + id, data);
}

export async function deleteRequest(id) {
    return api.delete(endpoints.delete + id);
}

export async function search(query) {
    return api.get(endpoints.search(query));
}
