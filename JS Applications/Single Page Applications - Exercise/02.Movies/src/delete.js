import { deleteRequest } from "./deleteRequest.js";
import { router } from "./router.js";


export async function onDelete(event) {
    const divWithDataset = event.target.parentElement;
    const movieId = divWithDataset.dataset.movieId
    const urlForDelete = `http://localhost:3030/data/movies/${movieId}`;
    const token = sessionStorage.getItem('accessToken');
    await deleteRequest(urlForDelete, token);
    router('/');
}