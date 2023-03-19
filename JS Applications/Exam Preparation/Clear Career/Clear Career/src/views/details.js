import { html } from '../../node_modules/lit-html/lit-html.js';
import { getOffer } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTemplate = (offer, isOwner, isLoggedInButNotAuthor) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${offer.imageUrl} alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">1</strong></p>

        <!--Edit and Delete are only for creator-->
        <div id="action-buttons">

            ${isOwner ? html`
                <a href="" id="edit-btn">Edit</a>
                <a href="" id="delete-btn">Delete</a>
            `: null}

            ${isLoggedInButNotAuthor ? html`
                <!--Bonus - Only for logged-in users ( not authors )-->
                <a href="" id="apply-btn">Apply</a>
            `: null}

        </div>
    </div>
</section>
`;

export async function showDetails(ctx) {
    const offerId = ctx.params.id;
    const offer = await getOffer(offerId);

    const userId = getUserData()?._id;
    const offerOwnerId = offer._ownerId;
    const isOwner = offerOwnerId == userId;
    const isLoggedInButNotAuthor = userId != undefined && isOwner != true;

    ctx.render(detailsTemplate(offer, isOwner, isLoggedInButNotAuthor));
}