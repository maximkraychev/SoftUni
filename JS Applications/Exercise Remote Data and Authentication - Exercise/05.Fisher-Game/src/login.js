import { credentialsHandler } from './handlers.js'
import { router } from './router.js'
const sectionLogin = document.querySelector('#login-view');
const main = document.querySelector('main');
const formElement = sectionLogin.querySelector('#login');
const url = 'http://localhost:3030/users/login';

export function renderLogin() {
    main.appendChild(sectionLogin);
    sectionLogin.style.display = 'block';
}

formElement.addEventListener('submit', login);

async function login(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    const data = {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    }

    try {
        const request = await fetch(url, data);
        if (request.ok == false) {
            throw new Error(`Error: ${request.statusText} - ${request.status}`);
        }
        const response = await request.json();
        credentialsHandler(response);
        router('/');
    } catch (err) {
        alert(err);
    }

}