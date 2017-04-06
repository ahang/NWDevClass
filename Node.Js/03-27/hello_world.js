//console.log("Sriracha. Goes great on nothing.");

//console.log(process.argv);



// var result = process.argv[2] + process.argv[3];
// console.log(result); results 35 because it adds it as a string

// var result = parseFloat(process.argv[2]) === parseFloat(process.argv[3]);
// console.log(result);

var param1 = process.argv[2];
var param2 = process.argv[3];

if (param1 === param2) {
	console.log("True");
} else {
	console.log("False");
}