const fs = require('fs');
const { notFound } = require('../src/utils');
const { Transform } = require('stream');

async function homeController(req, res, path) {
  if (path == '/' || path == '/home') {
    path = './views/index.html';
  }

  try {
    await fs.promises.stat(path);
  } catch (err) {
    notFound(req, res);
    return;
  }

  const dataBase = JSON.parse(await fs.promises.readFile('./data/cats.json'));
  const arrOfData = Object.values(dataBase);

  fs.createReadStream(path).pipe(animalCards(arrOfData)).pipe(res);
}

const animalCards = (arrOfData) => new Transform({
  transform(chunk, encoding, callback) {
    // Modify the HTML content here based on database data (arrOfData)
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