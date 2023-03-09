import { postRequest } from './postRequest.js';
import {router} from './router.js';

const signUpSection = document.querySelector('#form-sign-up');
signUpSection.remove();
const body = document.querySelector('body');
const url = 'http://localhost:3030/users/register';

export function renderRegister() {
    body.querySelector('section').replaceWith(signUpSection);
}

const formElement = signUpSection.querySelector('form');
formElement.addEventListener('submit', register);

async function register(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    const rePassword = form.get('repeatPassword');

    if (email == '') {
        alert('The email input must be filled');
        return;
    }

    if (password.length < 6) {
        alert('The password should be at least 6 characters long');
        return;
    }

    if (password != rePassword) {
        alert('The repeat password should be equal to the password');
        return;
    }

    const dataForRequest = { email, password, rePassword };
    const data = await postRequest(url, dataForRequest);
    
    sessionStorage.setItem('accessToken', data.accessToken);
    sessionStorage.setItem('email', data.email);
    sessionStorage.setItem('id', data._id);
    formElement.reset();
    router('/');
}
