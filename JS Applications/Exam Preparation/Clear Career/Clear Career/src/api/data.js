import * as api from './api.js';

const endpoints = {
    jobOffers: '/data/offers?sortBy=_createdOn%20desc',
    create: '/data/offers',
    getOffer: '/data/offers/',
}

export async function getOffers() {
    return api.get(endpoints.jobOffers);
}

export async function createOffer(data) {
    return api.post(endpoints.create, data);
}

export async function getOffer(id) {
    return api.get(endpoints.getOffer + id);
}