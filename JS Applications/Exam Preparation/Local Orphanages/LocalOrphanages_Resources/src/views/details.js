import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteRequest, getDonationCount, getDonationFromUser, getSingle, makeDonation } from '../api/data.js';

const detailsTemplate = (ctx, item, isOwner, isUser, bindedOnDelete, onDonateBinded) => html`
<!-- Details Page -->
<section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
        <div id="details">
            <div class="image-wrapper">
                <img src="${item.imageUrl}" alt="Material Image" class="post-image">
            </div>
            <div class="info">
                <h2 class="title post-title">${item.title}</h2>
                <p class="post-description">Description: ${item.description}</p>
                <p class="post-address">Address: ${item.address}</p>
                <p class="post-number">Phone number: ${item.phone}</p>
                <p class="donate-Item">Donate Materials: ${item.donationCount}</p>

                <div class="btns">
                <!--Edit and Delete are only for creator-->
                ${isOwner 
                    ? html`
                        <a href="/details/${item._id}/edit" class="edit-btn btn">Edit</a>
                        <a @click=${bindedOnDelete} href="javascript:void(0)"class="delete-btn btn">Delete</a>` 
                    : isUser && !item.isDonated 
                            ? html`<a @click=${onDonateBinded} href="javascript:void(0)" class="donate-btn btn">Donate</a>` 
                            : null}
                </div>
            </div>
        </div>
    </div>
</section>
</section>`;

let context = null;

export async function showDetails(ctx) {
    context = ctx;
    const itemId = ctx.params.id;
    const isUser = ctx.user != null;

    const request = [getSingle(itemId), getDonationCount(itemId)];
    
    if (isUser) {
        request.push(getDonationFromUser(itemId, ctx.user._id));
    }

    const [item, donationCount, isDonated] = await Promise.all(request);
    item.donationCount = donationCount;
    item.isDonated = isDonated;

    const isOwner = ctx.user?._id == item._ownerId;

    const bindedOnDelete = onDelete.bind(null, item._id);
    const onDonateBinded = onDonate.bind(null, item);
    const bindedUpdate = update.bind(null, detailsTemplate, ctx, item, isOwner, isUser, bindedOnDelete, onDonateBinded);
    ctx.update = bindedUpdate;
    ctx.update();
}


function update(template, ...state) {
    context.render(template(...state));
}


async function onDelete(id) {
    const choice = confirm('Are you sure ?');

    if (choice) {
        await deleteRequest(id);
        context.page.redirect('/catalog');
    }
}

async function onDonate(item, event) {
    const anchor = event.currentTarget;
    try {
        anchor.style.display = 'none';
        await makeDonation(item._id);
        item.donationCount++;
        item.isDonated = 1;
        context.update();
    } catch(err) {
        anchor.style.display = '';
        throw err;
    }
}
