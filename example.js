//index.js
var express = require('express');
var app = express();
var bodyParser =  require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
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
app.get('/salutations', function(req,res){
  res.send("Thank you Mr. Node!")
});

app.post('/products', function(req,res){
  //request.body is alll the info coming in the form
  //console.log(req.body.testOne);
  var name = req.body.name;
  var color = req.body.color;
  var price = req.body.price;

  var product = {name: name, color: color, price: price};
  res.json(product);
});

app.post('/current', function(req,res){
  var currentMan = req.body.currentMan;
  var currentWorth = req.body.currentWorth;

  res.json({current:currentMan, worth: currentWorth});
});

app.listen(3000, function(){
  console.log('Listening on port 3000');
});
