import { navHandler } from "./navigationHandler.js";
import { deleteRequest } from './deleteRequest.js'
import { getRequest } from "./getRequest.js";

const detailsSecttion = document.querySelector('#movie-example');
detailsSecttion.remove();
const body = document.querySelector('body');

const movieTitleElement = detailsSecttion.querySelector('h1');
const imgElement = detailsSecttion.querySelector('img');
const descriptionElement = detailsSecttion.querySelector('p');
const divForDataset = detailsSecttion.querySelector('.col-md-4')

const deleteBtn = detailsSecttion.querySelector('.btn-danger');
const editBtn = detailsSecttion.querySelector('.btn-warning');
const likeBtn = detailsSecttion.querySelector('.btn-primary');
const spanWithLikes = detailsSecttion.querySelector('.enrolled-span');

export async function details(data) {
    body.querySelector('section').replaceWith(detailsSecttion);
    movieTitleElement.textContent = `Movie title: ${data.title}`;
    imgElement.src = data.img;
    descriptionElement.textContent = data.description;
    divForDataset.dataset.movieId = data._id;
    divForDataset.dataset.ownerId = data._ownerId;

    const movieId = data._id;
    await getNumbersOfLikes(movieId, spanWithLikes);
    await buttonAccesHandler(data);
    await navHandler()
}


async function buttonAccesHandler(data) {
    const ownerId = data._ownerId
    const movieId = data._id;
    
    if (ownerId == sessionStorage.getItem('id')) {
        deleteBtn.style.display = 'inline';
        editBtn.style.display = 'inline';
        spanWithLikes.style.display = 'inline';
        likeBtn.style.display = 'none';
        //spanWithLikes = spanWithLikes.cloneNode(true);
        spanWithLikes.removeEventListener('click', deleteLike);

    } else if (ownerId != sessionStorage.getItem('id')) {
        deleteBtn.style.display = 'none';
        editBtn.style.display = 'none';
        spanWithLikes.addEventListener('click', deleteLike);

        const isAlreadyLiked = await alreadyLiked(movieId);

        if (isAlreadyLiked) {
            likeBtn.style.display = 'none';
            spanWithLikes.style.display = 'inline';
        } else {
            spanWithLikes.style.display = 'none';
            likeBtn.style.display = 'inline';
        }
    }

}

async function deleteLike(event) {
    const divWithDataset = event.target.parentElement;
    const movieId = divWithDataset.dataset.movieId;
    const token = sessionStorage.getItem('accessToken');

    const likeId = await alreadyLiked(movieId);

    const url = `http://localhost:3030/data/likes/${likeId}`;
    const data = await deleteRequest(url, token);

    spanWithLikes.style.display = 'none';
    likeBtn.style.display = 'inline';
}


async function alreadyLiked(movieId) {
    const userId = sessionStorage.getItem('id');
    const url = `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22%20and%20_ownerId%3D%22${userId}%22`;
    const data = await getRequest(url);

    if (data.length == 0) {
        return false;
    } else {
        return data[0]._id;
    }
}

export async function getNumbersOfLikes(movieId, spanWithLikes) {
    const url = `http://localhost:3030/data/likes?where=movieId%3D%22${movieId}%22&distinct=_ownerId&count`;
    const data = await getRequest(url);
    spanWithLikes.textContent = `Liked ${data}`;
}