import { html } from '../../node_modules/lit-html/lit-html.js';

const dashboardTemplate = () => html`
<header>
    <h1><a href="/">Furniture Store</a></h1>
    <nav>
        <a id="catalogLink" href="index.html" class="active">Dashboard</a>
        <div id="user">
            <a id="createLink" href="create.html">Create Furniture</a>
            <a id="logoutBtn" href="javascript:void(0)">Logout</a>
        </div>
        <!-- <div id="guest">
                <a id="loginLink" href="login.html">Login</a>
                <a id="registerLink" href="register.html">Register</a>
            </div> -->
    </nav>
</header>
<div class="container">
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Welcome to Furniture System</h1>
            <p>Select furniture from the catalog to view details.</p>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="/images/table.png" />
                    <p>Description here</p>
                    <footer>
                        <p>Price: <span>235 $</span></p>
                    </footer>
                    <div>
                        <a href=”#” class="btn btn-info">Details</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="/images/sofa.jpg" />
                    <p>Description here</p>
                    <footer>
                        <p>Price: <span>1200 $</span></p>
                    </footer>
                    <div>
                        <a href=”#” class="btn btn-info">Details</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src="/images/chair.jpg" />
                    <p>Description here</p>
                    <footer>
                        <p>Price: <span>55 $</span></p>
                    </footer>
                    <div>
                        <a href=”#” class="btn btn-info">Details</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
`