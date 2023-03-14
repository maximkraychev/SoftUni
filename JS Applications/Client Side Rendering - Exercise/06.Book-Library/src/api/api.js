const host = 'http://localhost:3030';

async function request(type, url, data) {

    const options = { method: type };

    if (data != undefined) {
        options.headers = { 'Content-Type': 'application/json' }
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(host + url, options);

        if (response.ok == false) {
            const error = response.json();
            throw new Error(error.message)
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