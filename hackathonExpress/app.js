const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const app = express();
const config = require('./config/database');

mongoose.connect(config.database);

mongoose.connection.on('connected', () => {
    console.log('connected to database ' + config.database);
});

mongoose.connection.on('error', (err) => {
    console.log('database error ' + err);
})

const users = require('./routes/users');
const guests = require('./routes/guests');

// port
const port = 3000;

// cors
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser
app.use(bodyParser.json());

app.use('/users', users);
app.use('/guests', guests);

// index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// start server
app.listen(port, () => {
    console.log('server started on port ' + port);
});