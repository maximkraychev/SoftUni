import { html } from '../../node_modules/lit-html/lit-html.js';
import { getData } from '../api/data.js';

const dashboadTemplate = (data) => html`
<section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <div class="animals-dashboard">
        ${data.length != 0 
            ? data.map(cardTemplate) 
            : html`
                <!--If there is no pets in dashboard-->
            <div>
                <p class="no-pets">No pets in dashboard</p>
            </div>`}
    </div>
</section>`;

const cardTemplate = (animal) => html`
<div class="animals-board">
            <article class="service-img">
                <img class="animal-image-cover" src=${animal.image}>
            </article>
            <h2 class="name">${animal.name}</h2>
            <h3 class="breed">${animal.breed}</h3>
            <div class="action">
                <a class="btn" href="/details/${animal._id}">Details</a>
            </div>
        </div>`;

export async function showDashboard(ctx) {
    const data = await getData();

    ctx.render(dashboadTemplate(data));
}

