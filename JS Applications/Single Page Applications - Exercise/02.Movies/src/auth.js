const url = 'http://localhost:3030/users/me';

export async function auth() {
    try {
        const token = sessionStorage.getItem('accessToken');

        if (token == null) {
            return false;
        }

        const request = await fetch(url, {
            method: 'GET',
            headers: { 'X-Authorization': token }
        })

        if (request.status == 403) {
            return false;
        }

        if (request.ok == false) {
            const error = await request.json();
            throw error;
        }

        const data = await request.json();

        if (data._id == sessionStorage.getItem('id')) {
            return true;
        } else {
            return false;
        }

    } catch (err) {
        alert(err);
        return false
    }
}