var myReult = 0/0;
console.log(myReult);
console.log(typeof myReult);

var myAge ="31";
console.log(typeof myAge);
var myAgeInNumber = + myAge;
console.log(myAgeInNumber,typeof myAgeInNumber);

var myName = "TEST";
console.log(typeof myName);
var myNameString = +myName;
console.log(myNameString, typeof myNameString);

var operand1 = 100;
var operand2 = 200;
console.log(operand1  + operand2);

var operand1 = + "100";
var operand2 = + "200";
console.log(operand1 + operand2);

console.warn("============Implicit conversion================");
console.log("4"-true); // 4-1

console.warn("============Implicit conversion================");
var operand2 = 200 ;
console.log(operand2, typeof operand2);
var operand2str = operand2.toString();
console.log(operand2str,typeof operand2str);

