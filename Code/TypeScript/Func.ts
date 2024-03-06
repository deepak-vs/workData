function addTwo(num:number):number{
    return num+2;
}

function getUpper(str:string):string{
    return str.toUpperCase();
}

const getLower=(str:string="DEEPAk"):string=>{
    return str.toLowerCase();
}

const isAdult=(age:number):string|boolean=>{
    if(age>18) return true;
    return "Your age is below 18"
}


function createUser():{name:string,age:number}{
    return {name:"Deepak",age:25}
}

const getDetails=(value:number|string):number|string=>{
    return value;
}


console.log(getDetails("de"))

