const env = process.env.NODE_ENV || 'development';

const config = require('./config/config')[env];
const express = require('express');
const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');

start();

async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app);
    routesConfig(app);

    app.listen(config.port, console.log(`Listening on port ${config.port}!`));
}

