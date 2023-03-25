import * as api from './api.js';

const endpoints = {
    create: '/data/memes',
    allMemes: '/data/memes?sortBy=_createdOn%20desc',
    getMeme: '/data/memes/',
    getMemesFromUser: (userId) => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
}

export async function create(data) {
    return api.post(endpoints.create, data);
}

export async function getAllMemes() {
    return api.get(endpoints.allMemes);
}

export async function getMeme(memeId) {
    return api.get(endpoints.getMeme + memeId);
}

export async function deleteMeme(memeId) {
    api.delete(endpoints.getMeme + memeId);
}

export async function editMeme(memeId , data) {
   return api.put(endpoints.getMeme + memeId, data);
}

export async function getMemesForUser(userId) {
    return api.get(endpoints.getMemesFromUser(userId));
}