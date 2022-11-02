let arrayOfNumbers =[2,3,4,5];


let setOfNumbers = new Set ();
console.log(typeof setOfNumbers );
console.warn("=========Adding element into the set collection==========");
setOfNumbers.add(2);
setOfNumbers.add(4);
setOfNumbers.add(7);
setOfNumbers.add(9);
setOfNumbers.add(11);
console.log(setOfNumbers);

console.warn("=========Adding Duplicate element ==========");
setOfNumbers.add(7);
console.log(setOfNumbers);

console.warn("=========Checking number element available into set ==========");
console.log(setOfNumbers.size);

console.log("=============Deleting Element 9 ==============");
setOfNumbers.delete(9);
console.log(setOfNumbers.size);
console.log(setOfNumbers);

console.log;("=============Check whether element 7 available into set or not ==============");
let isAvailable = setOfNumbers.has(7);
console.log(isAvailable);
console.log(setOfNumbers.has(9));

// setOfNumbers.clear(); // It will clear the set r empty the set


console.warn("==========Traversing set=============");
for (const element of setOfNumbers) {

    console.log(element);
}


let arrayNumbers =[ 2,3,4,5,6,3,5];

let arrayUniqueElements =[ ...new Set (arrayNumbers)];
console.log(arrayUniqueElements);

//for (let index = 0; index < arrayNumbers.length; index++) {
  //  const element = arrayNumbers[index];
    //setOfNumbers.add(element)   
//}
