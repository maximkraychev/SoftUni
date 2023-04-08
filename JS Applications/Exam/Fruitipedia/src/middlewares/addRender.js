import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationTemplate } from '../views/leyout.js';


const root = document.querySelector('#wrapper');

export function addRender(ctx, next) {
    ctx.render = showView.bind(null, ctx);
    next();
}

function showView(ctx, content) {
    render(navigationTemplate(ctx, content), root);
}