var fs = require("fs");

var userSearch = function(input) {
		fs.appendFile("log.txt", input, function(err, data) {
			if (err) throw err;
			console.log("The data was appended");
		});
	}

var getData = function() {
		fs.readFile("log.txt", "utf8", function(err, data) {
			if (err) throw err;
			console.log(data);
		});
	}


module.exports = {
	userSearch: userSearch,
	getData: getData
}





