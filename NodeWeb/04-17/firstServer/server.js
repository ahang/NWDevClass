var http = require("http");

var port = 7000;
var port2 = 7500;
var server = http.createServer(onRequest_a);
var server2 = http.createServer(onRequest_b);

function onRequest_a (req, res) {
	res.write("What a nice guy");
	res.end()
}

function onRequest_b (req, res) {
	res.write("Go Away!");
	res.end();
}

server.listen(port, function() {
	console.log("Server listening on Port: " + port);
});

server2.listen(port2, function() {
	console.log("Server listening on Port: " + port2);
});