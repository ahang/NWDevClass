var param1 = parseFloat(process.argv[2]);
var param2 = process.argv[3];
var param3 = parseFloat(process.argv[4]);

if (param2 === "add") {

	console.log(param1 + param3);
} else if (param2 === "subtract") {
	console.log("-");
	console.log(param1 - param3);
} else if (param2 === "divide") {
	console.log(param1 / param3);
} else if (param2 === "remainder") {
	console.log(param1 % param3);
} else if (param2 === "exp") {
	console.log(Math.pow(param1, param3));
} else if (param2 === "algebra") {
	var param4 = parseFloat(process.argv[5]);
	//4x+2=10
	param1 = 

}

// Bonus: Enable your calculator application to also handle the below cases: node calculator.js exp 7 2 ... and output 49 (7 squared) node calculator.js algebra 4x+2=10... and output 2. (Hint: Assume the algebra will always be in this exact form and will always be addition)