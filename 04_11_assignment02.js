class Employee{
    constructor(emp_id, emp_name,emp_dept,emp_salary,emp_company){
this.emp_id = emp_id;
this.emp_name = emp_name;
this.emp_dept = emp_dept;
this.emp_salary = emp_salary;
this.emp_company = emp_company;


    }
}
const emp_anil = new Employee(22,"Anil", "IT", 50000,"TCS");
const emp_radha = new Employee(33,"Radha", "HR", 74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi", "FINANCE", 47000,"TCS");
const emp_sonali = new Employee(66,"Sonali", "FINANCE", 45000,"Infy");
const emp_monika = new Employee(77,"Monika", "IT", 40000,"Wipro");
const emp_vinayak = new Employee(88,"Vinayak", "IT", 75000,"TCS");
const emp_mahi = new Employee(99,"Mahi", "HR", 85000,"Infy");


console.warn("*****************Displaying the employee names who is working in TCS********************");

const array_Employee = [emp_anil,emp_radha,emp_rishi, emp_sonali, emp_monika,emp_vinayak, emp_mahi];

for (const Employee  of array_Employee) {
    if(Employee.emp_company==="TCS" ){
        console.log(`Employee Name: ${Employee.emp_name } Company: ${Employee.emp_company}`);
    }
}

console.warn("*****************Displaying the employee names who is working in Finance Dept.********************");
for (const Employee  of array_Employee) {
    if(Employee.emp_dept==="FINANCE" ){
        console.log(`Employee Name: ${Employee.emp_name } Company: ${Employee.emp_company}`);
    }
};

console.warn("*****************Displaying the employee names Start with R ********************");
for (const Employee  of array_Employee) {
    if(Employee.emp_name.startsWith("R")){
        console.log(`Employee Name: ${Employee.emp_name } Company: ${Employee.emp_company} Salary: ${Employee.emp_salary }`);
    }
};

console.warn("******Displaying the employee names whose salary is greater than 70000**********");
for (const Employee  of array_Employee) {
    if(Employee.emp_salary>70000 ){
        console.log(`Employee Name: ${Employee.emp_name } Company: ${Employee.emp_company} Salary: ${Employee.emp_salary }`);
    }
};

console.warn("******Displaying the employee names whose salary is greater than Equal to 50000**********");
for (const Employee  of array_Employee) {
    if(Employee.emp_salary>=50000 ){
        console.log(`Employee Name: ${Employee.emp_name } Company: ${Employee.emp_company} Salary: ${Employee.emp_salary }`);
    }
};

console.warn("**************Employees from Company INFY *******************");
for (const Employee  of array_Employee) {
    if(Employee.emp_company =="Infy" ){
        console.log(`Employee ID: ${Employee.emp_id } Employee Name: ${Employee.emp_name}  Employee Salary: ${Employee.emp_salary }`);
    }
};










