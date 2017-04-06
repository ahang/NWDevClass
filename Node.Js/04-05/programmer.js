var Programmer = function(name, position, age, language) {
	this.name = name;
	this.position = position;
	this.age = age;
	this.language =language;
	this.information = function() {
		//console.log(`Programmer ${name}` + "\n" + `works as a ${position} he/she is ${age} and their favorite language is ${this.language} `);
	}
}

//Programmer.prototype.printInfo

var steve = new Programmer("Steve", "Full Stack Developer", 18, "Node.js");

steve.information();