import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyPost } from '../api/data.js';

const myPostsTemplate = (data) => html`
<!-- My Posts -->
<section id="my-posts-page">
    <h1 class="title">My Posts</h1>
    ${data.length != 0 
        ? html`   
            <!-- Display a div with information about every post (if any)-->
            <div class="my-posts">
                ${data.map(postTemplate)}
            </div>` 
        : html`   
            <!-- Display an h1 if there are no posts -->
            <h1 class="title no-posts-title">You have no posts yet!</h1>`}
</section>
`;

const postTemplate = (post) => html`
<div class="post">
    <h2 class="post-title">${post.title}</h2>
    <img class="post-image" src=${post.imageUrl} alt="Material Image">
    <div class="btn-wrapper">
        <a href="/details/${post._id}" class="details-btn btn">Details</a>
    </div>
</div>
`;

export async function showMyposts(ctx) {
    const userId = ctx.user?._id;
    const data = await getMyPost(userId);
    ctx.render(myPostsTemplate(data));
}