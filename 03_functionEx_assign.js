var stringHandson = function (){
    console.warn("-----------------------Question 01----------------------");
    var string = ( "      Hey you are doing Good, keep it up        ")
    console.log("Given String is:" , string);

    console.warn("-----------------------Question 02----------------------");
    console.log("Length of given String : ", string.length);

    console.warn("-----------------------Question 03----------------------");
var trimResult = string.trim();
console.log("Aftrer trim String is:", trimResult);

console.warn("-----------------------Question 04----------------------");
var length_of_Gstring = string.length;
console.log("Length of Original string:", length_of_Gstring);

var length_of_Tstring = trimResult.length;
console.log("Length of trim string :", length_of_Tstring);

var newlength = length_of_Gstring - length_of_Tstring;
console.log("count of removed spaces: ",newlength );

console.warn("-----------------------Question 05----------------------");
console.log(`First character after trim is : ${trimResult.charAt(0)} last character after trim is : ${ trimResult.charAt(33)}` );

console.warn("-----------------------Question 06----------------------");
var splitResult = trimResult.split(" ");
console.log("Split of given string  :", splitResult);
console.log("Total words available in the string:",splitResult.length);

console.warn("-----------------------Question 07----------------------");
var value = trimResult.indexOf("good")
console.log(` Index of good ;  ${value}`);

console.log("------------------------------Question 08-----------------------------------------------");
console.log(" Substring & slice from 22: " ,trimResult.slice(22));
console.log("------------------------------------------------------------------------------");
console.log( ` Check string: ${trimResult.includes("up")}`);
console.log("-------------------------------------------------------------------");
console.log(`checking for string starts with "Hey" ${trimResult.includes("Hey")}`);

}
stringHandson();