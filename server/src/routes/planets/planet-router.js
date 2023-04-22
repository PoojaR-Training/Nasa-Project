const express = require('express');
const planetrouter = express.Router();
const { httpGetallplanets } = require('./planet-controller');

planetrouter.get('/', httpGetallplanets);

module.exports = planetrouter;