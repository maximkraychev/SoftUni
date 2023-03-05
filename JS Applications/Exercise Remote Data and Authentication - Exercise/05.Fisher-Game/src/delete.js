import {load} from './loadCatches.js';
const baseURL = 'http://localhost:3030/data/catches/';

export async function onDelete(button) {
    const id = button.dataset.id;
    const accessToken = sessionStorage.getItem('accessToken');

    try {
        const request = await fetch(`${baseURL}${id}`, {
            method: 'DELETE',
            headers: {
                'X-Authorization': accessToken
            }
        })

        if (request.ok == false) {
            throw new Error(`Error: ${request.statusText} - ${request.status}`);
        }

        const response = await request.json();
        load();
    } catch (err) {
        alert(err)
    }
}