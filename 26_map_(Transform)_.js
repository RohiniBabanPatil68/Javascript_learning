console.warn("=======Transform the value ============");

const arrayOfNumbers = [2,3,5,4,6,1];

const newArray =  arrayOfNumbers.map( (element,index) => {
    if(index<=2){
        return element + 5 ;
    }
return element;
});
console.log(newArray );
console.log(arrayOfNumbers);