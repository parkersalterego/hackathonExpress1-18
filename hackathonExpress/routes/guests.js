const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Guests = require('../models/guest');

router.get('/', (req, res) => {
    if(err) {
        throw err;
    } 
    res.json(guest);
});

module.exports = router;