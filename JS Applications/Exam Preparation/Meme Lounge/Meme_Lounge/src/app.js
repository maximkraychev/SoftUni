import page from '../node_modules/page/page.mjs';
import { showAllMemes } from './views/allMemes.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showLogin } from './views/login.js';
import { showProfile } from './views/profile.js';
import { showRegister } from './views/register.js';
import { showWelcome } from './views/welcome.js';
import { addSession } from './middleweare/session.js';
import { addRender } from './middleweare/render.js';


//middleware;
page(addSession);
page(addRender);

page('/index.html', '/welcome');
page('/', '/welcome');
page('/welcome', showWelcome);
page('/allMemes', showAllMemes);
page('/create', showCreate);
page('/details/:id', showDetails);
page('/edit/:id', showEdit);
page('/login', showLogin);
page('/profile', showProfile);
page('/register', showRegister);
page.start();


