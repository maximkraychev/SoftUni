import { getRequest } from "./getRequest.js";
import { putRequest } from "./putRequest.js";

const editMovieSection = document.querySelector('#edit-movie');
editMovieSection.remove();
const body = document.querySelector('body');
let movieId = '';
const formElement = editMovieSection.querySelector('form');


export function renderEdit() {
    const divWithDataset = body.querySelector('.col-md-4');
    if (divWithDataset) {
        movieId = divWithDataset.dataset.movieId;
    }

    body.querySelector('section').replaceWith(editMovieSection);
    loadDataForEdit();

}

async function loadDataForEdit() {
    const data = await getRequest(`http://localhost:3030/data/movies/${movieId}`);
    const title = formElement.querySelector('#title');
    const description = formElement.querySelector('textarea[name="description"]');
    const img = formElement.querySelector('#imageUrl');

    title.value = data.title;
    description.value = data.description;
    img.value = data.img;

}

formElement.addEventListener('submit', edit);

async function edit(event) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const title = form.get('title');
    const description = form.get('description');
    const img = form.get('img');

    const dataForRequest = { title, description, img };

    const data = await putRequest(`http://localhost:3030/data/movies/${movieId}`, dataForRequest);
    console.log(data);
    formElement.reset();
    

}

