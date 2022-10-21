let variable_name = " ";
let person = {
    fullName: "Sachin Tendulkar",
    City: "Mumbai",
    Age: 42,
    isMarried: true,
address : {
street : "AS Club",
state:"MH",
City:"Pune"



},
details: function(){
    let personDetails = `Details are : ${this.fullName}, ${this.Age},${this.address.state}`
return  personDetails;
},
walk:function (){console.log("I do Walk Everyday");}
}
let pDetails = person.details();
console.log(person.details());


console.log(typeof person)
console.warn("====================================================");

//person.eat();
person.walk();
console.error("============================================");
person.details(); 

console.error("=======================================");

person.fullName = "Sachin Ramesh Tendulkar"; // update value
person.pincode= 123456;                   //  add value .you can add value outside the function
person.profession = "Angular Developer";
console.table(person);

console.log(person);

let personFullName = person.fullName;
console.log(personFullName);
console.log(person.fullName);

//console.log(person.Age);
delete person.Age; // delete object


console.log(person.City);
let isAvailable = "fullName" in person ;
console.log(isAvailable);
console.log("city" in person);

console.log("-------------------------------------------------------------------------------------------------------------");
