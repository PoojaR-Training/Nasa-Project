const path = require("path");
const express = require('express');
const planetrouter = require('./routes/planets/planet-router');
const launchrouter = require('./routes/launches/launch-router');
const cors = require('cors');
//const morgan = require('morgan');
const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

//app.use(morgan('combined'));
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
app.use('/planets', planetrouter);
app.use('/launches', launchrouter);
module.exports = app;