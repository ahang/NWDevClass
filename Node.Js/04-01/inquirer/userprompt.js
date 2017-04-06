// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================
var inquirer = require("inquirer");

inquirer.prompt([
{
	type: "input",
	message: "What is your name?",
	name: "name"
},
{
	type: "password",
	message: "What's the password",
	name: "password"
},
{
	type: "list",
	message: "What is your weapon of choice?",
	choices: ["Sword & Shield", "Battle Axe", "Rock", "Bow & Arrow", "Pike"],
	name: "weapon"
},
{
	type: "checkbox",
	message: "Pick a story",
	choices: ["Saving a Damsel in Distress", "Saving a Kingdom in Chaos", "Relaxing"],
	name: "story"
},
{
	type: "confirm",
	message: "Begin your story?",
	name: "confirm",
	default: true
}
]).then(function(user) {
	if (user.password === "candy") {
    console.log("==============================================");
    console.log("");
    console.log("Welcome " + user.name);
    console.log("Your " + user.weapon + " is ready to be used!");
    console.log("You will begin your story by " + user.story);
    console.log("");
    console.log("==============================================");
	}

	else {

    console.log("");
    console.log("");
    console.log("That's okay " + user.name + ", come again when you are more sure.");
    console.log("");
    console.log("");

  }
});