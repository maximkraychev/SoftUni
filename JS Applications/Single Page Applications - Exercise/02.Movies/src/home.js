import { generatePreview } from './generatePreview.js';
import { getRequest } from './getRequest.js'

const homePageSection = document.querySelector('#home-page');
const body = document.querySelector('body');

const movieList = homePageSection.querySelector('#movies-list');


export async function renderHome() {
    body.querySelector('section').replaceWith(homePageSection);
    const movies = await getRequest('http://localhost:3030/data/movies');
    const fragment = document.createDocumentFragment();

    movies.map(x => generatePreview(x)).forEach(x => fragment.appendChild(x));
    movieList.replaceChildren(fragment);
}