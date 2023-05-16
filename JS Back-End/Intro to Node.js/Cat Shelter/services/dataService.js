const fs = require('fs');

const cats = JSON.parse(fs.readFileSync('./data/cats.json'));
const breeds = JSON.parse(fs.readFileSync('./data/breeds.json'));

// cats
function getAllCats() {
    return cats;
}

//breeds
async function addBreed(name) {
    breeds.push(name);
    return updateBreeds(breeds);
}

function updateBreeds(updatedData) {
    fs.promises.writeFile('./data/breeds.json', JSON.stringify(updatedData)); 
}

module.exports = {
    getAllCats,
    addBreed
}
