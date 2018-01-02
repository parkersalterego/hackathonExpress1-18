const mongoose = require('mongoose');
const config = require('../config/database');

// haven schema

const havenSchema = new mongoose.Schema({

});

const Haven = module.exports = mongoose.model('Haven', havenSchema);