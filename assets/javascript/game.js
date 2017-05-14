//	Psychic-Game JS

//	Variables

var wins = 0;			//	Number of wins
var losses = 0;			//	Number of losses
var lives = 9;			//  Number of guesses remaining
var guesses = " ";		//	Log of Player guesses
var letterComputer;		//  Computer's letter pick
var letterPlayer;		//  Human's letter pick


var showWins = document.getElementById("wins");
var showLosses = document.getElementById("losses");
var showLives = document.getElementById("lives");
var showGuesses = document.getElementById("guesses");

var letter = 	["a","b","c","d","e","f", 
				"g","h","i","j","k","l",
				"m","n","o","p","q","r","s",
				"t","u","v","w","x","y","z"];

//	Computer Chooses a letter
function newLetter() {
	letterComputer = letter[Math.floor(Math.random() * letter.length)];
	console.log(letterComputer + "    <<<<< If you want to cheat, this is the correct answer");
}

// Executes Computer's first choice.
newLetter();

//  Player picks a letter
document.onkeyup = function(event){
	
	var letterPlayer = String.fromCharCode(event.keyCode).toLowerCase();
	
	if (letter.indexOf(letterPlayer) < 0) {
		alert("Please pick a letter");
	}
	else if (letterPlayer === letterComputer) {
		alert("Correct");
		wins++;
		lives = 9;
		guesses = " ";
		newLetter();
	} else {
		alert("wrong, guess again");
		lives--;
		//  Displays incorrect guess
		guesses = guesses + " " + letterPlayer;
		
		// Game Over: lives reset and computer picks new letter
		if (lives === 0) {
			lives = 9;
			losses++;
			guesses = " ";	
			newLetter();
		}
	}
	//	Updates display
	showWins.innerHTML = wins;
	showLives.innerHTML = lives;
	showLosses.innerHTML = losses;
	showGuesses.innerHTML = guesses;
	
	// Hit screen animation pulsates at < 4 lives remaining
	if (lives < 4) {
		document.getElementById("body").style.animation = "warning" + " " + lives + "s" + " " + "infinite";
	} else {
		document.getElementById("body").style.animation = 0;
	}
};

