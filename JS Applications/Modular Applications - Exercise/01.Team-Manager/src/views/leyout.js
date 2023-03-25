import { html } from '../../node_modules/lit-html/lit-html.js';
import { logout } from '../api/user.js';
import { clearUserData } from '../util.js';

export const leyoutTemplate = (ctx, content) => html`

<header id="titlebar" class="layout">
    <a href="/home" class="site-logo">Team Manager</a>
    <nav>
        <a href="/browse" class="action">Browse Teams</a>
        ${ctx.user == null 
            ? html`
                <a href="/login" class="action">Login</a>
                <a href="/register" class="action">Register</a>`
            : html` 
                <a href="/myTeams" class="action">My Teams</a>
                <a @click=${onLogout.bind(null , ctx)} href="javascript:void(0)" class="action">Logout</a>`}
    </nav>
</header>
<main>${content}</main>
<footer id="footer">
    SoftUni &copy; 2014-2021
</footer>

<!-- <div class="overlay">
    <div class="modal">
        <p>Overlay message</p>
        <a href="#" class="action">Action</a>
    </div>
</div> -->
`;

function onLogout(ctx) {
    logout();
    clearUserData();
    ctx.page.redirect('/home');
}


