var geocoder = require("geocoder");

var arg1 = process.argv[2];

geocoder.geocode(arg1, function(err, data) {
	if(err) {
		console.log(err);
	} else {

		console.log(JSON.stringify(data, null, 2));
	}
});