"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();
app.use(bodyParser.json());
app.listen(process.env.PORT || 5000);

var Artist = require("./model/artists");

mongoose.connect('mongodb://localhost/musicstreaming');
var db = mongoose.connection;

app.get("/", function(req, res) {

    res.send("For the API use: /api/artists")
});

app.get("/api/artists", function(req, res) {

    Artist.getArtists(function (err, artists) {
        if(err){
            res.send("Could not get artists");
        }
        res.json(artists);
    });
});

app.get("/api/artists/:_id", function(req, res) {

    var id = req.params._id;

    Artist.getArtistFromID(id, function (err, artists) {
        if(err){
            res.send("Could not get artist");
        }
        res.json(artists);
    });
});

app.post("/api/artists", function(req, res) {

    var artist = req.body;

    Artist.addArtist(artist, function (err, artists) {
        if(err){
            res.send("Could not add artist");
        }
        res.json(artist);
    });
});

app.put("/api/artists/:_id", function(req, res) {

    var id = req.params._id;
    var artist = req.body;

    Artist.updateArtist(id, artist, function (err, artists) {
        if(err){
            res.send("Could not add artist");
        }
        res.json(artist);
    });
});