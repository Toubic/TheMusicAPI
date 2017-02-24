"use strict";

var express = require("express");
var router = express.Router();
var slack = require("simple-slack-webhook");

router.post("/add", function(req, res) {

    var webhook = req.body;

    slack.init({
        path: webhook.path,
        username: "Web hook test",
        channel: "#general"
    });

    res.json(webhook);
});

router.get("/send/:message", function(req, res) {

    var message = req.params.message;

    slack.text(message);

    res.json("Message sent to slack web hook: " + message);
});

module.exports = router;