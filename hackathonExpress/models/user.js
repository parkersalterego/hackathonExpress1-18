const mongoose = require('mongoose');
const config = require('../config/database');
const bcrypt = require('bcryptjs');

// user schema

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', function(next){
    var user = this;

    if(User.findOne({username:user.username})){
        bcrypt.genSalt(10, function(err, salt){
            bcrypt.hash(user.password, salt, function(err, hash){
                user.password = hash;
                next();
            });
        });
    }
});

const User = module.exports = mongoose.model('User', userSchema);

module.exports.getUserById = (id, callback) => {
    User.findById(id, callback);
};

module.exports.getUsername = (username, callback) => {
    const query = {username: username}
    User.findOne(query, callback);
};

module.exports.addUser = (newUser, callback) => {
    //auth logic
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    });
}