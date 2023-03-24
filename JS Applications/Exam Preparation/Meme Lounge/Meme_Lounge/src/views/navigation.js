import { html } from '../../node_modules/lit-html/lit-html.js';

export const navigationTemplate = (ctx, content) => html`
    <!-- Notifications -->
    <section id="notifications">
        <div id="errorBox" class="notification">
            <span>MESSAGE</span>
        </div>
    </section>
    
    <!-- Navigation -->
    <nav>
        <a href="/allMemes">All Memes</a>
        ${ctx.user != null 
        ? html`
            <!-- Logged users -->
            <div class="user">
                <a href="/create">Create Meme</a>
                <div class="profile">
                    <span>Welcome, {email}</span>
                    <a href="/profile">My Profile</a>
                    <a href="#">Logout</a>
                </div>
            </div>`
        : html`
            <!-- Guest users -->
            <div class="guest">
                <div class="profile">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
                <a class="active" href="/welcome">Home Page</a>
            </div>`}
    </nav>
    
    <!-- Main Content -->
    <main>
        ${content}
    </main>
    
    <!-- Footer  -->
    <footer class="footer">
        <p>Created by SoftUni Delivery Team</p>
    </footer>
`;