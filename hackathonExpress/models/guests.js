const mongoose = require('mongoose');
const config = require('../config/database');

// guest schema

const guestSchema = new mongoose.Schema({
    
});

const Guests = module.exports = mongoose.model('guests', guestSchema); 