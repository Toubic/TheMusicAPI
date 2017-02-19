"use strict";

var express = require("express");
var router = express.Router();
var Artist = require("../model/artists");

router.get("/", function(req, res) {

    Artist.getArtists(function (err, artists) {
        if(err){
            res.send("Could not get artists");
        }
        res.json(artists);
    });
});

router.get("/:_id", function(req, res) {

    var id = req.params._id;

    Artist.getArtistFromID(id, function (err, artists) {
        if(err){
            res.send("Could not get artist");
        }
        res.json(artists);
    });
});

router.post("/", function(req, res) {

    var artist = req.body;

    Artist.addArtist(artist, function (err, artist) {
        if(err){
            res.send("Could not add artist");
        }
        res.json(artist);
    });
});

router.put("/:_id", function(req, res) {

    var id = req.params._id;
    var artist = req.body;

    Artist.updateArtist(id, artist, function (err, artist) {
        if(err){
            res.send("Could not add artist");
        }
        res.json(artist);
    });
});

router.delete("/:_id", function(req, res) {

    var id = req.params._id;

    Artist.deleteArtist(id, function (err, artist) {
        if(err){
            res.send("Could not add artist");
        }
        res.send("Artist deleted");
    });
});

module.exports = router;