import {router} from './router.js'
import {credentialsHandler} from './handlers.js'
const sectionRegister = document.querySelector('#register-view')
const main = document.querySelector('main');
const formElement = sectionRegister.querySelector('#register');
const url = 'http://localhost:3030/users/register';

export function renderRegister() {
    main.appendChild(sectionRegister);
    sectionRegister.style.display = 'block';
}


formElement.addEventListener('submit', register);

async function register(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    const rePass = form.get('rePass');

    if (email == '' || password == '') {
        alert('The fields cannot be empty');
        return;
    }
    if (password != rePass) {
        alert('Passwords do not match');
        return;
    }

    const credentials = { email, password };
    const data = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }

    try {
        const request = await fetch(url, data);
        if (request.ok == false) {
            throw new Error(`Error: ${request.statusText} - ${request.status}`);
        }

        const response = await request.json();
        credentialsHandler(response);

       
        router('/')
    } catch (err) {
        alert(err);
    }
}