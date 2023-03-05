import { load } from './loadCatches.js'
const regexString = /^[A-Za-z]+$/g;
const regexFloatingPoint = /[+-]?([0-9]*[.])?[0-9]+/g;
const regexInteger = /^[1-9]+$/g;
const baseURL = 'http://localhost:3030/data/catches';

export async function add(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const data = Object.fromEntries(form);

    if ((data.angler).match(regexString) == null ||
        (data.weight).match(regexFloatingPoint) == null ||
        (data.species).match(regexString) == null ||
        (data.location).match(regexString) == null ||
        (data.bait).match(regexString) == null ||
        (data.captureTime).match(regexInteger) == null
    ) {
        return;
    }

    const accessToken = sessionStorage.getItem('accessToken')

    const dataForRequest = {
        angler: data.angler,
        weight: data.weight,
        species: data.species,
        location: data.location,
        bait: data.bait,
        captureTime: data.captureTime,
    }

    try {
        const request = await fetch(baseURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': accessToken,
            },
            body: JSON.stringify(dataForRequest)
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