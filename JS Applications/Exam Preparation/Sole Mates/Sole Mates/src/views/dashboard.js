import { html } from '../../node_modules/lit-html/lit-html.js';
import { getShoes } from '../api/data.js';

const dashboardTemplate = (shoes) => html`
<!-- Dashboard page -->
<section id="dashboard">
    <h2>Collectibles</h2>
    <ul class="card-wrapper">
        <!-- Display a li with information about every post (if any)-->
        ${shoes.map(x => shoeTemplate(x))}
    </ul>

    ${shoes.length == 0 
    ? html`
    <!-- Display an h2 if there are no posts -->
    <h2>There are no items added yet.</h2>`
    : null}
    
</section>
`;

const shoeTemplate = (shoe) => html`
<li class="card">
    <img src=${shoe.imageUrl} alt="travis" />
    <p>
        <strong>Brand: </strong><span class="brand">${shoe.brand}</span>
    </p>
    <p>
        <strong>Model: </strong><span class="model">${shoe.model}</span>
    </p>
    <p><strong>Value:</strong><span class="value">${shoe.value}</span>$</p>
    <a class="details-btn" href="/details/${shoe._id}">Details</a>
</li>
`;

export async function showDashboard(ctx) {
    const shoes = await getShoes();

    ctx.render(dashboardTemplate(shoes));
}