function notFound(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.write('404 Not Found');
    res.end();
}

function idGenerator() {
    return ('000000000' + Math.round(Math.random() * 999999999)).slice(-9);
}

module.exports = { notFound, idGenerator};