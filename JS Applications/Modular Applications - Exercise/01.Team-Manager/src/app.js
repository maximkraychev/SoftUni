import page from '../node_modules/page/page.mjs';
import { showHome } from './views/home.js';
import { showBrowse } from './views/browse.js';
import { showCreate } from './views/create.js';
import { showDetails } from './views/details.js';
import { showEdit } from './views/edit.js';
import { showLogin } from './views/login.js';
import { showMyTeams } from './views/myTeams.js';
import { showRegister } from './views/register.js';
import { addRender } from './middleweare/addRender.js';
import { showOverlay } from './views/overlay.js';
import { addSession } from './middleweare/addsession.js';

//middleweare
page(addSession);
page(addRender);

page('index.html', '/home');
page('/', '/home');
page('/home', showHome);
page('/browse', showBrowse);
page('/create', showCreate);
page('/details', showDetails);
page('/edit', showEdit);
page('/login', showLogin);
page('/myTeams', showMyTeams);
page('/register', showRegister);
page.start();



//showOverlay('an error')