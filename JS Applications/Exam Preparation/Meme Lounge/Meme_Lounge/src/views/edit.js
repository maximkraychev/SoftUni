import { html } from '../../node_modules/lit-html/lit-html.js';
import { editMeme, getMeme } from '../api/data.js';
import { formHandler, notificationHandler } from '../util.js';

const editTemplate = (meme, onEditBinded) => html`
<section id="edit-meme">
    <form @submit=${onEditBinded} id="edit-form">
        <h1>Edit Meme</h1>
        <div class="container">
            <label for="title">Title</label>
            <input .value=${meme.title} id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea .value=${meme.description} id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Image Url</label>
            <input .value=${meme.imageUrl} id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Edit Meme">
        </div>
    </form>
</section>
`;

export async function showEdit(ctx) {
    try {
        const memeId = ctx.params.id;
        const meme = await getMeme(memeId);
        const onEditBinded = onEdit.bind(null, ctx, memeId);
        ctx.render(editTemplate(meme, formHandler(onEditBinded)));
    } catch (err) {
        alert(err.message);
    }
}

async function onEdit(ctx, memeId, data, form) {
    if (Object.values(data).some(x => x == '')) {
        notificationHandler('All fields are required!', 3000);
        return;
    }

    try {
        await editMeme(memeId, data);
        form.reset();
        ctx.page.redirect(`/details/${memeId}`);
    } catch (err) {
        notificationHandler(err.message, 3000);
    }
}