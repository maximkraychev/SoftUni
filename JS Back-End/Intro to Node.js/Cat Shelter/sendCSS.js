const {fs} = require('fs');

const type = {
    '.css': 'text/css',
    '.ico': 'image/ico',
}

function sendStatic(req, res, path) {

    readdirSync('.' + path, (err, files) => {
        if(err != null) {
            res.end();
        }
    });

    const src = fs.createReadStream('.' + path);
    const curType = path.slice(-4);
    console.log(src);
    res.writeHead(200, { 'Content-Type': type[curType] });
    src.on('data', (chunk) => res.write(chunk));
    src.on('end', () => res.end());
}

// function sendFavIcon(req, res) {
//     const src = fs.createReadStream('./content/styles/site.css');
//     res.writeHead(200, {'Content-Type': 'image/ico'});
//     src.on('data', (chunk) => res.write(chunk));
//     src.on('end', () => res.end());
// }

module.exports = { sendStatic };
