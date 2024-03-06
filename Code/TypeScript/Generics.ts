let arr:Array<string>=["Deeepak","Pal"];
let marks:Array<number>=[1,2,3,4];


function getMan<T>(value:T):T{
    return value;
}

const getMane=<T>(value:T):T=>{
    return value;
}

console.log(getMane(true))