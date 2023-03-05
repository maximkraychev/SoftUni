import { renderRegister } from './register.js';
import { renderLogin } from './login.js';
import { renderHome } from './home.js';
import { logout } from './logout.js';
import { headerHandler } from './handlers.js';
import { addButtonHandler } from './handlers.js';

const main = document.querySelector('main');
const sectionView = document.querySelector('#views');

const routes = {
    '/': renderHome,
    '/login': renderLogin,
    '/register': renderRegister,
    '/logout': logout,
}

export function router(path) {
    removeTheSectionFromMain();
    headerHandler();
    addButtonHandler();
    const render = routes[path];
    render();
}


function removeTheSectionFromMain() {
    if (main.querySelector('section')) {
        const section = main.querySelector('section');
        section.style.display = 'none';
        sectionView.appendChild(section);
    }
}