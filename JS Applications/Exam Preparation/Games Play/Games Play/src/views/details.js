import { html } from '../../node_modules/lit-html/lit-html.js';
import { createComment, deleteRequest, getAllComents, getSingle } from '../api/data.js';

const detailsTemplate = (ctx, item, isOwner, isUser, bindedOnDelete, bindedSubmitComment) => html`
 <!--Details Page-->
 <section id="game-details">
            <h1>Game Details</h1>
            <div class="info-section">

                <div class="game-header">
                    <img class="game-img" src=${item.imageUrl} />
                    <h1>${item.title}</h1>
                    <span class="levels">MaxLevel: ${item.maxLevel}</span>
                    <p class="type">${item.category}</p>
                </div>

                <p class="text">${item.summary}</p>

                <!-- Bonus ( for Guests and Users ) -->
                <div class="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                    ${item.comments.length != 0 
                        ? item.comments.map(commentTemplate)
                        : html`<p class="no-comment">No comments.</p>`}
                    </ul> 
                    
                </div>
                ${isOwner 
                    ? html ` 
                        <!-- Edit/Delete buttons ( Only for creator of this game )  -->
                        <div class="buttons">
                            <a href="/details/${item._id}/edit" class="button">Edit</a>
                            <a @click=${bindedOnDelete} href="javascript:void(0)" class="button">Delete</a>
                        </div>`
                    : null}
               
            </div>

            <!-- Bonus -->
            <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
            ${isUser && !isOwner 
            ? html`
                <article class="create-comment">
                    <label>Add new comment:</label>
                        <form @submit=${bindedSubmitComment} class="form">
                            <textarea name="comment" placeholder="Comment......"></textarea>
                            <input class="btn submit" type="submit" value="Add Comment">
                        </form>
                </article>`
            : null}
            

        </section>`;


const commentTemplate = (comment) => html`
<li class="comment">
    <p>Content: ${comment.comment}</p>
</li>
`;

let context = null;

export async function showDetails(ctx) {
    context = ctx;
    const itemId = ctx.params.id;
    const [item, comments] = await Promise.all([getSingle(itemId), getAllComents(itemId)]);
    item.comments = comments;
    console.log(comments);
    const isUser = ctx.user != null;
    const isOwner = ctx.user?._id == item._ownerId;
    const bindedOnDelete = onDelete.bind(null, item._id);
    const bindedSubmitComment = submitComment.bind(null, item);
    const bindedUpdate = update.bind(null, detailsTemplate, ctx, item, isOwner, isUser, bindedOnDelete, bindedSubmitComment);
    ctx.update = bindedUpdate;
    ctx.update();
}


function update(template, ...state) {
    context.render(template(...state));
}


async function onDelete(id) {
    const choice = confirm('Are you sure ?');

    if(choice) {
        await deleteRequest(id);
        context.page.redirect('/home');
    }
}

async function submitComment(item, event) {
    event.preventDefault();
    const form = Object.fromEntries(new FormData(event.currentTarget));
    const commentAsString = form.comment;
    
    const comment = await createComment(item._id, commentAsString);
    item.comments.push(comment);
    event.target.reset();
    context.page.redirect('/details/' + item._id);

    // This update will send the fetch request for the comment, and after it passes without error 
    // it will update localy the state of the comments and will reRender without sending new fetch request for the item and list of comments
    // but somehow cannot passes the e2e test
    // context.update();
}



