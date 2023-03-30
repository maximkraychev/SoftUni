import { html } from '../../node_modules/lit-html/lit-html.js';
import { logout } from '../api/user.js';
import { clearUserData } from '../util.js';

export const navigationTemplate = (ctx, content) => html`
<header>
    <!-- Navigation -->
    <h1><a href="/">Orphelp</a></h1>

    <nav>
        <a href="/">Dashboard</a>
        ${ctx.user != null 
            ? html`
                <!-- Logged-in users -->
                <div id="user">
                    <a href="/myPosts">My Posts</a>
                    <a href="/create">Create Post</a>
                    <a @click=${onLogout.bind(null, ctx)} href="javascript:void(0)">Logout</a>
                </div>` 
            : html`
                <!-- Guest users -->
                <div id="guest">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>`}  
    </nav>
</header>

<!-- Main Content -->
<main id="main-content">${content}</main>
`;


async function onLogout(ctx) {
    logout();
    clearUserData();
    ctx.page.redirect('/catalog');
}

