console.error("=================Object Assignment=====================");
let variable_name = " ";
let teacher = {
    fullName : " Prof.Arun Gaikwad",
    destination : "HOD",
    department : "Computer Engineering",
    degrees :{
        1:`IT Engineer `,
        2: `Adv Computing `,
        3:`Web Developer `,
    } ,
    Certificates : {
Certificate_1 : "Hacker Rank Participation",
Certificate_2 : "Certificate in IFE Cource",
Certificate_3 : " Certificate in Advance Programming "
},
details: function(){
    let teacherDetails = ` Teacher Details are : ${this.fullName}, ${this.department},${this.Certificates.Certificate_3}`
return  teacherDetails;

}
} 

let tDetails = teacher.details();
console.log(`Using Function & Concat :`, teacher.details());

console.log("-------------------------------------------------------------------------------------------------------------");

teacher.Degree =` Degree Of Teacher is : Computer science and Advance computing`
console.log(teacher.Degree);
console.log("----------------------------------------------------------------------------------------------------------------");

console.log(teacher);
console.log("-------------------------------------------------------------------------------------------------------------");

console.log(` Certificate Before Delete :`,teacher.Certificates);
console.log("----------------------------------------------------------------------------------------------------------");

delete teacher.Certificates ;
console.log(` Certificate After Delete :`,teacher.Certificates);
console.log("-----------------------------------------------------------------------------------------------------------------");

teacher.newCertificate = "Data Stucture and JavaScript"
console.log(`Added New Certificates : ` ,teacher.newCertificate);
console.log("------------------------------------------------------------------");




