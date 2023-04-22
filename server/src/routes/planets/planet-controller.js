const { getAllPlanets } = require('../../models/planet-model');

async function httpGetallplanets(req, res) {
    return res.json(await getAllPlanets());
}

module.exports = {
    httpGetallplanets
};