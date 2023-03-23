import page from '../node_modules/page/page.mjs';
import { showHome } from './views/home.js';
import { showDashboard } from './views/dashboard.js';
import { showEdit } from './views/edit.js';
import { showSearch } from './views/search.js';
import { showDetails } from './views/details.js';
import { showCreate } from './views/create.js';
import { showLogin } from './views/login.js';
import { showRegister } from './views/register.js';
import { addRender } from './middlewares/render.js';
import { getUserData } from './util.js';
import { addSession } from './middlewares/session.js';


// Middlewares
page(addSession);
page(addRender);

page('/', '/home');
page('/index.html', '/home');
page('/home', showHome);
page('/dashboard', showDashboard);
page('/edit/:id', showEdit);
page('/search', showSearch);
page('/details/:id', showDetails );
page('/create', showCreate);
page('/login', showLogin);
page('/register', showRegister);
page.start();
