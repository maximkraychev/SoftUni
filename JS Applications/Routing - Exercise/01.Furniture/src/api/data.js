import * as api from './api.js';

const endpoints = {
   create: '/data/catalog',
   getAll: '/data/catalog',
   details: '/data/catalog/',  //:id
   update: '/data/catalog/',   //:id
   delete: '/data/catalog/',   //:id
   myFurniture: '/data/catalog?where=_ownerId%3D%22{userId}%22'   // use regex and change '{userId}' with the user id !!!
}

export async function create(data) {
   return await api.post(endpoints.create, data);
}

export async function getAll() {
    return api.get(endpoints.getAll);
}

export async function getDetails(id) {
    return await api.get(endpoints.details + id);
}

export async function deleteItem(id) {
    return await api.delete(endpoints.delete + id);
}

export async function update(id, data) {
    return await api.put(endpoints.update + id, data)
}

export async function getMyFurniture(userId) {
    return await api.get(endpoints.myFurniture.replace('{userId}', userId));
}