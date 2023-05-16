const fs = require('fs');
const { notFound, bodyPareser, redirect } = require('../util/utils');
const { addBreed } = require('../services/dataService');

async function breedControllerGET(req, res, path) {
    if (path == '/addBreed') {
        path = './views/addBreed.html';
    } else {
        return notFound(req, res);
    }

    try {
        await fs.promises.stat(path);
    } catch (err) {
        notFound(req, res);
        return;
    }

    const readHtml = fs.createReadStream(path);
    readHtml.on('data', (chunk) => res.write(chunk));
    readHtml.on('end', () => res.end());
    //readHtml.pipe(res);
}

async function breedControllerPOST(req, res, path) {
    try {
        const rowBody = await new Promise((resolve, reject) => {
            let body = '';

            req.on('data', (chunk) => {
                body += chunk;
            });

            req.on('end', () => {
                resolve(body);
            });

            req.on('error', (err) => {
                reject(err);
            });
        });
        const body = bodyPareser(rowBody);
        await addBreed(body.breed)
        res.writeHead(200);
        res.end();
        //TODO find a way to redirect;
    } catch (err) {
        notFound(req, res, err)
    }

}

module.exports = {
    breedControllerGET,
    breedControllerPOST
}