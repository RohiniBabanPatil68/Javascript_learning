
console.warn("-----------Assignment 01---------------------------------");
 
 var wordLengthSquare = function (word) {
    var wordLength = word.length ;
    return wordLength * wordLength
    
 }
 var word1 = "Javascript".length;
    console.log( `Lenght of JavaScript : ${word1}`);
console.log(`Square of javascript`,wordLengthSquare("JavaScript") );
console.warn("------------------------------------------------------------------");
var word2 =  "Google".length;
    console.log( `Lenght of Google : ${word2}`);
 console.log(`Square of Google:`, wordLengthSquare("Google")); 
console.warn("----------------------------------------------------------------------");
 var word3 = "Developer".length;
    console.log( `Lenght of Developer : ${word3}`);
console.log(`Square of Developer`, wordLengthSquare("Developer"));

var givenStringLength = `"JavaScript", "Google", "Developer"`.length ;
var result = `"JavaScript", "Google", "Developer"`.split(" ");
var total_word01= result.length ;


console.warn("-----------Question 02---------------------------------");

var givenStringLength= "I am Angular Developer".length
console.log(`Length of given string is : ${givenStringLength}`);

var result01 = "I am Angular Developer".split(" ");
// console.log( ${result01}`);

var totalWords = result01.length;
console.log(`no.of words available in string : ${totalWords}`);

var division = givenStringLength / totalWords
console.log(`givenStringLength / totalWords : ${division}`);

var multiplication = givenStringLength * totalWords
console.log(`givenStringLength * totalWords : ${multiplication}`);



