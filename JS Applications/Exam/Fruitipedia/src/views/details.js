import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteRequest, getSingle } from '../api/data.js';

const detailsTemplate = (ctx, item, isOwner, isUser, bindedOnDelete) => html`
<!-- Details page -->
<section id="details">
          <div id="details-wrapper">
            <img id="details-img" src=${item.imageUrl} alt="example1" />
            <p id="details-title">${item.name}</p>
            <div id="info-wrapper">
              <div id="details-description">
                <p>${item.description}</p>
                    <p id="nutrition">Nutrition</p>
                   <p id = "details-nutrition">${item.nutrition}</p>
              </div>
                <div id="action-buttons">
                    ${isOwner 
                        ? html` 
                            <!--Edit and Delete are only for creator-->
                            <a href="/details/${item._id}/edit" id="edit-btn">Edit</a>
                            <a @click=${onDelete.bind(null, item._id)} href="javascript:void(0)" id="delete-btn">Delete</a>`
                        : null}
                </div>
            </div>
        </div>
      </section>
`;

let context = null;

export async function showDetails(ctx) {
    context = ctx;
    const itemId = ctx.params.id;
    const item = await getSingle(itemId);
    const isUser = ctx.user != null;
    const isOwner = ctx.user?._id == item._ownerId;
    const bindedOnDelete = onDelete.bind(null, item._id);
    
    const bindedUpdate = update.bind(null, detailsTemplate, ctx, item, isOwner, isUser, bindedOnDelete);
    ctx.update = bindedUpdate;
    ctx.update();
}


function update(template, ...state) {
    context.render(template(...state));
}


async function onDelete(id) {
    const choice = confirm('Are you sure ?');

    if(choice) {
        await deleteRequest(id);
        context.page.redirect('/catalog');
    }
}



