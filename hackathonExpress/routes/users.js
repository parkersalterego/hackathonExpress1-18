const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Users = require('../models/users');

router.get('/', (req, res) => {
    if(err) {
        throw err;
    } 
    res.json(users);
});

module.exports = router;