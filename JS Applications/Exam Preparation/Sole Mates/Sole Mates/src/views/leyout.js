import { html } from '../../node_modules/lit-html/lit-html.js';
import { logout } from '../api/user.js';
import { clearUserData } from '../util.js';

export const navigationTemplate = (ctx, content) => html`
<header>
    <!-- Navigation -->
    <a id="logo" href="/"><img id="logo-img" src="./images/logo.png" alt="" /></a>

    <nav>
        <div>
            <a href="/dashboard">Dashboard</a>
            <a href="/search">Search</a>
        </div>

        ${ctx.user 
        ? html`
            <!-- Logged-in users -->
            <div class="user">
                <a href="/create">Add Pair</a>
                <a href="javascript:void(0)" @click=${onLogout.bind(null, ctx)}>Logout</a>
            </div>`
        : html`
            <!-- Guest users -->
            <div class="guest">
                <a href="/login">Login</a>
                <a href="/register">Register</a>
            </div>`}
    </nav>
</header>

<main>${content}</main>
`;


function onLogout(ctx) {
    logout();
    clearUserData();
    ctx.page.redirect('/dashboard');
}