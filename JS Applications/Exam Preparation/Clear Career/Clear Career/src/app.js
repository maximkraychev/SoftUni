import page from '../node_modules/page/page.mjs';
import { addRender } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';
import { showCreate } from './views/create.js';
import { showDashboard } from './views/dashboard.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showHome } from './views/home.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';

page(addSession);
page(addRender);

page('/index.html', 'home');
page('/', 'home');
page('home', showHome);
page('/create', showCreate);
page('/dashboard', showDashboard);
page('/details/:id', showDetails);
page('/edit', showEdit);
page('/login', showLogin);
page('/register', showRegister);

page.start();