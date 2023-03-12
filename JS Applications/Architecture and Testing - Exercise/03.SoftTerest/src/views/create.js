import { createIdea } from "../api/data.js";

const section = document.querySelector('#create-page');
let ctx = null;

export function showCreate(context) {
    ctx = context;
    context.showSection(section);
}

const formElementt = section.querySelector('form');
formElementt.addEventListener('submit', onCreate);

async function onCreate(event) {
    event.preventDefault();

    const form = new FormData(formElementt);
    const title = form.get('title');
    const description = form.get('description');
    const img = form.get('imageURL');

    await createIdea({ title, description, img });
    formElementt.reset();
    ctx.goTo('/catalog');
}