import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMemesForUser } from '../api/data.js';

const profileTemplate = (memes, user) => html`
<!-- Profile Page ( Only for logged users ) -->
<section id="user-profile-page" class="user-profile">
    <article class="user-info">
        <img id="user-avatar-url" alt="user-profile" src=${user.gender == 'male' ? "/images/male.png" : "/images/female.png"} >
        <div class="user-content">
            <p>Username: ${user.username}</p>
            <p>Email: ${user.email}</p>
            <p>My memes count: ${memes.length}</p>
        </div>
    </article>
    <h1 id="user-listings-title">User Memes</h1>
    <div class="user-meme-listings">
       ${memes.length != 0 
        ? memes.map(x => memeTemplate(x))
        : html`<p class="no-memes">No memes in database.</p>`}
    </div>
</section>
`;

const memeTemplate = (meme) => html`
<div class="user-meme">
            <p class="user-meme-title">${meme.title}</p>
            <img class="userProfileImage" alt="meme-img" src=${meme.imageUrl}>
            <a class="button" href="/details/${meme._id}">Details</a>
        </div>
`;

export async function showProfile(ctx) {
    try {
        const user = ctx.user;
        console.log(user.gender);
        const memes = await getMemesForUser(user._id);
        console.log(memes);


        ctx.render(profileTemplate(memes, user));
    } catch (err) {
        alert(err.message);
    }
}