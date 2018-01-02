const User = require('../models/user');

module.exports.register = function(req, res) {
    console.log("Registering user: " + req.body.email);
    res.status(200);
    res.json({
      "message" : "User registered: " + req.body.email
    });
  };

  //Login a user
  module.exports.login = function(req, callback){
    console.log('Processing login request...');
    console.log(req.body);

    var loginData = req.body;

    if(loginData !== undefined && loginData !== nul && Object.keys(loginData).length > 0){
      if(User.getUserByUsername(loginData.username)){}
      callback.call(false, 'Login successful!');
    } else {
      callback.call('Login Failed!', false);
    }
  };