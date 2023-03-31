import * as api from './api.js';

// TODO Change the path !!!
const endpoints = {
    getAll: '/data/games?sortBy=_createdOn%20desc',
    create: '/data/games',
    getSingle: '/data/games/',
    edit: '/data/games/',
    delete: '/data/games/',
    getLatestGames: '/data/games?sortBy=_createdOn%20desc&distinct=category',
    allComments: (gameId) => `/data/comments?where=gameId%3D%22${gameId}%22`,
    createComment: '/data/comments',

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

export async function getLatestGames() {
    return api.get(endpoints.getLatestGames);
}

export async function getAllComents(gameId) {
    return api.get(endpoints.allComments(gameId));
}

export async function createComment(gameId, comment) {
    console.log({gameId, comment});
    return api.post(endpoints.createComment, {gameId, comment});
}



