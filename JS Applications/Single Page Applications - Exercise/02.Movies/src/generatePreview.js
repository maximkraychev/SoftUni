import { details } from './details.js';

export function generatePreview(data) {
    const li = document.createElement('li');
    li.classList.add('card');

    const img = document.createElement('img');
    img.src = data.img;
    img.alt = 'Movie Picture';
    li.appendChild(img);

    const div = document.createElement('div');
    div.classList.add('card-body');
    li.appendChild(div);

    const h4 = document.createElement('h4');
    h4.textContent = data.title;
    div.appendChild(h4);

    if (sessionStorage.getItem('accessToken')) {
        const div = document.createElement('div');
        div.classList.add('card-footer');
        li.appendChild(div);

        const btnDetails = document.createElement('button');
        btnDetails.textContent = 'Details';
        btnDetails.classList.add('btn');
        btnDetails.classList.add('btn-info');
        const onDetails = details.bind(null, data);
        btnDetails.addEventListener('click', onDetails)
        div.appendChild(btnDetails);
    }

    return li;
}
