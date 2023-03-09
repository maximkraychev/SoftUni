import { postRequest } from './postRequest.js';
import { router } from './router.js';

const addMovieSection = document.querySelector('#add-movie');
addMovieSection.remove();

const body = document.querySelector('body');

export async function renderAddMoviePage() {
    body.querySelector('section').replaceWith(addMovieSection);
}

const formElement = addMovieSection.querySelector('form');
formElement.addEventListener('submit', addMovie);
const url = 'http://localhost:3030/data/movies';

async function addMovie(event) {
    event.preventDefault();
    const form = new FormData(formElement);

    const title = form.get('title');
    const description = form.get('description');
    const img = form.get('img');

    if (title == '' || description == '' || img == '') {
        return;
    }

    const dataForRequest = { title, description, img, _ownerId: sessionStorage.getItem('id') };

    const data = await postRequest(url, dataForRequest, sessionStorage.getItem('accessToken'));

    formElement.reset();
    router('/');
}