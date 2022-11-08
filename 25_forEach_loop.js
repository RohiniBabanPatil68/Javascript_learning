let show = (n1) => {
    console.log("hi");
}
show(10,"test");

const arrayNumbers = [10,- 20,30,40,20,10,-30];
 //arrayNumbers.forEach(function(currentValue, index, array){
//console.log(currentValue, index, array );
//});

arrayNumbers.forEach((currentValue, index) => {
    console.log(currentValue, index );
    });
console.warn("=================================================");
    //OR 
    arrayNumbers.forEach((currentValue) =>  console.log(currentValue));

    console.warn("====================== Negative Numbers of Array ===========================");
    arrayNumbers.forEach((currentValue) =>{
        if (currentValue <0) {
        
     console.log(currentValue) ;
        }
});

    
    console.warn("=================================================");
const setOfNumbers = new Set ( arrayNumbers);
setOfNumbers.forEach((value) =>{
console.log(value);

});
console.warn("==========================");

let map = new Map ();
map.set(22,"Sachin");
map.set(11,"Dravid");
map.set(33,"Gangully");
map.set(77,"Dravid");
map
