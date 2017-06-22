//index.js
var express = require('express');
var app = express();
//req--request
//res--response
app.get('/greeting', function(req,res){
  res.send("Woohoo you found the greeting endpoint!")
});

//Challenge: define a salutations endpoint
app.get('/salutaions', function(req,res){
  res.send("Thank you Mr. Node!")
});
app.listen(3000, function(){
  console.log('Listening on port 3000');
});
