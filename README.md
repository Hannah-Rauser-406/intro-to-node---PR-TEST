
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
Used node moduke HTTP to build a simple web server that we can then runn and connect using the web address: `http://localhost:3000/`.
To run the server use the command `node index.js`

```
var http = require('http');

http.createServer(function(request, response){
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World!');
}).listen(3000, function(){
  console.log('App is listening on port 3000')
});
```
