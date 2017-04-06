var inquirer = require("inquirer");

function Programmer(name, language) {
	this.name = name;
	this.language = language;
	this.printInfo = function() {
		console.log(`${this.name} writes ${this.language}`);
	}
}

inquirer.prompt([
	{
		name: "name",
		type: "input",
		message: "Give me your name"
	},
	{
		name: "language",
		type: "input",
		message: "What do you code?"
	}
	
]).then(function(programmerData) {
	var programmer = new Programmer(programmerData.name, programmerData.language);
	programmer.printInfo();
})