const fs = require('fs');
const { notFound } = require('../util/utils');
const { Transform } = require('stream');
const { getAllCats } = require('../services/dataService');

async function homeController(req, res, path) {

	if (path == '/' || path == '/home') {
		path = './views/index.html';
	} else {
		return notFound();
	}

	try {
		await fs.promises.stat(path);
	} catch (err) {
		notFound(req, res);
		return;
	}

	const data = Object.values(getAllCats());
	fs.createReadStream(path).pipe(animalCards(data)).pipe(res);
}

const animalCards = (arrOfData) => new Transform({
	transform(chunk, encoding, callback) {
		const modifiedChunk = chunk.toString().replace('%%$$%%', arrOfData.length == 0 ? '<h2>There are no Animal yet!</h2>' : arrOfData.map(createHtmlForCat));
		this.push(modifiedChunk);
		callback();
	},
});


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

module.exports = { homeController };