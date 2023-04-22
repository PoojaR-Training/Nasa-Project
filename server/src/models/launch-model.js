const launchesdb = require("./launch-mongo");
const launches = new Map();
let latestFlighno = 100;
const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27 2030'),
    target: 'Kepler-442',
    customer: ['ZIM', 'NASA'],
    upcoming: true,
    success: true
};
savelaunch(launch);
async function savelaunch(launch) {
    await launchesdb.updateOne({
        flightNumber: launch.flightNumber,
    }, launch, {
        upsert: true,
    });
}

function exisitLaunch(launchid) {
    return launches.has(launchid);

}
async function getAllLaunches() {
    return await launchesdb.find({}, {
        '_id': 0, '__v': 0
    });
};

function addNewLaunch(launch) {
    latestFlighno++;
    launches.set(launch.flightNumber,
        Object.assign(launch, {
            success: true,
            upcoming: true,
            customer: ['ZTM', 'NASA'],
            flightNumber: latestFlighno
        }));
}
function aborteLaunch(launchid) {
    const aborted = launches.get(launchid);
    aborted.success = false;
    aborted.upcoming = false;
    return aborted;
}
module.exports = {
    aborteLaunch,
    exisitLaunch,
    getAllLaunches,
    addNewLaunch
};