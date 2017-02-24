"use strict";

var express = require("express");
var router = express.Router();
var Album = require("../model/albums");

router.get("/", function(req, res) {

    Album.getAlbums(function (err, albums) {
        if(err){
            res.json("Could not get albums");
        }
        res.json(albums);
    });
});

router.get("/:_id", function(req, res) {

    var id = req.params._id;

    Album.getAlbumFromID(id, function (err, album) {
        if(err){
            res.json("Could not get the album");
        }
        res.json(album);
    });
});

router.post("/", function(req, res) {

    var album = req.body;

    Album.addAlbum(album, function (err, album) {
        if(err){
            res.json("Could not add album");
        }
        res.json(album);
    });
});

router.put("/:_id", function(req, res) {

    var id = req.params._id;
    var album = req.body;

    Album.updateAlbum(id, album, function (err, album) {
        if(err){
            res.json("Could not update the album");
        }
        res.json(album);
    });
});

router.delete("/:_id", function(req, res) {

    var id = req.params._id;

    Album.deleteAlbum(id, function (err, album) {
        if(err){
            res.json("Could not delete the album");
        }
        res.json("Album deleted");
    });
});

module.exports = router;