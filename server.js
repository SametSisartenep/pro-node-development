// Basic server
var http = require('http');

http.createServer(function ( request, response ) {
	response.writeHead(200, {"Content-Type": "text/html"});
	response.end("<h1>Welcome to Pro Node.js Development</h1>");
}).listen(1337);

console.log("Server started at \"http://127.0.0.1:1337\"");
