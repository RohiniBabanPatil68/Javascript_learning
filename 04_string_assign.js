 var greet = "Square of number";
 
 console.log(greet);
 var count= greet.length;
 console.log(count);
 //* OR conlose.log(greet.length)

 var sonali = greet.charAt(8);
 console.log(sonali);  // Or conlose.log(greet.chartAt(8));

 var char = greet.indexOf('bro');
 console.log(char);
 console.log("==============================================================");
 
 var Square = function (value) {
    console.log("Square Of Number  " + value*value);
 }
 Square(5);
 Square(6);
 Square(25);
 Square(100);
 console.log("==============================================================");

 console.log(typeof Square);
 console.log("==============================================================");


 var Area_of_Triangle = function (b , h ) {
    console.log("Area of Triangle" + 1/2*b*h);
 }
 Area_of_Triangle(45 , 34)

 console.log("=========================================================");
 var Area_of_Rectangle = function (L, W) {
    console.log("Area Of Rectangle : " + L*W);
 }
 Area_of_Rectangle(499,917)

 console.log("--------------------------------------------------------");
 var string = "JavaScript the most popular language"
 console.log(string);
 var count = string.length;
 console.log(count);

 var chara= string.indexOf('S');
 console.log("The index of S is = " +chara );

 var value = string.indexOf("lang");
 console.log("The index of lang is = " + value);

 var last_character = string.charAt(string.length-1);
 console.log("The last Character is " +last_character);
 


 var last_third = string.charAt(36-3);
 console.log("The third last character is " +last_third);