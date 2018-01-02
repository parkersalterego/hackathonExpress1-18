const express = require('express');
const router = express.Router();

//register 
router.post('/register', (req, res, next) => {
    res.send('REGISTER GUEST');
});

module.exports = router;