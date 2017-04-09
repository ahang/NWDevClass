var Debug = require("./WeatherAdmin.js");
var Search = require("./userSearch.js");

var input = process.argv[2];
var userName = process.argv[3];
var location = process.argv[4];

// var userInput = function(name, location){
// 	//console.log("userInput on cli.js" + name);
// 	//console.log(location);
// 	var userSearch = new Search(name, location);
// 	userSearch.getWeather();
// 	//console.log("The new name is" + userSearch.name);
// 	//console.log(userSearch.userInput());
// }
switch (input) {
	case "user":
	input = new Search(userName, location);
	input.getWeather();
	Debug.userSearch(`${userName} searched ${location} @ ${input.date()}`);
	}
	break;

	case "admin":
	console.log("Activating laser cats");
	break;

	default:
	console.log("Invalid Input. Please run it again");
}