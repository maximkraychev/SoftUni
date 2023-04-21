const fs = require('fs');
const uniqid = require('uniqid');

const pathToData = './config/database.json';
const data = JSON.parse(fs.readFileSync(pathToData));

function getAllCubes() {
    return Array.from(data);
}

function getCubeById(id) {
    return data.find((cube) => cube._id == id);
}

function createCube(name, imageUrl, description, difficultyLevel) {
    const id = uniqid();
    data.push({
        _id: id,
        name,
        imageUrl,
        description,
        difficultyLevel,
    });

    return new Promise((resolve, reject) => {
        fs.writeFile(pathToData, JSON.stringify(data, null, 2), err => err == null ? resolve(id) : reject());
    });
}

function getCubesBySearchParams({ search, from, to }) {
    const searchToLower = search.toLowerCase();
    const fromAsNumber = Number(from) || 1;
    const toAsNumber = Number(to) || 6;

    return data.filter((x) => 
        (Number(x.difficultyLevel) >= fromAsNumber && Number(x.difficultyLevel) <= toAsNumber)
        && (x.name.toLowerCase().includes(searchToLower) || x.description.toLowerCase().includes(searchToLower)));
}


module.exports = {
    getAllCubes,
    createCube,
    getCubeById,
    getCubesBySearchParams,
}