
var gedStorage = require('./gedStorage');

module.exports = function() {
    var bodyParser = require('body-parser');
    var express = require('express');
    var router = express.Router();
    
    router.use(bodyParser.json());
    router.use(bodyParser.urlencoded({ extended: true }));


    router.get('/', function(req, res) {
        res.json(gedStorage.getAll());
    });

    router.post('/', function(req, res) {
        gedStorage.add(req.body);
        res.json(req.body);
    }); 

    router.delete('/', function(req, res) {
        gedStorage.deleteAll();
        res.send('ok');
    })

    return router;
};

