console.warn("**************Assignment 02****************");
console.log("====================Find the Greatest Number===================");

var operator = function(num1, num2){
    var result = num1 > num2 ? num1 : num2;
    console.log(result);
}
operator(10, -10) ;
operator(800, 899) ;

console.warn("===============True or False Value============================");
var evenOROdd = function(arg1){
    var output = arg1 % 2 ==0 ? true : false ;
    console.log(output); 
}
evenOROdd(29);
evenOROdd(44);
evenOROdd(0);
evenOROdd(101);

console.warn("========================Question 03===============================");
var show = function (value) {
    var str= value.length;
    var result=str%2==0? "Even" : " Odd";
    console.log(result);

}
show(" Javascript");
show("Google ");
show("Developer ");




