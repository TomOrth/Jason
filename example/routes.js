const routes = require('express').Router();
const User = require('./User');
const jason = require('../index');

routes.post('/user', jason.single(User, 'user'), function(req, res) {
    console.log('{"name": ' + req.body.user.name + '}'); 
    res.send(req.body.user.name);
});

routes.post('/users', jason.array(User, 'users'), function(req, res) {
    for(var i = 0; i < req.body.users.length; ++i) {
       console.log(req.body.users[i].name);
    }
    res.send('Length: ' + req.body.users.length);
});

module.exports = routes;
