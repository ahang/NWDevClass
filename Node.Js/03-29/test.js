// console.log(process.argv);

var fs = require("fs");

// fs.appendFile("something.txt", "PayDay", function(error){
// 	if(error) {
// 		console.log(error)
// 	} else {
// 		console.log("content added!");
// 	}

// });

// fs.writeFile("something.txt", "Kit Kat, War Heads, Tootsie Rolls", function(err) {
// 	if(err) {
// 		return console.log(err);
// 	}

// 	console.log("something.txt was updated");
// });
//input utf8 to allow for the text to be processed properly
// fs.readFile("something.js", "utf8", function(error, data) {
// 	console.log(data);

// 	var dataArray = data.split(",");

// 	console.log(dataArray);
// });

var request = require("request");
// var moment = require("moment");

request("https://www.omdbapi.com/?t=logan", function(error, response, body) {
	if (!error && response.statusCode === 200) {
		console.log("The movie is rated " + JSON.parse(body).Title);
	}
});