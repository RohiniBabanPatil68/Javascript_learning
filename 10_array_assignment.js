console.warn("=================Given Array===================");

arrayOfNames = [`Kamat`,`Memon`,`Nashpati`,`Taimur`,`Memon`,`Kamat`,`Andy`] ;
console.log(arrayOfNames);

console.warn("=================Remove Duplicate Elements===================");

arrayOfNames = arrayOfNames.filter(function(items,index,inputArray)  {
    return inputArray.indexOf(items)== index;
} );
console.log(arrayOfNames);

console.warn("=================Unique Elements===================");
let arrayUniqueElements =[ ...new Set (arrayOfNames)];
console.log(arrayUniqueElements);
