const url = 'http://localhost:3030/jsonstore/advanced/dropdown';

export async function request(data, type = 'GET') {
    const options = {
        method: type
    }

    if (data != undefined) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(url, options);

        if (response.ok == false) {
            const error = response.json();
            throw new Error(error.message);
        }

        return response.json();

    } catch (err) {
        alert(err.message);
        throw err;
    }
}