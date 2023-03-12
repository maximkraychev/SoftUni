import { login } from "../api/users.js";

const section = document.querySelector('#login-page');
let ctx = null;

export function showLogin(context) {
    ctx = context;
    context.showSection(section);
}

const formElment = section.querySelector('form');
formElment.addEventListener('submit', onLogin);

async function onLogin(event) {
    event.preventDefault();

    const form = new FormData(formElment);

    const email = form.get('email')
    const password = form.get('password');

    await login(email, password);
    formElment.reset();
    ctx.updateNav()
    ctx.goTo('/');
}