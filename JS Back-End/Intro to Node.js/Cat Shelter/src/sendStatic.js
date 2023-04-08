const fs = require('fs');

const type = {
    '.css': 'text/css',
    '.ico': 'image/x-icon',
}

function sendStatic(req, res, path) {
    const curType = path.slice(-4);
    const basePath = curType == '.css' ? './content/styles' : './content/images';

    fs.stat(basePath + path, (err, stat) => {

        if (err !== null || stat.isFile() != true) {
            res.writeHead(404);
            res.end();
            return;
        }

        const src = fs.createReadStream(basePath + path);
        res.writeHead(200, { 'Content-Type': type[curType] });
        src.on('data', (chunk) => res.write(chunk));
        src.on('end', () => res.end());

    })
}

module.exports = { sendStatic };
