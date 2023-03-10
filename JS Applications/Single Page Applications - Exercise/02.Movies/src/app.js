import { navHandler } from './navigationHandler.js';
import { router } from './router.js';

navHandler();
router('/');

const body = document.querySelector('body');
body.addEventListener('click', invokeRouter);

function invokeRouter(event) {
    if (event.target.tagName != 'A' || event.target.id == 'welcome-msg') {
        return
    }
    event.preventDefault();

    const url = new URL(event.target.href)
    router(url.pathname, event);
}