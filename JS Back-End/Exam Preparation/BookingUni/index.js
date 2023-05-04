const express = require('express');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');

const port = 3000;

async function start() {
    const app = express();

    expressConfig(app);
    routesConfig(app);

    app.listen(port, () => console.log(`Server is listening on port ${port}`));
}

start();