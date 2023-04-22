const { fstat } = require("fs");
const http = require("http");
const mongo = require("mongoose");
const app = require('./app');
const { loadPlanetData } = require('./models/planet-model');

const Mongo_url = "mongodb+srv://nasa-api:aloJfPsQc5WGURg3@nasa-cluster.ocqgbkr.mongodb.net/?retryWrites=true&w=majority";
const server = http.createServer(app);

mongo.connection.once('open', () => {
    console.log("Connected");
});
mongo.connection.on('error', (err) => {
    console.log(err);
});
async function startserver() {
    await mongo.connect(Mongo_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    await loadPlanetData();
    server.listen(8000, () => { });
}
startserver();