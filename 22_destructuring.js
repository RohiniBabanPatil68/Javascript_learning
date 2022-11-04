'use strict'

let person = {
    fullName: "Mohit Aglawe",
    age: 31 ,
    city: "Pune",
    pin: 432585,
    state: "MH",
    isMarried: true
}

//let fullName = person.fullName;
//let city = person.city;
//let pin = person.pin;
//let state = person.state;
//let isMarried = person.isMarried;

let{ fullName, city, pin , state, isMarried} = person;
console.log(fullName, city, pin , state, isMarried );

console.warn("*******************************************************************************");
let arrayOfNames = ["Mohit","Golu","Chotu","Ponu","Dholu",];
//let ele0 = arrayOfNames(0);
//let ele1 = arrayOfNames(1);
//let ele2 = arrayOfNames(2);
//let ele3 = arrayOfNames(3);
//let ele4 = arrayOfNames(4);
//let ele5 = arrayOfNames(5);

let [ele0, ele1, ele2,ele3,ele4,ele5 ] = arrayOfNames;
console.log(ele0, ele1, ele2,ele3,ele4,ele5);
