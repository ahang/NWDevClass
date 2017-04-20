var express = require("express");
var app = express();
var port = 3000;

app.get("/", function(request, response) {
	response.send("Welcome to Star Wars");
})

app.get("/yoda", function(request, response) {
	response.json({ "name": "yoda"} );
});

app.get("/jarjar", function(request, response) {
	response.json({"name": "jarjar"});
});

app.listen(port, function() {
	console.log("using express this time");
});