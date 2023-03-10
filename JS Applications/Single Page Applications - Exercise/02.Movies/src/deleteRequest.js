export async function deleteRequest(url, token) {

    try {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: { 'X-Authorization': token }
        });

        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();
        return data;
    } catch (err) {
        alert(err.message);
    }

}