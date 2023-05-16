const fs = require('fs');

function notFound(req, res, err) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('<h1>404 Not Found</h1>');
    res.write(err.message)
    res.end();
}

function idGenerator() {
    return ('000000000' + Math.round(Math.random() * 999999999)).slice(-9);
}

function bodyPareser(body) {
    return Object.fromEntries(body.replaceAll('+', ' ').split('&').map(x => x.split('=')));
}


module.exports = {
    notFound,
    idGenerator,
    bodyPareser,
};