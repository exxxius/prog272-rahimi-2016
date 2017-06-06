/**
 * Created by bcuser on 6/5/17.
 */
var mongoose = require('mongoose');

var politicianSchema = mongoose.Schema({
    'firstName': String,
    'lastName': String,
    'Street': String,
    'City': String,
    'State': String,
    'Zip': String,
    'Phone': String,
    'email': String,
    'contact': String
});

module.exports = mongoose.model('politician', politicianSchema);
