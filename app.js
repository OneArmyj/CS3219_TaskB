require('dotenv').config();

/*
FileName: index.js
use nodemon to watch changes in files to update express server
*/
// Import express
let express = require('express')
// Import routes from api-routes.js
let apiRoutes = require("./api-routes")
// Import Body parser, it's a nodejs package to parse incoming data as a form
let bodyParser = require('body-parser');
// Import Mongoose, it's a nodejs package to handle business logic of MongoDB
let mongoose = require('mongoose');
let cors = require('cors');

// Initialize the app
let app = express();

// Configure bodyparser to handle post requests, this must come before apiRoute
// need to use bodyParser if we want form data to be available in req.body
// bodyParser.urlencoded exposes the resulting object (containing the keys and values) on req.body
app.use(bodyParser.urlencoded({
    extended: true
}));

// bodyParser.json parses the text as JSON and exposes the resulting object on req.body
app.use(bodyParser.json());
app.use(cors());

// Use Api routes in the App, sets the route for the module apiRoutes
app.use('/api', apiRoutes)

// Connect to Mongoose and set connection variable
const mongoURL = process.env.ENVIRONMENT === "PRODUCTION"
    ? process.env.mongoURL
    : 'mongodb://localhost/guitarist'

mongoose.connect(mongoURL , { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
// Added check for DB connection
if (!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

app.use("/", express.static('build'));

module.exports = app;