const Cube = require('../models/Cube');

async function getAllCubes() {
    return Cube.find({}).lean();
}

function getCubeById(id) {
    return Cube.findById(id).lean();
}

async function createCube(body) {
    const missing = Object.entries(body).filter(([k, v]) => !v);

    if (missing.length > 0) {
        throw new Error(missing.map(x => `${x[0]} is required!`).join('\n'));
    }

    const data = {
        name: body.name,
        imageUrl: body.imageUrl,
        description: body.description,
        difficultyLevel: body.difficultyLevel,
    }

    return Cube.create(data);
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
    getCubesBySearchParams,
    createCube
}