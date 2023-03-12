import { getAllIdeas } from "../api/data.js";

const section = document.querySelector('#dashboard-holder');
section.addEventListener('click', onDetails);
let ctx = null;

export async function showCatalog(context) {
    ctx = context;
    context.showSection(section);
    const data = await getAllIdeas();
    
    if (data.length == 0) {
        section.innerHTML = '<h1>No ideas yet! Be the first one :)</h1>';
    } else {
        section.replaceChildren(...data.map(x => createIdeaPreview(x)));
    }
}

function createIdeaPreview(data) {
    const div = document.createElement('div');
    div.classList.add('card', 'overflow-hidden', 'current-card', 'details');
    div.style.width = '20rem';
    div.style.height = '18rem';

    div.innerHTML = `
    <div class="card-body">
    <p class="card-text">${data.title}</p>
    </div>
    <img class="card-image" src="${data.img}" alt="Card image cap">
    <a data-id="${data._id}" class="btn" href="">Details</a>
    `
    return div; 
}

function onDetails(event) {
    if(event.target.tagName == 'A') {
        event.preventDefault();
        const id = event.target.dataset.id;
        if(id) {
            ctx.goTo('/detail', id)
        }
    }
}


