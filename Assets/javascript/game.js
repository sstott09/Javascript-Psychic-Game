//Array of possible computer choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Variables for tracking players wins, losses, & guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];

//Game
document.onkeyup = function (event) {
	var playerGuess = event.key;
	lettersGuessed.push(playerGuess);
	console.log(computerGuess[0]);

	if ((playerGuess === computerGuess[0]) && (guessesLeft > 0)) {
		wins++;
		guessesLeft = 9;
		lettersGuessed.length = 0;
		computerGuess.length = 0;

		var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		computerGuess.push(compGuess);
		console.log(computerGuess[0]);
	}

	else if ((playerGuess !== computerGuess[0]) && (guessesLeft > 0)) {
		guessesLeft = guessesLeft - 1;
	}

	else {
		losses++;
		guessesLeft = 9;
		lettersGuessed.length = 0;
		computerGuess.length = 0;
		var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
		computerGuess.push(compGuess);
		console.log(computerGuess[0]);
	}

	var html = "<h2>Guess what letter I'm thinking of!</h2>" +
		"<h3>Wins: " + wins + "</h3>" +
		"<h3>Losses: " + losses + "</h3>" +
		"<h3>Guesses left: " + guessesLeft + "</h3>" +
		"<h3>Your guesses so far: " + lettersGuessed + "</h3>";

	document.querySelector("#game").innerHTML = html;

}