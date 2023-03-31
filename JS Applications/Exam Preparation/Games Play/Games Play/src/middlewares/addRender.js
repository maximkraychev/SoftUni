import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationTemplate } from '../views/leyout.js';

// TODO root may be diffrent !!!;
const root = document.querySelector('#box');

export function addRender(ctx, next) {
    ctx.render = showView.bind(null, ctx);
    next();
}

function showView(ctx, content) {
    render(navigationTemplate(ctx, content), root);
}