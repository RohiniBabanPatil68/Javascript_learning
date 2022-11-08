console.warn("===================Assignment=====================");
class Vehicle{
    company;
    model;
    color;
    type;

    constructor(vCompany,vModelYear,vColor,vType,vPrice)
    {
        this.company = vCompany;
        this.model = vModelYear;
        this.color = vColor;
        this.type = vType;
        this.price = vPrice
    }
    display()
    {
        console.log("This is class Vehicle");
    }
}
let v = new Vehicle();
v.display();
let v1 = new Vehicle("Hayabusa","2020","Black","4-wheeler","Rs.20lakh");
console.table(v1);
let v2 = new Vehicle("Tata","2015","Grey","4-wheeler","Rs.30lakhs");
console.table(v2);
let v3 = new Vehicle("Honda","2018","Black","2-wheeler","RS.1.5lakh");
console.table(v3);
let v4 = new Vehicle("Ashok Leyland","2020","Orange","12-wheeler"<"Rs.27lakhs");
console.table(v4);
let v5 = new Vehicle("Mahindra","2021","Red","4-wheeler","Rs.18lakh");
console.table(v5);

class College {
    collegeName;
    collegeCity;

        constructor(name, city) {
            this.collegeName = name;
            this.collegeCity = city;

        }
        display(){
            console.log("This Is COllege class");
        }
}
console.error("===============================================");
let c = new College();
c.display();
let c1 = new College("RMDSSOMS","Warje");
console.table(c1);
let c2 = new College("COEP","Phaltan");
console.table(c2);
let c3 = new College("SGGS","Nanded");
console.table(c3);
let c4 = new College("YCJC","Sangli");
console.table(c4);

console.error("*****************************Traverse Object**************************************");
function traverseObject(obj)
{
    for (const key in obj) 
    {

        if (Object.hasOwnProperty.call(obj, key))
         {
            const element = obj[key];
            console.log(`"${key}" = "${element}"`);

        }
    }
}
traverseObject(c1);
traverseObject(c2);
traverseObject(c3);
traverseObject(c4);
console.warn("---------------------------------------------------------------------");

console.log("Write a function to print fibonacci series");
function fib(num){
    let num1 = 0;
    let num2 = 1;
    let i;
    if(num < 1)
    {
        return num;
    }
    console.log( " "+num1);
    for(i = 1;i<= 7;i++)
    {
        console.log(" "+num2);
        let next = num1 +  num2;
        num1 =num2;
        num2 = next;
    }
}
fib(15);