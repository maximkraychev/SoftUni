import { load } from './loadCatches.js';
import { add } from './addCatch.js';
import { onDelete } from './delete.js';
import { update } from './update.js';

const sectionHome = document.querySelector('#home-view');
const main = document.querySelector('main');

export function renderHome() {
    main.appendChild(sectionHome);
    sectionHome.style.display = 'block';
}

const loadBtn = document.querySelector('.load');
loadBtn.addEventListener('click', load);


const formElement = document.querySelector('#addForm');
formElement.addEventListener('submit', add);

main.addEventListener('click', onDelupdateOrDleteete);

function onDelupdateOrDleteete(event) {
    const clickedElemen = event.target;
    if (clickedElemen.tagName != 'BUTTON') {
        return;
    }

    if (clickedElemen.textContent == 'Delete') {
        onDelete(clickedElemen);
    } else if (clickedElemen.textContent == 'Update') {
        update(clickedElemen);
    }
}
