var express = require('express');
var router = express.Router();
var allMongo = require('./all-mongo');
var connect = require('./connect');

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', {title: 'CongressServer'});
});

function checkConnection() {
    if (!connect.connected) {
        connect.doConnection('mlab');
    }
}

router.get('/all-data', function(request, response) {
    'use strict';
    console.log('AllData route invoked.');
    checkConnection();
    allMongo.getAllData(response);
});

router.get('/emptyCollection', function(request, response) {
    'use strict';
    checkConnection();
    allMongo.empty(response);
});

router.get('/insertValidCollection', function(request, response) {
    'use strict';
    console.log('Insert Valid Collection Called.');
   // response.status(200).send({result: 'Insert valid Collection'});
    checkConnection();
    allMongo.readDataAndInsert(response);
});

module.exports = router;
