// Implement a function swap that takes two objects and swaps their properties using destructuring assignment.

let ob1={
    a:1,
    b:2
}
let ob2={
    a:3,
    d:4
}
function swapObjects(object1,object2){
    let {...temp1}=object1;
    let {...temp2}=object2;

    for(let key in temp2){
        object1[key]=temp2[key];
        delete object2[key];
    }
    for(let key in temp1){
        object2[key]=temp1[key];
        if(!(key in object1 && key in temp2)){
            delete object1[key];
        }
    }
}

swapObjects(ob1,ob2);

console.log(ob1);
console.log(ob2);