import * as api from './api.js';

// TODO Change the path !!!
const endpoints = {
    getAll: '/data/albums?sortBy=_createdOn%20desc',
    create: '/data/albums',
    getSingle: '/data/albums/',
    edit: '/data/albums/',
    delete: '/data/albums/',
    addLike: '/data/likes',
    totalLikes: (albumId) => `/data/likes?where=albumId%3D%22${albumId}%22&distinct=_ownerId&count`,
    numberOfLikes: (albumId, userId) => `/data/likes?where=albumId%3D%22${albumId}%22%20and%20_ownerId%3D%22${userId}%22&count`
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

export async function addLike(albumId) {
    return api.post(endpoints.addLike, { albumId });
}

export async function getTotalLikes(albumId) {
    return api.get(endpoints.totalLikes(albumId));
}

export async function getNumberOfLikes(albumId, userId) {
    return api.get(endpoints.numberOfLikes(albumId, userId));
}

