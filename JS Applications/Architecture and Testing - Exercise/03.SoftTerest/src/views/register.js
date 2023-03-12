import {register} from '../api/users.js';

const section = document.querySelector('#register-page');
let ctx = null;

export function showRegister(context) {
    ctx = context;
    context.showSection(section);
}

const formElement = section.querySelector('form');
formElement.addEventListener('submit', onRegiser);

async function onRegiser(event) {
    event.preventDefault();
    const form = new FormData(formElement);

    const email = form.get('email')
    const password = form.get('password');
    const repeatPassword = form.get('repeatPassword');

    if (email.length < 3 || password.length < 3) {
        alert('Email and passwords must have at least 3 characters');
        return;
    } else if (password != repeatPassword) {
        alert('Repeat Password must match password');
        return;
    }

    await register(email, password);
    formElement.reset();
    ctx.updateNav()
    ctx.goTo('/');
}