var Pet = require("./pet.js");

function Person(name, age) {
	this.name = name;
	this.age = age;
	this.pets = [];
	this.addPet = function(type, name, noise) {
		pet = new Pet(type, name, noise);
		this.pets.push(pet);
	}
}

module.exports = Person;