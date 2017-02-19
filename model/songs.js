"use strict";

var mongoose = require("mongoose");

var songSchema = mongoose.Schema({

    _id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    length: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now()
    },
    href: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    album: {
        type: String,
        required: true
    }
}, { versionKey: false });

var Song = module.exports = mongoose.model('Song', songSchema);

module.exports.getSongs = function (callback){
    Song.find(callback);
};

module.exports.getSongFromID = function (id, callback){
    Song.findById(id, callback);
};
module.exports.addSong = function (song, callback){
    Song.create(song, callback);
};

module.exports.updateSong = function (id, song, callback){
    var filtering = {_id: id};
    var update ={ $set: song };
    Song.findOneAndUpdate(filtering, update, {}, callback);
};

module.exports.deleteSong = function (id, callback){
    var query = {_id: id};
    Song.remove(query, callback);
};

