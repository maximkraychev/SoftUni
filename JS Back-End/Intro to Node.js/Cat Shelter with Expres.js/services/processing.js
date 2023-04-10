const fs = require('fs');

const catData = JSON.parse(fs.readFileSync('./services/data/cats.json'));

// Using Set that way if the user send multiple post request we won't have duplicates;
const breedsData = new Set(JSON.parse(fs.readFileSync('./services/data/breeds.json')));

function getCatsData() {
    return catData;
}

function getCatById(id) {
    return catData.find(x => x._id == id);
}

function getBreedsData() {
    return Array.from(breedsData);
}

function createBreed(breed) {
    breedsData.add(breed);

    return new Promise((resolve, reject) => {
        fs.writeFile('./services/data/breeds.json',
            JSON.stringify(getBreedsData(), null, 2),
            (err) => {
                if (err == null) {
                    resolve();
                } else {
                    breedsData.delete(breed);
                    reject();
                }
            });
    });
}

function idGenerator() {
    return ('000000000' + Math.round(Math.random() * 999999999)).slice(-9);
}

function saveImages(data, name) {
const path = '/static/images/' + name;
fs.writeFileSync()
}

module.exports = {
    getCatsData,
    getCatById,
    getBreedsData,
    createBreed
}