var dog = {
	raining: true,
	noise: "Woof!",
	makeNoise: function() {
		console.log(dog.noise);
	}
}

if (dog.raining === true) {
	console.log(dog.noise);
} else {
	console.log("The dog is not barking");
}

var cat = {
	raining: true,
	noise: "Meow!",
	makeNoise: function() {
		console.log(cat.noise);
	}
}

if (cat.raining === true) {
	console.log(cat.noise);
} else {
	console.log("The cat is quiet");
}

var massHysteria = function() {
	if (dog.raining === true && cat.raining === t)
}