var arg1 = process.argv[2];
var arg2 = process.argv[3];


if (arg1 % 7 === 0 && arg2 % 7 === 0) {
	console.log("Both values are multiple of 7 ");
} else {
	console.log("Both values are not multiple of 7");
}

if (arg1 === arg2) {
	console.log("These are true");
} else {
	console.log("These values are not true");
}