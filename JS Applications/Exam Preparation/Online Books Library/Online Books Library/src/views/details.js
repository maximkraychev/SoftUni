import { html } from '../../node_modules/lit-html/lit-html.js';
import { addLike, deleteBook, getBook, getLikeCount, getLikeFromUser } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTemplate = (ctx, book, applayLike, onDelete) => html`
<!-- Details Page ( for Guests and Users ) -->
<section id="details-page" class="details">
    <div class="book-information">
        <h3>${book.title}</h3>
        <p class="type">Type: ${book.type}</p>
        <p class="img"><img src=${book.imageUrl}></p>
        <div class="actions">

            ${book.isOwner ? html`
            <!-- Edit/Delete buttons ( Only for creator of this book )  -->
            <a class="button" href="/details/edit/${book._id}">Edit</a>
            <a @click=${onDelete.bind(null, ctx, book)} class="button" href="javascript:void(0)">Delete</a>
            `: null}
            
            ${book.isGuest || book.isOwner || book.isLikedFromThisUser 
                ? null 
                : html`
                <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
                <a @click=${applayLike.bind(null, ctx, book)} class="button" href="javascript:void(0)">Like</a>
                `}

            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${book.likesCount}</span>
            </div>
        
        </div>
    </div>
    <div class="book-description">
        <h3>Description:</h3>
        <p>${book.description}</p>
    </div>
</section>
`;

export async function showDetails(ctx) {
    const bookId = ctx.params.id;

    const requests = [getBook(bookId), getLikeCount(bookId)];
    const userId = getUserData()?._id;

    if (userId != undefined) {
        requests.push(getLikeFromUser(bookId, userId));
    }

    const [book, likesCount, isLikedFromThisUser] = await Promise.all(requests);

    book.isOwner = userId == book._ownerId;
    book.isGuest = userId == undefined;
    book.likesCount = likesCount;
    book.isLikedFromThisUser = isLikedFromThisUser;

    update(ctx, book);   
}

function update(ctx, book) {
    ctx.render(detailsTemplate(ctx, book, applayLike, onDelete));
}

async function applayLike(ctx, book) {
    //TODO some logic so the user cannot click multiple times!!!
        await addLike(book._id);
        book.likesCount++;
        book.isLikedFromThisUser = 1;
        update(ctx, book);
}

async function onDelete(ctx, book) {
    const choice = confirm('Are you sure?');
    if(choice) {
        await deleteBook(book._id);
        ctx.page.redirect('/dashboard');
    }
}


