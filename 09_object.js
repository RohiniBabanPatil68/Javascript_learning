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

eat:function(){

    console.log(" I am vegetarian");
},
details: function(){
console.log(`${this.fullName}, ${this.Age},`);
}
}


console.log(typeof person)

person.eat();
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
