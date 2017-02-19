"use strict";

var express = require("express");
var router = express.Router();
var Song = require("../model/songs");

router.get("/", function(req, res) {

    Song.getSongs(function (err, songs) {
        if(err){
            res.send("Could not get songs");
        }
        res.json(songs);
    });
});

router.get("/:_id", function(req, res) {

    var id = req.params._id;

    Song.getSongFromID(id, function (err, song) {
        if(err){
            res.send("Could not get the song");
        }
        res.json(song);
    });
});

router.post("/", function(req, res) {

    var song = req.body;

    Song.addSong(song, function (err, song) {
        if(err){
            res.send("Could not add the song");
        }
        res.json(song);
    });
});

router.put("/:_id", function(req, res) {

    var id = req.params._id;
    var song = req.body;

    Song.updateSong(id, song, function (err, song) {
        if(err){
            res.send("Could not update the song");
        }
        res.json(song);
    });
});

router.delete("/:_id", function(req, res) {

    var id = req.params._id;

    Song.deleteSong(id, function (err, song) {
        if(err){
            res.send("Could not delete the song");
        }
        res.send("Song deleted");
    });
});

module.exports = router;