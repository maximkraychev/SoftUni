import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/data.js';

const catalogTemplate = (data) => html`
<!-- Dashboard page -->
<section id="dashboard">
    <h2>Albums</h2>
    <ul class="card-wrapper">
       ${data.length != 0 
        ? data.map(cardTemplate)
        : html`
            <!-- Display an h2 if there are no posts -->
            <h2>There are no albums added yet.</h2>`}
</section>
`;

const cardTemplate = (item) => html`
<li class="card">
    <img src=${item.imageUrl} alt="travis" />
    <p>
        <strong>Singer/Band: </strong><span class="singer">${item.singer}</span>
    </p>
    <p>
        <strong>Album name: </strong><span class="album">${item.album}</span>
    </p>
    <p><strong>Sales:</strong><span class="sales">${item.sales}</span></p>
    <a class="details-btn" href="/details/${item._id}">Details</a>
</li>
`;

export async function showCatalog(ctx) {

    const data = await getAll();
    ctx.render(catalogTemplate(data));
}

