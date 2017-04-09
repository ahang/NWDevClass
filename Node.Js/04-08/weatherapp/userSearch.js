var weather = require("weather-js");

var UserSearch = function(name, location) {
	console.log("Inside userSearch function Putting in stuff");
	this.name = name;
	this.location = location;
	this.date = Date.now();
	this.getWeather = function() {
		console.log("Trying for that weather" + this.location);
		weather.find({search: this.location, degreeType: "F"}, function(err, result) {
			if(err) console.log(err);
			console.log(JSON.stringify(result, null, 2));
		});
	}
	this.userInput = function() {
		console.log(`The user's name is ${this.name} and the location they are searching is ${this.location}`);
	}
}

module.exports = UserSearch;
