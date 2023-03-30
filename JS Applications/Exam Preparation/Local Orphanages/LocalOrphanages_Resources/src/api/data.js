import * as api from './api.js';

// TODO Change the path !!!
const endpoints = {
    getAll: '/data/posts?sortBy=_createdOn%20desc',
    create: '/data/posts',
    getSingle: '/data/posts/',
    edit: '/data/posts/',
    delete: '/data/posts/',
    myPost: (userId) => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    makeDonation: '/data/donations',
    donationCount: (postId) => `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
    donationFromUser: (postId, userId) => `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`
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

export async function getMyPost(userId) {
    return api.get(endpoints.myPost(userId));
}

export async function makeDonation(postId) {
    return api.post(endpoints.makeDonation, { postId });
}

export async function getDonationCount(postId) {
    return api.get(endpoints.donationCount(postId));
}

export async function getDonationFromUser(postId, userId) {
    return api.get(endpoints.donationFromUser(postId, userId));
}


