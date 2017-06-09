/**
 * Created by charlie on 6/6/16.
 */

const mongoose = require('mongoose');

const connect = {

    connected: false,

    simpleConnect: function() {
        'use strict';
        console.log('Connecting with simple.');
        const url = 'mongodb://127.0.0.1:27017/test';
        console.log(url);
        connect.connected = true;
        mongoose.connect(url);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connect.connected = true;
            console.log('Opened connection to mongo');
        });
    },

    custom: function() {
        'use strict';
        console.log('Connecting with simple.');
        //const url = 'mongodb://127.0.0.1:27017/test';
        const userName = 'charlie';
        const password = 'foobar';
        const siteAndPort = '192.168.2.18:27017';
        const databaseName = 'test';
        const url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;
        console.log(url);
        connect.connected = true;
        mongoose.connect(url);
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connect.connected = true;
            console.log('Opened connection to mongo');
        });
    },

    //Connection settings for my own mlab account
    // mongodb://<dbuser>:<dbpassword>@ds049848.mlab.com:49848/elvenlab01
    mlabConnect: function() {
        'use strict';
        console.log('Connecting with mlab.');
        connect.connected = true;
        var userName = 'user01';
        var password = 'password01';
        var siteAndPort = 'ds163681.mlab.com:63681';
        var databaseName = 'prog272-rahimi';
        var url = 'mongodb://' + userName + ':' + password + '@' + siteAndPort + '/' + databaseName;

        mongoose.connect(url);

        // This part is optional
        var db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function(callback) {
            connect.connected = true;
            console.log('Opened connection to mongo');
        });
    },

    doConnection: function(option) {
        'use strict';
        if (typeof option === 'undefined') {
            option = 'simple';
        }

        switch (option) {
            case 'simple':
                connect.simpleConnect();
                break;
            case 'custom':
                connect.custom();
                break;
            case 'mlab':
                connect.mlabConnect();
                break;
            default:
                connect.simpleConnect();
        }
    }
};

module.exports = connect;
