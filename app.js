const connect = require('connect');
const http = require('http');
const app = connect();
const session = require('express-session')

// respond to all requests
app.use(function(req, res){
  res.end('Hello from Connect!\n');
});

//create node.js http server and listen on port
http.createServer(app).listen(8080);

console.log('Running on http://localhost:8080/')