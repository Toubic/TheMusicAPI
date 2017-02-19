"use strict";

var mongoose = require("mongoose");

var artistSchema = mongoose.Schema({

    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    href: {
        type: String,
        required: true
    }
});

var Artist = module.exports = mongoose.model('Artist', artistSchema);

module.exports.getArtists = function (callback){
    Artist.find(callback);
};

module.exports.getArtistFromID = function (id, callback){
    Artist.findById(id, callback);
};
