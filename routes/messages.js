var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.post('/', function(req, res, nest){
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result){
        if(err){
            return res.status(500).json({
                title: 'Error occur!',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved message',
            obj: result
        });
    })
});


module.exports = router;