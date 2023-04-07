const fs = require('fs');
const { notFound } = require('./utils');

function handlerGet(req, res, path) {
    if (path == '/' || path == 'home') {
        path = '/index';
    }

    path += '.html'

    fs.stat('./views' + path, (err, stat) => {
        if (err !== null || stat.isFile() != true) {
            notFound(req, res);
            return;
        }
        fs.createReadStream('./views' + path).pipe(res);
    });
}


function handlerPost(req, res, path) {

}

module.exports = { handlerGet, handlerPost }