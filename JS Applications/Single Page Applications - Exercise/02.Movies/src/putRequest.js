export async function putRequest(url, dataForRequest) {

    try {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': sessionStorage.getItem('accessToken')
            },
            body: JSON.stringify(dataForRequest)
        })

        if (response.ok == false) {
            const error = response.json();
            throw error;
        }

        const data = await response.json();
        return data;
    } catch (err) {
        alert(err.message);
    }
}