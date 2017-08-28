"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var expressLogging = require("express-logging");
var logger = require("logops");
try {

    var config = require("./config/config");
    var routeArtists = require("./routes/artists");
    var routeAlbums = require("./routes/albums");
    var routeSongs = require("./routes/songs");
    var routeWebhooks = require("./routes/webhooks");

    var app = express();

    if (config.client.apiKey.id === undefined || config.client.apiKey.secret === undefined)
        throw new Error("No apiKey info given");
    else if (config.application.href === undefined)
        throw new Error("No application href given");
    else if (config.database.credentials === undefined)
        throw new Error("No database credentials given");

    app.use(bodyParser.json());
    app.use(expressLogging(logger));
    app.use('/api/artists', routeArtists);
    app.use('/api/albums', routeAlbums);
    app.use('/api/songs', routeSongs);
    app.use('/api/webhooks', routeWebhooks);

    app.listen(process.env.PORT || 5000, function () {
        console.log('Server started on port 5000');
    });

    mongoose.connect(config.database.credentials);
    var db = mongoose.connection;

    app.get("/", function (req, res) {

        res.json({
            "links": [
                { "rel" : "artists", "href" : "/api/artists", "actions" : "GET & POST" },
                { "rel" : "albums", "href" : "/api/albums", "actions" : "GET & POST" },
                { "rel" : "songs", "href" : "/api/songs", "actions" : "GET & POST" },
                { "rel" : "artist", "href" : "/api/artists/:_id", "actions" : "GET, PUT & DELETE" },
                { "rel" : "album", "href" : "/api/albums/:_id", "actions" : "GET, PUT & DELETE" },
                { "rel" : "song", "href" : "/api/songs/:_id", "actions" : "GET, PUT & DELETE" },
                { "rel" : "webhooks", "href" : "/api/webhooks/add", "actions" : "POST" },
                { "rel" : "webhooks", "href" : "/api/webhooks/send/:message", "actions" : "GET" }
            ]
        });

    });

}

catch(error){
        console.log(error.message);
}
