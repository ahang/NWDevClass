
function characters(name, profession, gender, age, strength, hitPoints) {
	this.name = name;
	this.profession = profession;
	this.gender = gender;
	this.age = age;
	this.strength = strength;
	this.hitPoints = hitPoints;
	this.printStats = function() {
		console.log("-----------------------");
		console.log(`Hero: ${this.name} `);
		console.log(`Profession: ${this.profession}`);
		console.log(`Gender: ${this.gender}`);
		console.log(`Age: ${this.age}`);
		console.log(`Strength: ${this.strength}`);
		console.log(`HitPoints: ${this.hitPoints}`);
		console.log("-----------------------");
	}
	this.alive = function() {
		if (this.hitPoints <= 0) {
			console.log(`${this.name} is dead`);
		}
	}
}

var hero = new characters("Brad", "Woodpicker", "male", 50, 100, 1000);
var villian = new characters("Bob", "Axepicker", "female", 20, 20, 3000);


hero.printStats();
villian.printStats();