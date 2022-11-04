'use strict'


function  display(name,...myName){
console.log(name , myName);
console.warn("============================================================");
console.log(typeof myName );
}
display("Anil",31, "City", true);

console.warn("======================================================================");
function divide(x,y=1){

    console.log(x/y);
}
divide(10)