const { getAllLaunches, addNewLaunch, exisitLaunch, aborteLaunch } = require('../../models/launch-model');

async function httpGetAllLaunches(req, res) {
    return await res.json(getAllLaunches());
}
function httpAddNewLaunch(req, res) {
    const launch = req.body;

    if (!launch.mission || !launch.rocket || !launch.launchDate || !launch.target) {
        return res.status(404).json({
            error: "Mising"
        });
    }

    launch.launchDate = new Date(launch.launchDate);
    if (isNaN(launch.launchDate)) {
        return res.status(404).json({
            error: "Mising123"
        });
    }
    addNewLaunch(launch);
    return res.status(201).json(launch);
}

function httpAbortLaunch(req, res) {
    const launchid = Number(req.params.id);
    if (!exisitLaunch(launchid)) {
        return res.status(404).json({
            error: 'Launch not found'
        });
    }
    const aborted = aborteLaunch(launchid);
    return res.status(200).json(aborted);
}

module.exports = {
    httpAbortLaunch,
    httpGetAllLaunches,
    httpAddNewLaunch
};