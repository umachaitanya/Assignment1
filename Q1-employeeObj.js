// let employee = {
//     employeeID : "2358971",
//     firstName : "uma",
//     lastName : "chaitanya",
//     role : "Software Engineer",
//     getFullName : function() { return this.firstName+ " "+this.lastName },
//     getEmployeeDetails :function () {
//         return this.employeeID+ " - "+this.getFullName()+" - "+this.role
//     }
// }

const employee = new Object({
    employeeID : "2358971",
    firstName : "uma",
    lastName : "chaitanya",
    role : "Software Engineer",
    getFullName : function() { return this.firstName+ " "+this.lastName },
    getEmployeeDetails :function () {
        return this.employeeID+ " - "+this.getFullName()+" - "+this.role
    }
});

console.log(employee.getFullName());
console.log(employee.getEmployeeDetails());