import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationTemplate } from '../views/navigation.js';

const root = document.querySelector('#container');

export function addRender(ctx, next) {
    ctx.render = showNavAndContent.bind(null, ctx);
    next();
}

function showNavAndContent(ctx, content) {
    render(navigationTemplate(ctx, content), root)
}