const mongoose = require('mongoose');
const config = require('../config/database');

// guest schema

const guestSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    ID: Boolean
});

const Guest = module.exports = mongoose.model('Guest', guestSchema); 

// get guests
module.exports.getGuests = (callback, limit) => {
    Guest.find(callback).limit(limit);
}

//get guest by id
module.exports.getGuestById = (id, callback) => {
    Guest.findById(id, callback);
}


// add guest
module.exports.addGuest = (guest, callback) => {
    Guest.create(guest, callback);
}

// update guest
module.exports.updateGuest = (id, guest, options, callback) => {
    
    let query = {_id: id};
    let update = {
        firstName: guest.firstName,
        lastName: guest.lastName,
        ID: guest.ID

    }

    Guest.findOneAndUpdate(query, update, options, callback);
}

//delete guest
module.exports.deleteGuest = (id, callback) => {
    let query = {_id: id};
    Guest.remove(query, callback);
}