import page from '../node_modules/page/page.mjs';
import { showCreate } from './views/create.js';
import { showDashboard } from './views/dashboard.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showLogin } from './views/login.js';
import { showMyBooks } from './views/myBooks.js';
import { showRegister } from './views/register.js';
import { addRender } from './middlewares/render.js';
import { addSession } from './middlewares/session.js';

// Middlewares
page(addSession);
page(addRender);

page('/', '/dashboard');
page('/index.html', '/dashboard');
page('/dashboard', showDashboard);
page('/login', showLogin);
page('/register', showRegister);
page('/details', showDetails);
page('/create', showCreate);
page('/edit', showEdit);
page('/myBooks', showMyBooks);

page.start();