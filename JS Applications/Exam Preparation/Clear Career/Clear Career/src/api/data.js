import * as api from './api.js';

const endpoints = {
    jobOffers: '/data/offers?sortBy=_createdOn%20desc',
    create: '/data/offers',
    getOffer: '/data/offers/',
    edit: '/data/offers/',
    delete: '/data/offers/',
    addApplication: '/data/applications',
    getTotalApplications: '/data/applications?where=offerId%3D%22{offerId}%22&distinct=_ownerId&count',
    getNumberOfApplicationsForUser: '/data/applications?where=offerId%3D%22{offerId}%22%20and%20_ownerId%3D%22{userId}%22&count'

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

export async function editOffer(id, data) {
    return api.put(endpoints.edit + id, data);
}

export async function deleteOffer(id) {
   return api.delete(endpoints.delete + id);
}

export async function addApplication(data) {
    return api.post(endpoints.addApplication, data);
}

export async function getTotalApplications(id) {
    return api.get(endpoints.getTotalApplications.replace('{offerId}', id));
}

export async function getNumberOfApplicationsForUser(offerId, userId) {
    let endpoint = endpoints.getNumberOfApplicationsForUser;
    endpoint = endpoint.replace('{offerId}', offerId);
    endpoint = endpoint.replace('{userId}', userId);
    return api.get(endpoint);
}