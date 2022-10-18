 
var givenString = "Good Morning IT Champ"
console.log("================= Just log Vowels ======================");
 var strLowerCase = givenString.toLowerCase();// "a i love javascript"
 for (let index = 0; index < givenString.length; index++) {
    var char = strLowerCase.charAt(index);
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        console.log(char);
    }
}
console.log("================= Write Function to log Vowels ======================");
var string = " I love JavaScript"

function countVowels() {
    var lowercaseStr = string.toLowerCase();

    for (let index = 0; index < string.length; index++) {
        var vowels=lowercaseStr.charAt(index);
        
        if (vowels == "a" || vowels == "e" || vowels == "i" || vowels == "o" || vowels == "u") {
            console.log(vowels);
        }
    }
}
countVowels();

