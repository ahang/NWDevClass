//Constructor
function Animal(raining, noise) {
	this.raining = raining;
	this.noise = noise;
	this.MakeNoise = function() {
		if(this.raining === true) {
			console.log(this.noise);
		}
	}
}
//create a new animal constructor
var dogs = new Animal(true, "Woof!");
var cats = new Animal(false, "Meow!");

dogs.MakeNoise();
cats.MakeNoise();

cats.raining = true;

cats.MakeNoise();

cats.sleepNoise = function() {
	console.log("purrrrr");
}

cats.sleepNoise();
dogs.sleepNoise();