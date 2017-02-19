"use strict";

var mongoose = require("mongoose");

var albumSchema = mongoose.Schema({

    _id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    songs: {
        type: Number,
        required: true
    },
    href: {
        type: String,
        required: true
    }
}, { versionKey: false });

var Album = module.exports = mongoose.model('Album', albumSchema);

module.exports.getAlbums = function (callback){
    Album.find(callback);
};

module.exports.getAlbumFromID = function (id, callback){
    Album.findById(id, callback);
};
module.exports.addAlbum = function (album, callback){
    Album.create(album, callback);
};

module.exports.updateAlbum = function (id, album, callback){
    var filtering = {_id: id};
    var update ={ $set: album };
    Album.findOneAndUpdate(filtering, update, {}, callback);
};

module.exports.deleteAlbum = function (id, callback){
    var query = {_id: id};
    Album.remove(query, callback);
};

