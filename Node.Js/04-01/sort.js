// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

var args = process.argv;

var numArray = [];

for (var i = 2; i < args.length; i++) {
	numArray.push(parseFloat(args[i]));
}

console.log(numArray);
console.log(numArray.sort(sortNums));

function sortNums(a, b) {
	return (a-b);
}