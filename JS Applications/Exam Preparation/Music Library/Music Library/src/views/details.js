import { html } from '../../node_modules/lit-html/lit-html.js';
import { addLike, deleteRequest, getNumberOfLikes, getSingle, getTotalLikes  } from '../api/data.js';

const detailsTemplate = (ctx, item, isOwner, isUser, bindedOnDelete) => html`
<!-- Details page -->
<section id="details">
        <div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src=${item.imageUrl} alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${item.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${item.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${item.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${item.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${item.sales}</span></p>
          </div>
          <div id="likes">Likes: <span id="likes-count">${item.totalLikes}</span></div>
          <div id="action-buttons">
                ${isOwner 
                    ? html`
                            <a href="/details/${item._id}/edit" id="edit-btn">Edit</a>
                            <a @click=${bindedOnDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
                    : isUser && !item.isAlreadyLiked 
                        ? html`<a @click=${onLike.bind(null, item)} href="javascript:void(0)" id="like-btn">Like</a>` 
                        : null}
                </div> 
        </div>
      </section>
</section>`;

let context = null;

export async function showDetails(ctx) {
    context = ctx;
    const itemId = ctx.params.id;
    const isUser = ctx.user != null;
    
    const request = [getSingle(itemId), getTotalLikes(itemId)]
    
    if(isUser) {
        request.push(getNumberOfLikes(itemId, ctx.user._id));
    }
    
    const [item, totalLikes, isAlreadyLiked] = await Promise.all(request);
    
    item.totalLikes = totalLikes;
    item.likesFromUser = isAlreadyLiked;
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

async function onLike(item, event) {
    const anchor = event.currentTarget;
    try {
        anchor.style.display = 'none';

        await addLike(item._id);
        item.totalLikes++;
        item.likesFromUser++;
        context.update();
    } catch(err) {
        anchor.style.display = '';
        throw err;
    }
}
