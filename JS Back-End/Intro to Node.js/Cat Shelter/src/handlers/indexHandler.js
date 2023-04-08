const fs = require('fs');
const { notFound } = require('../utils');
const { Transform } = require('stream');


const animalCards = new Transform({
    transform(chunk, encoding, callback) {
        console.log('test');
        // TODO.. This readfile is synchronous action find a way to change that later!
        const fileData = fs.readFileSync('./data/cats.json');
        const data = JSON.parse(fileData.toString());
        const dataAsArray = Object.values(data);
        const html = dataAsArray.length == 0 ? '<h2>There are no Animal yet!</h2>' : dataAsArray.map(createHtmlForCat);
        this.push(chunk.toString().replace('%%$$%%', html));
        callback();
    }
})


function indexHandler(req, res, path) {
    if (path == '/' || path == '/home') {
        path = '/index';
    }

    path += '.html';

    fs.stat('./views' + path, (err, stat) => {
        if (err !== null || stat.isFile() != true) {
            notFound(req, res);
            return;
        }
        console.log(path);
        //The initial load of / page is working, after refresh there is a problem and the below logic does not go into animalCards
        fs.createReadStream('./views' + path).pipe(animalCards).pipe(res);
    });
}


function createHtmlForCat(animal) {
    return `
    <li>
        <img src="${animal.img}" alt="Black Cat">
        <h3>${animal.name}</h3>
        <p><span>Breed: </span>${animal.breed}</p>
        <p><span>Description: </span>${animal.description}</p>
        <ul class="buttons">
            <li class="btn edit"><a href="">Change Info</a></li>
            <li class="btn delete"><a href="">New Home</a></li>
        </ul>
    </li>`
}

module.exports = { indexHandler };