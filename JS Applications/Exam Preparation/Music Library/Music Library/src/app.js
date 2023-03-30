import page from '../node_modules/page/page.mjs';
import { showHome } from './views/home.js';
import { showCreate } from './views/create.js';
import { showCatalog } from './views/catalog.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { addRender } from './middlewares/addRender.js';
import { addSession } from './middlewares/session.js';

//middlewares;
page(addSession)
page(addRender);

page('/', '/home');
page('/index.html', '/home');
page('/home', showHome);
page('/create', showCreate);
page('/catalog', showCatalog);
page('/details/:id', showDetails);
page('/details/:id/edit', showEdit);
page('/login', showLogin);
page('/register', showRegister);
page.start();



