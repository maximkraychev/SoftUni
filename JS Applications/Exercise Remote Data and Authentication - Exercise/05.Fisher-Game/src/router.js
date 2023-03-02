import { renderRegister } from './register.js';
import { renderLogin } from './login.js';
import { renderHome } from './app.js';
import { logout } from './logout.js';
import { headerHandler } from './handlers.js';

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
    const render = routes[path];
    render();
}


export function removeTheSectionFromMain() {
    if (main.querySelector('aside')) {
        document.querySelector('#home-view').appendChild(document.querySelector('aside'));
    }

    if (main.querySelector('section')) {
        const section = main.querySelector('section');
        section.style.display = 'none';
        sectionView.appendChild(section);
    }
}