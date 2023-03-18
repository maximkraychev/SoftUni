import page from '../node_modules/page/page.mjs';
import { render } from '../node_modules/lit-html/lit-html.js';
import { showCatalog } from './views/catalog.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showLogin } from './views/login.js';
import { showMyFurniue } from './views/myFurniture.js';
import { showRegister } from './views/register.js';
import { clearSessionStorageData, formHandler, formHandlerPlusClassAdding, furnitureTemplate, getSessionStorageData, setSessionStorageData, updateNavigation } from './util.js';
import { logout } from './api/user.js';

const main = document.querySelector('main');

// Decorate the ctx before each change on the view
page(decorateContext);

// Links
page('/index.html', '/');
page('/', '/catalog');
page('/catalog', showCatalog);
page('/catalog/:id', showDetails);
page('/create', showCreate);
page('/edit/:id', showEdit)
page('/login', showLogin);
page('/my-furniture', showMyFurniue);
page('/register', showRegister);

// onStart
page.start();
updateNavigation();

// Dependency injection
function decorateContext(ctx, next) {
    ctx.render = customRender;
    ctx.getUserData = getSessionStorageData;
    ctx.setUserData = setSessionStorageData;
    ctx.clearUserData = clearSessionStorageData;
    ctx.formHandler = formHandler;
    ctx.updateNavigation = updateNavigation;
    ctx.formHandlerPlusClassAdding = formHandlerPlusClassAdding;
    ctx.furnitureTemplate = furnitureTemplate;
    next()
}

// Render function useing lit-html render
function customRender(currTemplate) {
    render(currTemplate, main);
}

// Event listener on logout;
document.querySelector('#logoutBtn').addEventListener('click', () => {
    logout()
    clearSessionStorageData();
    updateNavigation();
    page.redirect('/');
})


