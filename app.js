"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var routeArtists = require("./routes/artists");
var routeAlbums = require("./routes/albums");
var routeSongs = require("./routes/songs");

var app = express();
app.use(bodyParser.json());
app.use('/api/artists', routeArtists);
app.use('/api/albums', routeAlbums);
app.use('/api/songs', routeSongs);
app.listen(process.env.PORT || 5000);

mongoose.connect('mongodb://localhost/musicstreaming');
var db = mongoose.connection;

app.get("/", function(req, res) {

    res.send("For the API use: /api/artists or /api/albums or /api/songs")
});