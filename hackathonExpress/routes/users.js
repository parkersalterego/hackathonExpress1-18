const express = require('express');
const router = express.Router();
const User = require('../models/user');
const passport = require('passport');
const jwt = ('jsonwebtoken');

//register 
router.post('/register', (req, res, next) => {
    let newUser = new User({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    User.addUser(newUser, (err, user) => {
        if(err) {
            res.json({success: false, msg: 'failed tp register user'});
        } else {
            res.json({success: true, msg: 'user registered'});
        }
    });
});

//Authenticate
router.get('/authenticate', (req, res, next) => {
    res.send('AUTHENTICATE USER');
});

//profile
router.get('/profile', (req, res, next) => {
    res.send('PROFILE USER');
});

module.exports = router;