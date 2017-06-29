var express = require('express');
var bodyParser = require('body-parser');
var makeDate = require('./dateMaker');
//if you create your own module(dateMaker)-- you have to be path specific
var app = express();

console.log(makeDate(10));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/instagrams", function(req,res){
  res.send("Hi");
});

app.post("/instagrams", function(req,res){
  res.send("HEllo from host");
});





var server = app.listen(3000, function(){console.log("Listening on port 3000")});
