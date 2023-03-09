export async function postRequest(url, dataForRequest, token) {

    const head = { 'Content-Type': 'application/json' }

    if (token) {
        head['X-Authorization'] = token;
    }

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: head,
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