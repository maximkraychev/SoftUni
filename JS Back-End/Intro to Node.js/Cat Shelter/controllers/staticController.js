const fs = require('fs');
const path = require('path');

const type = {
    '.css': 'text/css',
    '.ico': 'image/x-icon',
}

function sendStatic(req, res, currenPath) {
    const appPath = path.resolve(__dirname, '..');
    const filePath = path.resolve(appPath, `.${currenPath}`);

    try {
        fs.stat(filePath, (err, stat) => {
            if (err != null || stat.isFile() != true) {
                res.writeHead(404);
                res.end();
                return;
            }

            const src = fs.createReadStream(filePath);
            const curType = filePath.slice(-4);
            res.writeHead(200, { 'Content-Type': type[curType] });
            src.on('data', (chunk) => res.write(chunk));
            src.on('end', () => res.end());
        })
    } catch (err) {
        res.writeHead(404);
        res.end();
    }
}

module.exports = { sendStatic };