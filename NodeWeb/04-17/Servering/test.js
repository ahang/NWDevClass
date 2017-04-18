var http = require("http");
var fs = require("fs");
//var url = require("url");

//=================================

var port = 8080;

var server = http.createServer(doSomething);

function doSomething(request, response) {
	fs.readFile("index.html", function(error, data) {
		if (error) {
			response.writeHead(500, {"Content-Type": "text/html"});
			response.end("There was an error: " + error);
		} else {
			response.writeHead(200, {"Content-Type": "text/html"});
			response.end(data);
		}
	});
}

server.listen(port, function() {
	console.log("Server is running");
});