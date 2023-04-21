const Cube = require('../models/Cube');

async function getAllCubes() {
    return Cube.find({}).lean();
}

function getCubeById(id) {
    return Cube.findById(id).lean();
}

function getCubesBySearchParams({ search, from, to }) {
    const searchToLower = search.toLowerCase();
    const fromAsNumber = Number(from) || 1;
    const toAsNumber = Number(to) || 6;

    // return data.filter((x) => 
    //     (Number(x.difficultyLevel) >= fromAsNumber && Number(x.difficultyLevel) <= toAsNumber)
    //     && (x.name.toLowerCase().includes(searchToLower) || x.description.toLowerCase().includes(searchToLower)));
    return Cube.find({})
        .where('name')
}

module.exports = {
    getAllCubes,
    getCubeById,
}