//index.js
var express = require('express');
var app = express();
//req--request
//res--response
app.get('/greeting', function(req,res){
  res.send("Woohoo you found the greeting endpoint!")
});


//:name-- means its a req parameter
app.get('/greeting/:name', function(req,res){
  var yourName= req.params.name;
  res.send("Nice to meet you", yourName);
});
//challenge: define a response that can send back your favorite color
app.get('/color/:color', function(req,res){
  var favoriteColor = req.params.color;
  res.send("My favorite color is:", favoriteColor);
});
//Challenge: define a salutations endpoint
app.get('/salutaions', function(req,res){
  res.send("Thank you Mr. Node!")
});
app.listen(3000, function(){
  console.log('Listening on port 3000');
});
