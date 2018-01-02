const express = require('express');
const router = express.Router();
const config = require('../config/database');
const Havens = require('../models/haven');

router.get('/', (req, res) => {
    if(err) {
        throw err;
    } 
    res.json(havens);
});

module.exports = router;