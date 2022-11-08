console.warn("======= Q.1 Given Array is =============");
const arrayNumbers = [1,-7, 40, 502, -77, 91, 0, 108, 89, -601];

arrayNumbers.forEach((currentValue) =>  console.log(currentValue));

    console.warn("=====================Q.2 Positive Numbers Of Array is ============================");
    arrayNumbers.forEach((currentValue) =>{
        if (currentValue >0) {
        
     console.log(currentValue) ;
        }
});

    console.warn("======================Q.3 Negative Numbers of Array ===========================");
    arrayNumbers.forEach((currentValue) =>{
        if (currentValue <0) {
        
     console.log(currentValue) ;
        }
});

console.warn("======================Q.4 Even Numbers of Array ===========================");
arrayNumbers.forEach((currentValue) =>{
    if (currentValue%2==0) {
    
 console.log(currentValue) ;
    }
});

console.warn("======================Q.5 Sum of all Numbers of Array ===========================");
let sum = arrayNumbers.reduce( (value , runningTotal) =>{
    return value + runningTotal;
});
console.log(sum);

console.warn("======================Q.5 Even Positioned value of Array ===========================");
arrayNumbers.forEach((value,index)=>{
    if (index%2==0) {
        console.log(value);

    }

});

console.warn("======================Q.6 Odd Positioned value of Array ===========================");
arrayNumbers.forEach((value,index)=>{
    if (index%2!=0) {
        console.log(value);

    }

});
