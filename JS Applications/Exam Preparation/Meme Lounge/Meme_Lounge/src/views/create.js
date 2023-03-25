import { html } from '../../node_modules/lit-html/lit-html.js';
import { create } from '../api/data.js';
import { formHandler, notificationHandler } from '../util.js';

const createTemplate = (onCreateBinded) => html`
<section id="create-meme">
    <form @submit=${onCreateBinded} id="create-form">
        <div class="container">
            <h1>Create Meme</h1>
            <label for="title">Title</label>
            <input id="title" type="text" placeholder="Enter Title" name="title">
            <label for="description">Description</label>
            <textarea id="description" placeholder="Enter Description" name="description"></textarea>
            <label for="imageUrl">Meme Image</label>
            <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl">
            <input type="submit" class="registerbtn button" value="Create Meme">
        </div>
    </form>
</section>
`;

export function showCreate(ctx) {
    const onCreateBinded = onCreate.bind(null, ctx);
    ctx.render(createTemplate(formHandler(onCreateBinded)));
}

async function onCreate(ctx, data, form) {

    if (Object.values(data).some(x => x == '')) {
        notificationHandler('All fields are required!', 3000);
        return;
    }

    try {
        await create(data);
        form.reset();
        ctx.page.redirect('/allMemes');
    } catch (err) {
        notificationHandler(err.message, 3000);
    }

}