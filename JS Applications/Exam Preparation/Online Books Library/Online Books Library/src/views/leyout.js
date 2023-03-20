import { html } from '../../node_modules/lit-html/lit-html.js';
import { logout } from '../api/user.js';
import { clearUserData } from '../util.js';

export const navigationTemplate = (ctx, content) => html`
<header id="site-header">
    <!-- Navigation -->
    <nav class="navbar">
        <section class="navbar-dashboard">
            <a href="/dashboard">Dashboard</a>
            ${ctx.user == null 
            ? html`
            <!-- Guest users -->
            <div id="guest">
                <a class="button" href="/login">Login</a>
                <a class="button" href="/register">Register</a>
            </div>
            `
            : html`
              <!-- Logged-in users -->
              <div id="user">
                <span>Welcome, ${ctx.user.email}</span>
                <a class="button" href="/myBooks">My Books</a>
                <a class="button" href="/create">Add Book</a>
                <a class="button" href="javascript:void(0)" @click=${onLogout.bind(null, ctx)}>Logout</a>
            </div>
            `}
        </section>
    </nav>
</header>
<!-- Main Content -->
<main id="site-content">${content}</main>

<footer id="site-footer">
    <p>@OnlineBooksLibrary</p>
</footer>
`;


async function onLogout(ctx) {
    logout();
    clearUserData();
    ctx.page.redirect('/dashboard')
}