console.warn("**********Assignment A Map method***********");

const array_numbers = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given Array is :  ${array_numbers }`);

console.warn("====== Q.1 Add 10 into Each Element ================== ");
let array=array_numbers.map((element)=>{
    return element+10;

});
console.log(array);

console.warn("====== Q.2 Square of  Each Element in the Array ================== ");
let square =array_numbers.map((element)=>{
    return element * element;

});
console.log(square);

console.warn("=========== Add index value into correponding array element ==============");
var array1=array_numbers.map((element,index)=>{
    return element + index;

});
console.log(array1);
