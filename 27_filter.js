
const arrayOfNumbers = [2,3,5,4,6,1];
 
 let newArray = arrayOfNumbers.filter( (element) =>{
    return element >=4;

});
console.log(newArray);

console.warn("=================Reduce ( ) methode ===============");
let sum = arrayOfNumbers.reduce( (value, runningTotal) =>{
    return value + runningTotal ;
})
console.log(`Total sum of all elemets : ${sum }` );

console.warn("================Average=================");
let arrayLen = arrayOfNumbers.length;
console.log("Length of the Array is :" , arrayLen);

let average = sum/arrayLen;
console.log("Average of the Array is :" , average); 