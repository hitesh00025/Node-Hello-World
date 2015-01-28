var http = require('http');

//simple example to write a response from server in node.

http.createServer(function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is kumar");
  response.end();
//once you start the node. It will listen to port 8080.
}).listen(8080);
