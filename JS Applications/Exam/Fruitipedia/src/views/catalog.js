import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/data.js';

const catalogTemplate = (data) => html`
<!-- Dashboard page -->
<h2>Fruits</h2>
    <section id="dashboard">
        ${data.length != 0 
        ? html`${data.map(cardTemplate)}`
        : html`<h2>No fruit info yet.</h2>`}
    </section>
`;

const cardTemplate = (item) => html`
        <div class="fruit">
            <img src=${item.imageUrl} alt="example1" />
            <h3 class="title">${item.name}</h3>
            <p class="description">${item.description}</p>
            <a class="details-btn" href="/details/${item._id}">More Info</a>
        </div>
`;

export async function showCatalog(ctx) {
    const data = await getAll();
    ctx.render(catalogTemplate(data));
}


