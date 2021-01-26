// import app
const app = require('./app');
// import mongoose from node_modules
const mongoose = require('mongoose');

//create port
const port = process.env.port || 8000;
require('dotenv').config();

const serverURI = 'http://localhost:' + port;
const mongoURI = process.env.MONGO_URI;

app.listen(port, () => console.log('Webserver running at: ' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connected to DB'))