import { render } from '../../node_modules/lit-html/lit-html.js';
import { leyoutTemplate } from '../views/leyout.js';

const root = document.querySelector('#wrapper');

export function addRender(ctx, next) {
    ctx.render = renderView.bind(null, ctx);
    next();
}

function renderView(user, content) {
    render(leyoutTemplate(user, content), root);
}

