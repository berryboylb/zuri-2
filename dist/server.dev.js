"use strict";

//first zuri task
var http = require('http'); //creating our server


var server = http.createServer(function (req, res) {
  //header
  res.writeHead(200, {
    'Content-type': 'text/html'
  });
  res.end('<html><body><h1>Ooops server eau de ment.</h1></body></html>');
});
server.listen(5005, 'Localhost');
console.log('This is my server');