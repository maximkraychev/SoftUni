const Cube = require('../models/Cube');
const Accessory = require('../models/Accessory');

async function getAllCubes() {
    return Cube.find({}).lean();
}

async function getCubeById(id) {
    return Cube.findById(id).lean();
}

async function getCubeByIdPopulated(id) {
    return Cube.findById(id).populate('accessories').lean();
}

async function createCube(body, userId) {
    const missing = Object.entries(body).filter(([k, v]) => !v);

    if (missing.length > 0) {
        throw new Error(missing.map(x => `${x[0]} is required!`).join('\n'));
    }

    const data = {
        name: body.name,
        imageUrl: body.imageUrl,
        description: body.description,
        difficultyLevel: body.difficultyLevel,
        ownerId: userId
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

async function attachAccessory(cubeId, accessoryId) {
    const cube = await Cube.findById(cubeId);
    cube.accessories.push(accessoryId)
    await cube.save();
}

module.exports = {
    getAllCubes,
    getCubeById,
    getCubesBySearchParams,
    createCube,
    attachAccessory,
    getCubeByIdPopulated
}