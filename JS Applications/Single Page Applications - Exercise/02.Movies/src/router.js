import { renderAddMoviePage } from './addMovie.js';
import { renderHome } from './home.js';
import { renderLogin } from './login.js';
import { logout } from './logout.js';
import { navHandler } from './navigationHandler.js';
import { renderRegister } from './register.js';
import { renderEdit } from './renderEdit.js';


const routerData = {
    '/': renderHome,
    '/logout': logout,
    '/login': renderLogin,
    '/register': renderRegister,
    '/add': renderAddMoviePage,
    '/delete': '',
    '/edit': renderEdit,
    '/like': '',
}

export function router(pathname) {
    routerData[pathname]();
    navHandler();
}