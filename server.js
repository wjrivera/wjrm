var express = require("express");
var morgan = require("morgan");
var app = express("");

app.use(morgan('dev'));

app.get('/', function (req, res) {
    res.send("William Rivera");
});

app.listen(8080, function () {
    console.log("Running on port 8080")
});