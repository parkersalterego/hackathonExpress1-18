const mongoose = require('mongoose');
const config = require('../config/database');
const crypto = require('crypto');

// user schema

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

const Users = module.exports = mongoose.model('users', userSchema);



