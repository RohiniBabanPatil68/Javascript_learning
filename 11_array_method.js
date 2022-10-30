let arrayOfNumbers = [1, 3, 7, 8, 9, 3, 7];
//arrayOfNumbers[4] = 11;
console.log(arrayOfNumbers);
arrayOfNumbers.unshift(5,44);
arrayOfNumbers.unshift(0);        //unshift is used for add elements in starting
console.log(arrayOfNumbers);      

console.log(arrayOfNumbers.includes(7));
console.log(arrayOfNumbers.includes(9));

for (let index = 0; index < arrayOfNumbers.length; index++) {
    const element = arrayOfNumbers[index]; 
 //   console.log(element);
}


for (const index in arrayOfNumbers) {
    const element = arrayOfNumbers[index];
   // console.log(element);
}
console.warn("----------------------------------------------------------");

let totalElements = arrayOfNumbers.length-1;            // to write reverse order
for (let index = totalElements; index >=0; index--) {
    
    const element = arrayOfNumbers[index];
    console.log(element);
    
}
console.warn("------------------------------Shift()---------------------------------------------------");
let array = [ 11,22,47,81];
console.log(array);   
array.shift();   //  shift is used to remove elements
console.log(array);

console.warn("------------------------------slice()---------------------------------------------------");
let arrayNumbers = [1,3,7,8,9,3,7]
let sliceElements = arrayNumbers.slice(2);
console.log(sliceElements);

let sliceValues = arrayNumbers.slice(1,4);
console.log(sliceValues);

console.warn("------------------------------splice()---------------------------------------------------");
let array_Numbers = [1,3,7,8,9,3,7]
console.log(array_Numbers);
//let spliceElements = array_Numbers.splice(2,2); /////  After 4th index Remove all element
//console.log(array_Numbers);

let spliceElements = array_Numbers.splice[2,0,22];
//console.log(array_Numbers);

array_Numbers.splice(2,2,22,44);
console.log(array_Numbers);
