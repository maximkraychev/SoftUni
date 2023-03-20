import { html } from '../../node_modules/lit-html/lit-html.js';
import { editOffer, getOffer } from '../api/data.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (onSubmitEdit, offer) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form class="edit-form" @submit=${onSubmitEdit}>
            <input type="text" name="title" value="${offer.title}" id="job-title" placeholder="Title" />
            <input type="text" name="imageUrl" value="${offer.imageUrl}" id="job-logo" placeholder="Company logo url" />
            <input type="text" name="category" value="${offer.category}" id="job-category" placeholder="Category" />
            <textarea id="job-description" name="description" placeholder="Description" rows="4"
                cols="50">${offer.description}</textarea>
            <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4"
                cols="50">${offer.requirements}</textarea>
            <input type="text" name="salary" value="${offer.salary}" id="job-salary" placeholder="Salary" />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;
let context = null;

export async function showEdit(ctx) {
    context = ctx;
    const offerId = ctx.params.id;

    const offer = await getOffer(offerId);
    const onSubmitEdit = onSubmit.bind(null, offerId);
    ctx.render(editTemplate(createSubmitHandler(onSubmitEdit), offer));
}

async function onSubmit(id, data, form) {
    if (Object.values(data).some(x => x == '')) {
        return alert('All fields must be filled in');
    }
   
    await editOffer(id, data);

    form.reset();
    context.page.redirect(`/details/${id}`);
}