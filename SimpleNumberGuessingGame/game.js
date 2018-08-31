//create secretNumber
var secretNumber = 4;

//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);

//check if guess is right
if(guess === secretNumber){
	alert("You Got it Right!");
}

//otherwise, check if higher
else if(guess >secretNumber){
	alert("Too High. Guess again!");
}

//otherwise, check if lower
else {
	alert("Too Low. Guess again!");
}

