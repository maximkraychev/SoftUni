const detailsSecttion = document.querySelector('#movie-example');
detailsSecttion.remove();
const body = document.querySelector('body');


const movieTitleElement = detailsSecttion.querySelector('h1');
const imgElement = detailsSecttion.querySelector('img');
const descriptionElement = detailsSecttion.querySelector('p');
const divForDataset = detailsSecttion.querySelector('.col-md-4')

export function details(data) {
    body.querySelector('section').replaceWith(detailsSecttion);
    movieTitleElement.textContent = `Movie title: ${data.title}`;
    imgElement.src = data.img;
    descriptionElement.textContent = data.description;
    divForDataset.dataset.movieId = data._id;
    divForDataset.dataset.ownerId = data._ownerId;
    buttonAccesHandler(data);
}

const deleteBtn = detailsSecttion.querySelector('.btn-danger');
const editBtn = detailsSecttion.querySelector('.btn-warning');
const likeBtn = detailsSecttion.querySelector('.btn-primary');
const spanWithLikes = detailsSecttion.querySelector('.enrolled-span');

function buttonAccesHandler(data) {
    if (data._ownerId == sessionStorage.getItem('id')) {
        deleteBtn.style.display = 'inline';
        editBtn.style.display = 'inline';
        likeBtn.style.display = 'none';
    } else if (data._ownerId != sessionStorage.getItem('id')) {
        deleteBtn.style.display = 'none';
        editBtn.style.display = 'none';
        likeBtn.style.display = 'inlne';
    }
}

// export const onRenderEdit = renderEdit.bind(null, editMovieSection);
// editBtn.addEventListener('click', onRenderEdit);