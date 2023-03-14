import * as api from './api.js';

const endpoints = {
    manyBooks: '/jsonstore/collections/books',
    singleBook: '/jsonstore/collections/books/'
}

export async function getBooks() {
    return api.get(endpoints.manyBooks);
}

export async function getSingleBook(id) {
    return api.get(endpoints.singleBook + id);
}

export async function createBook(data) {
    return api.post(endpoints.singleBook, data);
}

export async function updateBook(data, id) {
    return api.put(endpoints.singleBook + id, data);
}

export async function deleteBook(data, id) {
    return api.delete(endpoints.singleBook + id, data);
}