import {} from './postHandle.js';
import {} from './renderComments.js';
import { renderHome } from './renderHome.js';

const homeBtn = document.querySelector('header a')
homeBtn.addEventListener('click', () => renderHome);

renderHome()