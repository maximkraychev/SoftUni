import * as api from './api.js';

const endpoints = {
    getData: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    create: '/data/pets',
    animalById: '/data/pets/',
    addDonation: '/data/donation',
    numberOfDonation: (petId) => `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
    donationFromSpecificUser: (petId, userId) => `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function getData() {
    return api.get(endpoints.getData);
}

export async function create(data) {
    return api.post(endpoints.create, data);
}

export async function getDetails(petId) {
    return api.get(endpoints.animalById + petId);
}

export async function edit(petId, data) {
    return api.put(endpoints.animalById + petId, data);
}

export async function deleteRequest(petId) {
    return api.delete(endpoints.animalById + petId);
}

export async function addDonation(petId) {
    return api.post(endpoints.addDonation, { petId });
}

export async function getNumberOfDonation(petId) {
    return api.get(endpoints.numberOfDonation(petId));
}

export async function donationFromSpecificUser(petId, userId) {
    return api.get(endpoints.donationFromSpecificUser(petId, userId));
}

