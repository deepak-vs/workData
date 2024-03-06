// Write a function reverseObject that takes an object and returns a new object with keys and values reversed. Use Object.entries()

let obj={
    name:"Deepak",
    age:23,
    id:101
}

function reverseObject(obj){
    let newobject={}
    for(let [key,value] of Object.entries(obj)){
        newobject[value]=key;
    }
    return newobject;
}

console.log(reverseObject(obj))



