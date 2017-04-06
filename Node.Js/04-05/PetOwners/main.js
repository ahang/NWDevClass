var Person = require("./person.js");

//console.log(Person);

var jack = new Person("Jack", 32);
var jill = new Person("Jill", 46);

jack.addPet("dog", "Fido", "bark!");
jill.addPet("cat", "Garfield", "meow!");
jill.addPet("lion", "Simba", "roar!");

console.log(jack.pets);
console.log(jill.pets[1]);