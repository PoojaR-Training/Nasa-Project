const express = require('express');
const { httpGetAllLaunches, httpAddNewLaunch, httpAbortLaunch } = require('./launch-controller');
const launchrouter = express.Router();

launchrouter.get("/", httpGetAllLaunches);
launchrouter.post("/", httpAddNewLaunch);
launchrouter.delete("/:id", httpAbortLaunch);
module.exports = launchrouter;