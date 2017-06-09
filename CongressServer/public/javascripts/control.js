$(document).ready(function() { 'use strict';
    const insertUrl = '/insertValidCollection';
    var collection;

    function insertCollection() {
        var jqxhr = $.get(insertUrl, function(result) {
            alert( "success" );
            console.log(JSON.stringify(result, null, 4));
        })
            .done(function() {
                console.log( "second success" );
            })
            .fail(function() {
                alert( "error" );
            })
            .always(function() {
                console.log( "finished" );
            });
    }

    function getAll() {
        $.getJSON('/all-data', function(result) {
            collection = result.allData;
            $('#display').html(JSON.stringify(result, null, 4));
        })
            .done(function() {
                console.log('second success');
            })
            .fail(function(error) {
                alert(JSON.stringify(error.responseJSON, null, 4));
            })
            .always(function() {
                console.log('finished');
            });
    }

    function emptyCollection() {
        $.getJSON('/emptyCollection', function(result) {
            $('#display').html(JSON.stringify(result, null, 4));
        })
            .done(function() {
                console.log('second success');
            })
            .fail(function() {
                alert(JSON.stringify(a.responseJSON, null, 4));
            })
            .always(function() {
                console.log('finished');
            });
    }

    function update() {
        collection[0].firstName = 'foo';
        const newData = {
            id: collection[0]._id,
            firstName: collection[0].firstName
        };
        $.getJSON('/update', newData, function(result) {
            $('#display').html(JSON.stringify(result, null, 4));
        })
            .done(function() {
                console.log('second success');
            })
            .fail(function() {
                alert(JSON.stringify(a.responseJSON, null, 4));
            })
            .always(function() {
                console.log('finished');
            });
    }

    $('#insertValidData').click(insertCollection);
    $('#getAll').click(getAll);
    $('#emptyCollection').click(emptyCollection);
    $('#update').click(update);
});
