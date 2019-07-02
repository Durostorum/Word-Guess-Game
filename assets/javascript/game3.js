var countries = ["Brazil", "Germany", "Singapore", "Kuweit", "Latvia", "Tanzania", "Sumalia", "Ghana", "Bolivia"];

var lifes = 6; //  number of guesses 
var guessedLetters = []; 
var guessedWord = []; // store the "_" and to be used to replace the word answer
var guessesLeft = 0; 
var wins = 0;
var losses = 0;
var gameOver = false; 
var computerPick; // the word that is being played


function startUp() {
    computerPick = countries[Math.floor(Math.random() * countries.length)].toUpperCase();

    guessedWord = [];

    // adds "_" to guessedWord
    for (var i = 0; i < computerPick.length; i++) {
        guessedWord[i] = "_";
    }

    
    guessesLeft = lifes;
    guessedLetters = [];
    systemRefresh();
};

function systemRefresh() {
    document.getElementById("wins").innerText = wins;
    document.getElementById("losses").innerText = losses;
    document.getElementById("numGuesses").innerText = guessesLeft;
    document.getElementById("answerWord").innerText = guessedWord.join("");
    document.getElementById("guessedLetters").innerText = guessedLetters;

};


function checkGuess(letter) {
        if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        
        if (computerPick.indexOf(letter) === -1) {
            guessesLeft--;
           
        } else { 
            for (var i = 0; i < computerPick.length; i++) {
                if (letter === computerPick[i]) {
                    guessedWord[i] = letter;
                } 
            }                
        }
    }

}; 


function Won() {
    if (guessedWord.indexOf("_") === -1) {
        wins++;
        gameOver = true;            
    }
};
function Lost() {
        if(guessesLeft <= 0) {
        losses++;
        gameOver = true;
        }

};


//event listener for key pressed
document.onkeyup = function(event) {
    if (gameOver) {
        startUp();
        gameOver = false;
    } else {
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase()); 
            systemRefresh();
            Won();
            Lost();
        }
    }
};


startUp();
systemRefresh();

console.log(computerPick);
