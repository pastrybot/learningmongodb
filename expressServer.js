var express = require('express'),
    app = express(),
    MongoClient = require('mongodb').MongoClient,
    assert = require('assert');
    
app.set('view engine', 'ejs');

MongoClient.connect('mongodb://localhost:27017/video', function(err, db) {

    assert.equal(null, err);
    console.log("Successfully connected to MongoDB.");

    app.get('/', function(req, res){

        db.collection('movies').find({}).toArray(function(err, docs) {
            res.render('movies', { 'movies': docs } );
        });

    });

    app.use(function(req, res){
        res.sendStatus(404);
    });

    var server = app.listen(3000, function() {
        var port = server.address().port;
        console.log('Express server listening on port %s.', port);
    });

});
