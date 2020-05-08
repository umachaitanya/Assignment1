const deposit = (principle, depositAmount) => {
    if(typeof(principle)== "number" && typeof(depositAmount) == "number")
        return principle+ depositAmount
    else
        return console.log("Only Integer values are allowed")
}

  console.log(deposit(5412,548));
