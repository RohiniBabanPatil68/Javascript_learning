const sachinPerson = {
    fullName: "Sachin Tendulkar",
    City: "Pune",
    Age: 42,
    isMarried: true
}
for (const key in sachinPerson) {
    //if (Object.hasOwnProperty.call(sachinPerson, key)) {            // Optional to write
        const element = sachinPerson[key];
        console.log(element);
    }

console.warn("------------------------------------------------------------------");
const dipaliPerson = {
    fullName: "Dipali Pawar",
    City: "Mumbai",
    Age: 22,
    isMarried: false
}
for (const key in dipaliPerson) {
   // if (Object.hasOwnProperty.call(object, key)) {
        const element = dipaliPerson[key];
        console.log(element);
    }
    console.warn("------------------------------------------------------------------");
