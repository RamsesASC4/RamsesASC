var letter = ["a","b","c","d","e","f","g","h","i","j","k",
"l","m","n","o","p","q","r","s","t","u","v","w","x", "y","z"]

function randLetter(num){
    var randNum = Math.random()*num
    var result = Math.floor(randNum)
    return result
}




function randWord(){
    var myWord = "";
    for ( var i = 0; i < randLetter(20); i++){
        myWord = myWord + letter[randLetter(26)];
    }
    return myWord
}
randWord();

function randSentence(){
    var mySentence = "";
    for ( var i = 0; i < randLetter(20); i++){
        mySentence = mySentence + ". " + randWord();
    }
    return mySentence
}


randSentence();

console.log(randSentence);