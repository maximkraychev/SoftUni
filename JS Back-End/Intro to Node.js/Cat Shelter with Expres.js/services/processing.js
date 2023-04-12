const fs = require('fs');
const formidable = require("formidable");
const path = require('path');
const { idGenerator } = require('../utils');

const fullPathToStaticImages = 'D:/Js/GitHub/SoftUni/JS Back-End/Intro to Node.js/Cat Shelter with Expres.js/static/images/';
const pathToCatsData = './services/data/cats.json';
const pathToBreedsData = './services/data/breeds.json';

const catData = JSON.parse(fs.readFileSync(pathToCatsData));

// Using Set that way if the user send multiple post request we won't have duplicates;
const breedsData = new Set(JSON.parse(fs.readFileSync(pathToBreedsData)));


// BREEDS handlers;
function getBreedsData() {
    return Array.from(breedsData);
}

function createBreed(breed) {
    breedsData.add(breed);

    return new Promise((resolve, reject) => {
        fs.writeFile(pathToBreedsData,
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

    return new Promise((resolve, reject) => {
        form.parse(req, async (err, fields, files) => {
            if (err !== null) {
                throw new Error(err.message);
            }
            const { name, description, breed } = fields;
            // TODO.. maybe some validations for the data;
            
            try {
                const imgStaticPath = await saveImage(files);
                const idForData = await newCatSaveData(name, description, breed, imgStaticPath);
                resolve(idForData);
            } catch (err) {
                console.log(err.message);
                delete catData[id];
                reject(err.message);
                // TODO handle error;
            }
        })
    })

}

async function saveImage(files) {
    const pictureName = files.upload.newFilename;
    const oldPath = files.upload.filepath;
    const newPath = path.normalize(fullPathToStaticImages + pictureName + '.png');

    const readStream = fs.createReadStream(oldPath);
    const writeStream = fs.createWriteStream(newPath);
    readStream.pipe(writeStream).on('error', (err) => console.log(err.message));  // TODO handle the error
    return `/static/images/${pictureName}.png`;
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
        fs.writeFile(pathToCatsData,
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


async function handlerDeleteCat(id) {

    const data = catData[id];
    if (data == undefined) {
        console.log(`The data with id:${id} dosn't exist`);
        return;
        // TODO handle error;
    }

    try {
        const imgName = data.img.split('/').pop();   // maybe we should chek first if there is something in data.img
        await deleteImg(imgName);   // Not sure if this await will wait for the file to be delete since we execute this in callback, >> maybe using fsPromises.unlink
        delete catData[id];
        await saveData(catData);

    } catch (err) {
        console.log(err.message);
        //TODO Handle err;
    }
}

async function deleteImg(imgName) {
    fs.unlink(fullPathToStaticImages + imgName, (err) => {
        if (err) {
            throw new Error(err.message);
        }
    }); // TODO handle error;
}

async function editData(res, req) {
    const id = req.params.id;
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
            resolve(idForData);
        } catch (err) {
            console.log(err.message);
            delete catData[id];
            reject(err.message);
            // TODO handle error;
        }

    });
}

module.exports = {
    getCatsData,
    getCatById,
    getBreedsData,
    createBreed,
    newCatHandleData,
    handlerDeleteCat,
    editData
}