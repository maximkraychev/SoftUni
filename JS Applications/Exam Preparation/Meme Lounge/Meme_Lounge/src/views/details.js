import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteMeme, getMeme } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTemplate = (ctx, meme, isOwner, onDelete) => html`
<section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
        <div class="meme-img">
            <img alt="meme-alt" src=${meme.imageUrl}>
        </div>
        <div class="meme-description">
            <h2>Meme Description</h2>
            <p>${meme.description}</p>
            ${isOwner 
            ? html`
            <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
            <a class="button warning" href="/edit/${meme._id}">Edit</a>
            <button @click=${onDelete.bind(null, ctx, meme._id)} class="button danger">Delete</button>`
            : null}
        </div>
    </div>
</section>`;

export async function showDetails(ctx) {
    try {
    const memeId = ctx.params.id;
    const meme = await getMeme(memeId);

    const userId = getUserData()?._id;
    const memeOwnerId = meme._ownerId;
    const isOwner = memeOwnerId == userId;

    ctx.render(detailsTemplate(ctx, meme, isOwner, onDelete));
    } catch(err) {
        alert(err.message);
    }
}

async function onDelete(ctx, memeId) {
    try {
        const choice = confirm('Are you sure?');

        if(choice) {
          await deleteMeme(memeId);
            ctx.page.redirect('/allMemes');
        }

    } catch(err) {
        alert(err.message);
    }
}