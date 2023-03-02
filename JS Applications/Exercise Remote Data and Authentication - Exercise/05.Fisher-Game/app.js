import { router } from './src/router.js';


const sections = document.querySelectorAll('#views section');
for (const section of sections) {
    section.style.display = 'none';
}

const logout = document.querySelector('#logout');
logout.style.display = 'none';

const main = document.querySelector('main');
main.appendChild(document.querySelector('aside'));

const navElement = document.querySelector('nav');
navElement.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.tagName != 'A') {
        return;
    }
    const url = new URL(e.target.href);
    router(url.pathname);
})


