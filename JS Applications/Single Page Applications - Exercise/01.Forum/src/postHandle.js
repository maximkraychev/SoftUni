import {sectionHome, renderHome} from './renderHome.js';

const urlForPost = 'http://localhost:3030/jsonstore/collections/myboard/posts';

const formElement = sectionHome.querySelector('form');
const postBtn = sectionHome.querySelector('.public');
const cancelBtn = sectionHome.querySelector('.cancel');

postBtn.addEventListener('click', post);
cancelBtn.addEventListener('click', onCancel);

function onCancel(event) {
    event.preventDefault();
    formElement.reset();
}

async function post(event) {
    event.preventDefault();
    const form = Object.fromEntries(new FormData(formElement));

    if (Object.values(form).some(x => x == '')) {
        alert('All fields must be filled')
        return;
    }

    const data = Object.assign({}, form)
    data.date = new Date()

    const dataForReuest = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    try {
        const response = await fetch(urlForPost, dataForReuest);

        if (response.ok == false) {
            const error = await response.json();
            throw error;
        }

        const data = await response.json();
        formElement.reset()
        renderHome();
    } catch (err) {
        alert(err.message)
    }
}

