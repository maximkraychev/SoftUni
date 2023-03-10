import { renderAddMoviePage } from './addMovie.js';
import { onDelete } from './delete.js';
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
    '/delete': onDelete,
    '/edit': renderEdit,
    '/like': '',
}

export function router(pathname, event) {
   
    routerData[pathname](event);
    navHandler();
}