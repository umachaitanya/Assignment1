function add(x){
    let sum = x;
    return function resultFn(y){
        if(arguments.length){ 
            sum += y;
            return resultFn;
        }
        return sum;
    }
}
console.log(add(4)(5)(9)(1)(7)(4)())