const fs = require('fs');
const formidable = require("formidable");
const path = require('path');
const { idGenerator } = require('../utils');

const catData = JSON.parse(fs.readFileSync('./services/data/cats.json'));

// Using Set that way if the user send multiple post request we won't have duplicates;
const breedsData = new Set(JSON.parse(fs.readFileSync('./services/data/breeds.json')));


// BREEDS handlers;
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

// CATS handlers;
function getCatsData() {
    return catData;
}

function getCatById(id) {
    return catData[id];
}


async function newCatHandleData(req, res) {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
        if (err !== null) {
            throw new Error(err.message);
        }
        const { name, description, breed } = fields;
        // TODO.. maybe some validations for the data;

        try {
            const imgStaticPath = await saveImage(files);
            const idForData = await newCatSaveData(name, description, breed, imgStaticPath);
        } catch (err) {
            console.log(err.message);
            delete catData[id];
            // TODO handle error;
        }

    })

}

async function saveImage(files) {
    const pictureName = files.upload.newFilename;
    const oldPath = files.upload.filepath;
    const newPath = path.normalize('D:/Js/GitHub/SoftUni/JS Back-End/Intro to Node.js/Cat Shelter with Expres.js/static/images/' + pictureName + '.png');

    // With pipe;
    const readStream = fs.createReadStream(oldPath);
    const writeStream = fs.createWriteStream(newPath);
    readStream.pipe(writeStream).on('error', (err) => console.log(err.message));  // TODO handle the error
    return `/static/images/${pictureName}.png`;
    // Without pipe;

    // const rowData = fs.readFileSync(oldPath);
    // fs.writeFile(newPath, rowData, (err) => {
    //     if(err) console.log(err);
    //     return res.send("Successfully uploaded")
    // })
}

async function newCatSaveData(name, description, breed, imgStaticPath) {
    const id = idGenerator();
    catData[id] = {
        _id: id,
        name,
        description,
        breed,
        img: imgStaticPath,
    }
    return saveData(catData, id);
}

function saveData(data, id) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./services/data/cats.json',
            JSON.stringify(data, null, 2),
            (err) => {
                if (err == null) {
                    resolve(id);
                } else {
                    reject(err.message, id);
                }
            });
    });
}


async function deleteCatHandle(id) {

}

module.exports = {
    getCatsData,
    getCatById,
    getBreedsData,
    createBreed,
    newCatHandleData
}