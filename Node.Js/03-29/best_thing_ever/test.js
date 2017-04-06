var fs = require("fs");

fs.readFile("best_things_ever.txt", "utf8", function(error, data) {
	console.log(data);

	var dataArray = data.split(",");

	console.log(dataArray);
});