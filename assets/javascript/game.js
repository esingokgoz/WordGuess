
//Create an array of dogs
var DOGS = ["poodle", "terrier", "shepherd", "beagle", "boxer"];

// var word = ""; //word is the flower that the player will guess
var randomWord = "";
var lettersOfWord = [];
var blanks = [];
var wrongLetters = [];

//values that will be kept track of
var attemptsLeft = 10;
var wins = 0;
var losses = 0;


//Game Function
document.onkeyup = function Game(event) {
    if (randomWord.length === 0){
        secretWord();
    }else{
        var x = event.key;
        console.log(x);
        //call the function where it's checking the comparision
        comparision(x);
    }
}

 function secretWord(){
    //generate a random word
    randomWord = DOGS[Math.floor(Math.random() * DOGS.length)];
    lettersOfWord = randomWord.split("");
    console.log("this is the random word seperated " + lettersOfWord);

    // var blanks = [lettersOfWord.length];
    // console.log(blanks);
    //loop that generates underscores for the length of the word
    for (var i = 0; i < lettersOfWord.length; i++) {
        blanks.push("_");
    }
    console.log("random word with blanks -> " + blanks);
    document.getElementById("THEword").innerHTML = " " + blanks.join(" ");

}

//check letters
function comparision(letter) {
    //if (x > 90 || x < 57) { 
        //alert("Please choose a letter from A to Z");
    //}
    // else{
    // }
        var letterInWord = false;

        //check to see if letterInWord matches with the word
        //eger randomword'un icinde letter varsa, o zaman letterinword'u true yap
        if(randomWord.indexOf(letter) > -1){
            letterInWord = true;
            for (var i = 0; i < randomWord.length; i++){
                if(letter == randomWord[i]){
                    blanks[i] = letter 
                }
            }
            console.log(blanks);
            document.getElementById("THEword").innerHTML = " " + blanks.join(" ");

        }
        else{

        }
        
        
        // for (var i = 0; i < blanks; i++){
        //     if (randomWord[i] == letter){
        //         letterInWord = true;
        //     }
        // }

        // if(letterInWord == false){
        //     for (var i = 0; i < blanks; i++) {
        //         if (randomWord[i] == letter) {
        //             blanks[i] = letter;
        //         }
        //     }
        // }
        // else {
        //     wrongLetters.push(letter);
        //     attemptsLeft--;
        // }
        // console.log("another test " +blanks);

    



}

