var inquirer = require("inquirer");

function Player(name, position, offense, defense) {
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;
	this.printStat = function() {
		console.log(`${this.name} is a ${this.position}` + "\n" +
			`their stats are Offense: ${this.offense} and Defense: ${this.defense}`);
	}
	this.goodGame = function() {
		var gg = Math.floor(Math.random() * 2);
		console.log(gg);
		if (gg === 0) {
			this.offense++;
			console.log(`${this.name} offense went up!`);
		} else {
			this.defense++;
			console.log(`${this.name} defense went up!`);
		}
	}
	this.badGame = function() {
		var bg = Math.floor(Math.random() * 2);
		if (bg === 0) {
			this.offense--;
			console.log(`${this.name} offense went down!`);
		} else {
			this.defense--;
			console.log(`${this.name} defense went down!`);
		}
	}
}

var count = 0;
var player = [];
var subs = [];
var starter = [];

var askPlayers = function() {
	if (count < 8) {
		inquirer.prompt([
		{
			name: "name",
			message: "What is the player's name?"
		},
		{
			name: "position",
			message: "What is the player's position?"
		},
		{
			name: "offense",
			message: "What is the players offense stat between 1-10?"
		},
		{
			name: "defense",
			message: "What is the players defense stat between 1-10?"
		},
		{
			type: "list",
			name: "placement",
			message: "Is this player a starter or a sub?",
			choices: ["sub", "starter"]
		}
		]).then(function(answers) {
			console.log(answers);
			var newPlayer = new Player(answers.name, answers.position, answers.offense, answers.defense);
			player.push(newPlayer);
			count++;
			newPlayer.printStat();
			askPlayers();
		})
	}
};

askPlayers();

function playGame() {
	if (count === 10)
}