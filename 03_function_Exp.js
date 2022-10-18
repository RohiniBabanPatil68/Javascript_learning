var test = function (arg1, arg2) {
console.log("Function expression", arg1);
return "FE";
}
test(10,20);

var returnValue = test(10,20);
console.log(returnValue); 
console.log("----------------------replace---------------------------");
var greet = " Good Morning bro and sis";
var replaceDemo = greet.replace("Morning","Evening")
console.log(replaceDemo);
console.log("----------------------includes---------------------------");
console.log(greet.includes("bro"));
console.log("----------------------Concat---------------------------");
var fName = "Virat"
var lName = "Kohli"
var result = fName.concat(" ",lName)
console.log(result);

console.log("----------------------Uppercase()& lowercase()---------------------------");
var greet = "Good Morning bro and sis";
console.log(replaceDemo.toUpperCase());
console.log(replaceDemo.toLowerCase());

console.log("----------------------trim---------------------------");
var timResult = greet.trim();
console.log(timResult.length);

console.log("----------------------slice  substracting---------------------------");
console.log(greet.substring(8));
console.log(greet.substring(13,17));
console.log(greet.substring(13));

console.log(greet.slice(8));

console.log("----------------------ES6---------------------------");
var impQuote = `"Do or Die" thi attitude is imp for this training`;
console.log(impQuote);