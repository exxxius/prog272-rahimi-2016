/**
 * Created by bcuser on 5/7/17.
 */
var fs = require('fs');
var debug = require('debug')('get-address');

debug('Testing debug');

function readFile(fileName, callback) {
    'use strict';
    if (!callback) {
        return new Promise(function(resolve, reject) {
            fs.readFile(fileName, 'utf8', function(err, fileContents) {
                if (err) {
                    reject(err);
                }
                resolve({
                    'result': fileContents
                });
            });
        });
    } else {
        fs.readFile(fileName, 'utf8', function(err, fileContents) {
            if (err) {
                throw (err);
            }
            callback({
                'result': fileContents
            });
        });
    }
}

function getAddress(value, char) {
    'use strict';
    return value.substring(0, value.lastIndexOf(char) - 1);
}

function getZip(value, char) {
    'use strict';
    return value.substring(value.lastIndexOf(char) , value.lastIndexOf(char) + 11).trim();
}

function getCity(value, char, len) {
    'use strict';
    var start = value.lastIndexOf(char);
    return value.substring(start, start + len);
}

function writeIt(label, value, noComma) {
    var comma = noComma ? '"' : '",';
    console.log('\t' + label, '"' + value + comma);
}

readFile('address.json').then(function(text) {
    debug(text);
    var json = JSON.parse(text.result);
    debug('\n\nSTRINGIFY\n\n', JSON.stringify(json));
    var gitUser = [];
    const unknown = 'unknown';
    for (var i = 0; i < json.objects.length; i++) {
        console.log('{');
        writeIt('firstName:', json.objects[i].person.firstname);
        writeIt('lastName:', json.objects[i].person.lastname);
        writeIt('Street:', getAddress(json.objects[i].extra.address, 'W'));
        writeIt('City:', getCity(json.objects[i].extra.address, 'W' , 10));
        writeIt('State:', json.objects[i].state);
        writeIt('Zip:', getZip(json.objects[i].extra.address, ' '));
        writeIt('Phone:', json.objects[i].phone);
        writeIt('email:', '');
        writeIt('contact:', json.objects[i].extra.contact_form || '', true);
        console.log('},');
    }
    //   console.log('\n\nSTRINGIFY\n\n', JSON.stringify(gitUser, null, 4));
    debug('all done');
});
