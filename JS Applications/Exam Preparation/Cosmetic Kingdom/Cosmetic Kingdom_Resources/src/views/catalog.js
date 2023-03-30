import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/data.js';

const catalogTemplate = (data) => html`
<!-- Dashboard page -->
<h2>Products</h2>
<section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    ${data.length == 0 
    ? null
    : data.map(cardTemplate)}
</section>
<!-- Display an h2 if there are no posts -->
${data.length == 0 
    ? html`<h2>No products yet.</h2>`
    : null}`;

const cardTemplate = (card) => html`
<div class="product">
    <img src=${card.imageUrl} alt="example1" />
    <p class="title">${card.name}</p>
    <p><strong>Price:</strong><span class="price">${card.price}</span>$</p>
    <a class="details-btn" href="/details/${card._id}">Details</a>
</div>
`;

export async function showCatalog(ctx) {

    const data = await getAll();
    ctx.render(catalogTemplate(data));
}

