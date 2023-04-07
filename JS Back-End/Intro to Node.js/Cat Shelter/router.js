const { sendStatic } = require("./sendCSS");
const { notFound } = require("./utils");

const routes = {};

function match(req, res) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;
    const method = req.method;
    console.log('<<<', path, method);

    if (path.endsWith('.css') || path.endsWith('.png')) {
        sendStatic(req, res, path);
        return;
    }

    let handler;
    if (routes[path] != undefined) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        handler = routes[path][method];
    }

    if (typeof handler == 'function') {
        handler(req, res, path, routes);
    } else {
        notFound(req, res);
    }

}

function register(method, path, handler) {
    if (routes[path] == undefined) {
        routes[path] = {};
    }

    routes[path][method] = handler;
}

module.exports = {
    match,
    get: register.bind(null, 'GET'),
    post: register.bind(null, 'POST'),
};