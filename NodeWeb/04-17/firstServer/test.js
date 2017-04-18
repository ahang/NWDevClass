// require http module from node
var http = require("http");

//Set up a port
var port = 8080;

//Establish Server
var server = http.createServer(handleRequest);

//create a request handler
function handleRequest(request, response) {
	response.end("It works Path Hit: " + request.url);
}

//Create listener
server.listen(port, function() {
	console.log("Server listening on Port: " + port);
});