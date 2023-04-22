const Cube = require('../models/Cube');

async function getAllCubes() {
    return Cube.find({}).lean();
}

function getCubeById(id) {
    return Cube.findById(id).lean();
}

async function getCubesBySearchParams({ search, from, to }) {
    const searchToLower = search.toLowerCase();
    const fromAsNumber = Number(from) || 1;
    const toAsNumber = Number(to) || 6;

    return Cube.find({
        difficultyLevel: { $gte: fromAsNumber, $lte: toAsNumber },
        $or: [
            { name: { $regex: searchToLower, $options: 'i' } },
            { description: { $regex: searchToLower, $options: 'i' } }
        ]
    }).lean();
}

module.exports = {
    getAllCubes,
    getCubeById,
    getCubesBySearchParams
}