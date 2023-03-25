import { render } from '../../node_modules/lit-html/lit-html.js';
import { leyoutTemplate } from '../views/leyout.js';

const root = document.querySelector('#content');

export function addRender(ctx, next) {
    ctx.render = renderView.bind(null, ctx);
    next();
}

function renderView(ctx, content) {
    render(leyoutTemplate(ctx, content), root);
}