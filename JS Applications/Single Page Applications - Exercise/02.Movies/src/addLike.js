import { getNumbersOfLikes } from "./details.js";
import { postRequest } from "./postRequest.js";

const url = 'http://localhost:3030/data/likes';

export async function addLike(event) {
    const divWithDataset = event.target.parentElement;
    const movieId = divWithDataset.dataset.movieId;
    const token = sessionStorage.getItem('accessToken');

    const data = await postRequest(url, { movieId }, token);

    const likeBtn = event.target;
    const spanWithLikes = likeBtn.nextElementSibling;
    likeBtn.style.display = 'none';
    getNumbersOfLikes(movieId, spanWithLikes);
    spanWithLikes.style.display = 'inline';
}