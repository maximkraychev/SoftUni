import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationTemplate } from '../views/leyout.js';

const root = document.querySelector('#container');

export function addRender(ctx, next) {
    ctx.render = renderView.bind(null, ctx);
    next();
}

function renderView(ctx, content) {
    render(navigationTemplate(ctx, content), root);
}