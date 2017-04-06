var count = 0;

var doSomething = function() {
	if (count < 5) {
		console.log("I did something");
		count++;
		doSomething();
	}
}
doSomething();