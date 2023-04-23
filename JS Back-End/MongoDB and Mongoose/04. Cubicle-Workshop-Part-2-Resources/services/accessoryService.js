const Accessory = require('../models/Accessory');

async function createAccessory(reqBody) {

    const missing = Object.entries(reqBody).filter(([k, v]) => !v);
    if (missing.length > 0) {
        throw new Error(missing.map(x => `${x[0]} is required!`).join('\n'));
    }

    const data = {
        name: reqBody.name,
        description: reqBody.description,
        imageUrl: reqBody.imageUrl,
    }

    return Accessory.create(data);
}

async function getAccessoriesToBeAttach(currentAccessory) {
    return await Accessory
        .find({ _id: { $nin: currentAccessory } })
        .lean();

}

module.exports = {
    createAccessory,
    getAccessoriesToBeAttach
}