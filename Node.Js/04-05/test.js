var Person = function(name, age) {
	this.name = name;
	this.age = age;
	this.sayYourName = function() {
		console.log("My name is " + this.name);
	}
}

Person.prototype.sayYourAge = function() {
	console.log("My age is " + this.age);
}

var jill = new Person("Jill", 33);
var john = new Person("John", 55);

jill.sayYourName();
jill.sayYourAge();
john.sayYourName();
john.sayYourAge();