import { html } from '../../node_modules/lit-html/lit-html.js';
import { editBook, getBook } from '../api/data.js';
import { formHandler } from '../util.js';

const editTemplate = (onSubmit, book) => html`
<!-- Edit Page ( Only for the creator )-->
<section id="edit-page" class="edit">
    <form @submit=${onSubmit} id="edit-form" action="#" method="">
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" .value=${book.title}>
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea .value=${book.description} name="description" id="description"></textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" .value=${book.imageUrl}>
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select .value=${book.type} id="type" name="type" value="Fiction">
                        <option value="Fiction">Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>
`;

export async function showEdit(ctx) {
    const bookId = ctx.params.id;
    const book = await getBook(bookId);
    const onSubmitEdit = onSubmit.bind(null, ctx, bookId);

    ctx.render(editTemplate(formHandler(onSubmitEdit), book));
}

async function onSubmit(ctx, bookId, data, form) {
    if (Object.values(data).some(x => x == '')) {
        alert('All fields must be filled!');
        return;
    }

    await editBook(bookId, data);
    form.reset();
    ctx.page.redirect('/details/' + bookId);
}