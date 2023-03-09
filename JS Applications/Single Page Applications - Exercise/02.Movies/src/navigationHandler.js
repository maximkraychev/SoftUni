import { auth } from './auth.js';

const nav = document.querySelectorAll('.nav-item');
const welcome = nav[0];
const logoutBtn = nav[1];
const loginBtn = nav[2];
const registerBtn = nav[3];

const addBtnSection = document.querySelector('#add-movie-button');
addBtnSection.style.display = 'none';

export async function navHandler() {

    const authenticationResult = await auth();

    if (authenticationResult == true) {
        welcome.style.display = 'block'
        welcome.textContent = `Welcome, ${sessionStorage.getItem('email')}`;
        logoutBtn.style.display = 'block';
        addBtnSection.style.display = 'block';
        loginBtn.style.display = 'none';
        registerBtn.style.display = 'none';
    } else if (authenticationResult == false) {
        welcome.style.display = 'none'
        logoutBtn.style.display = 'none';
        addBtnSection.style.display = 'none';
        loginBtn.style.display = 'block';
        registerBtn.style.display = 'block';
    }
}