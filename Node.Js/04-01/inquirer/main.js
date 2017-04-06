var inquirer = require("inquirer");

inquirer.prompt([
{
	type: "input",
	message: "What is your name?",
	name: "userName"
},
{
	type: "password",
	message: "Set your password",
	name: "userPassword"
},
{
	type: "confirm",
	message: "Are you sure?",
	name: "userConfirm",
	default: true,
}
]).then(function(userData){
	console.log(JSON.stringify(userData, null, 2));
});