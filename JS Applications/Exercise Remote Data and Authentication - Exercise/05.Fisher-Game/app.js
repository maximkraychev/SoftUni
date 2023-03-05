import { router } from './src/router.js';
import { headerHandler } from './src/handlers.js';
import { addButtonHandler } from './src/handlers.js';


const sections = document.querySelectorAll('#views section');
for (const section of sections) {
    section.style.display = 'none';
}

const logout = document.querySelector('#logout');
logout.style.display = 'none';

const main = document.querySelector('main');
const home = document.querySelector('#home-view');
main.appendChild(home);
home.style.display = 'block'

addButtonHandler()
headerHandler();
const navElement = document.querySelector('nav');
navElement.addEventListener('click', (e) => {
    e.preventDefault();

    if (e.target.tagName != 'A') {
        return;
    }
    const url = new URL(e.target.href);
    router(url.pathname);
})


