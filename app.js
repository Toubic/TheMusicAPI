"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();

app.listen(process.env.PORT || 5000);
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/musicstreaming');

app.get("/", function(req, res) {

    res.send("ex2")
});