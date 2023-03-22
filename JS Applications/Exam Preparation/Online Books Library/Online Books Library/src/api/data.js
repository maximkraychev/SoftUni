import * as api from './api.js';

const endpoints = {
    create: '/data/books',
    getAllBooks: '/data/books?sortBy=_createdOn%20desc',
    getBook: '/data/books/',
    deleteBook: (id) => `/data/books/${id}`,
    getMyBooks: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
    addLike: '/data/likes',
    likeCount: (bookId) => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
    likeFromUser: (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
}

export async function addBook(data) {
    return api.post(endpoints.create, data);
}

export async function getBooks() {
    return api.get(endpoints.getAllBooks);
}

export async function getBook(id) {
    return api.get(endpoints.getBook + id);
}

export async function editBook(id, data) {
    return api.put(endpoints.getBook + id, data);
}

export async function deleteBook(id) {
    return api.delete(endpoints.deleteBook(id));
}

export async function getMyBooks(userId) {
    return api.get(endpoints.getMyBooks(userId));
}

export async function addLike(bookId) {
    return api.post(endpoints.addLike, { bookId })
}

export async function getLikeCount(bookId) {
    return api.get(endpoints.likeCount(bookId))
}

export async function getLikeFromUser(bookId, userId) {
    return api.get(endpoints.likeFromUser(bookId, userId));
}