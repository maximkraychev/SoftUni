import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteItem, getDetails } from '../api/data.js';

const detailsTemplate = (furniture, isOwner, ctx) => html`
<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="../../${furniture.img}" />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${furniture.make}</span></p>
            <p>Model: <span>${furniture.model}</span></p>
            <p>Year: <span>${furniture.year}</span></p>
            <p>Description: <span>${furniture.description}</span></p>
            <p>Price: <span>${furniture.price}</span></p>
            <p>Material: <span>${furniture.material}</span></p>
            ${isOwner 
                ? html`
                    <div>
                        <a href="/edit/${furniture._id}"class="btn btn-info">Edit</a>
                        <a href="javascript:void(0)" @click=${onDelete.bind(null, furniture._id, ctx)} class="btn btn-red">Delete</a>
                    </div>`
                : null
            }
        </div>
    </div>
</div>
`

async function onDelete(id, ctx, event) {
    event.preventDefault();
    const boolean = confirm('Are you sure?');

    if(boolean) {
       await deleteItem(id)
       ctx.page.redirect('/catalog');
    }
}

export async function showDetails(ctx) {
    const furnitureId = ctx.params.id;
    const userId = ctx.getUserData()?._id;
    

    const furniture = await getDetails(furnitureId);
    const isOwner = furniture._ownerId == userId;

    ctx.render(detailsTemplate(furniture, isOwner, ctx))
}