console.warn("==============Assignment 01====================");

function maleMarriageEligibility(gender,age,candidateName)
 {
    if (gender=="Male" && age >=21)
     {
        console.log(`Hey ${candidateName} you are eligible for marriage`);
    } else {
        console.log(` ${candidateName} you are not eligible for marriage`);
        
    }
}
maleMarriageEligibility("Male",25,"Bill Gates");
maleMarriageEligibility("Male",17,"Steave Jobs");

console.warn("============Female Marriage Eligibility=================");

function femaleMarriageEligibility(gender,age,candidateName)
 {
    if (gender=="Female" && age >=18)
     {
        console.log(`Hey ${candidateName} you are eligible for marriage`);
    } else {
        console.log(` ${candidateName} you are not eligible for marriage`);
        
    }
}
femaleMarriageEligibility("Female",16,"Jennifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");

console.warn("===========Assignment 0B=====================");

var myNumber = function(num1){
    if (num1%2==0) {
        console.log("Given number is Even");
        
    }else{
        console.log("Given number is ODD");
    }
}
myNumber(45);
myNumber(70);
myNumber(67);
myNumber(98);

console.warn("=================Person is eligible for vote OR not=================");

var votingAge = function(num1){

    if (num1>=18) {
        console.log("Person is eligible for vote");
        
    }else{
        console.log("Person is  not eligible for vote");
    }
}
votingAge(18);
votingAge(20);
votingAge(17);
votingAge(40);

console.warn("=================Question 03=================");

var string = "JavaScript-ES6".length;
console.log(`lenght of Given String is : ${string}`);

if (string>=10) {
    console.log("Given string contain more than 10 characters");

} else {
    
} ;

console.warn("=================Question 04=================");   

var words = "JavaScript Language" ;
 var myStr = words.startsWith("Java")
    console.log("String start with java : ", myStr ) ;


















