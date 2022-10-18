var Goal = " My Dream Company is Tcs";
console.log(Goal);
console.log("-------------------------------------------------------------");
var hobbies = "My Hobbies are : ";
console.log(hobbies);
var Hobby1 = "  1)Travelling";
console.log(Hobby1);
var Hobby2 = "  2)listening Music" ;
console.log(Hobby2);
var Hobby3 = " 3) Drawing" ;
console.log(Hobby3);
var result = Hobby1.concat(Hobby2,Hobby3) ;
console.log("My Hobbies are : " , result);
console.log("-------------------------------------------------------------");
var stringHandson = function(){

var title = "  Assignment 02";
console.log(title);
 
var string = ` 1) Step 1. The Given String is : "Hey you are doing good, keep it up"`
console.log(string);
console.log("-----------------------------------------------------------------------------");
var string1 = "  Hey you are doing good, keep it up  "
console.log(" Step 2) The length of the string is : " , string1.length);
console.log("-----------------------------------------------------------------------------");
var trimResult = string1.trim() ;
console.log("Step 3: Remove Extra Spaces :",trimResult );

var removeSpace = `Step 4) "Total number of removed extra spaces in step 3 is : 4"`
console.log(removeSpace);
console.log("Length of the String After  Trim :" ,trimResult.length );
console.log("-----------------------------------------------------------------------------");
var afterStrim = "Hey you are doing good, keep it up"
var first_Character = afterStrim.charAt(0 );
console.log("Step 5) First character of string is:",first_Character );

var lastCharacter = afterStrim.charAt (afterStrim.length-1);
console.log(" last character is :",lastCharacter);

console.log("-----------------------------------------------------------------------------");
var splitResult = trimResult.split(" ");
console.log("split of given string ;" , splitResult);
console.log("Total Words available in the string :", splitResult.length);
console.log("-----------------------------------------------------------------------------");
var value = afterStrim.indexOf("good")
console.log("Step 7) Index of good " +value);

console.log("-----------------------------------------------------------------------------");
console.log("step 8) Substring & slice from 22: " ,afterStrim.slice(22));
console.log("------------------------------------------------------------------------------");
console.log( "Step 9) Check string: ", afterStrim.includes("up"));
console.log("-------------------------------------------------------------------");
console.log("step 10) :", afterStrim.includes("Hey"));
}
stringHandson() ;
