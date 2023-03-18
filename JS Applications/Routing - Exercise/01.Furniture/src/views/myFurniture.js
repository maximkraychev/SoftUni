import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyFurniture } from '../api/data.js';
import { furnitureTemplate } from '../util.js';

const myFurnitureTemplate = (furnitures) => html`
<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    <div class="row space-top">
        
    ${furnitures.map(x => furnitureTemplate(x))}
    
    </div>
</div>
`

export async function showMyFurniue(ctx) {

    const userId = ctx.getUserData()?._id;
    const furnitures = await getMyFurniture(userId)

    ctx.render(myFurnitureTemplate(furnitures))
}