function Robot(name, type) {
	this.name = name;
	this.type = type;
	this.activate = function() {
		switch(this.type) {
			case "cleanbot":
				console.log("I Will clean your home");
				break;

			case "drivebot":
				console.log("I will drive you around");
				break;

			default:
				console.log("Skynet is self-aware");
				break;
		}
	}
}

var cleaner = new Robot("Bubba", "cleanbot");
var driver = new Robot("Samantha", "drivebot");
var terminator = new Robot("Arnold", "terminator");

// console.log(terminator instanceof Robot); //checking if terminator is an instance of Robot

// console.log(cleaner.constructor === Robot); //checking if cleaner is the constructor of a robot

cleaner.activate();
driver.activate();
terminator.activate();