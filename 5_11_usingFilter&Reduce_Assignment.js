class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name=emp_name;
        this.emp_dept=emp_dept;
        this.emp_salary=emp_salary;
        this.emp_company=emp_company;
    }
}
const emp_anil=new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha=new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi=new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali=new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika=new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny=new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi=new Employee(99,"Mahesh","HR",85000,"Infy");

array=[emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];


console.warn("=============== Q.1 Employees From Wipro ====================================");
var array1 = array.filter( (person) => {
     if (person.emp_company=="Wipro") {
     console.log(`Employee ID: ${person.emp_id}  Employee Name : ${person.emp_name}  Employee Dept: ${person.emp_dept} Employee Salary :${person.emp_salary} Employee Company : ${person.emp_company}`);
        
     }
});

console.warn("================== Q.2 Employees From IT Or HR Dept. =========================");
var array1 = array.filter( (person) => {
    if (person.emp_dept=="IT" || person.emp_dept=="HR") {
    console.log(`Employee ID: ${person.emp_id}  Employee Name : ${person.emp_name}  Employee Dept: ${person.emp_dept} Employee Salary :${person.emp_salary} Employee Company : ${person.emp_company}`);
       
    }
});

console.warn("================== Q.3 Employees whose Emp Id is > 50 =========================");
var array1 = array.filter( (person) => {
    if (person.emp_id >=50) {
    console.log(`Employee ID: ${person.emp_id}  Employee Name : ${person.emp_name}  Employee Dept: ${person.emp_dept} Employee Salary :${person.emp_salary} Employee Company : ${person.emp_company}`);
       
    }
});

console.warn(`========= Q.4 Employees whose name start with "A" "V"  or "M"  ===============`);
var array1 = array.filter( (person) => {
    if (person.emp_name.startsWith("A") || person.emp_name.startsWith("V") || person.emp_name.startsWith("M")) {
        console.log(`Employee ID: ${person.emp_id}  Employee Name : ${person.emp_name}  Employee Dept: ${person.emp_dept} Employee Salary :${person.emp_salary} Employee Company : ${person.emp_company}`);

    }
});

console.warn("--------------------Average Salary of the Employee -------------------------");
var sum=0;
var array1=array.filter((value)=>{
    sum=sum+value.emp_salary;


});
console.log(sum/array.length) ;

