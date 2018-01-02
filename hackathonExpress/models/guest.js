const mongoose = require('mongoose');
const config = require('../config/database');

// guest schema

const guestSchema = new mongoose.Schema({
    
});

const Guest = module.exports = mongoose.model('Guest', guestSchema); 