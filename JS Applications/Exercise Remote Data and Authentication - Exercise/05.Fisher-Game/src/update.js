import { load } from './loadCatches.js';
const baseURL = 'http://localhost:3030/data/catches/';

export async function update(button) {
    const div = button.parentNode;
    const id = button.dataset.id;
    const accessToken = sessionStorage.getItem('accessToken');

    const inputs = Array.from(div.querySelectorAll('input'));
    const data = inputs.reduce((acc, cur) => {
        acc[cur.className] = cur.value;
        return acc;
    }, {});

    try {
        const request = fetch(`${baseURL}${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken
            },
            body: JSON.stringify(data)
        })

        if (request.ok == false) {
            throw new Error(`Error: ${request.statusText} - ${request.status}`);
        }
        load();
        alert('Successfully updated');
    } catch (err) {
        alert(err);
    }
}