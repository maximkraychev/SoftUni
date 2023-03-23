import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteShoe, getShoe } from '../api/data.js';

const detailsTemplate = (shoe, isOwner, ctx) => html`
<!-- Details page -->
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src=${shoe.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
            <p>
                Model: <span id="details-model">${shoe.model}</span>
            </p>
            <p>Release date: <span id="details-release">${shoe.release}</span></p>
            <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
            <p>Value: <span id="details-value">${shoe.value}</span></p>
        </div>

        ${isOwner 
        ? html`
         <!--Edit and Delete are only for creator-->
         <div id="action-buttons">
            <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete.bind(null, shoe._id, ctx)} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>`
        : null}
       
    </div>
</section>
`;

export async function showDetails(ctx) {
    const shoeId = ctx.params.id;
    const userId = ctx.user._id;

    const shoe = await getShoe(shoeId);
    const isOwner = shoe._ownerId == userId;

    ctx.render(detailsTemplate(shoe, isOwner, ctx));
}

async function onDelete(id, ctx) {
    const choice = confirm('Are you sure?');

    if(choice) {
        await deleteShoe(id);
        ctx.page.redirect('/dashboard');
    }
}