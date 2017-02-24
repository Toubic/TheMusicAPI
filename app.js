"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var stormpath = require("express-stormpath");

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

    app.use(stormpath.init(app, {
        client: {
            apiKey: {
                id: config.client.apiKey.id,
                secret: config.client.apiKey.secret
            }
        },
        application: {
            href: config.application.href
        }
    }));

    app.use(bodyParser.json());
    app.use('/api/artists', stormpath.apiAuthenticationRequired, routeArtists);
    app.use('/api/albums', stormpath.apiAuthenticationRequired, routeAlbums);
    app.use('/api/songs', stormpath.apiAuthenticationRequired, routeSongs);
    app.use('/api/webhooks', stormpath.apiAuthenticationRequired, routeWebhooks);

    app.on('stormpath.ready', function () {
        app.listen(process.env.PORT || 5000);
    });

    mongoose.connect(config.database.credentials);
    var db = mongoose.connection;

    app.get("/", stormpath.apiAuthenticationRequired, function (req, res) {

        res.json("For the API use: /api/artists or /api/albums or /api/songs or /api/webhooks/add and /api/webhooks/send/(message)")
    });

}

catch(error){
        console.log(error.message);
}
