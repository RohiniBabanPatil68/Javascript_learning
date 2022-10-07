
function myFunction(){
    console.log("Cricket is my favorite game");
    console.log(" M.S.Dhoni is my favorite Player");
    
}
  myFunction();
  console.log("=======================================================================");
function showMessage(){
    console.log("Hello Everyone");
    console.log("Good Morning");
}
 showMessage();
 console.log("======================================================================");

function details(first_name, last_name) {
    console.log(first_name + last_name);
}
details("Rohini"  ,  "Patil");

 console.log("======================================================================");


 function swap_values(arg1, arg2){
    console.log("---------- Before swap-------------");
    console.log(arg1, arg2);
    console.log("---------- After swap-------------");
    var temp = arg1;
    arg1 = arg2;
    arg2 = temp;
    console.log(arg1, arg2);
}
swap_values("Virat", "Anushka");
swap_values(1000, 2000);
console.log("=======================================================================");
console.log("---------- Addition function-------------");
function add_three_numbers(arg1, arg2, arg3){
    console.log(arg1 + arg2 + arg3);
}
add_three_numbers(10.23, 600,  40);
add_three_numbers("Hello", " Good ", " Morning")