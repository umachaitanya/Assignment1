//variable hoisting
age = 23;
console.log(age);
var age;

//function hoisting

console.log(isEligible(3));
function isEligible(age){
     if(age>18) return true;
     else return false
}