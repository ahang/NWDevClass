function Pet(type, name, noise) {
	this.type = type;
	this.name = name;
	this.noise = noise;
	this.makeNoise = function() {
		console.log(`${this.noise}`);
	}
}
//module will allow the export of the constructor
module.exports = Pet;