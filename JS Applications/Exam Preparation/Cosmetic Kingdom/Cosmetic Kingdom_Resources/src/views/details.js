import { html } from '../../node_modules/lit-html/lit-html.js';
import { addBuys, deleteRequest, getCount, getSingle, specificUserBought } from '../api/data.js';


const detailsTemplate = (ctx, product, isOwner, isGuest, bindedOnDelete, isBuyedAlredy, onBuy) => html`
<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src=${product.imageUrl} alt="example1" />
        <p id="details-title">${product.name}</p>
        <p id="details-category">
            Category: <span id="categories">${product.category}</span>
        </p>
        <p id="details-price">
            Price: <span id="price-number">${product.price}</span>$</p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Bought: <span id="buys">${product.boughtCount}</span> times.</h4>
                <span>${product.description}</span>
            </div>
        </div>
        <div id="action-buttons">
        ${isOwner 
            ? html` <!--Edit and Delete are only for creator-->
                <a href="/details/${product._id}/edit" id="edit-btn">Edit</a>
                <a @click=${bindedOnDelete} href="javascript:void(0)" id="delete-btn">Delete</a>` 
            : isGuest && isBuyedAlredy
                ? null
                : html`<!--Bonus - Only for logged-in users ( not authors )-->
                    <a @click=${onBuy.bind(null, product)} href="javascript:void(0)" id="buy-btn">Buy</a>`}
        </div>
    </div>
</section>
</section>`;

let context = null;

export async function showDetails(ctx) {
    context = ctx;
    const productId = ctx.params.id;
    const isGuest = ctx.user == null;
    const request = [getSingle(productId), getCount(productId)];
    
    if(!isGuest) {
        request.push(specificUserBought(productId ,ctx.user._id))
    }

    const [product, boughtCount, isBuyedAlredy] = await Promise.all(request);
    product.boughtCount = boughtCount;
    const isOwner = ctx.user?._id == product._ownerId;
    const bindedOnDelete = onDelete.bind(null, product._id);

    const bindedUpdate = update.bind(null, detailsTemplate, ctx, product, isOwner, isGuest, bindedOnDelete, isBuyedAlredy, onBuy);
    ctx.update = bindedUpdate;
    ctx.update();
}


function update(template, ...state) {
    context.render(template(...state));
}


async function onDelete(id) {
    const choice = confirm('Are you sure ?');
    if (choice) {
        await deleteRequest(id);
        context.page.redirect('/catalog');
    }
}


async function onBuy(product, event) {
    const anchor = event.currentTarget;
    try {
        anchor.style.display = 'none';
        await addBuys(product._id);
        product.boughtCount++;
        context.update();
    } catch(err) {
        anchor.style.display = '';
        throw err;
    }
}
