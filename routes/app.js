var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/', function(req, res, next){
    res.render('index');
});

router.get('/', function (req, res, next) {
    User.findOne({}, function(err, doc){
        if(err){
            res.send('Error'+ err);
        }
        if (doc) {
            email = doc.email;
        }
    });
    res.render('node', {email:email});
});

router.post('/', function(req, res, next){
    var email = req.body.email;
        var user = new User({
            firstName: "Nitish",
            lastName: "Kumar",
            password: "Super Secret",
            email: email
        });
        user.save();
    res.redirect('/');
});

module.exports = router;
