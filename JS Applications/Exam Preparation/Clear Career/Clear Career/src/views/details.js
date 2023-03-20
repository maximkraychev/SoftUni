import { html } from '../../node_modules/lit-html/lit-html.js';
import { addApplication, deleteOffer, getNumberOfApplicationsForUser, getOffer, getTotalApplications } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTemplate = (ctxForTemplate) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${ctxForTemplate.offer.imageUrl} alt="example1" />
        <p id="details-title">${ctxForTemplate.offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${ctxForTemplate.offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${ctxForTemplate.offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${ctxForTemplate.offer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${ctxForTemplate.offer.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">${ctxForTemplate.totalApplication}</strong></p>

        <div id="action-buttons">

            <!--Edit and Delete are only for creator-->
            ${ctxForTemplate.isOwner ? html`
            <a href="/edit/${ctxForTemplate.offer._id}" id="edit-btn">Edit</a>
            <a href="javascript:void(0)" @click=${ctxForTemplate.onDeleteBind} id="delete-btn">Delete</a>
            `: null}

            <!--Bonus - Only for logged-in users ( not authors )-->
            ${ctxForTemplate.isOwner || ctxForTemplate.isGuest || ctxForTemplate.isThisUserApplied
            ? null
            : html`
            <a href="javascript:void(0)" @click=${ctxForTemplate.onApplyBind} id="apply-btn">Apply</a>
            `}

        </div>
    </div>
</section>
`;

export async function showDetails(ctx) {
    const ctxForTemplate = await createContexForTemplate(ctx);

    ctx.render(detailsTemplate(ctxForTemplate));
}


async function createContexForTemplate(ctx) {
    const offerId = ctx.params.id;
    const userId = getUserData()?._id;
    const [offer, totalApplication] = await Promise.all([getOffer(offerId), getTotalApplications(offerId)]);
    const offerOwnerId = offer._ownerId;

    const isOwner = offerOwnerId == userId;
    const isGuest = userId == undefined;

    const onDeleteBind = onDelete.bind(null, offerId, ctx);
    const onApplyBind = onApply.bind(null, offerId, ctx);

    // Start with true
    let isThisUserApplied = 1; // Use 1 for true 0 for false cuz later that will be the answer from the server;

    if (isGuest == false) {
        isThisUserApplied = await getNumberOfApplicationsForUser(offerId, userId);  // It should return 0 or 1 !!!
    }

    return {
        offerId,
        userId,
        offer,
        offerOwnerId,
        isOwner,
        isGuest,
        totalApplication,
        isThisUserApplied,
        onDeleteBind,
        onApplyBind,
        ctx
    }
}

async function onDelete(id, ctx, event) {
    event.preventDefault();
    const youSure = confirm('Are you sure you want to delete this offer?');

    if (youSure == false) {
        return;
    }

    await deleteOffer(id);
    ctx.page.redirect('/dashboard');
}

async function onApply(offerId, ctx, event) {
    event.currentTarget.style.display = 'none';

    const result = await addApplication({ offerId });
    // Some logic if there is an error with the request to inform the user and to show the applay button again >>
    ctx.page.redirect(`/details/${offerId}`);
}