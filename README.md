
## Intro to Node:
### Notes:
__Node.js®__is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
A __node_module__ is basically a lego block of code. Everything in a node applications is modular, meaning it is made up of many different smaller parts that work towards the end functionality


__NPM__ stands for Node Package Manager. Its just a tool that allows us to easily access the node module and add them to our project.

Example node_module: [Moment.js](https://momentjs.com/)

every node app has a __package.json__ , which is the master file that keeps track of all node modules your project cares about

to add a `package.json` to your project

---
`git add -A`

`git commit -m "introductory definitions for
 node"`

`git push origin master`

---

#### Node HTT Server
Used node module HTTP to build a simple web server that we can then run and connect using the web address: `http://localhost:3000/`.
To run the server use the command `node index.js`

```js
var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World!');
}).listen(3000, function(){
  console.log('App is listening on port 3000')
});
```

#### Express Web server

[Express API](http://expressjs.com/)

To add express node module to our application:
`npm install --save express`
To ensure it was added successfully , check your `package.json` for:
```js

"dependencies": {
  "express": "^4.15.3"
}
```
This also gives us a ton of code we do not care to track in our Github,
in the `node_modules/` folder. To ignore this code:
`touch .gitignore`
add `node_modules/` to `.gitignore`


```js
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
```
#### Requesting parameters
TODO-- notes about parameters



####
NodeMon

NodeMon will watch our files automatically and restart our server so we dont have to manually.

'nodemon index.js' --> to start server
how to install: 'sudo npm install -g nodemon'
