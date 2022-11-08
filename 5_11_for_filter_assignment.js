console.warn("**********Assignment B - For Filter () method ***********");
const array  = [20, 11, 40, 25, 23, 11, 9, 31, 60, 2, 19];

console.warn("============= Q.1 Numbers Greater than 50 ====================");
const new_array = array.filter((element)=>{
    return element >50;

});
console.log(new_array);

console.warn("============= Q.2 Even Numbers Of the Array ====================");
const evenNumbers = array.filter((element)=>{
    return element %2==0;

});
console.log(evenNumbers);

console.warn("============= Q.3 Odd Numbers Of the Array ====================");
const oddNumbers = array.filter((element)=>{
    return element %2 !=0;

});
console.log(oddNumbers);

console.warn("============= Q.4  Numbers which are multiple of 5  ====================");
array.filter((value)=>{
    if (value%5==0) {
        console.log(value);

    }
});

console.warn("============= Q.5  Numbers between 20 & 50  ====================");
array.filter((value)=>{
    if (value >=20 && value <=50) {
        console.log(value);

    }
});