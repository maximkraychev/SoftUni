import { clearUserData, getUserData } from "../util.js";

const host = 'http://localhost:3030';

async function request(type = 'GET', url, data) {

    const options = {
        method: type,
        headers: {}
    }

    if (data != undefined) {
        options.headers['Content-Type'] = 'applications/json';
        options.body = JSON.stringify(data);
    }

    const userData = getUserData();
    if (userData) {
        const token = userData.accessToken;
        options.headers['X-Authorization'] = token;
    }

    try {
        const response = await fetch(host + url, options);

        if (response.ok == false) {
            if (response.status == 403) {
                clearUserData();
            }

            const error = response.json();
            throw new Error(error.message);
        }

        if (response.status == 204) {
            return response;
        } else {
            return response.json();
        }

    } catch (err) {
        alert(err.message);
        throw err;
    }
}

const get = request.bind(null, 'GET');
const post = request.bind(null, 'POST');
const put = request.bind(null, 'PUT');
const del = request.bind(null, 'DELETE');

export {
    get,
    post,
    put,
    del as delete
}