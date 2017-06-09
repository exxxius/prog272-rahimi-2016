var express = require('express');
var router = express.Router();
var allMongo = require('./all-mongo');
var connect = require('./connect');

/* GET home page. */
router.get('/', function(req, res, next) {
    'use strict';
    res.render('index', {title: 'CongressServer'});
});

function checkConnection() {
    if (!connect.connected) {
        connect.doConnection('mlab');
    }
}
/**/
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
    console.log('Insert Valid Collection Called with stuff.');
   // response.status(200).send({result: 'Insert valid Collection'});
    checkConnection();
    allMongo.readDataAndInsert(response);
});

router.get('/update', function(request, response) {
    'use strict';
    checkConnection();
    console.log('request query', request.query);
    allMongo.update(request.query, response);
});

/*Added after the latest Mongoose assignment update  */
router.get('/bar', function(request, response) {
    response.status(200).send({result: 'bar'});
});

router.get('/bar/:id', function(request, response) {
    'use strict';
    response.status(200).send({param: request.params.id});
});

router.get('/:id', function(request, response) {
    'use strict';
    response.status(200).send({result: request.params.id});
});

module.exports = router;
