class Person {                  //class name always strart with capital letter
    fullName
    city
    age
gender
constructor(fullName, city,age, gender ){

this.fullName= fullName
this.city = city 
this.age = age;
this.gender = gender ;

}details(){
    console.log(`Person Details :${this.fullName} ${this.city} ${this.age} ${this.gender}`);
}

}
let sachin = new Person("Sachin Tendulkar", "Pune",45, "Male" );
let rohit = new Person("Rohit Sharma", "Mumbai",32, "Male" );
console.log(sachin);
console.log(rohit);
console.warn("--------------------------------------------------------");
console.log(typeof rohit);
console.warn("--------------------------------------------------------");

