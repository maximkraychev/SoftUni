const fs = require('fs');

const catData = JSON.parse(fs.readFileSync('./services/data/cats.json'));

// Using Set that way if the user send multiple post request we won't have duplicates;
const breedsData = new Set(JSON.parse(fs.readFileSync('./services/data/breeds.json')));

function getCatsData() {
    return catData;
}

function getById(id) {
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

module.exports = {
    getCatsData,
    getById,
    getBreedsData,
    createBreed
}