import { html } from '../../node_modules/lit-html/lit-html.js';
import { getOffers } from '../api/data.js';

const dashboardTemplate = (offers) => html`
<section id="dashboard">
    <h2>Job Offers</h2>
    ${offers.length == 0 
    ? html`
    <!-- Display an h2 if there are no posts -->
    <h2>No offers yet.</h2>`
    : html`
    <!-- Display a div with information about every post (if any)-->
    ${offers.map(x => html`${offerTemplate(x)}`)}
    `
}
</section>
`;

const offerTemplate = (offer) => html`
<div class="offer">
    <img src="${offer.imageUrl}" alt="example1" />
    <p>
        <strong>Title: </strong><span class="title">${offer.title}</span>
    </p>
    <p><strong>Salary:</strong><span class="salary">${offer.salary}</span></p>
    <a class="details-btn" href="/details/${offer._id}">Details</a>
</div> 
`;

export async function showDashboard(ctx) {

    const offers = await getOffers();
    ctx.render(dashboardTemplate(offers));
}


// <div class="offer">
//     <img src="./images/example1.png" alt="example1" />
//     <p>
//         <strong>Title: </strong><span class="title">Sales Manager</span>
//     </p>
//     <p><strong>Salary:</strong><span class="salary">1900</span></p>
//     <a class="details-btn" href="">Details</a>
// </div> 