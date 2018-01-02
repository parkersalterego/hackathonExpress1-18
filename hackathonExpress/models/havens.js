const mongoose = require('mongoose');
const config = require('../config/database');

// haven schema

const havenSchema = new mongoose.Schema({
    
});

const Havens = module.exports = mongoose.model('haven', havenSchema);