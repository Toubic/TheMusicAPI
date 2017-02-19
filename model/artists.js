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
}, { versionKey: false });

var Artist = module.exports = mongoose.model('Artist', artistSchema);

module.exports.getArtists = function (callback){
    Artist.find(callback);
};

module.exports.getArtistFromID = function (id, callback){
    Artist.findById(id, callback);
};
module.exports.addArtist = function (artist, callback){
    Artist.create(artist, callback);
};

module.exports.updateArtist = function (id, artist, callback){
    var filtering = {_id: id};
    var update ={ $set: artist };
    Artist.findOneAndUpdate(filtering, update, {}, callback);
};

module.exports.deleteArtist = function (id, callback){
    var query = {_id: id};
    Artist.remove(query, callback);
};

