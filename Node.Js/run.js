var entertainment = require("./bands.js").bands;
//console.log(entertainment);


for (var key in entertainment) {
	//console.log(key);
	//console.log(entertainment[key]);
	console.log("A " + key + " band is " + entertainment[key] );
}
