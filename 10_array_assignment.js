var arrayOfNames = ['Kamat','Memon','Naspati','Taimur','Menon','Kamat','Andy','Taimur'];
console.log(`Original Array is : ${arrayOfNames }`);
console.warn("********************************************************************************");

var set = [...new Set(arrayOfNames)];
console.log(`After Removing Duplicate elements: ${set}`);
console.warn("********************************************************************************");

let arrayLength = arrayOfNames.length ;
//console.log( arrayLength);

let setLength = set.length ;
//console.log( setLength);

console.log(`Count of duplicate elements removed from array is : ${arrayLength- setLength}`);
console.warn("********************************************************************************");

console.log(`Unique elements of array is: ${setLength }`);

let arrayUniqueElements =[ ...new Set (arrayOfNames)];
console.log(arrayUniqueElements);
