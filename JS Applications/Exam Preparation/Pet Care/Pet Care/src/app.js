import page from '../node_modules/page/page.mjs';
import { showWelcome } from './views/welcome.js';
import { showCreate } from './views/create.js';
import { showDashboard } from './views/dashboard.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { addRender } from './middlewares/addRender.js';
import { addSession } from './middlewares/session.js';

//middlewares;
page(addSession)
page(addRender);

page('/', '/welcome');
page('/index.html', '/welcome');
page('/welcome', showWelcome);
page('/create', showCreate);
page('/dashboard', showDashboard);
page('/details/:id', showDetails);
page('/details/:id/edit', showEdit);
page('/login', showLogin);
page('/register', showRegister);
page.start();



