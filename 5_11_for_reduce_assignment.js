console.warn("**********Assignment C - For Reduce () method ***********");

const array_numbers  = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given Array is : ${array_numbers }`);

console.warn("****************** Q.1 Sum Of All the Numbers *********************");
const sum = array_numbers.reduce( (value, runningTotal) =>{
    return value + runningTotal;

})
console.log(`Sum Of All the Numbers is : ${sum}`);

console.warn("****************** Q.2 Sum Of All the Even Numbers *********************");
var array=array_numbers.filter((value)=>{
    if (value%2==0) {
        return value;
    }

});
//console.log(`Even Numbers are : ${array}`);
const evenSum = array.reduce( (value, runningTotal) =>{
    return value + runningTotal;

})
console.log(`Sum Of All the Even Numbers is: ${evenSum}`);


