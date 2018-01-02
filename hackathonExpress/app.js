const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config/database');
const bodyParser = require('body-parser');
const passport = require('passport');


mongoose.Promise = global.Promise;
// Connects us to our database
mongoose.connect(config.database);

// Lets us know we're connected!
mongoose.connection.on('connected', () => {
    console.log('Connected to database ' + config.database)
});

// Lets us know we're having trouble connecting to the database!
mongoose.connection.on('error', (err) => {
    console.log('Something Went Wrong! ==> ' + err)
});

const app = express();

// Bringing in our routes
const haven = require('./routes/havens');
const guest = require('./routes/guests');
const user = require('./routes/users');

const port = 3000;

//CORS Middleware
app.use(cors());

// Body Parser Middleware
app.use(bodyParser.json());

// Setting Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Using our routes
app.use('/users', user);
app.use('/guests', guest);
app.use('/havens', haven);



// Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// Starting the Server
app.listen(port, () => {
    console.log('Server started on port ' + port); 
});