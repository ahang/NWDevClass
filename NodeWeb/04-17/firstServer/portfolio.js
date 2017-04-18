//url lib allows us to parse parts of the request
var url = require("url");
//bring in http module
var http = require("http");

var port = 8080;

var server = http.createServer(doSomething);

function doSomething(request, response) {
	//capture URL request
	var urlParts = url.parse(request.url);
	//figure out what to do base on different requests
	switch(urlParts.pathname) {
		case "/":
			displayRoot(urlParts.pathname, request, response);
		break;

		case "/portfolio":
			displayPortfolio(urlParts.pathname, request, response);
		break;

		default:
			display404(urlParts.pathname, request, response);
	}

	function displayRoot(url, request, response) {
		var myHtml = `
		<html>
		<body><h1>The Home Page</h1></body>
		</html>`
		response.writeHead(200, {"Content-Type" : "text/html"});
		response.end(myHtml);
	}

	function displayPortfolio(url, request, response) {
		response.end("displaying portfolio");
	}
	function display404(url, request, response) {
		response.end("Not Found.");
	}
} 

server.listen(port, function() {
	console.log("The server is running on port:" + port);
});