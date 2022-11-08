console.warn("**********Assignment A ***********");
const array_roll_numbers=[113,45,56,11,32,45,109,799,56,45];
console.log(`Given array is :  ${array_roll_numbers}`);

console.warn("******************** Q.1 Reverse the array **********************");
console.log(`Reverse the array ${array_roll_numbers.reverse()}`);

console.warn("================ Q.2 Sort Methode =================");
console.log(`Using sort() method :  ${array_roll_numbers.sort()}`);

console.warn("******************** Q.3 Sort the array in ascending order **********************");
var array1=array_roll_numbers.sort((a,b)=>{
    return a>b? 1:-1;

});
console.log(`Sorted array in ascending order is  [${array1}]`);

console.warn("******************** Q.4 Sort the array in Descending order **********************");
var array=array_roll_numbers.sort((a,b)=>{
    return a>b? -1:1;

});
console.log(`Sorted array in descending order is  [${array}]`);

console.warn("================ Q.5 Greatest number of array is =================");
console.log(`Greatest number of the array is :${array[0]}`);

console.warn("================ Q.6 Smallest number of array is =================");
console.log(`Smallest number of array is : ${array[9]}`);

console.warn("================ Q.7 Remove duplicate elements from the array is =================");
var set=[...new Set(array_roll_numbers)];
console.log(`Array after removing duplicate elements ${set}`);
