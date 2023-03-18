import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/data.js';
import { furnitureTemplate } from '../util.js';

const catalogTemplate = (furnitures) => html`
<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
    <div class="row space-top">

        ${furnitures.map(x => furnitureTemplate(x))}

    </div>
</div>
`

export async function showCatalog(ctx) {
    const furnitures = await getAll()
    ctx.render(catalogTemplate(furnitures))
}