const fs = require('fs');
const formidable = require("formidable");
const path = require('path');

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
    return catData.find(x => x._id == id);
}


async function saveImage(files) {
    const pictureName = files.upload.newFilename;
    const oldPath = files.upload.filepath;
    const newPath = path.normalize('D:/Js/GitHub/SoftUni/JS Back-End/Intro to Node.js/Cat Shelter with Expres.js/static/images/' + pictureName + '.png');


    // TODO handle if there are error: try to throw error.message to the router and handle it there; 
    try {
        // With pipe;
        const readStream = fs.createReadStream(oldPath);
        const writeStream = fs.createWriteStream(newPath);
        readStream.pipe(writeStream).on('error', (err) => err.message);
    } catch (err) {
        throw new Error(err.message);
    }

    // Without pipe;

    // const rowData = fs.readFileSync(oldPath);
    // fs.writeFile(newPath, rowData, (err) => {
    //     if(err) console.log(err);
    //     return res.send("Successfully uploaded")
    // })
}


async function newCatHandleData(req, res) {
    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
        if (err !== null) {
            throw new Error(err.message);
        }
        try {
            await saveImage(files);
        } catch (err) {
            throw new Error(err.message);
        }




    })

}

module.exports = {
    getCatsData,
    getCatById,
    getBreedsData,
    createBreed,
    newCatHandleData
}