 let employee = {
        employeeID : "2358971",
        firstName : "uma",
        lastName : "chaitanya"
 }

 function find(obj, key)
 {
    if(key in obj){
    return obj[key]
    }
    else {
        return null
    }
 }

 console.log("the value for the corresponding key is : " +find(employee,Object.keys(employee)[0]))
