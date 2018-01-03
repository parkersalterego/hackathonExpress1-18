const express = require('express');
const router = express.Router();
const Guest = require('../models/guest');

// get guests
router.get('/', (req, res, next) => {
    Guest.getGuests((err, guests) => {
        if(err) {
            throw err;
        }
        res.json(guests);
    })
});

// get guest by id
router.get('/:_id', (req, res, next) => {
    Guest.getGuestById(req.params._id, (err, guest)  => {
        if (err) {
            throw err;
        }
        res.json(guest);
    });
});

// add guest
router.post('/', (req, res, next) => {
    let guest = new Guest({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        ID: req.body.ID
    });

    Guest.addGuest(guest, (err, guest) => {
        if (err) {
            throw err;
        }
        res.json(guest);
    });
});

// update guest
router.put('/:_id', (req, res, next) => {
    let id = req.params._id;
    let guest = new Guest({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        ID: req.body.ID
    });

    Guest.updateGuest(id, guest, {}, (err, guest)  => {
        if (err) {
            throw err;
        }
        res.json(guest);
    });
});

//delete guest
router.delete('/:_id', (req, res, next) => {
    let id = req.params._id;
    Guest.deleteGuest(id, (err, guest) => {
        if(err) {
            throw err;
        }
        res.json(guest);
    })
});

module.exports = router;