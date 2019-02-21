
//Create an array of flowers
var FLOWERS = ["amaryllis", "bergenia", "calendula"];

// var word = ""; //word is the flower that the player will guess
var answerArray = []; //answerArray the word with underscores
var badGuesses = []; // badGuesses are the letters that are not in the answerArray
var attemptsLeft = 10;
var wins = 0;


   
    //random word chosen from the array & assign it to word
    var word = FLOWERS[Math.floor(Math.random() * FLOWERS.length)]; 

    //for the length of the answerArray, place an underscore
    for (var i=0; i < word.length; i++){
        answerArray[i] = ("_");
    };
    document.getElementById("answer").innerHTML = answerArray;
    
    //start the game when a key is pressed
document.onkeyup = function start (event){
}

// start();



