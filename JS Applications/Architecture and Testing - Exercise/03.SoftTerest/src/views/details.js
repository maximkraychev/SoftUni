import { deleteById, getDetails } from "../api/data.js";

const section = document.querySelector('#details-page');

export async function showDetails(context, id) {
    const data = await getDetails(id);
    context.showSection(section);

    const user = JSON.parse(localStorage.getItem('user'));
    const isOwner = user && user._id == data._ownerId;

    section.innerHTML = createIdHTML(data, isOwner);
    if (isOwner) {
        section.querySelector('#deleteBtn').addEventListener('click', async (event) => {
            event.preventDefault();
            const choise = confirm('Are you sure you want to delete this idea?');
            if (choise) {
               await deleteById(id)
               context.goTo('/catalog');
            }
        });
    }
}


function createIdHTML(data, isOwner) {
    let html = `
    <img class="det-img" src="${data.img}" />
    <div class="desc">
        <h2 class="display-5">${data.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${data.description}</p>
    </div>`

    if (isOwner) {
        html += `
        <div class="text-center">
            <a id="deleteBtn" class="btn detb" href="">Delete</a>
        </div>`
    }

    return html;
}









