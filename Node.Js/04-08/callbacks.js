var strings = function(str1, func) {
	var str = str1;
	func(str); 
}

var presentStr = function(str) {
	console.log("The string is " + str);
}

var bool = function(boo, func) {
	var val = boo;
	func(val);
}

var presentBool = function(str) {
	if (str === true) {
		console.log("The func bool is " + str);
	} else {
		console.log("The func bool is not true");
	}
}

strings("some string", presentStr);
bool(true, presentBool);

