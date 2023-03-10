import { navHandler } from './navigationHandler.js';
import { postRequest } from './postRequest.js';
import { router } from './router.js';

const loginSection = document.querySelector('#form-login');
loginSection.remove();
const body = document.querySelector('body');
const url = 'http://localhost:3030/users/login';

export async function renderLogin() {
    body.querySelector('section').replaceWith(loginSection);
}

const formElement = loginSection.querySelector('form');
formElement.addEventListener('submit', login);

async function login(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    const email = form.get('email');
    const password = form.get('password');
    const dataForRequest = { email, password };
    const data = await postRequest(url, dataForRequest);

    sessionStorage.setItem('accessToken', data.accessToken);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('id', data._id);
    formElement.reset();
    router('/');
}
