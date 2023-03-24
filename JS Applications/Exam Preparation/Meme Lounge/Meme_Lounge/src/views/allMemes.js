import { html } from '../../node_modules/lit-html/lit-html.js';

const allMemesTemplate = () => html`
<!-- All Memes Page ( for Guests and Users )-->
<section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
        <!-- Display : All memes in database ( If any ) -->
        <div class="meme">
            <div class="card">
                <div class="info">
                    <p class="meme-title">Debugging</p>
                    <img class="meme-image" alt="meme-img" src="/images/2.png">
                </div>
                <div id="data-buttons">
                    <a class="button" href="#">Details</a>
                </div>
            </div>
        </div>
        <div class="meme">
            <div class="card">
                <div class="info">
                    <p class="meme-title">Java Script</p>
                    <img class="meme-image" alt="meme-img" src="/images/4.png">
                </div>
                <div id="data-buttons">
                    <a class="button" href="#">Details</a>
                </div>
            </div>
        </div>
        <div class="meme">
            <div class="card">
                <div class="info">
                    <p class="meme-title">Yes, arrays are objects</p>
                    <img class="meme-image" alt="meme-img" src="/images/6.png">
                </div>
                <div id="data-buttons">
                    <a class="button" href="#">Details</a>
                </div>
            </div>
        </div>
        <div class="meme">
            <div class="card">
                <div class="info">
                    <p class="meme-title">Java Script joke</p>
                    <img class="meme-image" alt="meme-img" src="/images/1.png">
                </div>
                <div id="data-buttons">
                    <a class="button" href="#">Details</a>
                </div>
            </div>
        </div>
        <div class="meme">
            <div class="card">
                <div class="info">
                    <p class="meme-title">Bad code can present some problems</p>
                    <img class="meme-image" alt="meme-img" src="/images/3.png">
                </div>
                <div id="data-buttons">
                    <a class="button" href="#">Details</a>
                </div>
            </div>
        </div>
        <!-- Display : If there are no memes in database -->
        <p class="no-memes">No memes in database.</p>
    </div>
</section>
`;

export function showAllMemes(ctx) {
    ctx.render(allMemesTemplate());
}