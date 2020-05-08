//SHALLOW COPY
const person = {
    name :"monica",
    profession :"chef",
    age : "31"
}
const newPerson = person;
//add property
newPerson.city = "new york";
console.log(newPerson);
//delete property
delete person.profession;
console.log(person);


//DEEP COPY
const person1 = {
    name :"joey",
    profession :"actor",
    age : "32"
}

const newPersonObj = Object.assign({}, person1);
console.log(newPersonObj === person1)
//insert new property
newPersonObj.city = "las vegas";
console.log(newPersonObj); 
// console.log(person1);
//delete property
delete newPersonObj.age;
console.log(newPersonObj);





