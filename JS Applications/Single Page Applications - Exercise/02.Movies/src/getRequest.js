export async function getRequest(url) {
    try {
        const response = await fetch(url);

        if (response.ok == false) {
            const error = response.json();
            throw error;
        }

        const data = await response.json();
        return data;
    } catch (err) {
        alert(err.message)
    }
}